


// // "use client"

// // import { useState } from "react"
// // import Image from "next/image"
// // import Link from "next/link"
// // import { motion, AnimatePresence } from "framer-motion"

// // const NAV_LINKS = [
// //   { name: "About", href: "#about" },
// //   { name: "Services", href: "#services" },
// //   { name: "Case Studies", href: "#portfolio" },
// //   { name: "Why us", href: "#insights" },
// //   { name: "Contact us", href: "#contact" },
// // ]

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false)

// //   return (
// //     <motion.header
// //       initial={{ opacity: 0, y: -18 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.7, ease: "easeOut" }}
// //       className="relative z-50 transition-all duration-500 bg-transparent"
// //     >
// //       <div className="max-w-360 mx-auto px-8 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
// //         {/* ── Logo ── */}
// //         <Link href="/" aria-label="Revaya home" className="shrink-0">
// //           <Image
// //             src="/loogo.png"
// //             alt="Revaya"
// //             width={120}
// //             height={120}
// //             className="h-20 w-auto object-contain"
// //             priority
// //           />
// //         </Link>

// //         {/* ── Desktop Nav Links + CTA ── */}
// //         <div className="hidden md:flex items-center gap-8">
// //           <nav className="flex items-center gap-8" aria-label="Main navigation">
// //             {NAV_LINKS.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 href={link.href}
// //                 className="text-white text-[15px] font-medium transition-colors duration-200 hover:text-[#0190F9]"
// //                 style={{ fontFamily: "var(--font-inter)" }}
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </nav>

// //           <Link
// //             href="#contact"
// //             className="btn-liquid inline-flex items-center text-white font-semibold text-[15px] rounded-full px-7 py-2.5 transition-all duration-200 shrink-0"
// //             style={{
// //               fontFamily: "var(--font-space-grotesk)",
// //               background: "linear-gradient(to right, #1d9bff 0%, #0040e0 100%)",
// //               border: "1.5px solid rgba(255,255,255,0.65)",
// //               boxShadow: "0 0 22px rgba(1,144,249,0.35)",
// //             }}
// //           >
// //             Get Started
// //           </Link>
// //         </div>

// //         {/* ── Mobile Menu Trigger ── */}
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="flex md:hidden flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 relative focus:outline-none"
// //           aria-label="Toggle navigation menu"
// //         >
// //           <span className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
// //           <span className={`block h-0.5 w-6 bg-white transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`} />
// //           <span className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
// //         </button>
// //       </div>

// //       {/* ── Mobile Overlay Menu ── */}
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, y: -10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -10 }}
// //             transition={{ duration: 0.3, ease: "easeInOut" }}
// //             className="absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-8 px-6 md:hidden z-40"
// //           >
// //             <nav className="flex flex-col items-center gap-6 w-full" aria-label="Mobile navigation">
// //               {NAV_LINKS.map((link, idx) => (
// //                 <motion.div
// //                   key={link.name}
// //                   initial={{ opacity: 0, y: 8 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: idx * 0.05 }}
// //                   className="w-full text-center"
// //                 >
// //                   <Link
// //                     href={link.href}
// //                     onClick={() => setIsOpen(false)}
// //                     className="block text-white text-[17px] font-medium py-2 transition-colors duration-200 active:text-[#0190F9]"
// //                     style={{ fontFamily: "var(--font-inter)" }}
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 </motion.div>
// //               ))}
// //             </nav>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.header>
// //   )
// // }


// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"

// const NAV_LINKS = [
//   { name: "About", href: "#about" },
//   { name: "Services", href: "#services" },
//   { name: "Case Studies", href: "#portfolio" },
//   { name: "Why us", href: "#insights" },
//   { name: "Contact us", href: "#contact" },
// ]

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isLight, setIsLight] = useState(false)

//   // Check saved theme on load
//   useEffect(() => {
//     const currentTheme = document.documentElement.getAttribute("data-theme")
//     if (currentTheme === "light") {
//       setIsLight(true)
//     }
//   }, [])

//   const toggleTheme = () => {
//     if (isLight) {
//       document.documentElement.removeAttribute("data-theme")
//       localStorage.setItem("theme", "dark")
//       setIsLight(false)
//     } else {
//       document.documentElement.setAttribute("data-theme", "light")
//       localStorage.setItem("theme", "light")
//       setIsLight(true)
//     }
//   }

//   return (
//     <motion.header
//       initial={{ opacity: 0, y: -18 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//       className="relative z-50 transition-all duration-500 bg-transparent"
//     >
//       <div className="max-w-360 mx-auto px-8 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
//         {/* ── Logo ── */}
//         <Link href="/" aria-label="Revaya home" className="shrink-0">
//           <Image
//             src={isLight ? "/rev-logo.png" : "/loogo.png"}
//             alt="Revaya"
//             width={isLight ? 100 : 120}   
//             height={isLight ? 100 : 120}  
//             className={`w-auto object-contain transition-all duration-200 ${isLight ? "h-12 md:h-14" : "h-20"}`} // Smaller height classes in light mode
//             priority
//           />
//         </Link>

//         {/* ── Desktop Nav Links + Theme Toggle + CTA ── */}
//         <div className="hidden md:flex items-center gap-8">
//           <nav className="flex items-center gap-8" aria-label="Main navigation">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-[15px] font-medium transition-colors duration-200 hover:text-[#0190F9]"
//                 style={{ 
//                   fontFamily: "var(--font-inter)",
//                   color: isLight ? "#0f172a" : "#ffffff" 
//                 }}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className="p-2.5 rounded-full transition-colors border border-white/20 flex items-center justify-center cursor-pointer"
//             style={{
//               backgroundColor: isLight ? "#d1d7de6f" : "rgba(255,255,255,0.05)",
//             }}
//             aria-label="Toggle Theme"
//           >
//             {isLight ? "☾" : "☼"}
//           </button>

