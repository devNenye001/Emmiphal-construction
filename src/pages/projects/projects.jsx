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
      title: "Residential House - Anambra",
      description: "Permanent site FCET Umunze orumba south LGA Anambra State",
      image: "/a19.jpeg",
      // Detailed fields specifically for the Detail Page
      location: "Anambra State, Nigeria",
      scope: ["Design", "Construction", "Finishing"],
      outcome: "Delivered on time.",
      gallery1: ["/pj-1.mp4"],
      gallery2: ["/pj-1.mp4", "/pj-1.mp4", "/pj-1.mp4"],
    },
    {
      id: 2,
      title: "Residential House - Enugu ",
      description: "Thinkers Corner, Enugu State ",
      image: "/a21.jpeg",
      // Detailed fields specifically for the Detail Page
      location: "Enugu State, Nigeria",
      scope: ["Design", "Construction", "Finishing"],
      outcome: "Exceeded client expectations.",
      gallery1: ["/pj-2.mp4", "/pj-21.mp4", "/pj-22.mp4", "/pj-23.mp4", "/pj-24.mp4", "/pj-25.mp4", "/pj-26.mp4"],
      gallery2: ["/pj-2.mp4", "/pj-2.mp4", "/pj-2.mp4"],
    },
    {
      id: 3,
      title: "Real Estate - Anambra",
      description: "New Real Estate developing site located at IFITE AWKA ANAMBRA STATE ",
      image: "/4.jpeg",
      // Detailed fields specifically for the Detail Page
      location: "Anambra State, Nigeria",
      scope: ["Roads", "Bridges", "Utilities"],
      outcome: "Completed ahead of schedule.",
      gallery1: ["/pj-3.mp4", "/pj-31.mp4", "/pj-32.mp4", "/pj-33.mp4"],
      gallery2: ["/pj-3.mp4", "/pj-3.mp4", "/pj-3.mp4"],
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
