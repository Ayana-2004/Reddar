import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const playstoreUrl = "https://play.google.com/store/apps/details?id=YOUR_APP_ID";
const appstoreUrl  = "https://apps.apple.com/app/YOUR_APP_ID";
const API_BASE     = "https://blood-donation-u02c.onrender.com";

export default function Hero() {
  const radarRef = useRef(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/stats`)
      .then(r => r.json())
      .then(data => setStats(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const dots = [
      { top: "28%", left: "62%", delay: 0.4 },
      { top: "60%", left: "38%", delay: 1.2 },
      { top: "45%", left: "72%", delay: 2.1 },
      { top: "35%", left: "30%", delay: 0.8 },
    ];
    const radar = radarRef.current;
    if (!radar) return;
    dots.forEach(({ top, left, delay }) => {
      const dot = document.createElement("div");
      dot.className = "radar-blip";
      dot.style.top = top;
      dot.style.left = left;
      dot.style.animationDelay = `${delay}s`;
      radar.appendChild(dot);
    });
  }, []);

  return (
    <section className="hero">

      {/* ── LEFT COLUMN ── */}
      <div className="hero-left">

        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span>India's Real-Time Donor Network</span>
        </div>

        <h1 className="hero-title">
          Life is<br />
          Searching.<br />
          <span className="hero-title-accent">Be Found.</span>
        </h1>

        <p className="hero-sub">
          REDDAR connects donors, recipients, hospitals, and communities
          when every second matters. Be visible. Be reachable. Save lives.
        </p>

        <p className="hero-sub" style={{ marginTop: "8px", fontStyle: "italic" }}>
          India's community-powered blood response network.
        </p>
        <p className="hero-sub" style={{ marginTop: "4px" }}>
          Powered by people. Enabled by technology. Driven by humanity.
        </p>

        {/* CTA ROW */}
        <div className="hero-cta-row">
          <a href="#how"      className="hero-btn-outline">How It Works</a>
          <a href="#download" className="hero-btn-outline">Learn More</a>
        </div>

        {/* STORE LABEL */}
        <p className="hero-store-label">Download free on</p>

        {/* STORE BUTTONS */}
        <div className="hero-store-row">
          <a href={playstoreUrl} target="_blank" rel="noopener noreferrer" className="store-btn" aria-label="Get REDDAR on Google Play">
            <svg className="store-icon" viewBox="0 0 24 24">
              <path d="M3.18 23.76c.37.2.8.19 1.19-.03l12.16-7.03-2.63-2.63-10.72 9.69zM.5 1.4C.19 1.77 0 2.3 0 2.98v18.04c0 .68.19 1.21.5 1.58l.08.08 10.1-10.1v-.24L.58 1.32.5 1.4zM20.56 10.14l-2.88-1.66-2.94 2.94 2.94 2.94 2.89-1.67c.82-.48.82-1.25-.01-1.55zM4.37.27L16.53 7.3l-2.63 2.63L3.18.24C3.56.02 3.99.05 4.37.27z"/>
            </svg>
            <div className="store-btn-text">
              <small>Get it on</small>
              <strong>Google Play</strong>
            </div>
          </a>

          <a href={appstoreUrl} target="_blank" rel="noopener noreferrer" className="store-btn" aria-label="Download REDDAR on the App Store">
            <svg className="store-icon" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.82.03 3.02 2.65 4.03 2.68 4.04l-.05.16zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="store-btn-text">
              <small>Download on the</small>
              <strong>App Store</strong>
            </div>
          </a>
        </div>

        {/* LIVE STATS */}
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>{stats ? stats.total_donors : "—"}</strong>
            <span>Donors</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>{stats ? stats.total_fulfilled : "—"}</strong>
            <span>Lives Helped</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>{stats ? stats.total_hospitals : "—"}</strong>
            <span>Hospitals</span>
          </div>
        </div>

      </div>

      {/* ── RIGHT COLUMN — RADAR ── */}
      <div className="hero-right">
        <div className="radar-container" ref={radarRef}>
          <div className="radar-ring r1" />
          <div className="radar-ring r2" />
          <div className="radar-ring r3" />
          <div className="radar-ring r4" />
          <div className="radar-crosshair-h" />
          <div className="radar-crosshair-v" />
          <div className="radar-sweep" />
          <div className="radar-center">
            <svg viewBox="0 0 40 50" className="blood-drop-svg">
              <path d="M20 2 C20 2, 2 22, 2 32 A18 18 0 0 0 38 32 C38 22, 20 2, 20 2Z" fill="#C0292A"/>
              <path d="M14 36 Q20 28 26 36" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="radar-label">
            <div className="radar-label-dot" />
            <span>Donors Online</span>
          </div>
        </div>

        {/* Floating alert card */}
        <div className="radar-alert-card">
          <div className="alert-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#C0292A" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </div>
          <div>
            <p className="alert-title">Urgent Request Nearby</p>
            <p className="alert-sub">B+ · GMC Kozhikode · 0.9 km</p>
          </div>
          <div className="alert-ping" />
        </div>
      </div>

    </section>
  );
}