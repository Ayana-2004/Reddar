import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "How It Works", href: "#how" },
  { label: "Why REDDAR", href: "#why" },
  { label: "Knowledge Hub", href: "#knowledge" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* LOGO */}
        <a href="#" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="navbar-logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" stroke="#C0292A" strokeWidth="1.2" opacity="0.3"/>
              <circle cx="16" cy="16" r="10" stroke="#C0292A" strokeWidth="1.2" opacity="0.5"/>
              <circle cx="16" cy="16" r="5"  stroke="#C0292A" strokeWidth="1.2" opacity="0.7"/>
              <line x1="16" y1="1"  x2="16" y2="31" stroke="#C0292A" strokeWidth="0.8" opacity="0.25"/>
              <line x1="1"  y1="16" x2="31" y2="16" stroke="#C0292A" strokeWidth="0.8" opacity="0.25"/>
              <path d="M16 9 C16 9, 9 15.5, 9 19.5 A7 7 0 0 0 23 19.5 C23 15.5, 16 9, 16 9Z" fill="#C0292A"/>
            </svg>
          </span>
          <span className="navbar-logo-text">REDDAR</span>
        </a>

        {/* DESKTOP LINKS */}
        <nav className="navbar-links">
          {navLinks.map((l) => (
            <button key={l.href} className="navbar-link" onClick={() => handleNav(l.href)}>
              {l.label}
            </button>
          ))}
        </nav>

        {/* DOWNLOAD CTA */}
        <a href="#download" className="navbar-cta" onClick={(e) => { e.preventDefault(); handleNav("#download"); }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/>
            <path d="M8 12l4 4 4-4M12 8v8"/>
          </svg>
          Download App
        </a>

        {/* HAMBURGER */}
        <button
          className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`navbar-mobile ${menuOpen ? "navbar-mobile--open" : ""}`}>
        {navLinks.map((l) => (
          <button key={l.href} className="navbar-mobile-link" onClick={() => handleNav(l.href)}>
            {l.label}
          </button>
        ))}
        <a href="#download" className="navbar-mobile-cta" onClick={() => { setMenuOpen(false); handleNav("#download"); }}>
          Download App
        </a>
      </div>
    </header>
  );
}