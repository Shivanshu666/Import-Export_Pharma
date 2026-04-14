import React, { useState, useEffect, useRef } from "react";
import pdf1 from "../assets/pdf/CTD-Dossiers-NivPharma.pdf";
import pdf2 from "../assets/pdf/Semisolids-NivPharma.pdf";
import pdf3 from "../assets/pdf/Tablets-NivPharma.pdf";
import pdf4 from "../assets/pdf/Capsules-NivPharma.pdf";
import pdf5 from "../assets/pdf/Injectables-NivPharma.pdf";
import pdf6 from "../assets/pdf/Herbal-Product-Nivpharma.pdf";
import pdf7 from "../assets/pdf/Liquids-Powders-NivPharma.pdf";
import pdf8 from "../assets/pdf/Ophthalmic-nivpharma.pdf";
import pdf9 from "../assets/pdf/pharmaceuticals-product_Nivpharma.pdf";
import pdf10 from "../assets/pdf/Sachets-nivpharma.pdf";
import pdf11 from "../assets/pdf/Suppositories-Pessaries-NivPharma.pdf";
import pdf12 from "../assets/pdf/MonoclonalAntibodyCategory.pdf";
import pdf13 from "../assets/pdf/ONCOLOGY-PRODUCTS.pdf";
import pdf14 from "../assets/pdf/SPRAY.pdf";
import pdf15 from "../assets/pdf/SYRUP.pdf";
import pdf16 from "../assets/pdf/Cream-Ointment-Gel.pdf";
import pdf17 from "../assets/pdf/APPROVED-MA-UK-EU-CANADA.pdf";


const TEAL   = "#0e8c84";
const GOLD   = "#c9a84c";
const TEAL_R = "14,140,132";
const GOLD_R = "201,168,76";

