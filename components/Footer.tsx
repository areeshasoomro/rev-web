




// "use client"

// import React from "react"
// import Image from "next/image"
// import Link from "next/link"

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   const navLinks = [
//     { label: "About", href: "#hero" },
//     { label: "Services", href: "#services" },
//     { label: "Case Studies", href: "#portfolio" },
//     { label: "Why Us", href: "#insights" },
//     { label: "Contact Us", href: "#contact" },
//   ]

//   // Updated paths for icons including correct Twitter (X) and functional links
//   const socialIcons = [
//     { name: "Facebook", href: "https://facebook.com", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
//     { name: "LinkedIn", href: "https://linkedin.com", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
//     { name: "Email", href: "mailto:hello@revaya.com", d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
//     { name: "Twitter", href: "https://twitter.com", d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }
//   ]

//   return (
//     <footer style={{ backgroundColor: "#000000", padding: "4rem 2rem", textAlign: "center", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
//       <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        
//         {/* Logo & Description - Subtext width restricted */}
//         <div style={{ marginBottom: "2rem" }}>
//           <Image src="/loogo.png" alt="Revaya Logo" width={110} height={35} style={{ margin: "0 auto 1rem auto", objectFit: "contain" }} />
//           <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "13px", lineHeight: "1.5", maxWidth: "400px", margin: "0 auto" }}>
//             Architecting production-ready custom business platforms, automations, and enterprise frameworks.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <nav style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
//           {navLinks.map((link, i) => (
//             <Link key={i} href={link.href} style={{ color: "#ffffff", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
//               <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#0190F9" }} />
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Social Icons - Now all clickable */}
//         <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", marginBottom: "2rem" }}>
//           {socialIcons.map((item, i) => (
//             <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" 
//                style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#111111", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", transition: "0.3s" }}
//                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#0190F9" }}
//                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#111111" }}>
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.d} /></svg>
//             </a>
//           ))}
//         </div>

//         {/* Copyright */}
//         <div style={{ color: "rgba(255, 255, 255, 0.3)", fontSize: "12px" }}>
//           &copy; {currentYear} Revaya. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   )
// }


"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: "About", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Why Us", href: "#insights" },
    { label: "Contact Us", href: "#contact" },
  ]

  const socialIcons = [
    { name: "Facebook", href: "https://facebook.com", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
    { name: "LinkedIn", href: "https://linkedin.com", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
    { name: "Email", href: "mailto:hello@revaya.com", d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
    { name: "Twitter", href: "https://twitter.com", d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }
  ]

  return (
    <>
      <style jsx global>{`
        .site-footer {
          background-color: #000000;
          padding: 4rem 2rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        .footer-desc {
          color: rgba(255, 255, 255, 0.5);
          font-size: 13px;
          line-height: 1.5;
          max-width: 400px;
          margin: 0 auto;
          transition: color 0.3s ease;
        }
        .footer-nav-link {
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.3s ease;
        }
        .footer-social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .footer-copyright {
          color: rgba(255, 255, 255, 0.3);
          font-size: 12px;
          transition: color 0.3s ease;
        }
        .logo-dark {
          display: block;
        }
        .logo-light {
          display: none;
        }

        /* --- LIGHT MODE OVERRIDES --- */
        [data-theme="light"] .site-footer {
          background-color: #ffffff;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }
        [data-theme="light"] .footer-desc {
          color: #000000;
        }
        [data-theme="light"] .footer-nav-link {
          color: #000000;
        }
        [data-theme="light"] .footer-social-btn {
          background-color: #f1f5f9;
          color: #000000;
        }
        [data-theme="light"] .footer-social-btn:hover {
          background-color: #0190F9 !important;
          color: #ffffff !important;
        }
        [data-theme="light"] .footer-copyright {
          color: rgba(0, 0, 0, 0.6);
        }
        [data-theme="light"] .logo-dark {
          display: none;
        }
        [data-theme="light"] .logo-light {
          display: block;
        }
      `}</style>

      <footer className="site-footer">
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          
          {/* Logo & Description */}
          <div style={{ marginBottom: "2rem" }}>
            <Link href="/" style={{ display: "inline-block", margin: "0 auto 1rem auto" }}>
              <div className="logo-dark">
                <Image src="/loogo.png" alt="Revaya Logo" width={110} height={35} style={{ objectFit: "contain" }} priority />
              </div>
              <div className="logo-light">
                <Image src="/rev-logo.png" alt="Revaya Logo" width={110} height={35} style={{ objectFit: "contain" }} priority />
              </div>
            </Link>
            <p className="footer-desc">
              Architecting production-ready custom business platforms, automations, and enterprise frameworks.
            </p>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            {navLinks.map((link, i) => (
              <Link key={i} href={link.href} className="footer-nav-link">
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#0190F9" }} />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", marginBottom: "2rem" }}>
            {socialIcons.map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#0190F9"; e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={(e) => { 
                  // Reset background based on theme state or let CSS handle it
                  e.currentTarget.style.backgroundColor = ""; 
                  e.currentTarget.style.color = ""; 
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.d} /></svg>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            &copy; {currentYear} Revaya. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}