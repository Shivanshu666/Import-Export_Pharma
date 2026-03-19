import React from 'react'

const Hero = () => {
    const STATS = [
  { value: "40+", label: "Countries Served", icon: "🌍" },
  { value: "1200+", label: "Products Portfolio", icon: "💊" },
  { value: "10", label: "Years of Excellence", icon: "🏆" },
  { value: "ISO", label: "9001:2015 Certified", icon: "✅" },
];
  return (
    <div>
       <section id="home" className="relative min-h-screen flex items-center justify-center hero-grid overflow-hidden"
      style={{ paddingTop: 160 }}>
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full" style={{ width: 700, height: 700, top: -200, right: -200, background: "radial-gradient(circle, rgba(14,140,132,0.12) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: -100, left: -100, background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
      </div>

      {/* Floating globe ornament */}
      <div className="absolute right-12 top-32 hidden xl:block float-anim" style={{ opacity: 0.15 }}>
        <div className="rotate-slow rounded-full" style={{ width: 380, height: 380, border: "1px dashed rgba(14,140,132,0.6)", position: "relative" }}>
          <div className="absolute rounded-full" style={{ inset: 30, border: "1px solid rgba(201,168,76,0.3)" }} />
          <div className="absolute rounded-full" style={{ inset: 70, background: "radial-gradient(circle, rgba(14,140,132,0.2), transparent)" }} />
          {[0, 60, 120, 180, 240, 300].map(deg => (
            <div key={deg} className="absolute" style={{ top: "50%", left: "50%", width: 1, height: "50%", transformOrigin: "top center", transform: `translateX(-50%) rotate(${deg}deg)`, background: "rgba(14,140,132,0.3)" }} />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="anim-fade-up-1 inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 gold-border"
          style={{ background: "rgba(201,168,76,0.08)", fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#c9a84c" }}>
          <span className="relative inline-block" style={{ width: 8, height: 8 }}>
            <span className="pulse-dot relative inline-block rounded-full" style={{ width: 8, height: 8, background: "#14b5ab" }} />
          </span>
          WHO-GMP Certified · 40+ Countries · Trusted Since 2016
        </div>

        {/* Headline */}
        <h1 className="anim-fade-up-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px, 6vw, 90px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>
          Global Pharmaceutical{" "}
          <span className="shimmer-text">Import & Export</span>
          <br />Solutions
        </h1>

        {/* Subtext */}
        <p className="anim-fade-up-3 max-w-2xl mx-auto" style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "#8a9ab5", lineHeight: 1.8, marginBottom: 40 }}>
          Connecting the world's leading pharmaceutical manufacturers with international markets. 
          Regulatory-compliant, quality-assured, and temperature-controlled supply chains across 6 continents.
        </p>

        {/* CTA Buttons */}
        <div className="anim-fade-up-4 flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#products" className="btn-primary rounded-xl px-8 py-4 no-underline flex items-center gap-2"
            style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "0.3px" }}>
            <span>Explore Products</span>
            <span>→</span>
          </a>
          <a href="#contact" className="btn-outline rounded-xl px-8 py-4 no-underline flex items-center gap-2"
            style={{ fontSize: 15, fontWeight: 700, color: "#c9a84c" }}>
            <span>📋 Request a Quote</span>
          </a>
          <a href="#about" className="no-underline flex items-center gap-2 transition-colors"
            style={{ fontSize: 14, fontWeight: 500, color: "#8a9ab5" }}
            onMouseEnter={e => e.currentTarget.style.color = "#f5f5f0"}
            onMouseLeave={e => e.currentTarget.style.color = "#8a9ab5"}>
            ▶ Watch Overview
          </a>
        </div>

        {/* Stats */}
        <div className="anim-fade-up-5 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {STATS.map((s) => (
            <div key={s.label} className="stat-card rounded-2xl p-5 gold-border card-hover"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>{s.icon}</div>
              <div className="stat-number transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#f5f5f0", lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: "#8a9ab5", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(transparent, #060f1e)" }} />
    </section>
    </div>
  )
}

export default Hero
