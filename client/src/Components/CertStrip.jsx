import React from 'react'

const CertStrip = () => {
    const CERTIFICATIONS = ["WHO-GMP", "ISO 9001:2015", "US FDA Registered", "EU GMP", "ANVISA", "SFDA", "CE Marking", "ICH Q10"];
  return (
    
      <div className="py-4 overflow-hidden" style={{ background: "rgba(14,140,132,0.08)", borderTop: "1px solid rgba(14,140,132,0.15)", borderBottom: "1px solid rgba(14,140,132,0.15)" }}>
      <div className="flex items-center gap-10" style={{ animation: "shimmer 0s", whiteSpace: "nowrap" }}>
        {[...CERTIFICATIONS, ...CERTIFICATIONS].map((c, i) => (
          <span key={i} className="flex items-center gap-3" style={{ fontSize: 13, fontWeight: 600, color: "#8a9ab5", letterSpacing: "1px", flexShrink: 0 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#0e8c84", display: "inline-block" }} />
            {c}
          </span>
        ))}
      </div>
    </div>
    
  )
}

export default CertStrip
