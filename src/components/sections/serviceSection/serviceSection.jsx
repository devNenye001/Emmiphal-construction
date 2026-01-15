import React from 'react';
import { motion as Motion } from "framer-motion";

import './ServiceSection.css';
import ServiceCard from '../../cards/serviceCard/serviceCard';

const ServiceSection = () => {
  // Service Data based on the image
  const services = [
    {
      id: 1,
      title: "Road Construction",
      description: "We develop and manage residential and commercial properties designed for long-term value and sustainability.",
      // Replace with your actual image path
      image: "/a16.jpeg" 
    },
    {
      id: 2,
      title: "Building Construction",
      description: "We construct residential homes, hostels, hospitals, and commercial buildings with precision and excellence.",
      // Replace with your actual image path
      image: "/block.png"
    },
    {
      id: 3,
      title: "Borehole Services",
      description: "Reliable water solutions. We provide professional borehole drilling and installation for sustainable water supply.",
      // Replace with your actual image path
      image: "/a17.jpeg"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="service-section">
      <div className="service-container">
        
        {/* Header Section */}
        <div className="section-header">
          <Motion.p 
            className="service-label"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Services
          </Motion.p>
          
          <Motion.h2 
            className="service-main-title"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Built on <span className="highlight-text">Quality.</span> <br className="mobile-break" />
            Driven by <span className="highlight-text">Excellence.</span>
          </Motion.h2>
          
          <Motion.p 
            className="service-subtitle"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We provide comprehensive construction and infrastructure services 
            delivered with precision, reliability, and professionalism.
          </Motion.p>
        </div>

        {/* Services Grid */}
        <Motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.image}
            />
          ))}
        </Motion.div>

      </div>
    </section>
  );
};

export default ServiceSection;