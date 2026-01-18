import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck } from 'react-icons/fa';
import './ContractAddress.css';

const ContractAddress: React.FC = () => {
  const contractAddress = 'FWGKb4xnpRCYFrXT1agSAWKRJ43CJJJs86zUWJ9kpgtq';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-8)}`;
  };

  return (
    <motion.div
      className="contract-address"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="contract-label">Contract Address</div>
      <div className="contract-wrapper">
        <a
          href={`https://www.fwog.fun/pond/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contract-text"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="contract-full">{contractAddress}</span>
          <span className="contract-short">{formatAddress(contractAddress)}</span>
        </a>
        <motion.button
          className="copy-button"
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={copied ? 'Copied!' : 'Copy address'}
        >
          {copied ? <FaCheck size={18} /> : <FaCopy size={18} />}
        </motion.button>
      </div>
      {copied && (
        <motion.div
          className="copy-feedback"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          Copied to clipboard!
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContractAddress;
