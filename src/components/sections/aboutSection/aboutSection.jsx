import React, { useEffect } from "react";
import {
  motion as Motion,
  useMotionValue,
  useTransform,
  animate,
   useInView,
} from "framer-motion";
import "./aboutSection.css";
import { useRef } from "react";

// Stat Item with counting effect


const StatItem = ({ value, suffix = "", label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 1.5,
      delay,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, value, delay, count]);

  return (
    <Motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <span className="stat-number">
        <Motion.span>{rounded}</Motion.span>
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </Motion.div>
  );
};

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Column */}
        <Motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.span className="section-label" variants={itemVariants}>
            About Us
          </Motion.span>

          <Motion.p className="about-description" variants={itemVariants}>
            Emmiphal Global Construction Company is a full-service construction
            and real estate firm delivering high-quality projects across Nigeria.
            From road construction to residential and commercial buildings, we
            combine expertise, durable materials, and modern techniques.
          </Motion.p>

          <div className="stats-container">
            <StatItem value={150} suffix="+" label="Completed Projects" delay={0.4} />
            <StatItem value={200} suffix="+" label="Happy Clients" delay={0.5} />
            <StatItem value={95} suffix="%" label="Satisfaction rate" delay={0.6} />
          </div>
        </Motion.div>

        {/* Right Column */}
        <Motion.div
          className="about-image-wrapper"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/about.png"
            alt="Construction Team"
            className="about-image"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
