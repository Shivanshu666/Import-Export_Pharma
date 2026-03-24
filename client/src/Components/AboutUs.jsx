// ═══════════════════════════════════════════
//  ABOUT US PAGE — PharmaGlobe International
// ═══════════════════════════════════════════
import ceoImage from "../assets/image1.jpeg";
import { Helmet } from "react-helmet";
const TIMELINE = [
  { year: "2006", title: "Company Founded", desc: "PharmaGlobe International was established in New York with a vision to bridge global pharmaceutical supply gaps." },
  { year: "2009", title: "First EU Expansion", desc: "Opened European operations in Amsterdam, enabling GMP-compliant trade across 12 EU member states." },
  { year: "2013", title: "ISO 9001 Certified", desc: "Achieved ISO 9001:2008 certification, reinforcing our commitment to quality management systems." },
  { year: "2016", title: "Middle East Launch", desc: "Established partnerships with distributors in UAE, Saudi Arabia and Egypt — entering the MENA market." },
  { year: "2019", title: "Cold Chain Division", desc: "Launched dedicated temperature-controlled logistics division with GDP-compliant warehousing across 8 hubs." },
  { year: "2022", title: "40+ Countries Milestone", desc: "Crossed the milestone of active pharmaceutical trade relationships in over 40 countries worldwide." },
  { year: "2024", title: "WHO Prequalification", desc: "Portfolio of 120+ products achieved WHO Prequalification status, opening access to global health programs." },
];

const TEAM = [
  { name: "Dr. Rajan Mehta", role: "Chief Executive Officer", exp: "28 Years Experience", bg: "linear-gradient(135deg,#0e8c84,#0a6e67)" },
  { name: "Sarah Whitmore", role: "Chief Regulatory Officer", exp: "22 Years Experience", bg: "linear-gradient(135deg,#c9a84c,#a07c2e)" },
  { name: "Dr. Liu Wei", role: "Head of Quality Assurance", exp: "19 Years Experience", bg: "linear-gradient(135deg,#0e8c84,#14b5ab)" },
  { name: "Ahmed Al-Farsi", role: "VP – Middle East & Africa", exp: "15 Years Experience", bg: "linear-gradient(135deg,#c9a84c,#e8c97a)" },
  { name: "Elena Sorokina", role: "Director – CIS Markets", exp: "17 Years Experience", bg: "linear-gradient(135deg,#0e8c84,#0a6e67)" },
  { name: "Marcus Bauer", role: "Head of Logistics & Supply Chain", exp: "20 Years Experience", bg: "linear-gradient(135deg,#c9a84c,#a07c2e)" },
];

const VALUES = [
  { icon: "🎯", title: "Integrity", desc: "Every transaction upholds the highest ethical standards — transparent pricing, honest documentation, zero compromise on quality." },
  { icon: "🌍", title: "Global Mindset", desc: "We think globally and act locally — understanding unique market regulations, cultural nuances and healthcare needs." },
  { icon: "🔬", title: "Scientific Excellence", desc: "Backed by a team of pharmacists, chemists, and regulatory experts ensuring every product meets international standards." },
  { icon: "🤝", title: "Partnership First", desc: "We build long-term relationships — not one-time transactions. Our clients' growth is our success metric." },
  { icon: "⚡", title: "Agility", desc: "Rapid response to market changes, regulatory updates, and supply chain disruptions keeps our clients ahead of the curve." },
  { icon: "♻️", title: "Sustainability", desc: "Committed to reducing pharmaceutical waste and carbon footprint through optimized supply chain and responsible sourcing." },
];

