import Button from "../../button/button";
import "./heroSection.css";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section className="hero" role="region" aria-label="Hero">
      <Motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <strong>
            Building <span>Strong</span> Foundations. <br />
            Delivering <span>Lasting</span> Value.
          </strong>
        </Motion.h1>

        <Motion.div
          className="hero-buttons"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.5 },
            },
          }}
        >
          <Motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="grey-btn"><Link to="/projects">
              <Button label="View Projects" />
            </Link></div>
          </Motion.div>

          <Motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link to="/contact">
              <Button label="Contact Us" />
            </Link>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default HeroSection;

