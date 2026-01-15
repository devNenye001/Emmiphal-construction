import React from 'react';
import { motion as Motion } from "framer-motion";
import './aboutSection.css';

// Reusable Stat Component for cleaner code
const StatItem = ({ number, label, delay }) => (
  <Motion.div 
    className="stat-item"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    viewport={{ once: true }}
  >
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </Motion.div>
);

const AboutSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggers the animation of children
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 }, // Slides in from right
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Column: Text */}
        <Motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.span className="section-label" variants={itemVariants}>
            About Us
          </Motion.span>
          
          <Motion.p className="about-description" variants={itemVariants}>
            Emmiphal Global Construction Company is a full-service
            construction and real estate firm delivering high-quality
            projects across Nigeria. From road construction to
            residential and commercial buildings, we combine expertise,
            durable materials, and modern techniques to achieve
            outstanding results for our clients.
          </Motion.p>

          <div className="stats-container">
            <StatItem number="150+" label="Completed Projects" delay={0.4} />
            <StatItem number="200+" label="Happy Clients" delay={0.5} />
            <StatItem number="95%" label="Satisfaction rate" delay={0.6} />
          </div>
        </Motion.div>

        {/* Right Column: Image */}
        <Motion.div 
          className="about-image-wrapper"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img 
            src="/about.png" // Replace with your construction image URL
            alt="Construction Team" 
            className="about-image"
          />
        </Motion.div>

      </div>
    </section>
  );
};

export default AboutSection;