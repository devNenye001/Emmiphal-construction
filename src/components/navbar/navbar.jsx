import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Motion.nav
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link to="/">
          <img
            src="/Logo.png"
            alt="emmiphal global construction company logo"
            height="70"
          />
        </Link>
      </Motion.div>

      {/* Hamburger */}
      <Motion.button
        className="hamburger"
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </Motion.button>

      {/* Desktop Links */}
      <div className="navlinks">
        {["Home", "Services", "Projects", "About"].map((item, i) => (
          <Motion.div
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}>
              {item}
            </Link>
          </Motion.div>
        ))}
      </div>

      {/* Contact Button */}
      <Motion.div
        className="contact-desktop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link to="/contact">
          <Button label="Contact Us" />
        </Link>
      </Motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <Motion.div
            className="navlinks active"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {["Home", "Services", "Projects", "About", "Contact"].map((item, i) => (
              <Motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </Motion.div>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
};

export default Navbar;
