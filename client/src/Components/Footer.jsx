import React from 'react'

const Footer = () => {
  return (
    <>
      <footer style={{ background: "#040c18", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "60px 24px 30px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center rounded-xl text-xl" style={{ width: 40, height: 40, background: "linear-gradient(135deg, #0e8c84, #14b5ab)" }}>⚕</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#f5f5f0" }}>PharmaGlobe</div>
                <div style={{ fontSize: 9, color: "#c9a84c", letterSpacing: "2.5px", textTransform: "uppercase" }}>International</div>
              </div>
            </div>
            <p style={{ fontSize: 13.5, color: "#8a9ab5", lineHeight: 1.85, maxWidth: 320 }}>
              A globally trusted pharmaceutical import & export company delivering quality medicines, APIs, and healthcare products to regulated markets worldwide since 2006.
            </p>
          </div>
          {[
            { title: "Quick Links", links: ["About Us", "Products", "Services", "Markets", "Certifications", "Careers"] },
            { title: "Contact", links: ["info@pharmaglobe.com", "+1 (800) 742-6837", "New York, USA", "Mon–Fri 08:00–18:00 EST"] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#c9a84c", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>{col.title}</div>
              {col.links.map(l => (
                <div key={l} style={{ fontSize: 13.5, color: "#8a9ab5", marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#f5f5f0"}
                  onMouseLeave={e => e.currentTarget.style.color = "#8a9ab5"}>{l}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: 12, color: "#8a9ab5" }}>
          <span>© 2024 PharmaGlobe International. All rights reserved.</span>
          <span>WHO-GMP · ISO 9001:2015 · US FDA Registered · EU GMP Compliant</span>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
