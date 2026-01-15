import React from 'react';
import { motion as Motion } from "framer-motion";
import './contact.css';
import { FaTiktok } from 'react-icons/fa6';

// --- Icons (SVG Components) ---
const PhoneIcon = () => (
  <svg className="feather-icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
  <svg className="feather-icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const MapPinIcon = () => (
  <svg className="feather-icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const InstagramIcon = () => (
  <svg className="feather-icon" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);


const Contact = () => {

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <div className="contact-page-section">
      <div className="contact-page-container">
        
        {/* Header */}
        <div className="contact-page-header">
          <Motion.h1 
            className="contact-page-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            Contact Us
          </Motion.h1>
          <Motion.p 
            className="contact-page-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          >
            Lets Build Something Great Together
          </Motion.p>
        </div>

        {/* Main Grid */}
        <Motion.div 
          className="contact-page-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Left Card: Contact Details */}
          <Motion.div className="contact-page-card" variants={cardVariants}>
            
            {/* Call Us */}
            <div className="contact-info-group">
              <div className="contact-icon-box">
                <PhoneIcon />
              </div>
              <span className="contact-label">Call us</span>
              <span className="contact-text">0916 000 6082</span>
              <span className="contact-text">0803 879 9802</span>
            </div>

            {/* Email Us */}
            <div className="contact-info-group">
              <div className="contact-icon-box">
                <MailIcon />
              </div>
              <span className="contact-label">Email us</span>
              <span className="contact-text">Emmiphalglobalconstructioncomp@gmail.com</span>
            </div>

            {/* Socials */}
            <div className="contact-socials-wrapper">
              <div className="contact-social-icons">
                <a href="#instagram" className="social-btn" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="#tiktok" className="social-btn" aria-label="TikTok">
                  <FaTiktok /> 
                </a>
              </div>
              <span className="contact-label">Our Socials</span>
              <p className="social-footer-text">
                EMMIPHAL GLOBAL CONSTRUCTION COMPANY
              </p>
            </div>

          </Motion.div>

          {/* Right Card: Locations */}
          <Motion.div className="contact-page-card" variants={cardVariants}>
            <h3 className="locations-heading">Our Office Locations</h3>
            
            <div className="location-list">
              
              <div className="location-item">
                <div className="location-pin-icon"><MapPinIcon /></div>
                <div className="location-details">
                  <span className="location-city">Lagos Office</span>
                  <span className="location-address">21 Akpo Street, Ojo Barracks, Lagos</span>
                </div>
              </div>

              <div className="location-item">
                <div className="location-pin-icon"><MapPinIcon /></div>
                <div className="location-details">
                  <span className="location-city">Enugu Office</span>
                  <span className="location-address">Plot 10 Ojukwu Street, Thinkers Corner Layout, Enugu</span>
                </div>
              </div>

              <div className="location-item">
                <div className="location-pin-icon"><MapPinIcon /></div>
                <div className="location-details">
                  <span className="location-city">Anambra Office</span>
                  <span className="location-address">51 Okpuno Road, Awka, Anambra State</span>
                </div>
              </div>

              <div className="location-item">
                <div className="location-pin-icon"><MapPinIcon /></div>
                <div className="location-details">
                  <span className="location-city">Delta Office</span>
                  <span className="location-address">102 Christian Okpara Street, Okpanam Road, Asaba, Delta State</span>
                </div>
              </div>

            </div>
          </Motion.div>

        </Motion.div>
      </div>
    </div>
  );
};

export default Contact;