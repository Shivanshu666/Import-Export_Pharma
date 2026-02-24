import React from 'react'

const Market = () => {
    const MARKETS = [
  { region: "North America", countries: "USA · Canada · Mexico", color: "#0e8c84" },
  { region: "European Union", countries: "Germany · France · UK · Netherlands", color: "#c9a84c" },
  { region: "Middle East & Africa", countries: "UAE · Saudi Arabia · Egypt · Nigeria", color: "#0e8c84" },
  { region: "Asia Pacific", countries: "India · Japan · Singapore · Australia", color: "#c9a84c" },
  { region: "Latin America", countries: "Brazil · Argentina · Colombia · Chile", color: "#0e8c84" },
  { region: "CIS Countries", countries: "Russia · Kazakhstan · Ukraine · Uzbekistan", color: "#c9a84c" },
];

  return (
    <>
    <section id="markets" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #060f1e 0%, #0a1628 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", fontSize: 12, fontWeight: 600, color: "#c9a84c", letterSpacing: "2px", textTransform: "uppercase" }}>
              Global Reach
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, color: "#f5f5f0", marginBottom: 20, lineHeight: 1.15 }}>
              Serving Pharmaceutical Markets Across <span className="shimmer-text">6 Continents</span>
            </h2>
            <p style={{ fontSize: 15, color: "#8a9ab5", lineHeight: 1.85, marginBottom: 32 }}>
              Our established distribution networks, regulatory expertise, and logistics partnerships enable seamless market entry and sustained trade across the world's most dynamic pharmaceutical markets.
            </p>
            <a href="#contact" className="btn-primary rounded-xl px-7 py-3.5 no-underline inline-flex items-center gap-2"
              style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>
              <span>Explore Market Access →</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MARKETS.map((m, i) => (
              <div key={i} className="card-hover rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: m.color, boxShadow: `0 0 8px ${m.color}` }} />
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#f5f5f0" }}>{m.region}</div>
                </div>
                <div style={{ fontSize: 12, color: "#8a9ab5" }}>{m.countries}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Market
