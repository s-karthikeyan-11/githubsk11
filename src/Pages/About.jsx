import React from "react";
import "./About.css"; // Importing CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="hero">
        <h1>About SRK TECHs</h1>
        <p>Innovating the future with cutting-edge technology solutions.</p>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          SRK TECHS is a leading technology company specializing in software
          development, AI solutions, and cloud computing. Our mission is to
          provide scalable and efficient tech solutions to businesses worldwide.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          To revolutionize the tech industry by delivering innovative,
          high-quality software solutions that empower businesses and
          individuals.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Services</h2>
        <ul>
          <li>Custom Software Development</li>
          <li>Artificial Intelligence Solutions</li>
          <li>Cloud Computing & DevOps</li>
          <li>Cybersecurity Services</li>
          <li>Mobile & Web Application Development</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          ✅ Experienced Team of Professionals  
          ✅ Cutting-Edge Technology Solutions  
          ✅ Client-Centric Approach  
          ✅ Cost-Effective and Scalable Services  
          ✅ 24/7 Support and Maintenance  
        </p>
      </div>

      <div className="contact-us">
        <h2>Get in Touch</h2>
        <p>
          Have a project in mind? Let's build something amazing together!
          <br />
          <a href="/contact" className="contact-btn">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
