"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, MessageSquare, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

const serviceOptions = [
  "Full-Stack Web Development",
  "Applied AI & Agent Pipeline",
  "SaaS / Operational Tooling",
  "Cloud & API Architecture",
  "UI/UX & Design Systems",
  "Technical Consulting / Audit",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          message: formData.message,
          to_email: "17kashifahmad@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Unable to dispatch message. Please contact 17kashifahmad@gmail.com directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "44px",
    padding: "0 14px",
    background: "var(--surface)",
    border: "1px solid var(--hairline)",
    borderRadius: "8px",
    color: "var(--text)",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    outline: "none",
    transition: "border-color 0.2s ease, background 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    color: "var(--text-secondary)",
    marginBottom: "8px",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "112px 24px",
        background: "var(--bg)",
        position: "relative",
        borderTop: "1px solid var(--hairline)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            marginBottom: "64px",
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
            <span className="mono-tag">INITIATE ENGAGEMENT</span>
          </div>
          <h2 className="section-heading">Start a project inquiry</h2>
          <p className="section-subheading">
            Tell us about your system architecture, timelines, and business requirements.
            We typically respond with technical scope feedback within 24 hours.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "48px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Form */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "36px",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
              position: "relative",
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "48px 16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    background: "rgba(44, 227, 184, 0.1)",
                    border: "1px solid rgba(44, 227, 184, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    color: "var(--primary)",
                  }}
                >
                  <CheckCircle2 size={24} />
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    marginBottom: "8px",
                    color: "var(--text)",
                  }}
                >
                  Inquiry received
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.6 }}>
                  Thank you, {formData.name}. Our technical team has queued your submission
                  and will follow up via email within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "20px",
                  }}
                  className="form-row"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.2)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--hairline)")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.2)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--hairline)")}
                    />
                  </div>
                </div>

                {/* Service */}
                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="contact-service" style={labelStyle}>
                    Discipline / Scope
                  </label>
                  <select
                    id="contact-service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    style={{
                      ...inputStyle,
                      cursor: "pointer",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.2)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--hairline)")}
                  >
                    <option value="" style={{ background: "#18191e" }}>
                      Select project discipline
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} style={{ background: "#18191e" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "28px" }}>
                  <label htmlFor="contact-message" style={labelStyle}>
                    Project specifications & timeline
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your current system, primary objectives, and estimated timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{
                      ...inputStyle,
                      height: "auto",
                      padding: "12px 14px",
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.2)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--hairline)")}
                  />
                </div>

                {/* Error */}
                {error && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 14px",
                      background: "rgba(229, 72, 77, 0.1)",
                      border: "1px solid rgba(229, 72, 77, 0.25)",
                      borderRadius: "6px",
                      color: "#f87171",
                      fontSize: "13px",
                      marginBottom: "20px",
                    }}
                  >
                    <AlertCircle size={16} style={{ flexShrink: 0 }} />
                    {error}
                  </div>
                )}

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: "100%", height: "46px" }}
                >
                  {loading ? "Dispatching..." : "Submit Project Inquiry"}
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
            }}
          >
            {/* Direct Contact Card */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div className="mono-tag" style={{ color: "var(--muted)", marginBottom: "16px" }}>
                DIRECT ENGINEERING DESK
              </div>

              {/* WhatsApp */}
              <a
                id="whatsapp-btn"
                href="https://wa.me/923019418167"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "12px 14px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--surface-raised)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                  e.currentTarget.style.borderColor = "var(--hairline)";
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    background: "rgba(44, 227, 184, 0.08)",
                    border: "1px solid rgba(44, 227, 184, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                  }}
                >
                  <MessageSquare size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--text)" }}>
                    WhatsApp Direct Line
                  </div>
                  <div className="mono-tag" style={{ color: "var(--muted)" }}>
                    +92 301 9418167
                  </div>
                </div>
                <ArrowUpRight size={14} style={{ color: "var(--muted)", marginLeft: "auto" }} />
              </a>

              {/* Email */}
              <a
                href="mailto:17kashifahmad@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "12px 14px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--surface-raised)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                  e.currentTarget.style.borderColor = "var(--hairline)";
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--hairline)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text)",
                  }}
                >
                  <Mail size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--text)" }}>
                    Primary Email
                  </div>
                  <div className="mono-tag" style={{ color: "var(--muted)" }}>
                    17kashifahmad@gmail.com
                  </div>
                </div>
                <ArrowUpRight size={14} style={{ color: "var(--muted)", marginLeft: "auto" }} />
              </a>
            </div>

            {/* Studio Hours Card */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div className="mono-tag" style={{ color: "var(--muted)", marginBottom: "12px" }}>
                AVAILABILITY & RESPONSE
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Discovery Consultations:</span>
                  <span className="mono-tag" style={{ color: "var(--text)" }}>Mon – Sat</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Response SLA:</span>
                  <span className="mono-tag" style={{ color: "var(--primary)" }}>&lt; 24 Hours</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Location:</span>
                  <span className="mono-tag" style={{ color: "var(--text)" }}>Remote / Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
