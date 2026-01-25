import { useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./projectDetail.css";
import { BsExclamationCircleFill } from "react-icons/bs";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!state?.projectData) {
    return (
      <div className="proj-not-found">
        <Motion.div
          className="not-found-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Motion.div
            className="content-section"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <Motion.div
              className="icon-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
            >
              <Motion.span
                className="exclamation"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <BsExclamationCircleFill />
              </Motion.span>
            </Motion.div>

            <Motion.h1
              className="title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Project not found!
            </Motion.h1>

            <Motion.div
              className="button-wrapper"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Link to="/projects">
                <Button label="View Other Projects" />
              </Link>
            </Motion.div>
          </Motion.div>
        </Motion.div>
      </div>
    );
  }

  const project = state.projectData;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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
          <p className="pd-subtitle">{project.location}</p>
        </Motion.div>

        {/* Hero Image */}
        <Motion.div className="pd-hero-section" variants={itemVariants}>
          <img
            src={project.image}
            alt={project.title}
            className="pd-hero-img"
          />
        </Motion.div>

        {/* Overview */}
        <Motion.div className="pd-section" variants={itemVariants}>
          <h2 className="pd-section-title">Project Overview</h2>
          <p className="pd-text">{project.description}</p>

          <div className="pd-gallery-grid">
            {project.gallery1?.map((video, index) => (
              <div key={index} className="pd-gallery-item">
                <video
                  src={video}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
            ))}
          </div>
        </Motion.div>

        {/* 
        {project.scope && (
          <Motion.div className="pd-section" variants={itemVariants}>
            <h2 className="pd-section-title">Project Scope</h2>
            <ul className="pd-list">
              {project.scope.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Motion.div>
        )} */}

        {/* 
        {project.outcome && (
          <Motion.div className="pd-section" variants={itemVariants}>
            <h2 className="pd-section-title">Outcome</h2>
            <p className="pd-text">{project.outcome}</p>
          </Motion.div>
        )} */}
      </Motion.div>
    </div>
  );
};

export default ProjectDetail;
