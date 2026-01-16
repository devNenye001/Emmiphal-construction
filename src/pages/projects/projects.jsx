import React from "react";
import { motion as Motion } from "framer-motion";
import "./projects.css";
import ProjectCard from "../../components/cards/projectCard/projectCard";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  // Project Data extracted from the image
  const projectsData = [
    // Inside Projects.jsx or ProjectSection.jsx
    {
      id: 1,
      title: "Residential Housing - Enugu",
      description: "Modern family homes...",
      image: "/a19.jpeg",
      // Detailed fields specifically for the Detail Page
      location: "Enugu, Nigeria",
      scope: ["Foundation", "Roofing", "Interiors"],
      outcome: "Delivered on time.",
      gallery1: ["/12.jpeg", "/10.jpeg", "/8.jpg"],
      gallery2: ["/12.jpeg", "/13.jpeg", "/18.jpeg"],
    },
    {
      id: 2,
      title: "Commercial Building - Lagos",
      description: "State-of-the-art office spaces...",
      image: "/a21.jpeg",
      // Detailed fields specifically for the Detail Page
      location: "Lagos, Nigeria",
      scope: ["Design", "Construction", "Finishing"],
      outcome: "Exceeded client expectations.",
      gallery1: ["/12.jpeg", "/10.jpeg", "/8.jpg"],
      gallery2: ["/img10.jpg", "/img11.jpg", "/img12.jpg"],
    },
    {
      id: 3,
      title: "Real Estate - Abuja",
      description: "Modern infrastructure projects...",
      image: "/4.jpeg",
      // Detailed fields specifically for the Detail Page
      location: "Abuja, Nigeria",
      scope: ["Roads", "Bridges", "Utilities"],
      outcome: "Completed ahead of schedule.",
      gallery1: ["/12.jpeg", "/10.jpeg", "/8.jpg"],
      gallery2: ["/img16.jpg", "/img17.jpg", "/img18.jpg"],
    },
    {
      id: 4,
      title: "Industrial Complex - Port Harcourt",
      description: "Cutting-edge industrial facilities...",
      image: "/18.jpeg",
      // Detailed fields specifically for the Detail Page
      location: "Port Harcourt, Nigeria",
      scope: ["Site Prep", "Construction", "Equipment Installation"],
      gallery1: ["/12.jpeg", "/10.jpeg", "/8.jpg"],
      gallery2: ["/img22.jpg", "/img23.jpg", "/img24.jpg"],
    },
    {
      id: 5,
      title: "Educational Campus - Ibadan",
      description: "State-of-the-art educational facilities...",
      image: "/a11.jpeg",
      // Detailed fields specifically for the Detail Page
      location: "Ibadan, Nigeria",
      scope: ["Design", "Construction", "Landscaping"],
      outcome: "Fostered a great learning environment.",
      gallery1: ["/12.jpeg", "/10.jpeg", "/8.jpg"],
      gallery2: ["/img28.jpg", "/img29.jpg", "/img30.jpg"],
    },
    {
      id: 6,
      title: "Healthcare Facility - Kano",
      description: "State-of-the-art healthcare facilities...",
      image: "/a10.jpeg",
      // Detailed fields specifically for the Detail Page
      location: "Kano, Nigeria",
      scope: ["Planning", "Construction", "Equipment Setup"],
      outcome: "Enhanced community health services.",
      gallery1: ["/12.jpeg", "/10.jpeg", "/8.jpg"],
      gallery2: ["/img34.jpg", "/img35.jpg", "/img36.jpg"],
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Cards fade in one by one
      },
    },
  };

  return (
    <section className="proj-page-section">
      <div className="proj-page-container">
        {/* Header */}
        <div className="proj-page-header">
          <Motion.h2
            className="proj-page-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Projects
          </Motion.h2>
          <Motion.p
            className="proj-page-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From residential buildings to large-scale infrastructure, every
            project is executed with precision and professionalism.
          </Motion.p>
        </div>
        {/* Projects Grid */}
        <Motion.div
          className="proj-page-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              imageSrc={project.image}
              title={project.title}
              description={project.description}
              onClick={() =>
                navigate(`/projects/${project.id}`, {
                  state: { projectData: project },
                })
              }
            />
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
