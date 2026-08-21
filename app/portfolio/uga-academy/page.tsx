// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import styles from './UgaAcademyPage.module.css';
// import CTASection from '@/components/CTASection';

// const screenshotAssets = [
//   { id: 1, title: "Dashboard Overview", image: "/uga-thumb.png" },
//   { id: 2, title: "Course Curriculum Module", image: "/uga2.png" },
//   { id: 3, title: "Interactive Quiz Engine", image: "/uga3.png" },
//   { id: 4, title: "Student Analytics Panel", image: "/uga4.png" },
//   { id: 5, title: "Live Class Schedule View", image: "/uga5.png" },
//   { id: 6, title: "Teacher Grading Workspace", image: "/uga6.png" },
//   { id: 7, title: "Parent Notification Center", image: "/uga7.png" },
//   { id: 9, title: "Resource Library View", image: "/uga9.png" },
//   { id: 10, title: "Student Profile & Settings", image: "/uga10.png" },
//   { id: 11, title: "Mobile Responsive Layout", image: "/uga11.png" },
// ];

// export default function UgaAcademyPage() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const getVisibleCards = () => {
//     const items = [];
//     for (let i = -2; i <= 2; i++) {
//       const index = (currentIndex + i + screenshotAssets.length) % screenshotAssets.length;
//       items.push({ ...screenshotAssets[index], offset: i });
//     }
//     return items;
//   };

//   return (
//     <div className={styles.pageWrapper}>
//       {/* Top Navbar with Clean Text Back Button */}
//       <nav className={styles.navbar}>
//         <Link href="/" className={styles.backLink}>
//           &lt; Back
//         </Link>
//       </nav>

//       {/* Centered Brand Header */}
//       <div className={styles.brandCenterContainer}>
//         <div className={styles.agencyLogoWrapper}>
//           <Image 
//             src="/loogo.png" 
//             alt="Revaya Logo" 
//             width={150} 
//             height={150} 
//             style={{ objectFit: 'contain' }} 
//             priority
//           />
//         </div>
//       </div>

//       {/* Hero Header with Highlighted Blue Keywords */}
//       <section className={styles.heroSection}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className={styles.heroTitle}>
//             <span className={styles.blueText}>Modernized</span> Virtual School <span className={styles.blueText}>Experience</span>
//           </h1>
//           <p className={styles.heroDesc}>
//             We partnered with UGA Academy to build a high-performance digital learning platform that reflects their elite brand and streamlines student engagement.
//           </p>
//         </motion.div>
//       </section>

//       {/* SCALED-DOWN 3D LAPTOP WITH CLASSY AMBIENT GLOW */}
//       <section className={styles.laptop3DSection}>
//         <div className={styles.ambientLaptopGlow}></div>
//         <motion.div 
//           className={styles.laptopPerspectiveContainer}
//           animate={{ y: [0, -8, 0], rotateZ: [0, 0.2, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <div className={styles.macbookGlowWrapper}>
//             <div className={styles.macbookMockup}>
//               <div className={styles.macbookScreenLid}>
//                 <div className={styles.macbookNotch}>
//                   <div className={styles.macbookCameraDot}></div>
//                 </div>
//                 <div className={styles.screenInner}>
//                   <video 
//                     autoPlay 
//                     loop 
//                     muted 
//                     playsInline 
//                     className={styles.mockupVideo}
//                   >
//                     <source src="/uga-video.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
//               </div>
//               <div className={styles.macbookHinge}></div>
//               <div className={styles.macbookBaseDeck}>
//                 <div className={styles.keyboardGrille}></div>
//                 <div className={styles.trackpad}></div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Problem & Solution Node Layout */}
//       <section className={styles.interactiveSwitcherSection}>
//         <div className={styles.nodeLayoutContainer}>
          
