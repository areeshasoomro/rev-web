"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './UgaAcademyPage.module.css';
import CTASection from '@/components/CTASection';

const screenshotAssets = [
  { id: 1, title: "Dashboard Overview", image: "/uga-thumb.png" },
  { id: 2, title: "Course Curriculum Module", image: "/uga2.png" },
  { id: 3, title: "Interactive Quiz Engine", image: "/uga3.png" },
  { id: 4, title: "Student Analytics Panel", image: "/uga4.png" },
  { id: 5, title: "Live Class Schedule View", image: "/uga5.png" },
  { id: 6, title: "Teacher Grading Workspace", image: "/uga6.png" },
  { id: 7, title: "Parent Notification Center", image: "/uga7.png" },
  { id: 9, title: "Resource Library View", image: "/uga9.png" },
  { id: 10, title: "Student Profile & Settings", image: "/uga10.png" },
  { id: 11, title: "Mobile Responsive Layout", image: "/uga11.png" },
];

export default function UgaAcademyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCards = () => {
    const items = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + screenshotAssets.length) % screenshotAssets.length;
      items.push({ ...screenshotAssets[index], offset: i });
    }
    return items;
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Top Navbar with Clean Text Back Button */}
      <nav className={styles.navbar}>
        <Link href="/" className={styles.backLink}>
          &lt; Back
        </Link>
      </nav>

      {/* Centered Brand Header */}
      <div className={styles.brandCenterContainer}>
        <div className={styles.agencyLogoWrapper}>
          <Image 
            src="/loogo.png" 
            alt="Revaya Logo" 
            width={150} 
            height={150} 
            style={{ objectFit: 'contain' }} 
            priority
          />
        </div>
      </div>

      {/* Hero Header with Highlighted Blue Keywords */}
      <section className={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heroTitle}>
            <span className={styles.blueText}>Modernized</span> Virtual School <span className={styles.blueText}>Experience</span>
          </h1>
          <p className={styles.heroDesc}>
            We partnered with UGA Academy to build a high-performance digital learning platform that reflects their elite brand and streamlines student engagement.
          </p>
        </motion.div>
      </section>

      {/* SCALED-DOWN 3D LAPTOP WITH CLASSY AMBIENT GLOW */}
      <section className={styles.laptop3DSection}>
        <div className={styles.ambientLaptopGlow}></div>
        <motion.div 
          className={styles.laptopPerspectiveContainer}
          animate={{ y: [0, -8, 0], rotateZ: [0, 0.2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={styles.macbookGlowWrapper}>
            <div className={styles.macbookMockup}>
              <div className={styles.macbookScreenLid}>
                <div className={styles.macbookNotch}>
                  <div className={styles.macbookCameraDot}></div>
                </div>
                <div className={styles.screenInner}>
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className={styles.mockupVideo}
                  >
                    <source src="/uga-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className={styles.macbookHinge}></div>
              <div className={styles.macbookBaseDeck}>
                <div className={styles.keyboardGrille}></div>
                <div className={styles.trackpad}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem & Solution Node Layout */}
      <section className={styles.interactiveSwitcherSection}>
        <div className={styles.nodeLayoutContainer}>
          
          {/* Problem Header Badge & Card */}
          <div className={styles.nodeColumnLeft}>
            <div className={styles.nodeBadge}>
              <span>Problem</span>
              <span className={styles.dotRed}></span>
            </div>
            <div className={styles.nodeCard}>
              <h3>Inconsistent &amp; Casual UX</h3>
              <p>Their earlier website suffered from an inconsistent visual hierarchy, casual styling, and critical UX mistakes that diminished brand credibility and user trust.</p>
            </div>
          </div>

          {/* S-Curve Bridge with Nodes */}
          <div className={styles.connectorBridge}>
            <div className={styles.connectorLine}>
              <span className={styles.nodeCircleTop}></span>
              <span className={styles.nodeCircleBottom}></span>
            </div>
          </div>

          {/* Solution Card & Header Badge */}
          <div className={styles.nodeColumnRight}>
            <div className={styles.nodeCardSolution}>
              <h3>Complete Homepage Revamp</h3>
              <p>We completely revamped their website homepage with a unified brand color palette, premium aesthetics, and fully modernized every single section for an elite user experience.</p>
            </div>
            <div className={styles.nodeBadgeSolution}>
              <span>Solution</span>
              <span className={styles.dotBlue}></span>
            </div>
          </div>

        </div>
      </section>

      {/* ENLARGED FULL-BLEED CURVED 3D CAROUSEL */}
      <section className={styles.curvedCarouselSection}>
        <div className={styles.carouselHeader}>
          <h2 className={styles.carouselTitle}>
            Visual <span className={styles.blueText}>Highlights</span>
          </h2>
          <p className={styles.carouselSubtitle}>Explore the complete platform design system</p>
        </div>

        <div className={styles.curvedStage}>
          {getVisibleCards().map((item) => {
            const offset = item.offset;
            const absOffset = Math.abs(offset);

            const translateX = offset * 360;
            const translateZ = -absOffset * 140;
            const rotateY = offset * -14;
            const scale = 1 - absOffset * 0.18;
            const opacity = absOffset > 1 ? 0.35 : absOffset === 1 ? 0.75 : 1;
            const zIndex = 10 - absOffset;

            return (
              <motion.div
                key={item.id}
                className={styles.curvedCard}
                animate={{
                  x: translateX,
                  z: translateZ,
                  rotateY: rotateY,
                  scale: scale,
                  opacity: opacity,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                style={{ zIndex }}
                onClick={() => setCurrentIndex((currentIndex + offset + screenshotAssets.length) % screenshotAssets.length)}
              >
                <div className={styles.cardImageFull}>
                  <img src={item.image} alt={item.title} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className={styles.paginationDotsContainer}>
          {screenshotAssets.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.paginationDot} ${currentIndex === idx ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

     <CTASection />     
    </div>
  );
}