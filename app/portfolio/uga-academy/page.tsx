"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: "all", label: "ALL", count: 8 },
  { id: "ui-ux", label: "UI/UX DESIGN", count: 2 },
  { id: "website-design", label: "WEBSITE DESIGN", count: 3 },
  { id: "mobile-app", label: "MOBILE APP", count: 2 },
  { id: "branding", label: "BRANDING", count: 1 },
  { id: "logo", label: "LOGO", count: 0 },
];

const projectsData = [
  {
    id: "uga-academy-1",
    title: "U Global Academy",
    category: "ui-ux",
    categoryLabel: "UI/UX DESIGN",
    thumbnail: "/uga-1.png",
    link: "/portfolio/uga-academy",
    description: "Modern homepage revamp for smoother UX and visual hierarchy.",
    stats: "01 / 03",
    isFullPageUga: true,
    images: Array.from({ length: 11 }, (_, i) => `/uga-${i + 1}.png`)
  },
  {
    id: "uga-academy-2",
    title: "U Global Academy",
    category: "ui-ux",
    categoryLabel: "UI/UX DESIGN",
    thumbnail: "/uga-1.png",
    link: "/portfolio/uga-academy",
    description: "Interactive student dashboard and enrollment flow architecture.",
    stats: "02 / 03",
    isFullPageUga: true,
    images: Array.from({ length: 11 }, (_, i) => `/uga-${i + 1}.png`)
  },
  {
    id: "solvit-website",
    title: "Solvit Website",
    category: "website-design",
    categoryLabel: "WEBSITE DESIGN",
    thumbnail: "/solv-01.png",
    link: "#",
    description: "Comprehensive learning management platform and content workspace interface.",
    stats: "01 / 01",
    isFullPageUga: false,
    images: Array.from({ length: 10 }, (_, i) => `/solv-${String(i + 1).padStart(2, '0')}.png`)
  },
  {
    id: "rujhan-website",
    title: "Rujhan Website",
    category: "website-design",
    categoryLabel: "WEBSITE DESIGN",
    thumbnail: "/ruj-01.png",
    link: "#",
    description: "Modern digital platform workspace with interactive layouts and production builds.",
    stats: "01 / 01",
    isFullPageUga: false,
    images: Array.from({ length: 5 }, (_, i) => `/ruj-${String(i + 1).padStart(2, '0')}.png`)
  },
  {
    id: "astro-website",
    title: "Astro Website",
    category: "website-design",
    categoryLabel: "WEBSITE DESIGN",
    thumbnail: "/ast-01.png",
    link: "#",
    description: "Sleek enterprise interface design with smooth styling and responsive views.",
    stats: "01 / 01",
    isFullPageUga: false,
    images: Array.from({ length: 9 }, (_, i) => `/ast-${String(i + 1).padStart(2, '0')}.png`)
  },
  {
    id: "solvit-mobile-app",
    title: "Solvit Mobile App",
    category: "mobile-app",
    categoryLabel: "MOBILE APP",
    thumbnail: "/solvit-app-show.png",
    link: "#",
    description: "On-the-go educational tracking and mobile-optimized student workflows.",
    stats: "01 / 01",
    isFullPageUga: false,
    images: ["/solvit-app-show.png"]
  },
  {
    id: "rebin-app",
    title: "Rebin App Design",
    category: "mobile-app",
    categoryLabel: "MOBILE APP",
    thumbnail: "/rebin-app.png",
    link: "#",
    description: "The ultimate eco-reward App engineered to turn sustainable recycling into an engaging and rewarding experience.",
    stats: "01 / 01",
    isFullPageUga: false,
    images: ["/rebin-app.png"]
  },
  {
    id: "revaya-pos-banner",
    title: "Revaya POS Banner",
    category: "branding",
    categoryLabel: "BRANDING",
    thumbnail: "/pos-banner.png",
    link: "#",
    description: "High-conversion promotional banner layout for Revaya POS branding.",
    stats: "01 / 01",
    isFullPageUga: false,
    images: ["/pos-banner.png"]
  }
];

interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  thumbnail: string;
  link: string;
  description: string;
  stats: string;
  isFullPageUga: boolean;
  images: string[];
}

export default function CreativeWorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ui-ux");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-8 font-sans">
      
      {/* Top Navigation with Back Link */}
      <nav className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
        <motion.div whileHover={{ x: -4 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/" className="text-[#0190f9] font-medium text-sm hover:opacity-80 transition-opacity flex items-center gap-1.5">
            &lt; Back
          </Link>
        </motion.div>
      </nav>

      {/* Balanced Strong Headline & Large Detailed Subtext */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center mb-14"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
          Ideas We Turned Into <span className="text-[#0190f9]">Reality.</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Step behind the scenes of our creative workshop—exploring bold interfaces, scalable architectures, and production-ready apps that redefine digital experiences.
        </p>
      </motion.div>

      {/* Category Filter Navigation Bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-16 gap-3 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors duration-300 ${
                isActive 
                  ? "text-[#0190f9]" 
                  : "text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-transparent"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 rounded-full border-2 border-[#0190f9] bg-[#0190f9]/10 shadow-lg shadow-[#0190f9]/20 pointer-events-none"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
              <motion.span 
                animate={{ scale: isActive ? 1.1 : 1 }}
                className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-[#0190f9] text-black font-extrabold" : "bg-zinc-900 text-zinc-400"}`}
              >
                {cat.count}
              </motion.span>
            </motion.button>
          );
        })}
      </div>

      {/* Projects Grid with Smooth Layout Animation */}
      <motion.div 
        layout 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
              whileHover={{ 
                y: -8, 
                transition: { type: "spring", stiffness: 300, damping: 20 } 
              }}
              onClick={() => setSelectedProject(project)}
              className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl hover:border-[#0190f9]/50 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="p-4 pb-3 flex items-center justify-between border-b border-zinc-900">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#0190f9] text-white">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {project.stats}
                  </span>
                </div>

                {/* Card Thumbnail Window */}
                <div className="relative w-full p-4 pb-2 bg-gradient-to-b from-zinc-900/40 to-transparent">
                  <div className="rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-900 h-48 relative">
                    <motion.img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 pt-2 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#0190f9] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                    {project.description}
                  </p>
                </div>

                <motion.div 
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#0190f9] group-hover:bg-[#0190f9] group-hover:text-white transition-colors shadow-md shrink-0 ml-3"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Click-to-Open Modal Detail View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-zinc-950 border border-zinc-800 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-20">
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center transition-colors border border-zinc-800 shadow-lg"
                  aria-label="Close modal"
                >
                  ✕
                </motion.button>
              </div>

              {/* Modal Container with Vertical Scrolling */}
              <div className="overflow-y-auto p-6 sm:p-10 custom-scrollbar flex-1">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0190f9] text-white">
                    {selectedProject.categoryLabel}
                  </span>
                  <h2 className="text-3xl font-extrabold text-white mt-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-zinc-400 mt-2">
                    {selectedProject.description}
                  </p>
                </motion.div>

                {/* Seamless Stacked Full-Page Image Preview */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 mb-6 flex flex-col"
                >
                  {selectedProject.images.map((imgSrc, index) => (
                    <img 
                      key={index} 
                      src={imgSrc} 
                      alt={`${selectedProject.title} section ${index + 1}`}
                      className="w-full h-auto object-cover block m-0 p-0"
                    />
                  ))}
                </motion.div>

                <div className="flex justify-end">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-2xl bg-zinc-900 text-zinc-300 font-semibold hover:bg-zinc-800 transition-colors border border-zinc-800"
                  >
                    Close Preview
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}