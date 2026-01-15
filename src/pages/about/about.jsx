import React from 'react';
import { motion as Motion } from "framer-motion";
import './about.css';

const About = () => {
  // Team Data extracted from image
  const teamMembers = [
    {
      id: 1,
      name: "Uzoeghe Ifeanyi Emmanuel",
      role: "Managing Director (MD)",
      image: "/emmy.jpg" // Replace with actual image
    },
    {
      id: 2,
      name: "Okoli Chukwujekwu ThankGod",
      role: "Project Manager",
      image: "/okoli.jpg"
    },
    {
      id: 3,
      name: "Nwanchor Chidubem Kingsley",
      role: "Inventory Manager",
      image: "/kingsley.jpg"
    }
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="about-page-section">
      <div className="about-page-container">
        
        {/* Header Section */}
        <div className="about-page-header">
          <Motion.h1 
            className="about-page-title"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            About Us
          </Motion.h1>
          <Motion.p 
            className="about-page-subtitle"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Emmiphal Global Construction Company is a trusted construction and real estate firm 
            committed to delivering high-quality projects across Nigeria.
          </Motion.p>
        </div>

        {/* Hero Image */}
        <Motion.div 
          className="about-page-hero-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          <img 
            src="/a2.jpg" // Replace with construction site image
            alt="Construction Site Team" 
            className="about-page-hero-img" 
          />
        </Motion.div>

        {/* Detailed Description */}
        <Motion.div 
          className="about-page-description"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p>
            Emmiphal Global Construction Company is a trusted construction and real estate firm 
            committed to delivering high-quality projects across Nigeria. We specialize in building 
            construction, road infrastructure, real estate development, and related services, 
            with a strong focus on durability, safety, and client satisfaction.
          </p>
          <p>
            Our approach combines industry expertise, modern construction techniques, and quality 
            materials to deliver projects that meet professional standards and exceed client 
            expectations. At Emmiphal, your satisfaction is our priority.
          </p>
        </Motion.div>

        {/* Team Section */}
        <div className="about-page-team-section">
          <Motion.h2 
            className="about-page-team-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-page-highlight">Experienced</span> Professionals<br />
            Behind <span className="about-page-highlight">Every Project</span>
          </Motion.h2>

          <Motion.div 
            className="about-page-team-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {teamMembers.map((member) => (
              <Motion.div 
                key={member.id} 
                className="about-page-team-card"
                variants={fadeUp}
              >
                <div className="about-page-member-img-wrapper">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="about-page-member-img" 
                  />
                </div>
                <h3 className="about-page-member-name">{member.name}</h3>
                <p className="about-page-member-role">{member.role}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;