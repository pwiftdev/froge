import React from 'react';
import { motion } from 'framer-motion';
import './XCommunity.css';

const XIcon: React.FC<{ size?: number }> = ({ size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
};

const XCommunity: React.FC = () => {
  return (
    <section className="x-community">
      <div className="x-community-container">
        <motion.div
          className="x-community-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="x-community-icon">
            <XIcon size={48} />
          </div>
          <h2 className="x-community-title">Join Our X Community</h2>
          <p className="x-community-description">
            Connect with fellow frogs, stay updated, and be part of the $FROGE movement
          </p>
          <motion.a
            href="https://x.com/i/communities/2012872389495824703"
            target="_blank"
            rel="noopener noreferrer"
            className="x-community-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <XIcon size={20} />
            <span>Join X Community</span>
          </motion.a>
          <div className="x-community-grass">
            <img src="/grass.png" alt="Grass" className="grass-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default XCommunity;
