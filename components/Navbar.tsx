"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["hero", "services", "work", "about", "testimonials", "contact"];
      
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "hero";
      const topOffset = 80;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= topOffset && rect.bottom > topOffset) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "background 0.2s ease, border-color 0.2s ease",
        background: scrolled
          ? "rgba(17, 18, 21, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            textDecoration: "none",
            fontSize: "17px",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            display: "flex",
            alignItems: "center",
            gap: "8px",
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

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "28px",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    color: isActive ? "var(--text)" : "var(--text-secondary)",
                    fontSize: "14px",
                    fontWeight: isActive ? 500 : 400,
                    cursor: "pointer",
                    padding: "6px 0",
                    position: "relative",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "1.5px",
                        background: "var(--primary)",
                        borderRadius: "1px",
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => handleNavClick("#contact")}
              id="navbar-cta"
              className="btn-secondary"
              style={{
                height: "36px",
                padding: "0 16px",
                fontSize: "13px",
              }}
            >
              Contact Studio
              <ArrowUpRight size={14} style={{ color: "var(--text-secondary)" }} />
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--text)",
            cursor: "pointer",
            display: "none",
            padding: "4px",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          maxHeight: menuOpen ? "320px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          background: "var(--surface)",
          borderBottom: menuOpen ? "1px solid var(--border)" : "none",
        }}
      >
        <div
          style={{
            padding: menuOpen ? "16px 24px 20px" : "0 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  color: isActive ? "var(--primary)" : "var(--text-secondary)",
                  fontSize: "15px",
                  fontWeight: isActive ? 500 : 400,
                  cursor: "pointer",
                  padding: "10px 0",
                  textAlign: "left",
                  borderBottom: "1px solid var(--hairline)",
                }}
              >
                {link.label}
              </button>
            );
          })}
          <div style={{ paddingTop: "12px" }}>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary"
              style={{ width: "100%", height: "40px", fontSize: "14px" }}
            >
              Contact Studio
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
