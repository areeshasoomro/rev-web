'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './astro.module.css';

const features = [
  { id: '01', title: 'Production Tracking', desc: 'Monitor weaving, dyeing, and embroidery workflows in real time.' },
  { id: '02', title: 'Vendor Management', desc: 'Keep track of vendor accounts, orders, and payment histories.' },
  { id: '03', title: 'Financial Overview', desc: 'Track outstanding payables, receivables, and bill payments instantly.' },
];

export default function FeatureStack_rujhan() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.stackSection}>
      <div className={styles.headerSection}>
        <h2 className={styles.title}>Key Features</h2>
        <p className={styles.subtitle}>Unlock complete control over your textile inventory and production.</p>
      </div>

      <div className={styles.stackContainer} onMouseEnter={() => !isMobile && setIsHovered(true)} onMouseLeave={() => !isMobile && setIsHovered(false)}>
        {features.map((feat, i) => (
          <motion.div
            key={feat.id}
            className={styles.featureCard}
            animate={{
              x: isMobile ? 0 : (isHovered ? (i - 1) * 440 : 0), 
              y: isMobile ? i * 370 : (isHovered ? 0 : i * -15),
              rotate: isMobile ? 0 : (isHovered ? 0 : i * -2),
              scale: isHovered ? 1 : 1 - (i * 0.05),
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            style={{ zIndex: isHovered ? 1 : 3 - i }}
          >
            <div className={styles.featureId}>{feat.id}</div>
            <div className={styles.featureTitle}>{feat.title}</div>
            <div className={styles.featureDesc}>{feat.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}