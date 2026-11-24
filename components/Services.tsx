"use client";

import { useEffect, useRef } from "react";
import { Code2, Bot, Cpu, Layout, Server, Sparkles } from "lucide-react";

const services = [
  {
    id: "web-apps",
    icon: Code2,
    code: "01",
    title: "Full-Stack Web Applications",
    description:
      "Bespoke, type-safe web platforms built with Next.js and TypeScript. Architected for speed, SEO excellence, and long-term maintainability.",
    deliverables: ["Next.js App Router", "PostgreSQL / Prisma", "Server Actions & Edge"],
  },
  {
    id: "ai-systems",
    icon: Bot,
    code: "02",
    title: "Applied AI & Agent Workflows",
    description:
      "Intelligent autonomous workflows and LLM agent pipelines integrated directly into your software. Automating support, data parsing, and triage.",
    deliverables: ["Autonomous Agents", "Custom Tool Calling", "Vector Embeddings & RAG"],
  },
  {
    id: "saas-platforms",
    icon: Layout,
    code: "03",
    title: "SaaS & Operational Dashboards",
    description:
      "Complex operational tooling with tabular data grids, inventory telemetry, role-based access control, and real-time transaction processing.",
    deliverables: ["Multi-Tenant Architecture", "Real-Time Telemetry", "Role-Based Security"],
  },
  {
    id: "cloud-infra",
    icon: Server,
    code: "04",
    title: "Cloud Infrastructure & APIs",
    description:
      "Resilient backend architectures, microservices, and third-party integrations with Stripe, CRMs, and automated transactional email.",
    deliverables: ["REST & GraphQL Endpoints", "Webhook Reliability", "Docker / Serverless"],
  },
  {
    id: "automation",
    icon: Cpu,
    code: "05",
    title: "Process Automation Systems",
    description:
      "Custom business bots and background task runners that eliminate manual administrative toil and synchronize disparate enterprise databases.",
    deliverables: ["Event-Driven Workers", "CRM Sync Pipelines", "Batch Processing"],
  },
  {
    id: "interface-design",
    icon: Sparkles,
    code: "06",
    title: "Design Systems & UI Engineering",
    description:
      "Tactile, intentional user interfaces crafted with precision. Fluid responsive layouts, accessible component hierarchies, and zero bloat.",
    deliverables: ["Atomic Design Systems", "WCAG 2.1 Compliance", "Micro-Interactions"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll(".service-card");
            cards?.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        padding: "112px 24px",
        background: "var(--bg)",
        borderTop: "1px solid var(--hairline)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "64px" }}>
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
            <span className="mono-tag">CAPABILITIES & DISCIPLINES</span>
          </div>
          <h2 className="section-heading">Engineering services built for scale</h2>
          <p className="section-subheading">
            We deliver production-ready software systems from technical discovery through
            long-term deployment and telemetry.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="service-card"
                style={{
                  opacity: 0,
                  transform: "translateY(24px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease, border-color 0.2s ease, background 0.2s ease",
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(255, 255, 255, 0.16)";
                  el.style.background = "var(--surface-raised)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--hairline)";
                  el.style.background = "var(--surface)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div>
                  {/* Top Row: Icon + Code */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--hairline)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text)",
                      }}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="mono-tag" style={{ color: "var(--muted)" }}>
                      {service.code}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 500,
                      marginBottom: "10px",
                      color: "var(--text)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div
                  style={{
                    paddingTop: "16px",
                    borderTop: "1px solid var(--hairline)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="mono-tag"
                      style={{
                        color: "var(--muted)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "1px",
                          background: "var(--primary)",
                          opacity: 0.8,
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
