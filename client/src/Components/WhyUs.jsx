import React from 'react'

const WhyUs = () => {
     const points = [
    { icon: "🛡️", title: "100% Regulatory Compliance", desc: "Every shipment fully documented — CoA, MSDS, GMP certificate, and country-specific dossiers." },
    { icon: "⚡", title: "Fast Turnaround", desc: "Streamlined procurement and logistics ensuring quick order processing and on-time delivery." },
    { icon: "🤝", title: "Trusted Partnerships", desc: "Partnered with 200+ GMP-certified manufacturers and 50+ accredited testing laboratories." },
    { icon: "🌡️", title: "Temperature Integrity", desc: "Validated cold-chain and ambient storage with real-time monitoring for sensitive biologics." },
  ];
  return (
    <>
      <section className="py-24 px-6" style={{ background: "#0a1628" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(14,140,132,0.1)", border: "1px solid rgba(14,140,132,0.3)", fontSize: 12, fontWeight: 600, color: "#14b5ab", letterSpacing: "2px", textTransform: "uppercase" }}>
            Why Choose Us
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, color: "#f5f5f0" }}>
            The <span className="shimmer-text">PharmaGlobe</span> Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div key={i} className="card-hover flex gap-5 rounded-2xl p-7"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="text-4xl flex-shrink-0">{p.icon}</div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#f5f5f0", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#8a9ab5", lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default WhyUs
