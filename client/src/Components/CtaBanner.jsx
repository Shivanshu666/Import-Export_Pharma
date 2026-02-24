import React from 'react'

const CtaBanner = () => {
  return (
    <>
      <section id="contact" className="py-20 px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0e8c84 0%, #0a6e67 50%, #062e2c 100%)" }}>
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="hero-grid w-full h-full" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
          Ready to Expand Your Pharmaceutical Trade?
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: 36 }}>
          Talk to our global trade specialists today. Get a customized quote, regulatory guidance, and market entry strategy — all in one consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:info@pharmaglobe.com" className="rounded-xl px-8 py-4 no-underline font-bold transition-all duration-200"
            style={{ background: "#fff", color: "#0e8c84", fontSize: 15 }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
            📧 Email Us Now
          </a>
          <a href="tel:+18007426837" className="rounded-xl px-8 py-4 no-underline font-bold transition-all duration-200"
            style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: 15 }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = ""; }}>
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default CtaBanner
