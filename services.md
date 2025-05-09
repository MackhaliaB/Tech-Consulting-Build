---
layout: default
title: Our Services
permalink: /services/
---

<section class="page-header">
  <div class="container">
    <div class="page-header-content">
      <h1>Our Services</h1>
      <p>Comprehensive tech solutions tailored to your business needs</p>
    </div>
  </div>
</section>

<section class="services-list">
  <div class="container">
    <div class="services-grid">
      {% for service in site.services %}
      <div class="service-card">
        <div class="service-icon">
          <i class="fas {{ service.icon }}"></i>
        </div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.excerpt }}</p>
        <a href="{{ service.url | relative_url }}" class="btn btn-outline">Learn More</a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="service-process">
  <div class="container">
    <div class="section-header">
      <h2>Our Process</h2>
      <p>How we deliver exceptional results for our clients</p>
    </div>
    <div class="process-steps">
      <div class="process-step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>Discovery</h3>
          <p>We begin by understanding your business goals, challenges, and requirements through in-depth consultations.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>Strategy</h3>
          <p>We develop a comprehensive strategy and roadmap tailored to your specific needs and objectives.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>Design</h3>
          <p>Our team creates detailed designs and prototypes that align with your brand and user expectations.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h3>Development</h3>
          <p>We build your solution using the latest technologies and best practices to ensure quality and performance.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">5</div>
        <div class="step-content">
          <h3>Testing</h3>
          <p>We conduct thorough testing to ensure your solution works flawlessly across all platforms and scenarios.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">6</div>
        <div class="step-content">
          <h3>Launch & Support</h3>
          <p>We handle the deployment process and provide ongoing support to ensure long-term success.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="technologies">
  <div class="container">
    <div class="section-header">
      <h2>Technologies We Use</h2>
      <p>We leverage the latest technologies to deliver cutting-edge solutions</p>
    </div>
    <div class="tech-categories">
      <div class="tech-category">
        <h3>Frontend</h3>
        <ul class="tech-list">
          <li>React</li>
          <li>Angular</li>
          <li>Vue.js</li>
          <li>HTML5/CSS3</li>
          <li>JavaScript/TypeScript</li>
        </ul>
      </div>
      <div class="tech-category">
        <h3>Backend</h3>
        <ul class="tech-list">
          <li>Node.js</li>
          <li>Python</li>
          <li>PHP</li>
          <li>Java</li>
          <li>.NET</li>
        </ul>
      </div>
      <div class="tech-category">
        <h3>Mobile</h3>
        <ul class="tech-list">
          <li>React Native</li>
          <li>Flutter</li>
          <li>Swift</li>
          <li>Kotlin</li>
          <li>Ionic</li>
        </ul>
      </div>
      <div class="tech-category">
        <h3>Cloud & DevOps</h3>
        <ul class="tech-list">
          <li>AWS</li>
          <li>Azure</li>
          <li>Google Cloud</li>
          <li>Docker</li>
          <li>Kubernetes</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="container">
    <div class="cta-content">
      <h2>Ready to Transform Your Business?</h2>
      <p>Let's discuss how our services can help you achieve your technology goals.</p>
      <a href="{{ "/contact" | relative_url }}" class="btn btn-primary">Get in Touch</a>
    </div>
  </div>
</section>
