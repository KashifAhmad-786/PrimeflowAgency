"use client";

import React from "react";

// Brand definitions with custom SVG markup representing each logo as shown in the screenshot
const brands = [
  {
    id: "react",
    name: "React",
    type: "logo-only",
    color: "#61DAFB",
    bgHover: "rgba(97, 218, 251, 0.06)",
    borderHover: "rgba(97, 218, 251, 0.25)",
    logo: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg style={{ width: "26px", height: "26px", color: "#61DAFB" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse rx="11" ry="4.2" transform="translate(12,12) rotate(0)" stroke="currentColor" strokeWidth="1.5" />
          <ellipse rx="11" ry="4.2" transform="translate(12,12) rotate(60)" stroke="currentColor" strokeWidth="1.5" />
          <ellipse rx="11" ry="4.2" transform="translate(12,12) rotate(120)" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      </div>
    ),
  },
  {
    id: "supabase",
    name: "supabase",
    type: "logo-text",
    color: "#3ECF8E",
    bgHover: "rgba(62, 207, 142, 0.06)",
    borderHover: "rgba(62, 207, 142, 0.25)",
    logo: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Supabase Lightning Bolt */}
        <svg style={{ width: "20px", height: "20px", color: "#3ECF8E" }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.362 10.104h-7.857l1.792-8.625A1.066 1.066 0 0014.26.241L2.637 13.896a1.066 1.066 0 00.812 1.761h7.857l-1.792 8.625a1.066 1.066 0 001.737 1.054L22.873 11.68a1.066 1.066 0 00-.812-1.761z" />
        </svg>
        <span style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.5px", color: "#FFFFFF" }}>supabase</span>
      </div>
    ),
  },
  {
    id: "wordpress",
    name: "WordPress",
    type: "logo-text",
    color: "#21759B",
    bgHover: "rgba(33, 117, 155, 0.06)",
    borderHover: "rgba(33, 117, 155, 0.25)",
    logo: (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* WordPress circular logo */}
        <svg style={{ width: "20px", height: "20px", color: "#FFFFFF" }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm9.36 12.16c0 .85-.15 1.7-.43 2.5l-3.66-10.63c1.78.9 3.1 2.44 3.73 4.31.24.89.36 1.81.36 2.82zm-9.36 9.49c-1.34 0-2.6-.33-3.73-.91l5.48-15.93 1.83 5.33c.84-.04 1.58-.8 1.58-1.64 0-.75-.53-1.37-1.33-1.55l-.25 3.19.04 1.48c.84.04 1.51.75 1.51 1.55 0 .58-.35 1.15-.71 1.6l-1.82 5.23 4.39-12c.53 1.06.84 2.26.84 3.54 0 2.22-.93 4.21-2.39 5.63l-1.82-4.96c.84-.35 1.6-1.06 1.6-2.04 0-1.15-.97-1.9-2.04-1.95a3.3 3.3 0 00-.89.13l.89-1.49-.65.04c-.31.02-.62.05-.93.09l-3.32 9.68-1.92-5.59c-.09-.27-.14-.54-.14-.8 0-.81.65-1.48 1.46-1.48h.17l-.27-3.19-.07-.35-.74.06c-.45.04-.93.09-1.43.09h-.18l-.27 3.19.09.28.61.04c.83.04 1.5.75 1.5 1.55 0 .42-.18.84-.46 1.25l-2.61 7.64-1.12-3.26c-.49-1.42-.79-2.29-.79-3.17 0-1.09.77-1.89 1.83-1.89.17 0 .34.02.5.05l-.27-3.19c-1.35.1-2.47.78-2.97 1.88a9.66 9.66 0 00-1.52 5.17c0 2.68 1.08 5.11 2.82 6.89l-4.14-11.3a9.7 9.7 0 001.52.16c.83.04 1.5.75 1.5 1.55 0 .58-.35 1.15-.71 1.6l-1.82 5.23 4.39-12c.53 1.06.84 2.26.84 3.54 0 2.22-.93 4.21-2.39 5.63l-1.82-4.96c.84-.35 1.6-1.06 1.6-2.04 0-1.15-.97-1.9-2.04-1.95a3.3 3.3 0 00-.89.13l.89-1.49z" />
        </svg>
        <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1px", color: "#FFFFFF" }}>WORDPRESS</span>
      </div>
    ),
  },
  {
    id: "shopify",
    name: "Shopify",
    type: "logo-only",
    color: "#96BF48",
    bgHover: "rgba(150, 191, 72, 0.06)",
    borderHover: "rgba(150, 191, 72, 0.25)",
    logo: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Shopify shopping bag */}
        <svg style={{ width: "26px", height: "26px", color: "#96BF48" }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.53 5.093c-.158-.291-.454-.469-.785-.469h-2.146c.038-.262.062-.533.062-.812 0-2.359-1.865-4.281-4.161-4.281S8.34 1.453 8.34 3.812c0 .279.024.55.062.812H6.255c-.331 0-.627.178-.785.469a.862.862 0 00-.069.79l2.253 16.488a1.082 1.082 0 001.054.897h10.584a1.082 1.082 0 001.054-.897l2.253-16.488a.862 0 00-.069-.79zM10.428 3.812c0-1.229.832-2.219 1.83-2.219s1.83.99 1.83 2.219c0 .279-.024.55-.062.812h-3.536c-.038-.262-.062-.533-.062-.812zm2.064 11.23c-.318-.318-.758-.518-1.242-.518H9.08c-.484 0-.924.2-1.242.518a1.72 1.72 0 00-.518 1.242c0 .484.2.924.518 1.242.318.318.758.518 1.242.518h2.17c.484 0 .924-.2 1.242-.518.318-.318.518-.758.518-1.242 0-.484-.2-.924-.518-1.242z" />
        </svg>
      </div>
    ),
  },
  {
    id: "wix",
    name: "Wix",
    type: "logo-only",
    color: "#FFFFFF",
    bgHover: "rgba(255, 255, 255, 0.06)",
    borderHover: "rgba(255, 255, 255, 0.25)",
    logo: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Wix typography */}
        <span style={{ fontSize: "24px", fontWeight: 800, letterSpacing: "-0.5px", color: "#FFFFFF", fontFamily: "system-ui, sans-serif" }}>
          WiX
        </span>
      </div>
    ),
  },
  {
    id: "openai",
    name: "OpenAI",
    type: "logo-text",
    color: "#74AA9C",
    bgHover: "rgba(116, 170, 156, 0.06)",
    borderHover: "rgba(116, 170, 156, 0.25)",
    logo: (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* OpenAI Spiral */}
        <svg style={{ width: "20px", height: "20px", color: "#FFFFFF" }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.743 12.316a4.803 4.803 0 00-.73-3.66 4.793 4.793 0 00-2.457-2.023 4.747 4.747 0 00-3.327-.123 4.8 4.8 0 00-3.238 2.502L12 9.02l.009-.005a4.78 4.78 0 00-1.895-.833 4.78 4.78 0 00-3.957.904 4.82 4.82 0 00-2.03 3.513 4.78 4.78 0 001.217 3.864 4.804 4.804 0 00.73 3.661c.6.84 1.458 1.464 2.457 1.782a4.747 4.747 0 003.327.123c1.23-.424 2.302-1.282 3.037-2.443l-.009-.005L12 14.98l-.009.005a4.78 4.78 0 001.895.833 4.78 4.78 0 003.957-.904c1.19-.884 1.888-2.28 2.03-3.712a4.78 4.78 0 00-1.217-3.864z" />
        </svg>
        <span style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "0.2px", color: "#FFFFFF" }}>OpenAI</span>
      </div>
    ),
  },
  {
    id: "va",
    name: "VA",
    type: "logo-only",
    color: "#2CE3B8",
    bgHover: "rgba(44, 227, 184, 0.06)",
    borderHover: "rgba(44, 227, 184, 0.25)",
    logo: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
        {/* VA Box logo in screenshot */}
        <div style={{
          background: "rgba(44, 227, 184, 0.08)",
          border: "1.5px solid rgba(44, 227, 184, 0.2)",
          borderRadius: "8px",
          padding: "3px 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <span style={{ fontSize: "13px", fontWeight: 900, color: "#2CE3B8", letterSpacing: "0.5px" }}>vA</span>
        </div>
      </div>
    ),
  },
  {
    id: "zapier",
    name: "Zapier",
    type: "logo-text",
    color: "#FF4A00",
    bgHover: "rgba(255, 74, 0, 0.06)",
    borderHover: "rgba(255, 74, 0, 0.25)",
    logo: (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Zapier Orange asterisk */}
        <svg style={{ width: "18px", height: "18px", color: "#FF4A00" }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L9.13 8.35L1 5.48L7.13 12L1 18.52L9.13 15.65L12 24L14.87 15.65L23 18.52L16.87 12L23 5.48L14.87 8.35L12 0Z" />
        </svg>
        <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>zapier</span>
      </div>
    ),
  },
];

