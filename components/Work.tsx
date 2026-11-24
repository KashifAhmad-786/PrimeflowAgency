"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink, Globe, Palette, ArrowUpRight, Clock } from "lucide-react";

type FilterType = "All" | "Web Dev" | "AI" | "Design";

interface Project {
  id: string;
  title: string;
  category: FilterType;
  description: string;
  gradient: string;
  accent: string;
  image?: string;
  projectUrl?: string;
  objectFit?: "cover" | "contain" | "fill";
  objectPosition?: string;
}

const projects: Project[] = [
  {
    id: "saas-dashboard",
    title: "MedTrack Pro",
    category: "Web Dev",
    description: "Smart pharmacy management system to track inventory, streamline POS, and analyze sales.",
    gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    accent: "#2CE3B8",
    image: "/medtrack-pro.webp",
    projectUrl: "https://pharmacy-management-system-production-813c.up.railway.app/",
    objectFit: "cover",
  },
  {
    id: "logistics-pro",
    title: "Logistics Pro",
    category: "Web Dev",
    description: "Global freight and supply chain solutions platform offering comprehensive logistics services.",
    gradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    accent: "#E2A73F",
    image: "/logistics-pro.webp",
    projectUrl: "https://logistics-website-eight-snowy.vercel.app/",
    objectFit: "cover",
  },
  {
    id: "ecom-landing",
    title: "E-Commerce Grocery Store",
    category: "Web Dev",
    description: "Online e-commerce grocery store dashboard with inventory tracking, sales analysis, and stock metrics.",
    gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
    accent: "#38ef7d",
    image: "/store.webp",
    projectUrl: "https://frontend-grocery-store-two.vercel.app/",
    objectFit: "cover",
  },
  {
    id: "aura-garments",
    title: "Aura Garments AI Store",
    category: "AI",
    description: "AI-powered e-commerce fashion store featuring a smart shopping assistant and curated collections.",
    gradient: "linear-gradient(135deg, #093028, #237A57)",
    accent: "#2CE3B8",
    image: "/aura-garments.webp",
    projectUrl: "https://ecommerce-garment-shop-production.up.railway.app/",
    objectFit: "cover",
  },
  {
    id: "crm-automation",
    title: "PrimeRent",
    category: "AI",
    description: "AI-driven real estate rental platform with smart search, interactive listings, and tenant management.",
    gradient: "linear-gradient(135deg, #0b0b0f, #12121a)",
    accent: "#ff6b6b",
    image: "/primeRent.webp",
    projectUrl: "https://real-estate-rental-application-t2fp.vercel.app/",
    objectFit: "cover",
  },
  {
    id: "app-ui",
    title: "Car Wash UI/UX Design",
    category: "Design",
    description: "Luxury car wash website design with modern layout, high-end visuals, and intuitive scheduling flows.",
    gradient: "linear-gradient(135deg, #2980b9, #6dd5fa, #ffffff)",
    accent: "#ff3333",
    image: "/car-wash-design.webp",
    objectFit: "cover",
    objectPosition: "top",
  },
];

