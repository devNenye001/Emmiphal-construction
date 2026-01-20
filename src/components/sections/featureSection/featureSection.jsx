import React from 'react';
import { motion as Motion } from "framer-motion";
import './featureSection.css';

// SVG Check Icon Component
const CheckIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="check-icon"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const FeatureSection = () => {
  const features = [
    {
      title: "Quality workmanship",
      description: "Every project is executed with attention to detail and high construction standards."
    },
    {
      title: "Timely project delivery",
      description: "We complete projects within agreed timelines without compromising quality."
    },
    {
      title: "Client-focused approach",
      description: "We listen, communicate clearly, and build according to our client's needs."
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <section className="feature-section">
      <div className="feature-container">
        
        {/* Header Section */}
        <div className="feature-header">
          <Motion.h2 
            className="feature-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="highlight-orange">Emmiphal</span>
          </Motion.h2>
          
          <Motion.p 
            className="feature-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We provide reliable construction, real estate, and infrastructure solutions 
            with a commitment to quality, safety, and excellence.
          </Motion.p>
        </div>

        {/* Features Grid */}
        <Motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <Motion.div 
              key={index} 
              className="feature-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <Motion.div 
                className="icon-circle"
                variants={iconVariants}
              >
                <CheckIcon />
              </Motion.div>
              
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </Motion.div>
          ))}
        </Motion.div>

     
      </div>  
    </section>      
  );
};

export default FeatureSection;