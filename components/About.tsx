"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ArrowUpRight, ShieldCheck, Gauge, Eye } from "lucide-react";

const commitments = [
  {
    title: "Milestone-Gated Delivery",
    desc: "Payment releases are tied to demonstrable milestones and user acceptance tests.",
  },
  {
    title: "Direct Engineering Access",
    desc: "Work directly with the software engineers building your system. No agency middlemen.",
  },
  {
    title: "Production-Grade Codebase",
    desc: "Fully typed, documented, and delivered with automated test suites and deployment scripts.",
  },
];

const telemetryMetrics = [
  { value: "100%", label: "Milestones Delivered On-Spec", icon: ShieldCheck },
  { value: "<24h", label: "Average Critical Issue Resolution", icon: Gauge },
  { value: "0", label: "Vendor Lock-in (100% Client IP Ownership)", icon: Eye },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "112px 24px",
        background: "var(--bg)",
        position: "relative",
        borderTop: "1px solid var(--hairline)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* LEFT */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <div className="section-label">
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--primary)",
                display: "inline-block",
              }}
            />
            <span className="mono-tag">ENGINEERING PHILOSOPHY</span>
          </div>

          <h2 className="section-heading">
            Built by engineers who value craft over templates
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "16px",
              lineHeight: 1.7,
              marginBottom: "32px",
              maxWidth: "520px",
            }}
          >
            PrimeFlow Studio is a specialized engineering practice. We partner with founders
            and enterprise teams to architect robust web platforms, automated AI pipelines,
            and digital products built to perform reliably at scale.
          </p>

          {/* Commitments list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
            {commitments.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "14px 16px",
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "4px",
                    background: "rgba(44, 227, 184, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Check size={12} strokeWidth={2.5} />
                </div>
                <div>
                  <div style={{ color: "var(--text)", fontWeight: 500, fontSize: "14px", marginBottom: "2px" }}>
                    {c.title}
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.5 }}>
                    {c.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            id="about-cta"
            className="btn-primary"
          >
            Start Technical Discovery
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* RIGHT — Telemetry Panel */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s",
          }}
        >
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "32px",
              position: "relative",
            }}
          >
            <div
              className="mono-tag"
              style={{
                color: "var(--muted)",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>ENGINEERING STANDARDS</span>
              <span style={{ color: "var(--primary)" }}>[VERIFIED]</span>
            </div>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: 500,
                marginBottom: "24px",
                color: "var(--text)",
              }}
            >
              Operational telemetry
            </h3>

            {/* Metrics */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {telemetryMetrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--hairline)",
                      borderRadius: "8px",
                      transition: "border-color 0.2s ease, background 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--surface-raised)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                      e.currentTarget.style.borderColor = "var(--hairline)";
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "6px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--hairline)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text)",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div
                        className="tabular"
                        style={{
                          fontSize: "22px",
                          fontWeight: 500,
                          color: "var(--text)",
                          lineHeight: 1.1,
                          marginBottom: "4px",
                        }}
                      >
                        {m.value}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--muted)" }}>
                        {m.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
