import React from "react";
import { motion as Motion } from "framer-motion";
import "./projectCard.css";

// You can pass the image URL and text as props to make this reusable
const ProjectCard = ({
  // id,
  imageSrc = "https://placehold.co/600x400",
  title = "Residential Housing Project – Enugu",
  description = "Modern family homes built with durability and comfort in mind, delivered to meet quality and safety standards.",
  onClick,
}) => {
  // Animation Variants for cleaner JSX
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10, // Lifts the card up
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    rest: {
      backgroundColor: "transparent",
      color: "#1a1a1a",
      borderColor: "#1a1a1a",
    },
    hover: {
      backgroundColor: "#FF5000", // The requested Pink
      color: "#ffffff",
      borderColor: "#FF5000",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <Motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }} // Animates when 20% visible
    >
      <div className="card-image-wrapper">
        <img src={imageSrc} alt={title} className="card-image" />
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        <Motion.button
          className="card-btn2"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={onClick}
        >
          View Project
        </Motion.button>
      </div>
    </Motion.div>
  );
};

export default ProjectCard;
