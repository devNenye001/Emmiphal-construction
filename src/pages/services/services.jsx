import React from 'react';
import { motion as Motion } from "framer-motion";
import './services.css';

const Services = () => {
  // Data transcribed from your image
  const servicesData = [
    {
      id: 1,
      title: "1. Real Estate Development",
      description: "We develop and manage residential and commercial properties designed for durability, functionality, and long-term value. Our real estate solutions combine strategic planning with quality construction to deliver reliable investments.",
      image: "/4.jpeg"
    },
    {
      id: 2,
      title: "2. Road Construction",
      description: "We specialize in the construction and rehabilitation of roads using proven engineering methods and quality materials. Our road projects are designed to improve accessibility, safety, and transportation efficiency.",
      image: "/1b.jpeg"
    },
    {
      id: 3,
      title: "3. Building Construction",
      description: "From residential homes to hostels, hospitals, and commercial buildings, we handle building projects from foundation to finishing. Each structure is built to meet safety standards, functional requirements, and client expectations.",
      image: "/a21.jpeg"
    },
    {
      id: 4,
      title: "4. Importation of Building Materials",
      description: "We import and supply high-quality building materials to support strong and durable construction. Our sourcing process ensures reliability, quality assurance, and timely availability of materials.",
      image: "/1c.jpeg"
    },
    {
      id: 5,
      title: "5. Interior Decoration",
      description: "We provide professional interior decoration services that enhance comfort, functionality, and aesthetics. Our designs balance beauty and practicality to create spaces that reflect our clients' vision.",
      image: "/1d.jpeg"
    },
    {
      id: 6,
      title: "6. Borehole Services",
      description: "We offer professional borehole drilling and installation services to ensure reliable and sustainable water supply for residential, commercial, and industrial use.",
      image: "/1f.jpeg"
    }
  ];

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // Logic for sliding in from Left or Right depending on layout
  const slideIn = (direction) => ({
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  });

  return (
    <div className="services-page">
      <div className="services-container">
        
        {/* Header */}
        <div className="services-header">
          <Motion.h2 
            className="services-main-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Services
          </Motion.h2>
          <Motion.p 
            className="services-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            At Emmiphal Global Construction Company, we provide a wide range of construction 
            and infrastructure services tailored to meet the needs of individuals, 
            businesses, and organizations.
          </Motion.p>
        </div>

        {/* List of Services */}
        <div className="services-list">
          {servicesData.map((service, index) => {
            // Check if index is odd (1, 3, 5...) for reverse layout logic
            // Since array is 0-indexed: 0 is row 1 (Left), 1 is row 2 (Right)
            const isReverse = index % 2 !== 0;

            return (
              <div 
                key={service.id} 
                className={`service-row ${isReverse ? 'reverse' : ''}`}
              >
                {/* Text Side */}
                <Motion.div 
                  className="service-text-content"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  // If reversed (Row 2), text is on Right, so slide from Right. 
                  // If normal (Row 1), text is on Left, so slide from Left.
                  variants={slideIn(isReverse ? 'right' : 'left')} 
                >
                  <h3 className="service-item-title">{service.title}</h3>
                  <p className="service-item-description">{service.description}</p>
                </Motion.div>

                {/* Image Side */}
                <Motion.div 
                  className="service-image-container2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  // Opposite logic for image
                  variants={slideIn(isReverse ? 'left' : 'right')}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-item-image2" 
                  />
                </Motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Services;