import React, { useEffect } from 'react';
import { motion as Motion } from "framer-motion";
import { useLocation } from 'react-router-dom'; // Import hooks
import './projectDetail.css';

// ... (Keep your Icon components here: LocationPin, CheckIcon) ...

const ProjectDetail = () => {
  // const { id } = useParams(); // Get ID from URL
  const location = useLocation(); // Get state passed from Card
  
  // 1. Try to get data passed from the Card click
  // 2. Fallback to a default object if page is refreshed directly (where state is lost)
  const project = location.state?.projectData || {
    title: "Project Not Found or Loading...",
    heroImage: " /12.jpeg",
    overview: "We could not retrieve the project details. Please go back to the projects page.",
    location: "Unknown",
    scope: [],
    outcome: "",
    gallery1: [],
    gallery2: []
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation Variants (Same as before)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pd-page-wrapper">
      <Motion.div 
        className="pd-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <Motion.div className="pd-header" variants={itemVariants}>
          <h1 className="pd-title">{project.title}</h1>
        </Motion.div>

        {/* Hero Image */}
        <Motion.div className="pd-hero-section" variants={itemVariants}>
          <img src={project.heroImage} alt={project.title} className="pd-hero-img" />
        </Motion.div>

        {/* Overview Section */}
        <Motion.div className="pd-section" variants={itemVariants}>
          <h2 className="pd-section-title">Project Overview</h2>
          <p className="pd-text">{project.overview}</p>
          
          <div className="pd-gallery-grid">
            {project.gallery1?.map((img, index) => (
              <div key={index} className="pd-gallery-item">
                <img src={img} alt="Detail" className="pd-gallery-img" />
              </div>
            ))}
          </div>
        </Motion.div>

        {/* ... (Rest of your JSX: Location, Scope, Outcome, CTA) ... */}
        
      </Motion.div>
    </div>
  );
};

export default ProjectDetail;