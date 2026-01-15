import React from 'react';
import { motion as Motion } from "framer-motion";
import './ContactSection.css';
import { Link } from 'react-router';

const ContactSection = () => {
  
  // Animation Variants
  const bannerVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      backgroundColor: "#e04800", // Slightly darker orange on hover
      boxShadow: "0 15px 30px rgba(255, 85, 0, 0.4)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="contact-section">
      <Motion.div 
        className="contact-banner"
        variants={bannerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="contact-content">
          <Motion.h2 
            className="contact-heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Have a project in mind?
          </Motion.h2>
          
          <Motion.p 
            className="contact-description"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Partner with us for reliable construction solutions delivered on time and to the highest standards.
          </Motion.p>


          <Link to="/contact" style={{ textDecoration: 'none' }}>
          <Motion.button 
            className="contact-btn"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Contact Us
          </Motion.button>
          </Link>
        </div>

        {/* Decorative Background Element */}
        <Motion.div 
          className="deco-circle"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
      </Motion.div>
    </section>
  );
};

export default ContactSection;