//           {/* Problem Header Badge & Card */}
//           <div className={styles.nodeColumnLeft}>
//             <div className={styles.nodeBadge}>
//               <span>Problem</span>
//               <span className={styles.dotRed}></span>
//             </div>
//             <div className={styles.nodeCard}>
//               <h3>Inconsistent &amp; Casual UX</h3>
//               <p>Their earlier website suffered from an inconsistent visual hierarchy, casual styling, and critical UX mistakes that diminished brand credibility and user trust.</p>
//             </div>
//           </div>

//           {/* S-Curve Bridge with Nodes */}
//           <div className={styles.connectorBridge}>
//             <div className={styles.connectorLine}>
//               <span className={styles.nodeCircleTop}></span>
//               <span className={styles.nodeCircleBottom}></span>
//             </div>
//           </div>

//           {/* Solution Card & Header Badge */}
//           <div className={styles.nodeColumnRight}>
//             <div className={styles.nodeCardSolution}>
//               <h3>Complete Homepage Revamp</h3>
//               <p>We completely revamped their website homepage with a unified brand color palette, premium aesthetics, and fully modernized every single section for an elite user experience.</p>
//             </div>
//             <div className={styles.nodeBadgeSolution}>
//               <span>Solution</span>
//               <span className={styles.dotBlue}></span>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ENLARGED FULL-BLEED CURVED 3D CAROUSEL */}
//       <section className={styles.curvedCarouselSection}>
//         <div className={styles.carouselHeader}>
//           <h2 className={styles.carouselTitle}>
//             Visual <span className={styles.blueText}>Highlights</span>
//           </h2>
//           <p className={styles.carouselSubtitle}>Explore the complete platform design system</p>
//         </div>

//         <div className={styles.curvedStage}>
//           {getVisibleCards().map((item) => {
//             const offset = item.offset;
//             const absOffset = Math.abs(offset);

//             const translateX = offset * 360;
//             const translateZ = -absOffset * 140;
//             const rotateY = offset * -14;
//             const scale = 1 - absOffset * 0.18;
//             const opacity = absOffset > 1 ? 0.35 : absOffset === 1 ? 0.75 : 1;
//             const zIndex = 10 - absOffset;

//             return (
//               <motion.div
//                 key={item.id}
//                 className={styles.curvedCard}
//                 animate={{
//                   x: translateX,
//                   z: translateZ,
//                   rotateY: rotateY,
//                   scale: scale,
//                   opacity: opacity,
//                 }}
//                 transition={{ type: "spring", stiffness: 280, damping: 28 }}
//                 style={{ zIndex }}
//                 onClick={() => setCurrentIndex((currentIndex + offset + screenshotAssets.length) % screenshotAssets.length)}
//               >
//                 <div className={styles.cardImageFull}>
//                   <img src={item.image} alt={item.title} />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Pagination Dots */}
//         <div className={styles.paginationDotsContainer}>
//           {screenshotAssets.map((_, idx) => (
//             <button
//               key={idx}
//               className={`${styles.paginationDot} ${currentIndex === idx ? styles.activeDot : ''}`}
//               onClick={() => setCurrentIndex(idx)}
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>
//       </section>

