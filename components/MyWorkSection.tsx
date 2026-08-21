"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './MyWorkSection.module.css';

const myWorkData = [
  { 
    id: 1, 
    slug: 'uga-academy', 
    badge: 'UI/UX Design', 
    title: 'U GlobalAcademy', 
    shortDesc: 'Modern Homepage Revamp for smoother UX & stronger visual hierarchy', 
    cardImg: '/uga_thumbnail.png' 
  },
  { 
    id: 2, 
    slug: 'uga-academy', 
    badge: 'UI/UX Design', 
    title: 'U GlobalAcademy', 
    shortDesc: 'Modern homepage revamp for smoother UX and stronger visual hierarchy.', 
    cardImg: '/uga_thumbnail.png' 
  },
  { 
    id: 3, 
    slug: 'uga-academy', 
    badge: 'UI/UX Design', 
    title: 'U GlobalAcademy', 
    shortDesc: 'Modern homepage revamp for smoother UX and stronger visual hierarchy.', 
    cardImg: '/uga_thumbnail.png' 
  },
  { 
    id: 4, 
    slug: 'uga-academy', 
    badge: 'UI/UX Design', 
    title: 'U GlobalAcademy', 
    shortDesc: 'Modern homepage revamp for smoother UX and stronger visual hierarchy.', 
    cardImg: '/uga_thumbnail.png' 
  },
];

export const MyWorkSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % myWorkData.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="my-work" className={styles.container}>
      <motion.header 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.mainHeading}>
          Ideas We Turned Into <span className={styles.blueText}>Reality.</span>
        </h2>
        <p className={styles.subText}>
          Explore the products, concepts, and digital experiences we’ve built beyond client work.
        </p>
      </motion.header>

      {/* Carousel Stage */}
      <div className={styles.carouselStage}>
        {myWorkData.map((item, index) => {
          let position = (index - currentIndex + myWorkData.length) % myWorkData.length;
          if (position === 2) position = -1; 

          let xCoord = 0;
          let scaleVal = 0.85;
          let opacityVal = 0.4;
          let zIndexVal = 1;
          let rotateVal = 0;

          if (position === 0) {
            xCoord = 0;
            scaleVal = 1;
            opacityVal = 1;
            zIndexVal = 3;
            rotateVal = 0;
          } else if (position === 1) {
            xCoord = 210;
            scaleVal = 0.88;
            opacityVal = 0.5;
            zIndexVal = 2;
            rotateVal = 6;
          } else if (position === -1) {
            xCoord = -210;
            scaleVal = 0.88;
            opacityVal = 0.5;
            zIndexVal = 2;
            rotateVal = -6;
          }

          return (
            <motion.div 
              key={item.id}
              className={styles.carouselCard}
              animate={{
                x: xCoord,
                scale: scaleVal,
                opacity: opacityVal,
                rotate: rotateVal,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              style={{ zIndex: zIndexVal }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className={styles.cardTopRow}>
                <span className={styles.badge}>{item.badge}</span>
                <span className="text-xs text-gray-400 font-mono">0{index + 1} / 03</span>
              </div>

              <div className={styles.cardImageContainer}>
                <img src={item.cardImg} alt={item.title} className={styles.cardImg} />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.shortDesc}</p>
                
                <Link href={`/portfolio/${item.slug}`} className={styles.viewButton}>
                  View work
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className={styles.indicators}>
        {myWorkData.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default MyWorkSection;