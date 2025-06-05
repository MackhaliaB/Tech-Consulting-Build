// Main JavaScript file for Graywave Solutions website

document.addEventListener('DOMContentLoaded', function() {
    // Add scroll class to header for shadow effect
    const header = document.querySelector('.site-header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Initialize any animations or interactive elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggleIcon = item.querySelector('.toggle-icon');
            
            question.addEventListener('click', () => {
                const isOpen = answer.style.maxHeight;
                
                // Close all FAQs
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.style.maxHeight = null;
                });
                document.querySelectorAll('.toggle-icon').forEach(icon => {
                    icon.textContent = '+';
                });
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                });
                
                // Open clicked FAQ if it was closed
                if (!isOpen || isOpen === '0px') {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    toggleIcon.textContent = '-';
                    question.classList.add('active');
                }
            });
        });
    }
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    valid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (valid) {
                // In a real implementation, you would submit the form data via AJAX
                // For this example, we'll just show a success message
                const formContainer = contactForm.parentElement;
                formContainer.innerHTML = '<div class="form-success"><i class="fas fa-check-circle"></i><h3>Thank you for your message!</h3><p>We\'ll get back to you as soon as possible.</p></div>';
            }
        });
    }
});
