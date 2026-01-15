import "./footer.css";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion as Motion } from "framer-motion";

const Footer = () => {
  return (
    <Motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-top">
        {/* Logo */}
        <Motion.div
          className="footerdivmain"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <img
            src="/Logo.png"
            alt="emmiphal global construction company logo"
            height="70"
          />
        </Motion.div>

        {/* Footer Groups */}
        <Motion.div
          className="footergroup"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Quick Links */}
          <Motion.div
            className="footerdiv"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </Motion.div>

          {/* Offices */}
          <Motion.div
            className="footerdiv"
            id="footerdiv"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3>Our Offices</h3>
            <p><span><FaLocationDot /></span> 21 Akpo Street, Oja Barracks, Lagos State</p>
            <p><span><FaLocationDot /></span> Plot 10 Ojukwu Street, Thinkers Corner Layout, Enugu State</p>
            <p><span><FaLocationDot /></span> 51 Okpuno Road, Awka, Anambra State</p>
            <p><span><FaLocationDot /></span> 102 Christian Okpara Street, Okpanam Road, Asaba, Delta State</p>
          </Motion.div>

          {/* Contact */}
          <Motion.div
            className="footerdiv"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3>Contact</h3>
            <p>
              <span><FaPhoneAlt /></span> Call Us: 0916 000 6082 | 0803 879 9802
            </p>
            <p>
              <span><MdEmail /></span> Email: Emmiphalglobalconstructioncomp@gmail.com
            </p>
          </Motion.div>
        </Motion.div>
      </div>

      {/* Bottom */}
      <Motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p>© 2025 EMMIPAL GLOBAL CONSTRUCTION COMPANY. All rights reserved.</p>
      </Motion.div>
    </Motion.footer>
  );
};

export default Footer;