//      <CTASection />     
//     </div>
//   );
// }


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
      {/* Background Interactive Gradient Mesh */}
      <div className={styles.ambientBackgroundMesh}>
        <div className={styles.meshBlob1}></div>
        <div className={styles.meshBlob2}></div>
      </div>

      {/* Top Navbar with Clean Text Back Button */}
      <nav className={styles.navbar}>
        <motion.div whileHover={{ x: -4 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/" className={styles.backLink}>
            &lt; Back
          </Link>
        </motion.div>
      </nav>

      {/* Centered Brand Header with Entrance Animation */}
      <motion.div 
        className={styles.brandCenterContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>

      {/* Hero Header with Unified Typography and Highlighted Blue Keywords */}
      <section className={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className={styles.heroTitle}>
            <span className={styles.blueText}>Modernized</span> Virtual School <span className={styles.blueText}>Experience</span>
          </h1>
          <p className={styles.heroDesc}>
            We partnered with UGA Academy to build a high-performance digital learning platform that reflects their elite brand and streamlines student engagement.
          </p>
        </motion.div>
      </section>

      {/* ULTRA-REALISTIC 3D LAPTOP HARDWARE SHOWCASE WITH MICROINTERACTIONS */}
      <section className={styles.laptop3DSection}>
        <div className={styles.ambientLaptopGlow}></div>
        <div className={styles.ambientLaptopGlowPulse}></div>
        
        <motion.div 
          className={styles.laptopPerspectiveContainer}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className={styles.macbookMockup}
            animate={{ 
              rotateX: [12, 14, 12], 
              rotateY: [-14, -10, -14],
              y: [0, -12, 0] 
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              rotateX: 6, 
              rotateY: -4, 
              scale: 1.03,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          >
            {/* Screen Lid & Glass Reflection Frame */}
            <div className={styles.macbookScreenLid}>
              <div className={styles.macbookAntennaLine}></div>
              <div className={styles.macbookNotch}>
                <div className={styles.macbookCameraDot}></div>
                <div className={styles.macbookSensorDot}></div>
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
                {/* Glossy Glass Reflection Overlay */}
                <div className={styles.screenGlassReflection}></div>
              </div>
            </div>

            {/* Aluminum Hinge with Metallic Gradient */}
            <div className={styles.macbookHinge}></div>

            {/* Realistic 3D Keyboard Base Deck */}
            <div className={styles.macbookBaseDeck}>
              <div className={styles.keyboardWell}>
                <div className={styles.keyboardGrille}></div>
              </div>
              <div className={styles.trackpad}></div>
              <div className={styles.lipIndent}></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem & Solution Node Layout with Interactive Glow Cards */}
      <section className={styles.interactiveSwitcherSection}>
        <div className={styles.nodeLayoutContainer}>
          
          {/* Problem Header Badge & Card */}
          <motion.div 
            className={styles.nodeColumnLeft}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.nodeBadge}>
              <span>Problem</span>
              <span className={styles.dotRed}></span>
            </div>
            <motion.div className={styles.nodeCard} whileHover={{ y: -4, borderColor: 'rgba(239, 68, 68, 0.3)' }}>
              <h3>Inconsistent &amp; Casual UX</h3>
              <p>Their earlier website suffered from an inconsistent visual hierarchy, casual styling, and critical UX mistakes that diminished brand credibility and user trust.</p>
            </motion.div>
          </motion.div>

          {/* S-Curve Bridge with Nodes */}
          <div className={styles.connectorBridge}>
            <div className={styles.connectorLine}>
              <span className={styles.nodeCircleTop}></span>
              <span className={styles.nodeCircleBottom}></span>
            </div>
          </div>

          {/* Solution Card & Header Badge */}
          <motion.div 
            className={styles.nodeColumnRight}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className={styles.nodeCardSolution} whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(1, 144, 249, 0.2)' }}>
              <h3>Complete Homepage Revamp</h3>
              <p>We completely revamped their website homepage with a unified brand color palette, premium aesthetics, and fully modernized every single section for an elite user experience.</p>
            </motion.div>
            <div className={styles.nodeBadgeSolution}>
              <span>Solution</span>
              <span className={styles.dotBlue}></span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ENLARGED FULL-BLEED CURVED 3D CAROUSEL */}
      <section className={styles.curvedCarouselSection}>
        <motion.div 
          className={styles.carouselHeader}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.carouselTitle}>
            Visual <span className={styles.blueText}>Highlights</span>
          </h2>
          <p className={styles.carouselSubtitle}>Explore the complete platform design system</p>
        </motion.div>

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
                whileHover={{ scale: scale * 1.04, borderColor: 'rgba(1, 144, 249, 0.8)' }}
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