import React, { useState } from "react";
import pdf1 from "../assets/pdf/CTD-Dossiers-NivPharma.pdf";
import pdf2 from "../assets/pdf/Semisolids-NivPharma.pdf";
import pdf3 from "../assets/pdf/Tablets-NivPharma.pdf";
import pdf4 from "../assets/pdf/Capsules-NivPharma.pdf";
import pdf5 from "../assets/pdf/Injectables-NivPharma.pdf";





// ── Each product gets its own icon, color, description, badge, and page count
const PRODUCTS = [
  {
    name: "CTD Dossiers Catalogue",
    desc: "Complete Common Technical Document dossiers prepared as per ICH M4 guidelines for regulatory submissions to FDA, EMA, and other major health authorities.",
    pdf: pdf1,
    icon: "📑",
    badge: "Regulatory",
    badgeColor: "#0e8c84",
    // pages: "48 Pages",
    // format: "PDF • ICH CTD Format",
    tags: ["FDA", "EMA", "ICH M4", "eCTD"],
  },
  {
    name: "Semisolids Product Catalogue",
    desc: "Comprehensive listing of Active Pharmaceutical Ingredients available for export — including grades, purity specifications, packaging options, and certifications.",
    pdf: pdf2,
    icon: "🧪",
    badge: "APIs",
    // badgeColor: "#c9a84c",
    // pages: "64 Pages",
    format: "PDF • USP / BP / EP Standards",
    tags: ["WHO-GMP", "USP", "EP Grade", "Bulk"],     
  },
  {
    name: "Tablets Catalogue",
    desc: "Full range of finished pharmaceutical formulations — tablets, capsules, injectables, syrups, and topicals — available in branded and generic formats.",
    pdf: pdf3,
    icon: "💊",
    badge: "Formulations",
    // badgeColor: "#0e8c84",
    // pages: "80 Pages",
    format: "PDF • Multi-therapeutic Areas",
    tags: ["Generics", "Injectables", "OTC", "Rx"],
  },
  {
    name: "Capsules Catalogue",
    desc: "Essential compliance documentation — GMP certificates, Free Sale Certificates, WHO Prequalification letters, and country-specific regulatory approvals.",
    pdf: pdf4,
    icon: "🏛️",
    badge: "Compliance",
    badgeColor: "#c9a84c",

    format: "PDF • Multi-country Approved",
    tags: ["ISO 9001", "WHO-GMP", "CE", "ANVISA"],
  },
    {
    name: "Injectables Catalogue",
    desc: "Essential compliance documentation — GMP certificates, Free Sale Certificates, WHO Prequalification letters, and country-specific regulatory approvals.",
    pdf: pdf5,
    icon: "🏛️",
    badge: "Compliance",
    badgeColor: "#c9a84c",

    format: "PDF • Multi-country Approved",
    tags: ["ISO 9001", "WHO-GMP", "CE", "ANVISA"],
  },
];

const STATS = [
  { val: "4",      label: "Catalogues Available", icon: "📂" },
  { val: "1,200+", label: "Products Listed",       icon: "💊" },
  { val: "40+",    label: "Countries Covered",     icon: "🌍" },
  { val: "Free",   label: "Instant Download",      icon: "⚡" },
];

