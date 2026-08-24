

"use client";

import React, { useEffect, useState } from 'react';
import styles from './TestimonialsSection.module.css';

interface TestimonialCard {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

const testimonialsData: TestimonialCard[] = [
  {
    id: 1,
    quote: "Solvit Revaya Digital delivered exactly what we envisioned. Professional team, smooth communication, and outstanding results from start to finish.",
    name: "Syed Shaheer Akbar",
    role: "Founder, SOLVIT",
    avatarUrl: "/solvit avatar.png"
  },
  {
    id: 2,
    quote: "Excellent service and exceptional execution. The team understood our requirements and delivered a high quality solution on time.",
    name: "Mehroz",
    role: "Executive Manager, MCH Fabrics",
    avatarUrl: "/mch avatar.png"
  },
  {
    id: 3,
    quote: "Professional, reliable, and detail oriented. Revaya Digital created a website that perfectly reflects our brand.",
    name: "Raheel Bawa",
    role: "Managing Director, Astro",
    avatarUrl: "/astro avatar.png"
  }
];

export const TestimonialsSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.leftCosmicGlow} />
      <div className={styles.rightCosmicGlow} />

      <div className={styles.headerBlock}>
        <h2 className={styles.mainTitle}>
          Real <span className={styles.blueText}>People.</span> Real <span className={styles.blueText}>Stories.</span>
        </h2>
        <p className={styles.subSubtitle}>What Our Clients Say About Us</p>
      </div>

      <div className={styles.cardsCanvas}>
        {isMounted && testimonialsData.map((item, idx) => (
          <div 
            key={item.id} 
            className={`${styles.glassCard} ${styles[`cardPosition${idx + 1}`]}`}
            style={{ '--card-idx': idx } as React.CSSProperties}
          >
            <div className={styles.avatarFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.avatarUrl} alt={item.name} className={styles.avatarImage} />
            </div>

            <div className={styles.cardBody}>
              <p className={styles.quoteText}>“{item.quote}”</p>
              <div className={styles.metaContainer}>
                <h4 className={styles.clientName}>{item.name}</h4>
                <span className={styles.clientRole}>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;