const filters: FilterType[] = ["All", "Web Dev", "AI", "Design"];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [visible, setVisible] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="work"
        ref={sectionRef}
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
              marginBottom: "48px",
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
              <span className="mono-tag">SELECTED PORTFOLIO</span>
            </div>
            <h2 className="section-heading">Production systems & client deliveries</h2>
            <p className="section-subheading">
              Case studies across enterprise SaaS, AI-driven digital commerce, and modern web applications.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "40px",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s ease 0.1s",
            }}
          >
            {filters.map((f) => (
              <button
                key={f}
                id={`filter-${f.toLowerCase().replace(" ", "-")}`}
                onClick={() => setActiveFilter(f)}
                style={{
                  height: "36px",
                  padding: "0 16px",
                  borderRadius: "6px",
                  border:
                    activeFilter === f
                      ? "1px solid rgba(255,255,255,0.2)"
                      : "1px solid var(--hairline)",
                  background:
                    activeFilter === f ? "var(--surface-raised)" : "var(--surface)",
                  color: activeFilter === f ? "var(--text)" : "var(--text-secondary)",
                  fontSize: "13px",
                  fontWeight: activeFilter === f ? 500 : 400,
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  transition: "all 0.15s ease",
                }}
              >
                {f}
              </button>
            ))}
          </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "24px",
          }}
        >
          {filtered.map((project, i) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              onClick={() => {
                if (project.projectUrl) {
                  window.open(project.projectUrl, "_blank", "noopener,noreferrer");
                } else if (project.image) {
                  setActiveModalImage(project.image);
                }
              }}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(44, 227, 184, 0.1)",
                background: "#111",
                outline: "none",
                cursor: (project.projectUrl || project.image) ? "pointer" : "default",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(30px)",
                transition: visible
                  ? "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease"
                  : `opacity 0.6s ease ${0.1 + i * 0.1}s, transform 0.6s ease ${0.1 + i * 0.1}s`,
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.6)";
                e.currentTarget.style.borderColor = `${project.accent}55`;
                e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
                const overlay = e.currentTarget.querySelector(".project-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "1";
                const img = e.currentTarget.querySelector(".project-image") as HTMLElement;
                if (img) img.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(44, 227, 184, 0.1)";
                e.currentTarget.style.transform = "none";
                const overlay = e.currentTarget.querySelector(".project-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "0";
                const img = e.currentTarget.querySelector(".project-image") as HTMLElement;
                if (img) img.style.transform = "none";
              }}
            >
              {/* Image area */}
              <div
                style={{
                  height: "220px",
                  background: project.gradient,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    width={600}
                    height={220}
                    priority={i < 3}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: project.objectFit || "cover",
                      objectPosition: project.objectPosition || "center",
                      transition: "transform 0.5s ease",
                    }}
                  />
                ) : (
                  /* Decorative elements */
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "20px",
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "32px",
                    }}
                  >
                    {project.category === "Web Dev" ? "🌐" : project.category === "AI" ? "🤖" : "🎨"}
                  </div>
                )}

                {/* Hover overlay */}
                {(project.projectUrl || project.image) && (
                  <div
                    className="project-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        color: project.projectUrl ? "#2CE3B8" : "#fff",
                        fontSize: "16px",
                        fontWeight: 700,
                        border: `1.5px solid ${project.projectUrl ? "#2CE3B8" : "#fff"}`,
                        borderRadius: "100px",
                        padding: "12px 24px",
                        background: project.projectUrl ? "rgba(44,227,184,0.08)" : "rgba(255,255,255,0.08)",
                      }}
                    >
                      {project.projectUrl ? "View Project" : "View Design"}
                      <ExternalLink size={16} />
                    </div>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      color: "#2CE3B8",
                      background: "rgba(44,227,184,0.08)",
                      border: "1px solid rgba(44,227,184,0.15)",
                      borderRadius: "100px",
                      padding: "4px 12px",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "8px",
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: "#777", fontSize: "14px" }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* ───── Real Time Projects ───── */}
        <RealTimeProjects visible={visible} />
      </div>
    </section>

      {/* Modal Popup */}
      {activeModalImage && (
        <div
          id="project-modal"
          onClick={() => setActiveModalImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "fade-in 0.3s ease-out forwards",
            cursor: "zoom-out",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveModalImage(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "none";
            }}
          >
            ✕
          </button>

          {/* Full Image Container */}
          <div
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90vh",
              borderRadius: "12px",
              overflow: "auto",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              animation: "scale-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              cursor: "default",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeModalImage}
              alt="Full Project View"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "85vh",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

/* ================================================================
   Real Time Projects Sub-Section
================================================================ */

interface RealTimeProject {
  id: string;
  type: "Web" | "Design";
  title: string;
  subtitle: string;
  accentColor: string;
  glowColor: string;
  gradient: string;
  icon: React.ReactNode;
  designPreviewImage?: string;
  image?: string;
  badgeLabel?: string;
}

const realTimeProjects: RealTimeProject[] = [
  {
    id: "rtp-alexandria-carwash",
    type: "Design",
    title: "Alexandria Car Wash",
    subtitle: "Luxury Automotive Detail Studio",
    accentColor: "#3B82F6",
    glowColor: "rgba(59, 130, 246, 0.35)",
    gradient: "linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 50%, #0a0f1e 100%)",
    icon: <Palette size={22} />,
    designPreviewImage: "/car-wash-design.webp",
    image: "/car-wash-design.webp",
    badgeLabel: "Landing Page",
  },
  {
    id: "rtp-alexandria-spa",
    type: "Design",
    title: "Alexandria Sanctuary",
    subtitle: "Luxury Wellness & Spa Brand",
    accentColor: "#A78BFA",
    glowColor: "rgba(167, 139, 250, 0.35)",
    gradient: "linear-gradient(135deg, #0f0a1e 0%, #1a0f2e 50%, #0f0a1e 100%)",
    icon: <Palette size={22} />,
    designPreviewImage: "/wellness-spa.webp",
    image: "/wellness-spa.webp",
    badgeLabel: "Landing Page",
  },
  {
    id: "rtp-alexandria-dining",
    type: "Design",
    title: "Alexandria Dining",
    subtitle: "Modern Culinary Experience",
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.35)",
    gradient: "linear-gradient(135deg, #1a0e00 0%, #2d1a00 50%, #1a0e00 100%)",
    icon: <Palette size={22} />,
    designPreviewImage: "/luxury-carwash.webp",
    image: "/luxury-carwash.webp",
    badgeLabel: "Landing Page",
  },
  {
    id: "rtp-alexandria-kitchen",
    type: "Design",
    title: "Alexandria Kitchen",
    subtitle: "Culinary Masterclass Platform",
    accentColor: "#EF4444",
    glowColor: "rgba(239, 68, 68, 0.35)",
    gradient: "linear-gradient(135deg, #1a0000 0%, #2d0a00 50%, #1a0000 100%)",
    icon: <Palette size={22} />,
    designPreviewImage: "/elite-cooking.webp",
    image: "/elite-cooking.webp",
    badgeLabel: "Landing Page",
  },
  {
    id: "rtp-medtrack",
    type: "Web",
    title: "Heritage drives",
    subtitle: "Healthcare Management System",
    accentColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.35)",
    gradient: "linear-gradient(135deg, #00111a 0%, #002233 50%, #00111a 100%)",
    icon: <Globe size={22} />,
    designPreviewImage: "/screen.webp",
    image: "/screen.webp",
    badgeLabel: "Landing Page",
  },
  {
    id: "rtp-grocery",
    type: "Web",
    title: "Digital Market",
    subtitle: "E-Commerce Grocery Platform",
    accentColor: "#22C55E",
    glowColor: "rgba(34, 197, 94, 0.35)",
    gradient: "linear-gradient(135deg, #001a08 0%, #002d12 50%, #001a08 100%)",
    icon: <Globe size={22} />,
    designPreviewImage: "/image.webp",
    image: "/image.webp",
    badgeLabel: "Landing Page",
  },
  {
    id: "rtp-aura",
    type: "Web",
    title: "Global Strategy",
    subtitle: "AI-Powered Fashion Store",
    accentColor: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.35)",
    gradient: "linear-gradient(135deg, #1a0010 0%, #2d001f 50%, #1a0010 100%)",
    icon: <Globe size={22} />,
    designPreviewImage: "/professional-services.webp",
    image: "/professional-services.webp",
    badgeLabel: "Landing Page",
  },
  {
    id: "rtp-crm",
    type: "Web",
    title: "Modern Dining",
    subtitle: "AI Chatbot & CRM System",
    accentColor: "#F97316",
    glowColor: "rgba(249, 115, 22, 0.35)",
    gradient: "linear-gradient(135deg, #1a0800 0%, #2d1200 50%, #1a0800 100%)",
    icon: <Globe size={22} />,
    designPreviewImage: "/gourmet-food.webp",
    image: "/gourmet-food.webp",
    badgeLabel: "Landing Page",
  },
];

