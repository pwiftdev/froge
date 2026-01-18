import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaTint, FaShieldAlt } from 'react-icons/fa';
import './Tokenomics.css';

const Tokenomics: React.FC = () => {
  const tokenData = [
    { label: 'Total Supply', value: '100%', color: '#7BC87F' },
    { label: 'Liquidity Pool', value: '100%', color: '#A8D5BA' },
    { label: 'Supply Status', value: 'Locked', color: '#8FB99F' }
  ];

  return (
    <section className="tokenomics" id="tokenomics">
      <div className="tokenomics-container">
        <motion.div
          className="tokenomics-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Tokenomics</h2>
          <p className="section-subtitle">
            100% locked supply, 100% in liquidity - maximum security and transparency
          </p>
        </motion.div>

        <div className="tokenomics-content">
          <motion.div
            className="token-chart"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="chart-circle">
              <div className="chart-center">
                <div className="chart-icon">
                  <FaLock size={64} />
                </div>
                <div className="chart-text">$FROGE</div>
                <div className="chart-subtext">100% Locked</div>
              </div>
            </div>
          </motion.div>

          <div className="token-details">
            {tokenData.map((item, index) => (
              <motion.div
                key={index}
                className="token-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="token-indicator" style={{ backgroundColor: item.color }}></div>
                <div className="token-info">
                  <span className="token-label">{item.label}</span>
                  <span className="token-value">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="token-features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="token-feature">
            <div className="token-feature-icon">
              <FaLock size={32} />
            </div>
            <h3>100% Locked</h3>
            <p>Entire supply is locked and secure</p>
          </div>
          <div className="token-feature">
            <div className="token-feature-icon">
              <FaTint size={32} />
            </div>
            <h3>100% Liquidity</h3>
            <p>All supply is in liquidity pool</p>
          </div>
          <div className="token-feature">
            <div className="token-feature-icon">
              <FaShieldAlt size={32} />
            </div>
            <h3>Maximum Security</h3>
            <p>No team allocation, no risk of rug pull</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