const PRODUCTS = [
  {
    name: "CTD Dossiers Catalogue",
    desc: "Complete Common Technical Document dossiers prepared as per ICH M4 guidelines for regulatory submissions to FDA, EMA, and other major health authorities.",
    pdf: pdf1,
    icon: "📑",
    badge: "Regulatory",
    accent: TEAL,
    rgb: TEAL_R,
    tags: ["FDA", "EMA", "ICH M4", "eCTD"],
    meta: "ICH CTD Format",
  },
  {
    name: "Semisolids Catalogue",
    desc: "Topical and transdermal semisolid formulations — creams, ointments, gels, and pastes — listed with grade specifications, packaging options, and GMP certifications.",
    pdf: pdf2,
    icon: "🧴",
    badge: "Semisolids",
    accent: GOLD,
    rgb: GOLD_R,
    tags: ["WHO-GMP", "USP", "EP Grade", "Topical"],
    meta: "USP / BP / EP Standards",
  },
  {
    name: "Solid Catalogue",
    desc: "Extensive range of oral solid dosage tablets — immediate release, modified release, and enteric coated — across multiple therapeutic categories.",
    pdf: pdf3,
    icon: "💊",
    badge: "Oral Solids",
    accent: TEAL,
    rgb: TEAL_R,
    tags: ["IR", "MR", "EC Coated", "Generics"],
    meta: "Multi-therapeutic Areas",
  },
  {
    name: "Capsules Catalogue",
    desc: "Hard and soft gelatin capsule formulations, including nutraceuticals and high-potency APIs, available in branded and generic formats with full compliance documentation.",
    pdf: pdf4,
    icon: "🔴",
    badge: "Capsules",
    accent: GOLD,
    rgb: GOLD_R,
    tags: ["Hard Gelatin", "Soft Gel", "HPMC", "OTC"],
    meta: "Multi-country Approved",
  },
  {
    name: "Injectables Catalogue",
    desc: "Sterile injectable preparations — IV, IM, and SC — including small-volume parenterals, lyophilized products, and prefilled syringes with aseptic manufacturing compliance.",
    pdf: pdf5,
    icon: "💉",
    badge: "Injectables",
    accent: TEAL,
    rgb: TEAL_R,
    tags: ["IV", "IM/SC", "Lyophilized", "Aseptic"],
    meta: "Sterile Manufacturing",
  },
  {
    name: "Herbal Catalogue",
    desc: "Standardized herbal extracts and botanical formulations with validated phytochemical profiles, conforming to WHO monographs and traditional medicine regulatory frameworks.",
    pdf: pdf6,
    icon: "🌿",
    badge: "Herbal",
    accent: GOLD,
    rgb: GOLD_R,
    tags: ["WHO Mono.", "Standardized", "Botanical", "Ayurvedic"],
    meta: "Phytochemical Validated",
  },
  {
    name: "Liquids & Powders Catalogue",
    desc: "Oral liquids, dry syrups, suspensions, and reconstitutable powders formulated for pediatric and adult indications across anti-infective, nutritional, and therapeutic segments.",
    pdf: pdf7,
    icon: "🧪",
    badge: "Liquids",
    accent: TEAL,
    rgb: TEAL_R,
    tags: ["Oral Liquid", "Dry Syrup", "Pediatric", "Suspension"],
    meta: "Multi-dose Formats",
  },
  {
    name: "Ophthalmic Catalogue",
    desc: "Sterile ophthalmic preparations — eye drops, ointments, and gels — manufactured under Grade A clean-room conditions with preservative-free and multi-dose options.",
    pdf: pdf8,
    icon: "👁️",
    badge: "Ophthalmic",
    accent: GOLD,
    rgb: GOLD_R,
    tags: ["Eye Drops", "Sterile", "Preservative-Free", "Grade A"],
    meta: "Clean-room Grade A",
  },
  {
    name: "Pharmaceuticals Product Catalogue",
    desc: "Comprehensive master catalogue of all finished pharmaceutical formulations, covering the full therapeutic spectrum with regulatory status and market authorization details.",
    pdf: pdf9,
    icon: "📋",
    badge: "Full Range",
    accent: TEAL,
    rgb: TEAL_R,
    tags: ["All Dosage Forms", "Rx & OTC", "Global Markets", "GMP"],
    meta: "Complete Product Portfolio",
  },
  {
    name: "Sachets Catalogue",
    desc: "Unit-dose sachet formulations — oral rehydration salts, effervescent granules, and powder blends — with customizable packaging for institutional and retail markets.",
    pdf: pdf10,
    icon: "📦",
    badge: "Sachets",
    accent: GOLD,
    rgb: GOLD_R,
    tags: ["ORS", "Effervescent", "Granules", "Unit-dose"],
    meta: "Custom Packaging Available",
  },
  {
    name: "Suppositories & Pessaries",
    desc: "Rectal and vaginal dosage forms formulated with suitable excipient bases for systemic and local delivery, available in various strengths with temperature-controlled logistics.",
    pdf: pdf11,
    icon: "🔬",
    badge: "Rectal/Vaginal",
    accent: TEAL,
    rgb: TEAL_R,
    tags: ["Rectal", "Vaginal", "Cold Chain", "Local/Systemic"],
    meta: "Temperature-controlled",
  },
  {
    name: "Monoclonal Antibody Catalogue",
    desc: "Biologic and biosimilar monoclonal antibody preparations manufactured under stringent biopharmaceutical GMP standards for oncology, autoimmune, and rare disease indications.",
    pdf: pdf12,
    icon: "🧬",
    badge: "Biologics",
    accent: GOLD,
    rgb: GOLD_R,
    tags: ["mAb", "Biosimilars", "Oncology", "Biologic GMP"],
    meta: "Biopharmaceutical Grade",
  },
  {
  name: "Oncology Medicines Catalogue",
  desc: "Comprehensive range of oncology formulations including chemotherapy drugs, targeted therapies, and supportive cancer care medicines manufactured under strict pharmaceutical GMP standards for effective cancer treatment.",
  pdf: pdf13,
  icon: "🎗️",
  badge: "Oncology",
  accent: GOLD,
  rgb: GOLD_R,
  tags: ["Cancer Therapy", "Chemotherapy", "Targeted Therapy", "Oncology GMP"],
  meta: "Oncology Grade",
},
{
  name: "Pharmaceutical Spray Catalogue",
  desc: "Advanced pharmaceutical spray formulations including nasal sprays, topical sprays, and therapeutic aerosol preparations developed under strict pharmaceutical GMP standards for respiratory, dermatological, and pain management applications.",
  pdf: pdf14,
  icon: "💨",
  badge: "Sprays",
  accent: GOLD,
  rgb: GOLD_R,
  tags: ["Nasal Spray", "Topical Spray", "Aerosol", "Respiratory Care"],
  meta: "Pharma Grade",
},
{
  name: "Pharmaceutical Syrup Catalogue",
  desc: "Wide range of pharmaceutical syrup and oral liquid formulations including pediatric syrups, cough syrups, and therapeutic liquid medicines manufactured under strict pharmaceutical GMP standards for safe and effective treatment.",
  pdf: pdf15,
  icon: "🥄",
  badge: "Syrups",
  accent: GOLD,
  rgb: GOLD_R,
  tags: ["Oral Liquid", "Cough Syrup", "Pediatric Syrup", "Therapeutic Liquids"],
  meta: "Pharma Grade",
},
{
  name: "Cream, Ointment & Gel Catalogue",
  desc: "Comprehensive range of dermatological formulations including creams, ointments, and therapeutic gels developed under strict pharmaceutical GMP standards for skin care, infection control, inflammation relief, and wound management.",
  pdf: pdf16,
  icon: "🧴",
  badge: "Topicals",
  accent: GOLD,
  rgb: GOLD_R,
  tags: ["Dermatology", "Cream", "Ointment", "Therapeutic Gel"],
  meta: "Dermatology Grade",
},
{
  name: "Regulatory Approved Markets",
  desc: "Our pharmaceutical products are approved and distributed in highly regulated international markets including the United Kingdom, European Union, and Canada, ensuring strict compliance with global regulatory and quality standards.",
  pdf: pdf17,
  icon: "🌍",
  badge: "Approved Markets",
  accent: GOLD,
  rgb: GOLD_R,
  tags: ["UK Approved", "EU Approved", "Canada Approved", "Regulatory Compliance"],
  meta: "MA Approved – UK · EU · Canada",
},

];

