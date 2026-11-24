"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    company: "TechLaunch UK",
    sector: "SaaS Infrastructure",
    role: "Engineering Lead",
    quote:
      "PrimeFlow delivered our SaaS dashboard in 3 weeks. Clean TypeScript architecture, responsive layouts, and zero bloat. Their engineering rigor is palpable.",
  },
  {
    id: "t2",
    company: "Gulf Commerce Co.",
    sector: "Logistics & Trade",
    role: "Head of Operations",
    quote:
      "The automation pipeline they engineered processes our inventory workflows without interruption. Fast turnaround, transparent technical communication, and robust code.",
  },
  {
    id: "t3",
    company: "Bloom Studios NYC",
    sector: "Digital Media",
    role: "Managing Director",
    quote:
      "Our web application conversion improved noticeably post-launch. Their team understands both technical execution and user psychology.",
  },
];

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1100) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        padding: "112px 24px",
        background: "var(--bg)",
        position: "relative",
        borderTop: "1px solid var(--hairline)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header with Navigation Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <div>
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
              <span className="mono-tag">DELIVERY TESTIMONIALS</span>
            </div>
            <h2 className="section-heading" style={{ marginBottom: "8px" }}>
              Client outcomes & verified feedback
            </h2>
            <p className="section-subheading">
              Feedback from venture-backed startups and international commercial partners.
            </p>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={handlePrev}
              className="btn-secondary"
              style={{
                width: "40px",
                height: "40px",
                padding: 0,
                borderRadius: "8px",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="btn-secondary"
              style={{
                width: "40px",
                height: "40px",
                padding: 0,
                borderRadius: "8px",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            width: "100%",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(24px)",
            transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: `translateX(-${(currentIndex / testimonials.length) * 100}%)`,
              width: `${(testimonials.length / visibleCards) * 100}%`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                style={{
                  width: `${100 / testimonials.length}%`,
                  padding: "0 10px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--hairline)",
                    borderRadius: "12px",
                    padding: "28px",
                    height: "100%",
                    minHeight: "240px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "border-color 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
                    e.currentTarget.style.background = "var(--surface-raised)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--hairline)";
                    e.currentTarget.style.background = "var(--surface)";
                  }}
                >
                  <p
                    style={{
                      color: "var(--text)",
                      fontSize: "14.5px",
                      lineHeight: 1.65,
                      marginBottom: "24px",
                    }}
                  >
                    "{t.quote}"
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "16px",
                      borderTop: "1px solid var(--hairline)",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--text)" }}>
                        {t.company}
                      </div>
                      <div className="mono-tag" style={{ color: "var(--muted)" }}>
                        {t.sector}
                      </div>
                    </div>
                    <span
                      className="mono-tag"
                      style={{
                        padding: "3px 8px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--hairline)",
                        borderRadius: "4px",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
