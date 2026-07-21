'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/astro.module.css'; // You can share this stylesheet or create a dedicated one if needed

import FeatureStack from '@/components/FeatureStack';
import CTASection from '@/components/CTASection';
import Testimonial from '@/components/astro_testimonial';
import { FiAlertCircle, FiChevronLeft } from 'react-icons/fi';
import { Lightbulb } from 'lucide-react';
import SolvitVideoPlayer from '@/components/Video_solvit';
import SolvitScreenshotSlider from '@/components/screenshot_solvit';
import FeatureStack_solvit from '@/components/feature-solvit';
import Testimonial_solvit from '@/components/solvit-testimonial'; // Import the Solvit-specific testimonial component



export default function SolvitPage() {
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
                {/* Dual Brand Logos Row */}
                <div className={styles.collabLogosRow}>
                    <div className={styles.logoGlowWrapper1}>
                        <Image src="/loogo.png" alt="Revaya" width={180} height={80} />
                    </div>
                    <span className={styles.collabX}>×</span>
                    <div className={styles.logoGlowWrapper1}>
                        {/* Replace with your Solvit logo path when ready */}
                        <Image src="/solvit logo.png" alt="Solvit LMS" width={300} height={200} style={{ objectFit: 'contain' }} />
                    </div>
                </div>

                {/* Premium Headline */}
                <h1 className={styles.heroMainTitle}>
                    <span className={styles.highlightText}> Smart</span> Learning Management<span className={styles.highlightText}> System</span>
                </h1>

                {/* Description */}
                <p className={styles.description}>
                    We engineered Solvit to streamline digital education, providing students and educators with an intuitive dashboard, interactive quiz , and seamless course content delivery.
                </p>

                {/* Tech Stack Pills */}
                <div className={styles.techStackRow}>
                    {['Prisma', 'Postgres', 'Shadcn', 'Nextjs', 'Bunny.net', 'Cloudflare r2'].map((tech) => (
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

            <SolvitVideoPlayer />

            <div className={styles.statsRow}>
                {[
                    { val: '90%', label: 'Course Completion' },
                    { val: '3x', label: 'Faster Navigation' },
                    { val: '99%', label: 'System Uptime' },
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
                            <li>Fragmented student dashboards causing poor user engagement.</li>
                            <li>Complex tracking tools for quizzes and assignments.</li>
                            <li>Cluttered course material distribution channels.</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.infoCard} ${styles.solutionCard}`}>
                    <div className={styles.iconBox}><Lightbulb color="#22c55e" size={32} /></div>
                    <h3 className={styles.infoTitle}>The Solution</h3>
                    <div className={styles.infoText}>
                        <ul>
                            <li>Unified student dashboard with real-time progress indicators.</li>
                            <li>Streamlined quiz tracking system with instant feedback loops.</li>
                            <li>Clean, intuitive module layouts for effortless content delivery.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <SolvitScreenshotSlider />
            <FeatureStack_solvit />
            <Testimonial_solvit />
            <CTASection />
        </main>
    );
}