"use client";

import { MessageSquare, Mail } from "lucide-react";

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Capabilities", href: "#services" },
  { label: "Production Work", href: "#work" },
  { label: "Engineering Philosophy", href: "#about" },
  { label: "Client Outcomes", href: "#testimonials" },
  { label: "Start Discovery", href: "#contact" },
];

const capabilities = [
  "Full-Stack Web Systems",
  "Applied AI & Agent Pipelines",
  "SaaS Dashboard Architecture",
  "Cloud APIs & Integrations",
  "Performance & Vitals Auditing",
];

const socials = [
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-kashif167/",
    label: "LinkedIn",
  },
  {
    id: "github",
    icon: Github,
    href: "https://github.com/KashifAhmad-786",
    label: "GitHub",
  },
  {
    id: "email",
    icon: Mail,
    href: "mailto:17kashifahmad@gmail.com",
    label: "Email",
  },
  {
    id: "whatsapp",
    icon: MessageSquare,
    href: "https://wa.me/923019418167",
    label: "WhatsApp",
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--hairline)",
        padding: "0",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 24px 36px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: "56px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "2px",
                  background: "var(--primary)",
                  display: "inline-block",
                }}
              />
              <span style={{ color: "var(--text)" }}>PrimeFlow</span>
              <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>Studio</span>
            </a>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "14px",
                lineHeight: 1.65,
                maxWidth: "320px",
                marginBottom: "24px",
              }}
            >
              Software engineering and applied AI studio. Designing and deploying reliable,
              type-safe applications for businesses worldwide.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    id={`footer-social-${s.id}`}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid var(--hairline)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color 0.15s ease, border-color 0.15s ease, background 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.background = "var(--surface-raised)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor = "var(--hairline)";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="mono-tag" style={{ color: "var(--muted)", marginBottom: "16px" }}>
              NAVIGATION
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      cursor: "pointer",
                      fontFamily: "Inter, sans-serif",
                      padding: 0,
                      transition: "color 0.15s",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <div className="mono-tag" style={{ color: "var(--muted)", marginBottom: "16px" }}>
              CORE DISCIPLINES
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {capabilities.map((c, i) => (
                <li key={i} style={{ color: "var(--muted)", fontSize: "13px" }}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid var(--hairline)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div className="mono-tag" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} PrimeFlow Studio. All rights reserved.
          </div>
          <div className="mono-tag" style={{ color: "var(--muted)" }}>
            ENGINEERED WITH NEXT.JS & TYPESCRIPT
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
