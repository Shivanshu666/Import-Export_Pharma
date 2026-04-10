import React from "react";

const Footer = () => {
  const linkStyle = {
    fontSize: 13.5,
    color: "#8a9ab5",
    marginBottom: 10,
    cursor: "pointer",
    transition: "all 0.25s ease",
  };

  const headingStyle = {
    fontSize: 12,
    fontWeight: 700,
    color: "#c9a84c",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: 18,
  };

  return (
    <footer
      style={{
        background: "#040c18",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        padding: "70px 24px 35px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center justify-center rounded-xl text-xl"
                style={{
                  width: 44,
                  height: 44,
                  background:
                    "linear-gradient(135deg,#0e8c84,#14b5ab)",
                  boxShadow: "0 0 20px rgba(20,181,171,0.4)",
                }}
              >
                ⚕
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 19,
                    fontWeight: 700,
                    color: "#f5f5f0",
                  }}
                >
                  NIV Pharma
                </div>

                <div
                  style={{
                    fontSize: 9,
                    color: "#c9a84c",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                  }}
                >
                  International
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: 13.8,
                color: "#8a9ab5",
                lineHeight: 1.9,
                maxWidth: 360,
              }}
            >
              A globally trusted pharmaceutical import & export company
              delivering quality medicines, APIs, and healthcare products
              to regulated markets worldwide since 2016.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {["🌐", "💼", "📧"].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.05)",
                    cursor: "pointer",
                    transition: "all .25s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#c9a84c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.05)")
                  }
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={headingStyle}>Quick Links</div>

            {[
              "About Us",
              "Products",
              "Services",
              "Markets",
              "Certifications",
              "Careers",
            ].map((link) => (
              <div
                key={link}
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f5f5f0";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#8a9ab5";
                  e.currentTarget.style.transform = "translateX(0px)";
                }}
              >
                {link}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={headingStyle}>Contact</div>

            {[
              "nivpharma@gmail.com",
              "+91-9340368921",
              "Chhattisgarh, India",
            ].map((item) => (
              <div key={item} style={{ ...linkStyle, cursor: "default" }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-7 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            fontSize: 12,
            color: "#8a9ab5",
          }}
        >
          <span>© 2024 NIV Pharma. All rights reserved.</span>

          <span style={{ opacity: 0.8 }}>
            WHO-GMP · ISO 9001:2015 · US FDA Registered · EU GMP Compliant
          </span>

          <span>
            Developed by{" "}
            <a
              href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#c9a84c",
      fontWeight: 600,
      textDecoration: "none",
      transition: "all 0.25s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = "red";
      e.currentTarget.style.textDecoration = "underline";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = "#c9a84c";
      e.currentTarget.style.textDecoration = "none";
    }}
  >
    Shivanshu
  </a>
</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;