export default function Products() {
  const [hovered, setHovered] = useState(null);
  const [downloading, setDownloading] = useState(null);

  const handleDownload = (index) => {
    setDownloading(index);
    setTimeout(() => setDownloading(null), 2000);
  };

  return (
    <div
      id="products"
      style={{
        background: "#060f1e",
        minHeight: "100vh",
        fontFamily: "'Manrope', sans-serif",
        color: "#f5f5f0",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Manrope:wght@300;400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes checkPop {
          0%   { transform: scale(0); opacity: 0; }
          70%  { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }

        .prod-hero-fade { animation: fadeUp 0.7s 0.1s ease both; }
        .prod-sub-fade  { animation: fadeUp 0.7s 0.25s ease both; }
        .prod-stats-fade{ animation: fadeUp 0.7s 0.4s ease both; }

        .shimmer-text {
          background: linear-gradient(90deg,#c9a84c 0%,#f0d584 40%,#c9a84c 60%,#e8c97a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .hero-grid-bg {
          background-image:
            linear-gradient(rgba(14,140,132,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,140,132,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .dl-btn-spin {
          animation: spin 0.8s linear infinite;
        }
        .dl-check {
          animation: checkPop 0.4s ease forwards;
        }

        .tag-pill {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 9px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          color: #8a9ab5;
          letter-spacing: 0.4px;
          transition: all 0.2s;
        }
      `}</style>

      {/* ══ HERO ═══════════════════════════════════════════ */}
      <section
        className="hero-grid-bg"
        style={{
          position: "relative",
          paddingTop: 150,
          paddingBottom: 80,
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Glow blobs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", borderRadius: "50%", width: 600, height: 600, top: -200, right: -150, background: "radial-gradient(circle,rgba(14,140,132,0.11) 0%,transparent 70%)" }} />
          <div style={{ position: "absolute", borderRadius: "50%", width: 400, height: 400, bottom: -100, left: -100, background: "radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>

          {/* Badge */}
          <div
            className="prod-hero-fade"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              borderRadius: 999, padding: "7px 18px", marginBottom: 24,
              background: "rgba(14,140,132,0.1)",
              border: "1px solid rgba(14,140,132,0.3)",
              fontSize: 11, fontWeight: 700, color: "#14b5ab",
              letterSpacing: "2px", textTransform: "uppercase",
            }}
          >
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#14b5ab", animation: "pulse-ring 1.8s ease-out infinite" }} />
              <span style={{ position: "relative", display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#14b5ab" }} />
            </span>
            Free Download · Instant Access
          </div>

          {/* Heading */}
          <h1
            className="prod-hero-fade"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 900, lineHeight: 1.1, marginBottom: 18, color: "#f5f5f0",
            }}
          >
            Product{" "}
            <span className="shimmer-text">Catalogues</span>
          </h1>

          <p
            className="prod-sub-fade"
            style={{ fontSize: 16, color: "#8a9ab5", lineHeight: 1.85, maxWidth: 540, margin: "0 auto 40px" }}
          >
            Download our certified pharmaceutical catalogues — APIs, finished formulations,
            regulatory dossiers, and compliance documents for global markets.
          </p>

          {/* Stats row */}
          <div
            className="prod-stats-fade"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
              gap: 14, maxWidth: 600, margin: "0 auto",
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  borderRadius: 14, padding: "14px 12px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: "#14b5ab", lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "#8a9ab5", marginTop: 4, fontWeight: 500, lineHeight: 1.3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(transparent,#060f1e)", pointerEvents: "none" }} />
      </section>

      {/* ══ CATALOGUE CARDS ════════════════════════════════ */}
      <section style={{ padding: "20px 24px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Section label */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#c9a84c", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 10 }}>
              — Available Catalogues —
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 700, color: "#f5f5f0" }}>
              Choose Your Document
            </h2>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            {PRODUCTS.map((item, i) => {
              const isHovered    = hovered === i;
              const isDownloading = downloading === i;

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    borderRadius: 18,
                    background: isHovered
                      ? `linear-gradient(160deg, rgba(${item.badgeColor === "#0e8c84" ? "14,140,132" : "201,168,76"},0.08) 0%, rgba(255,255,255,0.03) 100%)`
                      : "rgba(255,255,255,0.03)",
                    border: isHovered
                      ? `1px solid ${item.badgeColor}55`
                      : "1px solid rgba(255,255,255,0.08)",
                    padding: 26,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    transition: "all 0.3s ease",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    boxShadow: isHovered
                      ? `0 24px 60px rgba(${item.badgeColor === "#0e8c84" ? "14,140,132" : "201,168,76"},0.14)`
                      : "none",
                    cursor: "default",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Subtle corner glow */}
                  {isHovered && (
                    <div style={{
                      position: "absolute", top: -40, right: -40,
                      width: 120, height: 120, borderRadius: "50%",
                      background: `radial-gradient(circle, ${item.badgeColor}22 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }} />
                  )}

                  {/* ── Top row: icon + badge ── */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>

                    {/* Icon box */}
                    <div style={{
                      width: 56, height: 56, borderRadius: 14,
                      background: `${item.badgeColor}18`,
                      border: `1px solid ${item.badgeColor}35`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 26,
                      transition: "transform 0.3s",
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                    }}>
                      {item.icon}
                    </div>

                    {/* Badge */}
                    <span style={{
                      fontSize: 10, fontWeight: 700,
                      color: item.badgeColor,
                      background: `${item.badgeColor}15`,
                      border: `1px solid ${item.badgeColor}35`,
                      borderRadius: 999, padding: "4px 12px",
                      letterSpacing: "0.8px", textTransform: "uppercase",
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  {/* ── Title ── */}
                  <h3 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 19, fontWeight: 700,
                    color: "#f5f5f0", marginBottom: 10, lineHeight: 1.3,
                  }}>
                    {item.name}
                  </h3>

                  {/* ── Description ── */}
                  <p style={{
                    fontSize: 13, color: "#8a9ab5",
                    lineHeight: 1.78, marginBottom: 18, flexGrow: 1,
                  }}>
                    {item.desc}
                  </p>

          

                  {/* ── Tags ── */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
                    {item.tags.map(tag => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* ── Download Button ── */}
                  <a
                    href={item.pdf}
                    download
                    onClick={() => handleDownload(i)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      gap: 8, padding: "12px 20px", borderRadius: 12,
                      background: isHovered
                        ? `linear-gradient(135deg, ${item.badgeColor}, ${item.badgeColor}cc)`
                        : "rgba(255,255,255,0.05)",
                      border: isHovered
                        ? "none"
                        : `1px solid rgba(255,255,255,0.1)`,
                      color: isHovered ? "#fff" : "#8a9ab5",
                      fontWeight: 700, fontSize: 13.5,
                      textDecoration: "none",
                      transition: "all 0.3s",
                      fontFamily: "'Manrope',sans-serif",
                    }}
                  >
                    {isDownloading ? (
                      <>
                        <span style={{ fontSize: 16, display: "inline-block" }} className="dl-btn-spin">⟳</span>
                        Preparing...
                      </>
                    ) : (
                      <>
                        <span style={{ fontSize: 16 }}>⬇</span>
                        Download PDF
                      </>
                    )}
                  </a>

                  {/* ── Preview link ── */}
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block", textAlign: "center",
                      fontSize: 12, fontWeight: 600,
                      color: "#8a9ab5", textDecoration: "none",
                      marginTop: 10,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = item.badgeColor}
                    onMouseLeave={e => e.currentTarget.style.color = "#8a9ab5"}
                  >
                    👁 Preview in Browser
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