export default function AboutUs() {
  return (
    <>
    <Helmet>
<title>NIV Pharma | Pharmaceutical Regulatory Consulting</title>

<meta
  name="description"
  content="Learn about NIV Pharma, a pharmaceutical consulting company providing CTD dossiers preparation, regulatory documentation and global pharma services from Bhilai, Chhattisgarh, India."
/>

<meta
  name="keywords"
  content="About NIV Pharma, Pharmaceutical Consulting India, CTD Dossiers Preparation, Pharma Regulatory Services, Bhilai Chhattisgarh Pharma"
/>
</Helmet>
    <div id="about" style={{ background: "#060f1e", minHeight: "100vh", fontFamily: "'Manrope', sans-serif", color: "#f5f5f0" }}>

      {/* ── HERO BANNER ── */}
      <section className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: 420, paddingTop: 140, paddingBottom: 80, background: "linear-gradient(180deg,#0a1628 0%,#060f1e 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(14,140,132,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(14,140,132,0.05) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 600, height: 600, top: -200, right: -100, background: "radial-gradient(circle,rgba(14,140,132,0.1) 0%,transparent 70%)" }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full mb-6" style={{ background: "rgba(14,140,132,0.1)", border: "1px solid rgba(14,140,132,0.3)", fontSize: 11, fontWeight: 700, color: "#14b5ab", letterSpacing: "3px", textTransform: "uppercase" }}>
            Our Story
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(36px,5vw,72px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            10 Years of Connecting{" "}
            <span style={{ background: "linear-gradient(90deg,#c9a84c,#f0d584,#c9a84c)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Global Pharma
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "#8a9ab5", lineHeight: 1.85, maxWidth: 620, margin: "0 auto" }}>
            From a small trading desk in India to a worldwide pharmaceutical network spanning 40+ countries — our journey is built on trust, compliance, and an unrelenting commitment to healthcare access.
          </p>
        </div>
      </section>

      {/* ── MISSION / VISION ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { icon: "🎯", label: "Our Mission", color: "#0e8c84", text: "To make high-quality, affordable pharmaceuticals accessible to every corner of the world by building the most trusted, compliant, and efficient global pharma trade network — one partnership at a time." },
            { icon: "🔭", label: "Our Vision", color: "#c9a84c", text: "To be the world's most trusted name in pharmaceutical import and export — a company where manufacturers and distributors across every continent choose us first for our reliability, regulatory expertise, and genuine care for global health." },
          ].map(m => (
            <div key={m.label} className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(${m.color === "#0e8c84" ? "14,140,132" : "201,168,76"},0.25)` }}>
              <div className="text-5xl mb-5">{m.icon}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: m.color, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 12 }}>{m.label}</div>
              <p style={{ fontSize: 15.5, color: "#b0bfd0", lineHeight: 1.85 }}>{m.text}</p>
            </div>
          ))}
        </div>
      </section>

    {/* ── CEO MESSAGE ── */}
<section className="py-24 px-6" style={{ background: "#060f1e" }}>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* CEO IMAGE */}
    <div className="flex justify-center">
      <img
        src={ceoImage}
        alt="CEO"
        style={{
          width: "100%",
          maxWidth: "380px",
          borderRadius: "16px",
          border: "2px solid rgba(201,168,76,0.4)"
        }}
      />
    </div>

    {/* CEO MESSAGE */}
    <div>
      <div
        className="inline-block px-4 py-1.5 rounded-full mb-4"
        style={{
          background: "rgba(201,168,76,0.1)",
          border: "1px solid rgba(201,168,76,0.3)",
          fontSize: 11,
          fontWeight: 700,
          color: "#c9a84c",
          letterSpacing: "2px",
          textTransform: "uppercase"
        }}
        >
        Message from CEO
      </div>

      <h2
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: "clamp(28px,3.5vw,46px)",
          fontWeight: 700,
          marginBottom: 20
        }}
      >
        Leadership with Vision
      </h2>

      <p style={{ color: "#8a9ab5", lineHeight: 1.8, marginBottom: 18 }}>
        At NIV PHARMA, our mission has always been simple —
        to make life-saving medicines accessible across the globe. Over the
        past 18 years, we have built a trusted network connecting
        pharmaceutical manufacturers, distributors, and healthcare
        institutions worldwide.
      </p>

      <p style={{ color: "#8a9ab5", lineHeight: 1.8, marginBottom: 20 }}>
        Our success comes from a deep commitment to quality, regulatory
        excellence, and strong partnerships. As we continue to grow, our
        focus remains on innovation, reliability, and improving healthcare
        access for millions of people globally.
      </p>

      <div style={{ fontWeight: 700, fontSize: 18 }}>
        Mr. Mahendra Verma
      </div>

      <div style={{ color: "#14b5ab", fontSize: 14 }}>
        Chief Executive Officer
      </div>
    </div>

  </div>
</section>

   

      {/* ── VALUES ── */}
      <section className="py-20 px-6" style={{ background: "#0a1628" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(14,140,132,0.1)", border: "1px solid rgba(14,140,132,0.3)", fontSize: 11, fontWeight: 700, color: "#14b5ab", letterSpacing: "2.5px", textTransform: "uppercase" }}>What Drives Us</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 700 }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", transition: "border-color 0.3s,transform 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(14,140,132,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = ""; }}>
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: "#f5f5f0", marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 13.5, color: "#8a9ab5", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
            </>
  );
}
