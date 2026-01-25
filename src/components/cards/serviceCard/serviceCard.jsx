import React from "react";
import { motion as Motion } from "framer-motion";
import "./serviceCard.css";
import { Link } from "react-router-dom";

// Reusable Arrow Icon SVG
const ArrowUpRight = () => (
  <svg className="arrow-icon" viewBox="0 0 24 24">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const ServiceCard = ({
  imageSrc = "https://placehold.co/400x500",
  title = "Road Construction",
  description = "We develop and manage residential and commercial properties designed for long-term value and sustainability.",
}) => {
  // Animation Variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Link to="/services" style={{ textDecoration: "none" }}>
      <Motion.div
        className="service-card"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={imageSrc} alt={title} className="service-bg-image" />

        {/* Dark Gradient Overlay */}
        <div className="service-overlay"></div>

        <div className="service-content">
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{description}</p>

          <div className="service-link">
            <span>Learn More</span>
            <div className="arrow-circle">
              <ArrowUpRight />
            </div>
          </div>
        </div>
      </Motion.div>
    </Link>
  );
};

export default ServiceCard;
