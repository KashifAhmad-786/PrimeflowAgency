"use client";

import { ArrowUpRight, Code, Layers, CheckCircle2, Terminal } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "128px 24px 80px",
        background: "var(--bg)",
        overflow: "hidden",
      }}
    >
      {/* Quiet background grid hairlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "56px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Headline, Subtext, Actions */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--hairline)",
                borderRadius: "6px",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "inline-block",
                }}
              />
              <span
                className="mono-tag"
                style={{
                  color: "var(--text-secondary)",
                  fontWeight: 400,
                }}
              >
                Software Engineering & AI Studio
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(38px, 5.2vw, 62px)",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                color: "var(--text)",
                marginBottom: "24px",
              }}
            >
              We engineer high-performance web applications and AI systems.
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
                maxWidth: "540px",
                marginBottom: "36px",
              }}
            >
              From custom cloud applications to automated intelligence workflows — PrimeFlow delivers
              production-grade code engineered for speed, clean architecture, and measurable business impact.
            </p>

            {/* CTA Group */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "48px",
              }}
            >
              <button
                id="hero-start-project"
                onClick={() => scrollTo("#contact")}
                className="btn-primary"
              >
                Start a Project
                <ArrowUpRight size={16} />
              </button>
              <button
                id="hero-view-work"
                onClick={() => scrollTo("#work")}
                className="btn-secondary"
              >
                <Layers size={16} style={{ color: "var(--text-secondary)" }} />
                View Production Work
              </button>
            </div>

            {/* Engineering Principles */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                paddingTop: "24px",
                borderTop: "1px solid var(--hairline)",
              }}
            >
              <div>
                <div className="mono-tag" style={{ color: "var(--primary)", marginBottom: "4px" }}>
                  01 / STACK
                </div>
                <div style={{ fontSize: "13px", color: "var(--text)", fontWeight: 500 }}>
                  Next.js & TypeScript
                </div>
                <div style={{ fontSize: "12px", color: "var(--muted)" }}>Zero-overhead architecture</div>
              </div>

              <div>
                <div className="mono-tag" style={{ color: "var(--primary)", marginBottom: "4px" }}>
                  02 / AGENTS
                </div>
                <div style={{ fontSize: "13px", color: "var(--text)", fontWeight: 500 }}>
                  Applied AI Pipelines
                </div>
                <div style={{ fontSize: "12px", color: "var(--muted)" }}>Autonomous workflows</div>
              </div>

              <div>
                <div className="mono-tag" style={{ color: "var(--primary)", marginBottom: "4px" }}>
                  03 / SPEED
                </div>
                <div style={{ fontSize: "13px", color: "var(--text)", fontWeight: 500 }}>
                  Core Web Vitals
                </div>
                <div style={{ fontSize: "12px", color: "var(--muted)" }}>Sub-second load times</div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Artifact / Visual Preview */}
          <div>
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 24px 48px -12px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Terminal Window Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  background: "rgba(255, 255, 255, 0.02)",
                  borderBottom: "1px solid var(--hairline)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2e313a" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2e313a" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2e313a" }} />
                </div>
                <div
                  className="mono-tag"
                  style={{
                    color: "var(--muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Terminal size={12} />
                  primeflow-runtime / production
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background: "rgba(44, 227, 184, 0.08)",
                    border: "1px solid rgba(44, 227, 184, 0.2)",
                  }}
                >
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--primary)" }} />
                  <span className="mono-tag" style={{ color: "var(--primary)", fontSize: "10px", fontWeight: 500 }}>
                    SYS.ACTIVE
                  </span>
                </div>
              </div>

              {/* Telemetry Output Body */}
              <div style={{ padding: "20px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <div className="mono-tag" style={{ color: "var(--muted)", marginBottom: "8px" }}>
                    ACTIVE DEPLOYMENTS
                  </div>

                  {/* Project 1 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 12px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--hairline)",
                      borderRadius: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Code size={16} style={{ color: "var(--primary)" }} />
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--text)" }}>
                          MedTrack Pro
                        </div>
                        <div style={{ fontSize: "11px", color: "var(--muted)" }}>
                          Pharmacy Inventory POS
                        </div>
                      </div>
                    </div>
                    <div className="tabular mono-tag" style={{ color: "#4cc38a" }}>
                      200 OK • 28ms
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 12px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--hairline)",
                      borderRadius: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Code size={16} style={{ color: "var(--primary)" }} />
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--text)" }}>
                          Aura Garments AI
                        </div>
                        <div style={{ fontSize: "11px", color: "var(--muted)" }}>
                          Smart Fashion Recommendation
                        </div>
                      </div>
                    </div>
                    <div className="tabular mono-tag" style={{ color: "#4cc38a" }}>
                      200 OK • 42ms
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 12px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--hairline)",
                      borderRadius: "8px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Code size={16} style={{ color: "var(--primary)" }} />
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--text)" }}>
                          PrimeRent Engine
                        </div>
                        <div style={{ fontSize: "11px", color: "var(--muted)" }}>
                          Automated Tenant Search
                        </div>
                      </div>
                    </div>
                    <div className="tabular mono-tag" style={{ color: "#4cc38a" }}>
                      200 OK • 31ms
                    </div>
                  </div>
                </div>

                {/* Metrics Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "8px",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--hairline)",
                  }}
                >
                  <div
                    style={{
                      padding: "10px",
                      background: "var(--surface-raised)",
                      borderRadius: "6px",
                      textAlign: "center",
                    }}
                  >
                    <div className="tabular" style={{ fontSize: "18px", fontWeight: 500, color: "var(--text)" }}>
                      99/100
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--muted)" }}>Performance</div>
                  </div>

                  <div
                    style={{
                      padding: "10px",
                      background: "var(--surface-raised)",
                      borderRadius: "6px",
                      textAlign: "center",
                    }}
                  >
                    <div className="tabular" style={{ fontSize: "18px", fontWeight: 500, color: "var(--text)" }}>
                      &lt;0.8s
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--muted)" }}>Avg LCP</div>
                  </div>

                  <div
                    style={{
                      padding: "10px",
                      background: "var(--surface-raised)",
                      borderRadius: "6px",
                      textAlign: "center",
                    }}
                  >
                    <div className="tabular" style={{ fontSize: "18px", fontWeight: 500, color: "var(--text)" }}>
                      100%
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--muted)" }}>TypeScript</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
