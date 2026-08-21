'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/astro.module.css';

import FeatureStack from '@/components/FeatureStack';
import CTASection from '@/components/CTASection';
import Testimonial from '@/components/astro_testimonial';
import { FiAlertCircle, FiChevronLeft } from 'react-icons/fi';
import { Lightbulb } from 'lucide-react';

import SolvitScreenshotSlider from '@/components/screenshot_solvit';
import FeatureStack_solvit from '@/components/feature-solvit';
import Testimonial_solvit from '@/components/solvit-testimonial';
import RujhanVideoPlayer from '@/components/video_rujhan';
import FeatureStack_rujhan from '@/components/feature-rujhan';
import RujhanScreenshotSlider from '@/components/screenshot_rujhan';
import Testimonial_rujhan from '@/components/rujhan_testimonial';

export default function RujhanPage() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Case Studies', href: '/#portfolio' },
        { name: 'Why us', href: '/#insights' },
        { name: 'Contact us', href: '/#contact' },
    ];

    return (
        <main className={styles.mainContainer}>
            {/* Header Section */}
            <header className={styles.header}>
                <div className={styles.logoAndBackButton}>
                    <button onClick={() => window.history.back()} className={styles.backButtonInline}>
                        <FiChevronLeft size={18} />
                        <span>Back</span>
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <div className={styles.heroCenterContent}>
                {/* Dual Brand Logos Row - Fully Responsive with Yellow Glow Behind Both Logos */}
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: 'clamp(12px, 3vw, 24px)', 
                    marginBottom: '30px',
                    flexWrap: 'nowrap',
                    width: '100%',
                    padding: '0 10px',
                    maxWidth: '100%',
                    overflow: 'hidden'
                }}>
                    <div style={{ 
                        width: 'clamp(100px, 22vw, 250px)', 
                        height: 'clamp(90px, 22vw, 200px)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        position: 'relative',
                        flexShrink: 1,
                        filter: 'drop-shadow(0 0 10px rgba(255, 184, 0, 0.45))'
                    }}>
                        <Image 
                            src="/loogo.png" 
                            alt="Revaya" 
                            fill 
                            style={{ objectFit: 'contain' }} 
                        />
                    </div>
                    
                    <span style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontSize: 'clamp(32px, 8vw, 80px)', 
                        color: '#1d9bff', 
                        fontWeight: 500, 
                        lineHeight: 1,
                        flexShrink: 0
                    }}>
                        ×
                    </span>
                    
                    <div style={{ 
                        width: 'clamp(100px, 22vw, 250px)', 
                        height: 'clamp(90px, 22vw, 200px)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        position: 'relative',
                        flexShrink: 1,
                        filter: 'drop-shadow(0 0 10px rgba(255, 184, 0, 0.45))'
                    }}>
                        <Image 
                            src="/Rujhan_Logo.png" 
                            alt="Rujhan" 
                            fill 
                            style={{ objectFit: 'contain' }} 
                        />
                    </div>
                </div>

                {/* Premium Headline */}
                <h1 className={styles.heroMainTitle}>
                    <span className={styles.highlightText}> Textile Production</span> & Inventory<span className={styles.highlightText}> Tracker</span>
                </h1>

                {/* Description */}
                <p className={styles.description}>
                    We engineered Rujhan to streamline complex textile supply chain operations, providing a centralized platform to manage vendors, tracking weaving, dyeing, and embroidery workflows with precision.
                </p>

                {/* Tech Stack Pills */}
                <div className={styles.techStackRow}>
                    {['Prisma', 'Postgres', 'Firebase', 'Nextjs'].map((tech) => (
                        <div key={tech} className={styles.techPill}>{tech}</div>
                    ))}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={styles.navLink}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <RujhanVideoPlayer />

            <div className={styles.statsRow}>
                {[
                    { val: '100%', label: 'Order Visibility' },
                    { val: '3x', label: 'Faster Tracking' },
                    { val: '99%', label: 'Data Accuracy' },
                ].map((stat, i) => (
                    <div key={i} className={styles.statCard}>
                        <span className={styles.statValue}>{stat.val}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                ))}
            </div>

            <div className={styles.infoGrid}>
                <div className={`${styles.infoCard} ${styles.challengeCard}`}>
                    <div className={styles.iconBox}><FiAlertCircle color="#ef4444" size={32} /></div>
                    <h3 className={styles.infoTitle}>The Challenge</h3>
                    <div className={styles.infoText}>
                        <ul>
                            <li>Managing fragmented multi-vendor orders across weaving, dyeing, and embroidery stages.</li>
                            <li>Complex tracking of payables, receivables, and real-time stock levels.</li>
                            <li>Lack of centralized visibility over production pipelines and billing cycles.</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.infoCard} ${styles.solutionCard}`}>
                    <div className={styles.iconBox}><Lightbulb color="#22c55e" size={32} /></div>
                    <h3 className={styles.infoTitle}>The Solution</h3>
                    <div className={styles.infoText}>
                        <ul>
                            <li>Unified dashboard providing live metrics on payables, receivables, and vendor stats.</li>
                            <li>Granular tracking for individual production steps like embroidery claims and bills.</li>
                            <li>Streamlined order workflows to monitor inventory, SKUs, and sales seamlessly.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <RujhanScreenshotSlider />
            <FeatureStack_rujhan />
            <Testimonial_rujhan />
            <CTASection />
        </main>
    );
}