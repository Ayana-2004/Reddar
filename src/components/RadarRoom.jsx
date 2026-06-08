import { useState } from "react";
import "./RadarRoom.css";

const categories = [
  {
    id: "all",
    label: "All Signals",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "donation",
    label: "Blood Donation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C12 2 5 9.5 5 14a7 7 0 0014 0C19 9.5 12 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "hematology",
    label: "Hematology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    id: "bloodgroups",
    label: "Blood Groups",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.87" />
      </svg>
    ),
  },
  {
    id: "research",
    label: "Medical Research",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3v11l-3 3h12l-3-3V3M6 3h12" /><circle cx="12" cy="18" r="1" />
      </svg>
    ),
  },
  {
    id: "myths",
    label: "Myths & Facts",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
  {
    id: "news",
    label: "Latest News",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" />
      </svg>
    ),
  },
];

const articles = [
  {
    id: 1,
    category: "donation",
    tag: "Blood Donation",
    title: "Who Can Donate Blood? The Complete Eligibility Guide",
    excerpt: "Most healthy adults between 18–65 weighing over 50kg can donate. Learn the full criteria including medical conditions, medications, and travel restrictions.",
    readTime: "4 min read",
    isNew: true,
    locked: false,
  },
  {
    id: 2,
    category: "myths",
    tag: "Myths & Facts",
    title: "10 Common Blood Donation Myths — Debunked",
    excerpt: "\"Donating blood makes you weak.\" \"You can get infected.\" We bust the most persistent misconceptions with science-backed facts.",
    readTime: "6 min read",
    isNew: true,
    locked: false,
  },
  {
    id: 3,
    category: "bloodgroups",
    tag: "Blood Groups",
    title: "ABO & Rh Blood Group Systems Explained",
    excerpt: "Why does blood type matter? A deep dive into the ABO and Rh systems, compatibility charts, and why O-negative is called the universal donor.",
    readTime: "5 min read",
    isNew: false,
    locked: false,
  },
  {
    id: 4,
    category: "hematology",
    tag: "Hematology",
    title: "What Happens to Your Blood After Donation?",
    excerpt: "From the moment blood leaves your arm to when it reaches a patient — the full journey through testing, processing, and storage.",
    readTime: "7 min read",
    isNew: false,
    locked: true,
  },
  {
    id: 5,
    category: "research",
    tag: "Medical Research",
    title: "Artificial Blood: Where Does the Science Stand in 2025?",
    excerpt: "Researchers are making breakthroughs in synthetic blood substitutes. We explore the latest clinical trials and what it means for global blood supply.",
    readTime: "8 min read",
    isNew: true,
    locked: true,
  },
  {
    id: 6,
    category: "donation",
    tag: "Blood Donation",
    title: "The 48-Hour Recovery: What to Eat and Do After Donating",
    excerpt: "Iron-rich foods, hydration tips, and activities to avoid — everything you need to bounce back quickly and feel your best after donation.",
    readTime: "3 min read",
    isNew: false,
    locked: false,
  },
  {
    id: 7,
    category: "news",
    tag: "Latest News",
    title: "India's Blood Bank Crisis: A State-by-State Analysis",
    excerpt: "A new report reveals severe shortages in rural blood banks. REDDAR's role in bridging the gap through real-time donor networks.",
    readTime: "6 min read",
    isNew: true,
    locked: true,
  },
  {
    id: 8,
    category: "hematology",
    tag: "Hematology",
    title: "Platelet Donation vs. Whole Blood: Key Differences",
    excerpt: "Platelets save cancer patients and trauma victims. Learn how apheresis donation works and why it's critically underutilized in India.",
    readTime: "5 min read",
    isNew: false,
    locked: true,
  },
  {
    id: 9,
    category: "bloodgroups",
    tag: "Blood Groups",
    title: "The Rarest Blood Types in the World",
    excerpt: "Beyond ABO — the Bombay phenotype, Golden Blood (Rh-null), and other ultra-rare types that have only been found in a handful of humans.",
    readTime: "4 min read",
    isNew: false,
    locked: true,
  },
];

const stats = [
  { value: "38%", label: "of people are eligible to donate but only 6.8% do" },
  { value: "1 in 7", label: "hospital patients needs blood" },
  { value: "4.7M", label: "units needed annually in India" },
  { value: "25 min", label: "average time to find a donor with REDDAR" },
];

export default function RadarRoom() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="rr">
      {/* ── HERO ── */}
      <section className="rr-hero">
        <div className="rr-hero-bg">
          <div className="rr-ring rr-ring--1" />
          <div className="rr-ring rr-ring--2" />
          <div className="rr-ring rr-ring--3" />
          <div className="rr-sweep" />
        </div>
        <div className="rr-hero-inner">
          <span className="rr-eyebrow">RADAR ROOM</span>
          <h1 className="rr-hero-title">
            Learn.<br />
            <span className="rr-accent">Discover.</span><br />
            Stay Informed.
          </h1>
          <p className="rr-hero-sub">
            Educational content, research, and facts on blood donation, hematology, and health awareness — updated regularly for the REDDAR community.
          </p>
          <a href="#articles" className="rr-hero-cta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Explore Signals
          </a>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="rr-stats">
        {stats.map((s, i) => (
          <div className="rr-stat" key={i}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── ARTICLES ── */}
      <section className="rr-articles" id="articles">
        <div className="rr-articles-inner">

          {/* Category filter */}
          <div className="rr-filters">
            {categories.map((c) => (
              <button
                key={c.id}
                className={`rr-filter-btn ${activeCategory === c.id ? "rr-filter-btn--active" : ""}`}
                onClick={() => setActiveCategory(c.id)}
              >
                <span className="rr-filter-icon">{c.icon}</span>
                {c.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="rr-grid">
            {filtered.map((article) => (
              <article className={`rr-card ${article.locked ? "rr-card--locked" : ""}`} key={article.id}>
                {article.isNew && <span className="rr-card-new">NEW</span>}
                {article.locked && (
                  <div className="rr-card-lock">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </div>
                )}
                <span className="rr-card-tag">{article.tag}</span>
                <h3 className="rr-card-title">{article.title}</h3>
                <p className="rr-card-excerpt">{article.excerpt}</p>
                <div className="rr-card-footer">
                  <span className="rr-card-time">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                    </svg>
                    {article.readTime}
                  </span>
                  {article.locked ? (
                    <span className="rr-card-login">Login to read</span>
                  ) : (
                    <span className="rr-card-read">Read →</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Login CTA */}
          <div className="rr-login-cta">
            <div className="rr-login-cta-inner">
              <span className="rr-login-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </span>
              <div>
                <h3 className="rr-login-title">Unlock the Full Radar Room</h3>
                <p className="rr-login-sub">Log in to your REDDAR account to access all articles, research, and regularly updated resources.</p>
              </div>
              <a href="#" className="rr-login-btn">Log In to REDDAR</a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}