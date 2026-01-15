import React from 'react';
import './notFound.css';
import Button from '../../components/button/button';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router';

const NotFound = () => {
  return (
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
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        <Motion.div
          className="icon-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 200 }}
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
          Page not found!
        </Motion.h1>
        
        <Motion.p
          className="description"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          This page cant be transcribed. It looks like this page has
          left the meeting - or maybe it never joined.
        </Motion.p>
        
        <Motion.div className="button-wrapper" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}>
          <Link to="/">
          <Button label="Go Home" />
          </Link>
        </Motion.div>
      </Motion.div>
    </Motion.div>
  );
};

export default NotFound;