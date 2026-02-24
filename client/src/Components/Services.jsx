import React from 'react'

const Services = () => {
    const SERVICES = [
  {
    icon: "🔬",
    title: "API & Bulk Pharmaceuticals",
    desc: "High-purity Active Pharmaceutical Ingredients sourced from WHO-GMP certified manufacturers across India, Europe & China.",
    tag: "Core Business",
  },
  {
    icon: "🚚",
    title: "Cold Chain Logistics",
    desc: "End-to-end temperature-controlled supply chain management ensuring product integrity from origin to destination.",
    tag: "Logistics",
  },
  {
    icon: "📋",
    title: "Regulatory Compliance",
    desc: "Full-spectrum regulatory support — FDA, EMA, ANVISA, SFDA — with dossier preparation and submission services.",
    tag: "Regulatory",
  },
  {
    icon: "🌐",
    title: "Market Entry Strategy",
    desc: "Strategic consulting for entering new pharmaceutical markets with deep local knowledge and distribution networks.",
    tag: "Consulting",
  },
  {
    icon: "🏭",
    title: "Contract Manufacturing",
    desc: "Linking global buyers with GMP-certified manufacturers for private label and branded formulations.",
    tag: "Manufacturing",
  },
  {
    icon: "📦",
    title: "Finished Dosage Forms",
    desc: "Tablets, capsules, injectables, syrups & topicals. Branded and generic medications for international markets.",
    tag: "Products",
  },
];
  return (
    <>
      <section id="services" className="py-24 px-6" style={{ background: "#060f1e" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(14,140,132,0.1)", border: "1px solid rgba(14,140,132,0.3)", fontSize: 12, fontWeight: 600, color: "#14b5ab", letterSpacing: "2px", textTransform: "uppercase" }}>
            What We Offer
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 700, color: "#f5f5f0", marginBottom: 16 }}>
            End-to-End Pharma <span className="shimmer-text">Trade Solutions</span>
          </h2>
          <p style={{ fontSize: 16, color: "#8a9ab5", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
            From procurement to delivery — we handle every aspect of international pharmaceutical trade with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className="card-hover rounded-2xl p-7 cursor-default"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-start justify-between mb-5">
                <div className="text-4xl">{s.icon}</div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(14,140,132,0.15)", color: "#14b5ab", letterSpacing: "0.5px" }}>
                  {s.tag}
                </span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#f5f5f0", marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "#8a9ab5", lineHeight: 1.75 }}>{s.desc}</p>
              <div className="mt-5 flex items-center gap-2 transition-colors duration-200 cursor-pointer"
                style={{ fontSize: 13, fontWeight: 600, color: "#0e8c84" }}>
                Learn More <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Services
