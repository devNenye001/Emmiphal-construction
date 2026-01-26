import React, { useRef } from "react";
import { motion as Motion } from "framer-motion";
import "./projectSection.css";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../../cards/projectCard/projectCard";

// SVG Icons for buttons
const ArrowLeft = () => (
  <svg
    className="nav-icon2"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const ArrowRight = () => (
  <svg
    className="nav-icon2"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ProjectSection = () => {
  const scrollContainerRef = useRef(null);

  const navigate = useNavigate();

  // Data from your image
  const projects = [
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

  // Scroll Handler Functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Animations
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="project-section">
      <div className="project-container">
        {/* Header with Navigation */}
        <div className="project-header">
          <Motion.div
            className="header-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            <span className="section-label">Our Projects</span>
            <h2 className="project-title">
              Our Remarkable <span className="highlight-orange">Portfolio</span>
            </h2>
            <p className="project-subtitle">
              A showcase of projects that reflect our commitment to quality,
              excellence, and client satisfaction.
            </p>
          </Motion.div>

          {/* Navigation Buttons */}
          <Motion.div
            className="nav-buttons2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button
              className="nav-btn2"
              onClick={scrollLeft}
              aria-label="Scroll Left"
            >
              <ArrowLeft />
            </button>
            <button
              className="nav-btn2"
              onClick={scrollRight}
              aria-label="Scroll Right"
            >
              <ArrowRight />
            </button>
          </Motion.div>
        </div>

        {/* Scrollable Project List */}
        <div className="projects-scroll-wrapper" ref={scrollContainerRef}>
          <Motion.div
            className="projects-track"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project) => (
              <Motion.div
                key={project.id}
                className="project-card-wrapper"
                variants={itemVariants}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageSrc={project.image}
                  onClick={() =>
                    navigate(`/projects/${project.id}`, {
                      state: { projectData: project },
                    })
                  }
                />
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
