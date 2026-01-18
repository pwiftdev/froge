import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingLogos.css';

interface FloatingLogo {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const FloatingLogos: React.FC = () => {
  const [logos, setLogos] = useState<FloatingLogo[]>([]);

  useEffect(() => {
    const createLogo = (id: number): FloatingLogo => {
      return {
        id,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 50 + Math.random() * 80, // Random size between 50-130px
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 5, // Random duration between 4-9 seconds
      };
    };

    // Create initial logos
    const initialLogos = Array.from({ length: 10 }, (_, i) => createLogo(i));
    setLogos(initialLogos);

    // Function to update logos randomly
    const updateLogos = () => {
      setLogos((prevLogos) => {
        return prevLogos.map((logo) => {
          // Randomly update position and properties
          return {
            ...logo,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
            duration: 4 + Math.random() * 5,
            size: 50 + Math.random() * 80,
          };
        });
      });
    };

    // Update logos periodically
    const interval = setInterval(updateLogos, 5000 + Math.random() * 4000); // Every 5-9 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-logos-container">
      <AnimatePresence>
        {logos.map((logo) => (
          <motion.div
            key={logo.id}
            className="floating-logo"
            style={{
              left: `${logo.x}%`,
              top: `${logo.y}%`,
              width: `${logo.size}px`,
              height: `${logo.size}px`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 0.25, 0.25, 0],
              scale: [0, 1, 1, 0],
              rotate: [0, 360],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: logo.duration,
              delay: logo.delay,
              repeat: Infinity,
              repeatDelay: 3 + Math.random() * 4,
              ease: "easeInOut",
            }}
          >
            <img 
              src="/frogelogo.jpeg" 
              alt="$FROGE" 
              className="floating-logo-image"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingLogos;
