import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from "framer-motion";
import './TestimonialSection.css';

// Icons
const ArrowLeft = () => (
  <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);

const ArrowRight = () => (
  <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const TestimonialSection = () => {
  // Testimonial Data
  const testimonials = [
    {
      id: 1,
      image: "/a19.jpeg", // Replace with image of house
      quote: "Emmiphal Global Construction Company delivered our project with quality and professionalism. The work was completed on time, and the results exceeded our expectations.",
      name: "Pastor Chris Ronaldo"
    },
    {
      id: 2,
      image: "/a15.jpeg",
      quote: "Their attention to detail during the borehole installation was impressive. We now have a consistent water supply thanks to their expertise.",
      name: "Mrs. Sarah Okon"
    },
    {
      id: 3,
      image: "/a21.jpeg", // Replace with image of commercial building
      quote: "Professionalism at its peak. The team communicated clearly throughout the construction phase and delivered a structure that stands out in the city.",
      name: "Mr. David Ibrahim"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Animation Variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const contentVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        
        {/* Header & Controls */}
        <div className="testimonial-header-wrapper">
          <Motion.div 
            className="testimonial-header-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <span className="section-label">Testimonials</span>
            <h2 className="testimonial-title">
              <span className="highlight-orange">Trusted</span> by clients. <span className="highlight-orange">Proven</span> by results.
            </h2>
            <p className="testimonial-subtitle">
              Our clients' satisfaction reflects our commitment to quality, reliability, 
              and excellence in every project we deliver.
            </p>
          </Motion.div>

          <Motion.div 
            className="testimonial-nav"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button className="nav-btn" onClick={prevTestimonial} aria-label="Previous">
              <ArrowLeft />
            </button>
            <button className="nav-btn" onClick={nextTestimonial} aria-label="Next">
              <ArrowRight />
            </button>
          </Motion.div>
        </div>

        {/* Dynamic Content Area */}
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            
            {/* Image Side */}
            <Motion.div 
              key={`img-${currentIndex}`}
              className="testimonial-image-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={testimonials[currentIndex].image} 
                alt="Project Result" 
                className="testimonial-img" 
              />
            </Motion.div>

            {/* Text Side */}
            <Motion.div 
              key={`text-${currentIndex}`}
              className="testimonial-text-wrapper"
              variants={contentVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="quote-text">
                “{testimonials[currentIndex].quote}”
              </p>
              <span className="client-name">
                {testimonials[currentIndex].name}
              </span>
            </Motion.div>

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;