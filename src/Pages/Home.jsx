import React from "react";
import "./Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to SRK TECHS</h1>
        <p>Empowering businesses with next-gen technology solutions.</p>
        <a href="/about" className="cta-button">Learn More</a>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose SRK TECHS?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🚀 Innovation</h3>
            <p>We deliver cutting-edge technology tailored for your business.</p>
          </div>
          <div className="feature-card">
            <h3>🔧 Custom Solutions</h3>
            <p>Scalable, efficient, and customized software development.</p>
          </div>
          <div className="feature-card">
            <h3>💡 Expertise</h3>
            <p>A team of experienced professionals to guide your digital transformation.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>✅ Web & Mobile App Development</li>
          <li>✅ AI & Machine Learning Solutions</li>
          <li>✅ Cloud Computing & DevOps</li>
          <li>✅ Cybersecurity Services</li>
          <li>✅ UI/UX Design & Branding</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Ready to Innovate?</h2>
        <p>Join us in shaping the future of technology.</p>
        <a href="/contact" className="contact-btn">Get Started</a>
      </section>
    </div>
  );
};

export default Home;
