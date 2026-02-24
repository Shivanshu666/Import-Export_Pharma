import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  {
    label: "Products",
    href: "#products",
    sub: ["API & Bulk Drugs", "Finished Dosage Forms", "Nutraceuticals", "Veterinary Products", "Medical Devices"],
  },
  {
    label: "Services",
    href: "#services",
    sub: ["Regulatory Affairs", "Quality Assurance", "Cold Chain Logistics", "Market Entry Consulting"],
  },
  { label: "Markets", href: "#markets" },
  { label: "Certifications", href: "#certifications" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];
  return (
    <div>
            {/* Top bar */}
      <div style={{ background: "rgba(14,140,132,0.15)", borderBottom: "1px solid rgba(14,140,132,0.2)" }}
        className="hidden md:flex justify-between items-center px-16 py-2">
        <div className="flex items-center gap-6 text-xs" style={{ color: "#8a9ab5" }}>
          <span>📧 info@pharmaglobe.com</span>
          <span>📞 +1 (800) 742-6837</span>
          <span>🕐 Mon–Fri: 08:00 – 18:00 EST</span>
        </div>
        <div className="flex items-center gap-4 text-xs" style={{ color: "#8a9ab5" }}>
          <span className="px-2 py-0.5 rounded" style={{ background: "rgba(14,140,132,0.2)", color: "#14b5ab" }}>
            🟢 New: WHO Prequalified Products Available
          </span>
        </div>
      </div>

{/* Main Navbar */}
      <nav
        className="fixed left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-300"
        style={{
          top: scrolled ? 0 : "40px",
          height: scrolled ? "68px" : "80px",
          background: scrolled ? "rgba(6,15,30,0.97)" : "rgba(6,15,30,0.6)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 no-underline">
          <div className="flex items-center justify-center rounded-xl text-2xl"
            style={{ width: 46, height: 46, background: "linear-gradient(135deg, #0e8c84, #14b5ab)", boxShadow: "0 0 24px rgba(14,140,132,0.5)" }}>
            ⚕
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#f5f5f0", lineHeight: 1.1, letterSpacing: "0.3px" }}>
              PharmaGlobe
            </div>
            <div style={{ fontSize: 9, fontWeight: 600, color: "#c9a84c", letterSpacing: "2.5px", textTransform: "uppercase" }}>
              International
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="relative"
              onMouseEnter={() => item.sub && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}>
              <a href={item.href}
                className="nav-link-line flex items-center gap-1 no-underline transition-colors duration-200"
                style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", color: "#8a9ab5" }}
                onMouseEnter={e => e.currentTarget.style.color = "#f5f5f0"}
                onMouseLeave={e => e.currentTarget.style.color = "#8a9ab5"}>
                {item.label}
                {item.sub && <span style={{ fontSize: 8, opacity: 0.7 }}>▼</span>}
              </a>
              {item.sub && activeDropdown === item.label && (
                <div className="slide-down absolute top-full left-0 pt-3" style={{ minWidth: 220, zIndex: 100 }}>
                  <div className="rounded-xl overflow-hidden" style={{ background: "rgba(6,15,30,0.98)", border: "1px solid rgba(201,168,76,0.2)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                    {item.sub.map((s) => (
                      <a key={s} href="#"
                        className="flex items-center gap-2 px-5 py-3 no-underline transition-all duration-150"
                        style={{ fontSize: 13, color: "#8a9ab5", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                        onMouseEnter={e => { e.currentTarget.style.background = "rgba(14,140,132,0.1)"; e.currentTarget.style.color = "#14b5ab"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#8a9ab5"; }}>
                        <span style={{ color: "#0e8c84", fontSize: 16 }}>›</span>
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="btn-outline rounded-lg px-5 py-2.5 no-underline cursor-pointer"
            style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.5px", color: "#c9a84c" }}>
            Get a Quote
          </a>
          <a href="#contact" className="btn-primary rounded-lg px-5 py-2.5 no-underline cursor-pointer"
            style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.5px", color: "#fff" }}>
            <span>Partner With Us →</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 rounded-lg transition-colors" onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "rgba(14,140,132,0.15)", border: "1px solid rgba(14,140,132,0.3)", color: "#f5f5f0", fontSize: 20 }}>
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>
{/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-28 px-6 pb-8 overflow-y-auto"
          style={{ background: "rgba(6,15,30,0.99)", backdropFilter: "blur(20px)" }}>
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href}
              className="py-4 no-underline border-b transition-colors"
              style={{ fontSize: 16, fontWeight: 500, color: "#8a9ab5", borderColor: "rgba(255,255,255,0.06)" }}
              onClick={() => setMobileOpen(false)}
              onMouseEnter={e => e.currentTarget.style.color = "#f5f5f0"}
              onMouseLeave={e => e.currentTarget.style.color = "#8a9ab5"}>
              {item.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a href="#contact" className="btn-outline text-center rounded-xl py-3 no-underline" style={{ color: "#c9a84c", fontWeight: 600 }}>
              Get a Quote
            </a>
            <a href="#contact" className="btn-primary text-center rounded-xl py-3 no-underline" style={{ color: "#fff", fontWeight: 600 }}>
              <span>Partner With Us →</span>
            </a>
          </div>
        </div>
      )}

    </div>
    
  )
}

export default Navbar
