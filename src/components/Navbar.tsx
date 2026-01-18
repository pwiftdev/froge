import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/frogelogo.jpeg" alt="$FROGE Logo" className="logo-image" />
          <span className="logo-text">$FROGE</span>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#tokenomics" className="navbar-link">Tokenomics</a>
          <motion.a
            href="https://www.fwog.fun/pond/FWGKb4xnpRCYFrXT1agSAWKRJ43CJJJs86zUWJ9kpgtq"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy Now
          </motion.a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
