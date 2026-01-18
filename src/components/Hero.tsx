import React from 'react';
import { motion } from 'framer-motion';
import ContractAddress from './ContractAddress';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner-wrapper">
        <img src="/frogebanner.jpeg" alt="$FROGE Banner" className="hero-banner" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Welcome to <span className="highlight">$FROGE</span>
          </h1>
          <p className="hero-subtitle">
            The most ribbit-ing memecoin in the crypto pond!
          </p>
          <p className="hero-description">
            Join the serene journey of $FROGE - where chill vibes meet crypto innovation. 
            Hop into a community that's as peaceful as a lily pad on a calm pond.
          </p>
          <div className="hero-buttons">
            <motion.a
              href="https://www.fwog.fun/pond/FWGKb4xnpRCYFrXT1agSAWKRJ43CJJJs86zUWJ9kpgtq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy $FROGE
            </motion.a>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </motion.button>
          </div>
          <ContractAddress />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