//           <Link
//             href="#contact"
//             className="btn-liquid inline-flex items-center text-white font-semibold text-[15px] rounded-full px-7 py-2.5 transition-all duration-200 shrink-0"
//             style={{
//               fontFamily: "var(--font-space-grotesk)",
//               background: "linear-gradient(to right, #1d9bff 0%, #0040e0 100%)",
//               border: "1.5px solid rgba(255,255,255,0.65)",
//               boxShadow: "0 0 22px rgba(1,144,249,0.35)",
//             }}
//           >
//             Get Started
//           </Link>
//         </div>

//         {/* ── Mobile Menu Trigger & Toggle ── */}
//         <div className="flex items-center gap-4 md:hidden">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full border border-white/20 flex items-center justify-center"
//             style={{ backgroundColor: isLight ? "#f1f5f9" : "rgba(255,255,255,0.05)" }}
//           >
//             {isLight ? "🌙" : "☀️"}
//           </button>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex md:hidden flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 relative focus:outline-none"
//             aria-label="Toggle navigation menu"
//           >
//             <span className={`block h-0.5 w-6 transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""} ${isLight ? "bg-slate-900" : "bg-white"}`} />
//             <span className={`block h-0.5 w-6 transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"} ${isLight ? "bg-slate-900" : "bg-white"}`} />
//             <span className={`block h-0.5 w-6 transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""} ${isLight ? "bg-slate-900" : "bg-white"}`} />
//           </button>
//         </div>
//       </div>

//       {/* ── Mobile Overlay Menu ── */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className={`absolute top-20 left-0 w-full backdrop-blur-xl border-b flex flex-col items-center py-8 px-6 md:hidden z-40 ${
//               isLight ? "bg-white/95 border-slate-200" : "bg-black/95 border-white/10"
//             }`}
//           >
//             <nav className="flex flex-col items-center gap-6 w-full" aria-label="Mobile navigation">
//               {NAV_LINKS.map((link, idx) => (
//                 <motion.div
//                   key={link.name}
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.05 }}
//                   className="w-full text-center"
//                 >
//                   <Link
//                     href={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className={`block text-[17px] font-medium py-2 transition-colors duration-200 ${
//                       isLight ? "text-slate-900 active:text-[#0190F9]" : "text-white active:text-[#0190F9]"
//                     }`}
//                     style={{ fontFamily: "var(--font-inter)" }}
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#portfolio" },
  { name: "Why us", href: "#insights" },
  { name: "Contact us", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLight, setIsLight] = useState(false)

  // Check saved theme on load
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    if (currentTheme === "light") {
      setIsLight(true)
    }
  }, [])

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.removeAttribute("data-theme")
      localStorage.setItem("theme", "dark")
      setIsLight(false)
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
      setIsLight(true)
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative z-50 transition-all duration-500 bg-transparent"
    >
      <div className="max-w-360 mx-auto px-8 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link href="/" aria-label="Revaya home" className="shrink-0">
          <Image
            src={isLight ? "/rev-logo.png" : "/loogo.png"}
            alt="Revaya"
            width={isLight ? 100 : 120}   
            height={isLight ? 100 : 120}  
            className={`w-auto object-contain transition-all duration-200 ${isLight ? "h-12 md:h-14" : "h-20"}`}
            priority
          />
        </Link>

        {/* ── Desktop Nav Links + Theme Toggle + CTA ── */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium transition-colors duration-200 hover:text-[#0190F9]"
                style={{ 
                  fontFamily: "var(--font-inter)",
                  color: isLight ? "#0f172a" : "#ffffff" 
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Perfect Circular Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full transition-all duration-200 border flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
            style={{
              backgroundColor: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.05)",
              borderColor: isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.2)",
              color: isLight ? "#0f172a" : "#ffffff",
            }}
            aria-label="Toggle Theme"
          >
            <span className="text-base">{isLight ? "☾" : "☼"}</span>
          </button>

          <Link
            href="#contact"
            className="btn-liquid inline-flex items-center text-white font-semibold text-[15px] rounded-full px-7 py-2.5 transition-all duration-200 shrink-0"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              background: "linear-gradient(to right, #1d9bff 0%, #0040e0 100%)",
              border: "1.5px solid rgba(255,255,255,0.65)",
              boxShadow: "0 0 22px rgba(1,144,249,0.35)",
            }}
          >
            Get Started
          </Link>
        </div>

        {/* ── Mobile Menu Trigger & Toggle ── */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border flex items-center justify-center transition-all"
            style={{
              backgroundColor: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.05)",
              borderColor: isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.2)",
              color: isLight ? "#0f172a" : "#ffffff",
            }}
            aria-label="Toggle Theme"
          >
            <span className="text-sm">{isLight ? "🌙" : "☀️"}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 relative focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className={`block h-0.5 w-6 transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""} ${isLight ? "bg-slate-900" : "bg-white"}`} />
            <span className={`block h-0.5 w-6 transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"} ${isLight ? "bg-slate-900" : "bg-white"}`} />
            <span className={`block h-0.5 w-6 transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""} ${isLight ? "bg-slate-900" : "bg-white"}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile Overlay Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute top-20 left-0 w-full backdrop-blur-xl border-b flex flex-col items-center py-8 px-6 md:hidden z-40 ${
              isLight ? "bg-white/95 border-slate-200" : "bg-black/95 border-white/10"
            }`}
          >
            <nav className="flex flex-col items-center gap-6 w-full" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-[17px] font-medium py-2 transition-colors duration-200 ${
                      isLight ? "text-slate-900 active:text-[#0190F9]" : "text-white active:text-[#0190F9]"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}