// Stagger arrays for different rows
const row1Brands = [...brands, ...brands, ...brands];
// Shift the brands array for row 2 to stagger the items
const row2BrandsRaw = [...brands.slice(4), ...brands.slice(0, 4)];
const row2Brands = [...row2BrandsRaw, ...row2BrandsRaw, ...row2BrandsRaw];

export default function TechMarquee() {
  // Common render helper for card items - with scaled up proportions (zoomed in)
  const renderCard = (brand: typeof brands[0], idx: number) => (
    <div
      key={`${brand.id}-${idx}`}
      className="marquee-item-outer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
        background: "rgba(255, 255, 255, 0.015)",
        border: "1.5px solid rgba(255, 255, 255, 0.03)",
        boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.05)",
        borderRadius: "24px",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        userSelect: "none",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = brand.borderHover;
        el.style.background = brand.bgHover;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = `0 16px 36px -8px ${brand.color}28, inset 0 1px 1px rgba(255, 255, 255, 0.1)`;
        const inner = el.querySelector(".marquee-item-inner") as HTMLElement;
        if (inner) {
          inner.style.borderColor = "rgba(255, 255, 255, 0.08)";
          inner.style.background = "rgba(0, 0, 0, 0.9)";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(255, 255, 255, 0.03)";
        el.style.background = "rgba(255, 255, 255, 0.015)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "inset 0 1px 1px rgba(255, 255, 255, 0.05)";
        const inner = el.querySelector(".marquee-item-inner") as HTMLElement;
        if (inner) {
          inner.style.borderColor = "rgba(255, 255, 255, 0.02)";
          inner.style.background = "rgba(10, 10, 10, 0.8)";
        }
      }}
    >
      {/* Inner capsule wrapper - Scaled up for "zoom" layout */}
      <div
        className="marquee-item-inner"
        style={{
          background: "rgba(10, 10, 10, 0.8)",
          border: "1px solid rgba(255, 255, 255, 0.02)",
          borderRadius: "16px",
          padding: brand.type === "logo-only" ? "12px 42px" : "12px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "56px",
          minWidth: "160px",
          transition: "all 0.3s ease",
        }}
      >
        {brand.logo}
      </div>
    </div>
  );

  return (
    <div style={{ background: "var(--bg)", padding: "48px 0", overflow: "hidden", position: "relative", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
      {/* Label */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <span className="mono-tag" style={{ color: "var(--muted)" }}>
          TECHNOLOGIES & TOOLCHAINS
        </span>
      </div>

      {/* Row 1: Scrolling Left */}
      <div className="marquee-container" style={{ display: "flex", overflow: "hidden", position: "relative", width: "100%", padding: "8px 0", border: "none", background: "transparent" }}>
        <div className="marquee-track" style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", width: "max-content", flexShrink: 0 }}>
          {row1Brands.map((brand, idx) => renderCard(brand, idx))}
        </div>
      </div>

      {/* Row 2: Scrolling Right */}
      <div className="marquee-container" style={{ display: "flex", overflow: "hidden", position: "relative", width: "100%", padding: "8px 0", marginTop: "12px", border: "none", background: "transparent" }}>
        <div className="marquee-track-reverse" style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", width: "max-content", flexShrink: 0 }}>
          {row2Brands.map((brand, idx) => renderCard(brand, idx))}
        </div>
      </div>
    </div>
  );
}