const STATS = [
  { val: "12",     label: "Catalogues Available", icon: "📂" },
  { val: "3,200+", label: "Products Listed",       icon: "💊" },
  { val: "40+",    label: "Countries Covered",     icon: "🌍" },
  { val: "Free",   label: "Instant Download",      icon: "⚡" },
];

export default function Products() {
  const [hovered, setHovered]       = useState(null);
  const [downloading, setDownloading] = useState(null);
  const [downloaded, setDownloaded]   = useState({});
  const [visible, setVisible]         = useState({});
  const cardRefs = useRef([]);

  /* Intersection observer for staggered card reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx);
            setVisible((prev) => ({ ...prev, [idx]: true }));
          }
        });
      },
      { threshold: 0.12 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleDownload = (index) => {
    setDownloading(index);
    setTimeout(() => {
      setDownloading(null);
      setDownloaded((prev) => ({ ...prev, [index]: true }));
      setTimeout(() => setDownloaded((prev) => ({ ...prev, [index]: false })), 3000);
    }, 1800);
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Manrope:wght@300;400;500;600;700;800&display=swap');

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-15deg); opacity: 0; }
          60%  { transform: scale(1.25) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .prod-hero-fade { animation: fadeUp 0.8s 0.1s ease both; }
        .prod-sub-fade  { animation: fadeUp 0.8s 0.3s ease both; }
        .prod-stats-fade{ animation: fadeUp 0.8s 0.5s ease both; }

        .shimmer-text {
          background: linear-gradient(90deg, #c9a84c 0%, #f5d980 30%, #e8c060 55%, #c9a84c 75%, #f0d070 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .hero-grid-bg {
          background-image:
            linear-gradient(rgba(14,140,132,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,140,132,0.05) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .card-visible {
          animation: cardReveal 0.55s ease both;
        }
        .card-hidden {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
        }

        .dl-spin { animation: spin 0.9s linear infinite; display: inline-block; }
        .dl-check { animation: checkPop 0.45s cubic-bezier(.34,1.56,.64,1) forwards; }

        .tag-pill {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #7a8aa8;
          letter-spacing: 0.3px;
          transition: all 0.25s;
          white-space: nowrap;
        }

        .card-tag-teal:hover .tag-pill,
        .tag-pill-teal {
          background: rgba(14,140,132,0.12) !important;
          border-color: rgba(14,140,132,0.3) !important;
          color: #3dcfc8 !important;
        }

        .tag-pill-gold {
          background: rgba(201,168,76,0.12) !important;
          border-color: rgba(201,168,76,0.28) !important;
          color: #d4aa60 !important;
        }

        .stat-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(14,140,132,0.2);
        }

        .preview-link {
          display: block;
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          color: #6a7a96;
          text-decoration: none;
          margin-top: 10px;
          padding: 6px;
          border-radius: 8px;
          transition: all 0.22s;
          letter-spacing: 0.2px;
        }
        .preview-link:hover {
          background: rgba(255,255,255,0.04);
        }

        .section-divider {
          width: 40px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, #0e8c84, #c9a84c);
          margin: 12px auto 0;
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #060f1e; }
        ::-webkit-scrollbar-thumb { background: #0e8c84; border-radius: 3px; }
      `}</style>

      {/* ══════════ HERO ══════════════════════════════════════ */}
      <section
        className="hero-grid-bg"
        style={{ position: "relative", paddingTop: 160, paddingBottom: 90, textAlign: "center", overflow: "hidden" }}
      >
        {/* Animated background orbs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{
            position: "absolute", borderRadius: "50%",
            width: 700, height: 700, top: -280, right: -180,
            background: "radial-gradient(circle, rgba(14,140,132,0.10) 0%, transparent 65%)",
            animation: "floatOrb 8s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", borderRadius: "50%",
            width: 500, height: 500, bottom: -150, left: -120,
            background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
            animation: "floatOrb 10s ease-in-out infinite 2s",
          }} />
          <div style={{
            position: "absolute", borderRadius: "50%",
            width: 300, height: 300, top: "40%", left: "50%",
            transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, rgba(14,140,132,0.05) 0%, transparent 70%)",
            animation: "floatOrb 12s ease-in-out infinite 4s",
          }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>

          {/* Live badge */}
          <div
            className="prod-hero-fade"
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              borderRadius: 999, padding: "8px 20px", marginBottom: 28,
              background: "rgba(14,140,132,0.08)",
              border: "1px solid rgba(14,140,132,0.28)",
              fontSize: 11, fontWeight: 700, color: "#18c4bb",
              letterSpacing: "2px", textTransform: "uppercase",
            }}
          >
            <span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#18c4bb", animation: "pulse-ring 2s ease-out infinite" }} />
              <span style={{ position: "relative", width: 7, height: 7, borderRadius: "50%", background: "#18c4bb", display: "inline-block" }} />
            </span>
            Free Download · Instant Access
          </div>

          {/* Main heading */}
          <h1
            className="prod-hero-fade"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(38px, 5.5vw, 72px)",
              fontWeight: 900, lineHeight: 1.08, marginBottom: 10, color: "#f5f5f0",
              letterSpacing: "-0.5px",
            }}
          >
            Product{" "}
            <span className="shimmer-text">Catalogues</span>
          </h1>
          <p className="prod-hero-fade" style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", fontSize: "clamp(15px,2vw,19px)", color: "#4a7a74", marginBottom: 24 }}>
            Certified · GMP Compliant · Globally Trusted
          </p>

          <p
            className="prod-sub-fade"
            style={{ fontSize: 15.5, color: "#7a8aa8", lineHeight: 1.9, maxWidth: 560, margin: "0 auto 48px" }}
          >
            Download our certified pharmaceutical catalogues — APIs, finished formulations,
            regulatory dossiers, and compliance documents engineered for global markets.
          </p>

          {/* Stats */}
          <div
            className="prod-stats-fade"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 14, maxWidth: 620, margin: "0 auto",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="stat-card"
                style={{
                  borderRadius: 16, padding: "18px 12px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  textAlign: "center",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 6 }}>{s.icon}</div>
                <div style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 24, fontWeight: 700,
                  background: `linear-gradient(135deg, ${i % 2 === 0 ? "#18c4bb, #0e8c84" : "#d4aa60, #c9a84c"})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text", lineHeight: 1,
                }}>
                  {s.val}
                </div>
                <div style={{ fontSize: 11, color: "#5a6a82", marginTop: 5, fontWeight: 600, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 90, background: "linear-gradient(transparent,#060f1e)", pointerEvents: "none" }} />
      </section>

      {/* ══════════ CATALOGUE GRID ════════════════════════════ */}
      <section style={{ padding: "10px 24px 120px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, color: GOLD,
              letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12,
            }}>
              — Available Catalogues —
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(26px,3vw,40px)", fontWeight: 700, color: "#f5f5f0",
              marginBottom: 0,
            }}>
              Choose Your Document
            </h2>
            <div className="section-divider" />
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
              gap: 24,
            }}
          >
            {PRODUCTS.map((item, i) => {
              const isHovered     = hovered === i;
              const isDownloading = downloading === i;
              const isDone        = downloaded[i];
              const isTeal        = item.accent === TEAL;
              const tagClass      = isTeal ? "tag-pill-teal" : "tag-pill-gold";

              return (
                <div
                  key={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  data-idx={i}
                  className={visible[i] ? "card-visible" : "card-hidden"}
                  style={{ animationDelay: `${(i % 4) * 0.08}s` }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={{
                    borderRadius: 20,
                    background: isHovered
                      ? `linear-gradient(145deg, rgba(${item.rgb},0.09) 0%, rgba(${item.rgb},0.03) 50%, rgba(255,255,255,0.02) 100%)`
                      : "rgba(255,255,255,0.025)",
                    border: `1px solid ${isHovered ? item.accent + "55" : "rgba(255,255,255,0.07)"}`,
                    padding: "28px 26px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                    boxShadow: isHovered
                      ? `0 28px 64px rgba(${item.rgb},0.16), 0 4px 16px rgba(0,0,0,0.3)`
                      : "0 4px 20px rgba(0,0,0,0.2)",
                    cursor: "default",
                    position: "relative",
                    overflow: "hidden",
                    backdropFilter: "blur(4px)",
                    height: "100%",
                  }}>

                    {/* Corner glow */}
                    <div style={{
                      position: "absolute", top: -60, right: -60,
                      width: 160, height: 160, borderRadius: "50%",
                      background: `radial-gradient(circle, ${item.accent}${isHovered ? "22" : "0a"} 0%, transparent 70%)`,
                      pointerEvents: "none",
                      transition: "all 0.35s ease",
                    }} />
                    {/* Bottom left subtle glow */}
                    <div style={{
                      position: "absolute", bottom: -40, left: -40,
                      width: 120, height: 120, borderRadius: "50%",
                      background: `radial-gradient(circle, ${item.accent}${isHovered ? "15" : "00"} 0%, transparent 70%)`,
                      pointerEvents: "none",
                      transition: "all 0.35s ease",
                    }} />

                    {/* ── Top row: icon + badge ── */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20, position: "relative" }}>
                      {/* Icon */}
                      <div style={{
                        width: 58, height: 58, borderRadius: 15,
                        background: `${item.accent}18`,
                        border: `1px solid ${item.accent}${isHovered ? "55" : "30"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 27,
                        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                        transform: isHovered ? "scale(1.12) rotate(-3deg)" : "scale(1) rotate(0deg)",
                        boxShadow: isHovered ? `0 8px 24px ${item.accent}30` : "none",
                      }}>
                        {item.icon}
                      </div>

                      {/* Badge */}
                      <span style={{
                        fontSize: 10, fontWeight: 800,
                        color: item.accent,
                        background: `${item.accent}${isHovered ? "20" : "12"}`,
                        border: `1px solid ${item.accent}${isHovered ? "50" : "30"}`,
                        borderRadius: 999, padding: "5px 13px",
                        letterSpacing: "1px", textTransform: "uppercase",
                        transition: "all 0.3s",
                      }}>
                        {item.badge}
                      </span>
                    </div>

                    {/* ── Title ── */}
                    <h3 style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: 18.5, fontWeight: 700,
                      color: isHovered ? "#ffffff" : "#e8e8e2",
                      marginBottom: 10, lineHeight: 1.35,
                      transition: "color 0.25s",
                      position: "relative",
                    }}>
                      {item.name}
                    </h3>

                    {/* ── Meta line ── */}
                    <div style={{
                      fontSize: 11, fontWeight: 700,
                      color: item.accent,
                      letterSpacing: "0.8px",
                      textTransform: "uppercase",
                      marginBottom: 10,
                      opacity: isHovered ? 1 : 0.6,
                      transition: "opacity 0.3s",
                    }}>
                      {item.meta}
                    </div>

                    {/* ── Divider ── */}
                    <div style={{
                      height: 1,
                      background: `linear-gradient(90deg, ${item.accent}${isHovered ? "40" : "20"}, transparent)`,
                      marginBottom: 14,
                      transition: "all 0.3s",
                    }} />

                    {/* ── Description ── */}
                    <p style={{
                      fontSize: 13.5, color: isHovered ? "#8a9ab5" : "#6a7a92",
                      lineHeight: 1.8, marginBottom: 20, flexGrow: 1,
                      transition: "color 0.25s",
                      position: "relative",
                    }}>
                      {item.desc}
                    </p>

                    {/* ── Tags ── */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24, position: "relative" }}>
                      {item.tags.map(tag => (
                        <span key={tag} className={`tag-pill ${isHovered ? tagClass : ""}`} style={{ transition: "all 0.25s" }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* ── Download Button ── */}
                    <a
                      href={item.pdf}
                      download
                      onClick={() => handleDownload(i)}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gap: 9, padding: "13px 20px", borderRadius: 12,
                        background: isHovered
                          ? `linear-gradient(135deg, ${item.accent}ee, ${item.accent}bb)`
                          : "rgba(255,255,255,0.04)",
                        border: isHovered ? `1px solid ${item.accent}` : "1px solid rgba(255,255,255,0.08)",
                        color: isHovered ? "#fff" : "#7a8aa8",
                        fontWeight: 700, fontSize: 13.5,
                        textDecoration: "none",
                        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                        fontFamily: "'Manrope',sans-serif",
                        letterSpacing: "0.2px",
                        boxShadow: isHovered ? `0 8px 24px ${item.accent}40` : "none",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Button shimmer on hover */}
                      {isHovered && (
                        <span style={{
                          position: "absolute", inset: 0,
                          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
                          backgroundSize: "200% 100%",
                          animation: "shimmer 1.5s linear infinite",
                          pointerEvents: "none",
                        }} />
                      )}

                      {isDownloading ? (
                        <>
                          <span className="dl-spin" style={{ fontSize: 17, lineHeight: 1 }}>⟳</span>
                          <span>Preparing PDF...</span>
                        </>
                      ) : isDone ? (
                        <>
                          <span className="dl-check" style={{ fontSize: 17, lineHeight: 1 }}>✓</span>
                          <span>Downloaded!</span>
                        </>
                      ) : (
                        <>
                          <span style={{ fontSize: 16, lineHeight: 1 }}>⬇</span>
                          <span>Download PDF</span>
                        </>
                      )}
                    </a>

                    {/* ── Preview link ── */}
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="preview-link"
                      style={{ color: isHovered ? item.accent + "aa" : "#5a6a82" }}
                    >
                      👁 &nbsp;Preview in Browser
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