function AnimatedCounter({ target, duration = 1500 }: { target: string; duration?: number }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const numericPart = parseFloat(target.replace(/[^0-9.]/g, ""));
          const suffix = target.replace(/[0-9.]/g, "");
          if (isNaN(numericPart)) { setDisplay(target); return; }
          const steps = 40;
          const stepDuration = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const value = Math.round((numericPart * step) / steps);
            setDisplay(`${value}${suffix}`);
            if (step >= steps) clearInterval(timer);
          }, stepDuration);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{display}</span>;
}

function RealTimeProjects({ visible }: { visible: boolean }) {
  const [designModal, setDesignModal] = useState<RealTimeProject | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = realTimeProjects.length;
  const CARD_OFFSET = 218; // px between card centers — tuned for 5-card layout
  const AUTO_INTERVAL = 3500; // ms between auto-advances

  // Returns the project at a circular offset from activeIndex
  const getCard = (offset: number) =>
    realTimeProjects[(activeIndex + offset + total) % total];

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
    setAnimKey((k) => k + 1);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setAnimKey((k) => k + 1);
  };

  // ── Auto-scroll ──
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
      setAnimKey((k) => k + 1);
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, total, activeIndex]); // reset timer on each manual change too

  // Five visible slots: -2, -1, 0, +1, +2
  const slots = [
    { offset: -2, proj: getCard(-2) },
    { offset: -1, proj: getCard(-1) },
    { offset: 0,  proj: getCard(0)  },
    { offset: 1,  proj: getCard(1)  },
    { offset: 2,  proj: getCard(2)  },
  ];

  return (
    <div
      style={{
        marginTop: "100px",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: "all 0.8s ease 0.4s",
      }}
    >
      {/* ── Section Header ── */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(44,227,184,0.07)",
            border: "1px solid rgba(44,227,184,0.18)",
            borderRadius: "100px",
            padding: "6px 18px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#2CE3B8",
              display: "inline-block",
              animation: "pulse-dot 1.6s ease-in-out infinite",
            }}
          />
          <span style={{ color: "#2CE3B8", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px" }}>
            PORTFOLIO
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: "14px",
          }}
        >
          Featured Projects
        </h2>
        <p style={{ color: "#777", fontSize: "16px", maxWidth: "520px", margin: "0 auto" }}>
          A portfolio of innovative digital solutions — driving transformation across industries.
        </p>
      </div>

      {/* ── Carousel Wrapper ── */}
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* ── Desktop Prev Button ── */}
        {!isMobile && (
          <button
            id="rtp-prev"
            onClick={goPrev}
            aria-label="Previous project"
            style={{
              position: "absolute",
              left: "calc(50% - 590px)",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 30,
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: "18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s ease",
              fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            ←
          </button>
        )}

        {/* ── Desktop Next Button ── */}
        {!isMobile && (
          <button
            id="rtp-next"
            onClick={goNext}
            aria-label="Next project"
            style={{
              position: "absolute",
              right: "calc(50% - 590px)",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 30,
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: "18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s ease",
              fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            →
          </button>
        )}

        {/* ── Fan Card Stage ── */}
        <div
          style={{
            position: "relative",
            height: isMobile ? "500px" : "460px",
            perspective: isMobile ? "none" : "1400px",
            perspectiveOrigin: "50% 45%",
            width: "100%",
            overflow: isMobile ? "hidden" : "visible",
            borderRadius: isMobile ? "18px" : "0",
          }}
        >
          {slots.map(({ offset, proj }) => {
            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);
            const canClick = !!proj.designPreviewImage;

            return (
              <div
                key={`${animKey}-${offset}`}
                id={`rtp-slot-${offset}`}
                className="rtp-card"
                onClick={() => {
                  if (!isCenter) {
                    // Jump directly to the clicked card
                    setActiveIndex((prev) => (prev + offset + total) % total);
                    setAnimKey((k) => k + 1);
                  } else if (proj.designPreviewImage) {
                    setDesignModal(proj);
                  }
                }}
                style={{
                  position: "absolute",
                  left: isMobile ? "0" : "50%",
                  top: isMobile ? "0" : "50%",
                  width: isMobile ? "100%" : "280px",
                  height: isMobile ? "100%" : "400px",
                  marginLeft: isMobile ? "0" : "-140px",
                  marginTop: isMobile ? "0" : "-200px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  transform: isMobile
                    ? `translateX(${offset * 105}%)`
                    : `translateX(${offset * CARD_OFFSET}px) rotateY(${offset * -18}deg) scale(${isCenter ? 1 : absOffset === 1 ? 0.83 : 0.68})`,
                  zIndex: 10 - absOffset,
                  filter: `brightness(${isCenter ? 1 : absOffset === 1 && !isMobile ? 0.55 : isMobile ? 1 : 0.30})`,
                  opacity: isMobile && absOffset > 1 ? 0 : 1,
                  transition: "all 0.5s cubic-bezier(0.34, 1.1, 0.64, 1)",
                  cursor: isCenter && !canClick ? "default" : "pointer",
                  boxShadow: isCenter
                    ? `0 32px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.1), 0 0 50px ${proj.glowColor}`
                    : "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                {/* ── Screenshot ── */}
                {proj.image ? (
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                    loading="lazy"
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: proj.gradient,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                      padding: "24px",
                    }}
                  >
                    <div style={{ color: proj.accentColor }}>{proj.icon}</div>
                    <div style={{ color: "#fff", fontSize: "16px", fontWeight: 700, textAlign: "center" }}>
                      {proj.title}
                    </div>
                  </div>
                )}

                {/* ── Bottom Gradient + Title ── */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "55%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "20px 18px",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "1.8px",
                      color: proj.accentColor,
                      marginBottom: "5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {proj.type === "Web" ? "Design Project" : "Design Project"}
                  </div>
                  <div style={{ color: "#fff", fontSize: "15px", fontWeight: 700, lineHeight: 1.25 }}>
                    {proj.title}
                  </div>
                </div>

                {/* ── Center Hover CTA ── */}
                {isCenter && canClick && (
                  <div
                    className="rtp-cta-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: `${proj.accentColor}1a`,
                        border: `1.5px solid ${proj.accentColor}`,
                        borderRadius: "100px",
                        padding: "11px 26px",
                        color: proj.accentColor,
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.3px",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      View Project
                       <ArrowUpRight size={14} />
                    </div>
                  </div>
                )}

                {/* ── Side Card Hint Arrow ── */}
                {!isCenter && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0,0,0,0.15)",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "16px",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {offset < 0 ? "←" : "→"}
                    </div>
                  </div>
                )}

                {/* ── Hover Overlay ── */}
                <div
                  className="rtp-hover-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: 20,
                  }}
                >
                  <div
                    className="rtp-hover-btn"
                    style={{
                      background: "#fff",
                      color: "#000",
                      padding: "12px 28px",
                      borderRadius: "100px",
                      fontSize: "14px",
                      fontWeight: 700,
                      pointerEvents: "none",
                      transform: "translateY(15px)",
                      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    View Project
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile Nav Bottom Bar ── */}
      {isMobile && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px", padding: "0 10px" }}>
          <button
            onClick={goPrev}
            style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", cursor: "pointer" }}
          >
            ←
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {realTimeProjects.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex ? "32px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === activeIndex ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)",
                  overflow: "hidden",
                  transition: "width 0.3s ease",
                  cursor: "pointer"
                }}
                onClick={() => setActiveIndex(i)}
              >
                {i === activeIndex && (
                  <div
                    key={animKey}
                    style={{
                      height: "100%",
                      background: getCard(0).accentColor,
                      borderRadius: "3px",
                      animation: `rtp-progress ${AUTO_INTERVAL}ms linear forwards`,
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                  />
                )}
              </div>
            ))}
            <span style={{ color: "#777", fontSize: "11px", marginLeft: "4px", fontWeight: 600 }}>+{total}</span>
          </div>

          <button
            onClick={goNext}
            style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", cursor: "pointer" }}
          >
            →
          </button>
        </div>
      )}

      {/* ── Desktop Center Card Badge ── */}
      {!isMobile && (
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "100px",
              padding: "8px 22px",
              color: "#888",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              fontFamily: "Inter, sans-serif",
              transition: "all 0.4s ease",
            }}
          >
            {getCard(0).badgeLabel ?? getCard(0).subtitle}
          </span>
        </div>
      )}

      {/* ── Desktop Dot Indicators ── */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            marginTop: "20px",
          }}
        >
          {realTimeProjects.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === activeIndex ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === activeIndex ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.18)",
                overflow: "hidden",
                transition: "width 0.3s ease",
                cursor: "pointer"
              }}
              onClick={() => setActiveIndex(i)}
            >
              {i === activeIndex && (
                <div
                  key={animKey}
                  style={{
                    height: "100%",
                    background: getCard(0).accentColor,
                    borderRadius: "4px",
                    animation: `rtp-progress ${AUTO_INTERVAL}ms linear forwards`,
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── Desktop Counter ── */}
      {!isMobile && (
        <div
          style={{
            textAlign: "center",
            marginTop: "12px",
            color: "#444",
            fontSize: "12px",
            fontFamily: "Inter, sans-serif",
            letterSpacing: "1px",
          }}
        >
          {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      )}



      {/* ── Design Preview Modal ── */}
      {designModal && (
        <LandingPageModal
          project={designModal}
          onClose={() => setDesignModal(null)}
        />
      )}

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
        @keyframes rtp-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes rtp-scale-up {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes rtp-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .rtp-card:hover .rtp-hover-overlay {
          opacity: 1 !important;
          backdrop-filter: blur(3px);
        }
        .rtp-card:hover .rtp-hover-overlay .rtp-hover-btn {
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}

/* ================================================================
   Landing Page Modal — Premium Full-Page Preview Popup
================================================================ */

function LandingPageModal({
  project,
  onClose,
}: {
  project: RealTimeProject;
  onClose: () => void;
}) {
  // Close on ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      id="landing-page-modal"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0, 0, 0, 0.90)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "lpm-fade-in 0.25s ease-out forwards",
        padding: "24px",
        cursor: "zoom-out",
      }}
    >
      {/* ── Floating Close Button ── */}
      <button
        id="landing-modal-close"
        onClick={onClose}
        aria-label="Close preview"
        style={{
          position: "fixed",
          top: "24px",
          right: "24px",
          background: "rgba(255,255,255,0.10)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer",
          fontFamily: "Inter, sans-serif",
          transition: "all 0.2s ease",
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.22)";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.10)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        ✕
      </button>

      {/* ── Full-Page Image ── */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06), 0 0 80px ${project.glowColor}`,
          animation: "lpm-slide-up 0.35s cubic-bezier(0.34, 1.3, 0.64, 1) forwards",
          cursor: "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.designPreviewImage}
          alt={`${project.title} — Full Landing Page Preview`}
          loading="lazy"
          decoding="async"
          style={{
            maxWidth: "min(820px, 88vw)",
            maxHeight: "88vh",
            width: "auto",
            height: "auto",
            display: "block",
            borderRadius: "16px",
          }}
        />
      </div>

      {/* ── Modal Keyframes ── */}
      <style>{`
        @keyframes lpm-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lpm-slide-up {
          from { opacity: 0; transform: translateY(32px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
