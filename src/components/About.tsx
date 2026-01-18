import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaLock } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const features = [
    {
      icon: FaGem,
      title: 'The OG Worry Frog',
      description: 'From Discord legend to on-chain legacy. $FROGE is goated.'
    },
    {
      icon: FaLock,
      title: 'Secure & Safe',
      description: '100% locked supply, 100% in liquidity - maximum security and transparency.'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why $FROGE?</h2>
          <p className="section-subtitle">
            The OG Worry Frog. From Discord legend to on-chain legacy.
          </p>
          <p className="section-description">
            $FROGE is goated. It makes only sense on <a href="https://fwog.fun" target="_blank" rel="noopener noreferrer" className="fwog-link">fwog.fun</a>.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon">
                <feature.icon size={48} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
