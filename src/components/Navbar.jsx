import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import reddarLockup from "../assets/Reddar-red.svg";

// Homepage sections: `section` is what we watch to highlight the active item.
const navLinks = [
  { key: "how",   label: "How It Works", href: "#how",   section: "#how" },
  { key: "why",   label: "Why REDDAR",   href: "#why",   section: "#why" },
  { key: "faq",   label: "FAQ",          href: "#faq",   section: "#faq" },
  { key: "about", label: "About",        href: "#about", section: ".fc" },
];

const FAIRCODE_URL = "https://faircodetech.com/";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const setNavHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${navRef.current.offsetHeight}px`
        );
      }
    };
    setNavHeight();
    window.addEventListener("resize", setNavHeight);
    return () => window.removeEventListener("resize", setNavHeight);
  }, []);

  // On the homepage, highlight the menu item of the section under the navbar.
  useEffect(() => {
    if (!onHome) return;
    const update = () => {
      const line = (navRef.current?.offsetHeight || 80) + 40;
      let current = null;
      for (const l of navLinks) {
        const el = document.querySelector(l.section);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) current = l.key;
      }
      setActiveSection(current);
    };
    const frame = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, [onHome]);

  const currentSection = onHome ? activeSection : null;
  const isRoute = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);
  const cls = (base, active) => `${base}${active ? ` ${base}--active` : ""}`;

  // Section links: scroll on the homepage; from other pages go to "/#section"
  // and let App's ScrollToTop scroll to it once the homepage renders.
  const handleNav = (href) => {
    setMenuOpen(false);
    if (!onHome) {
      navigate(`/${href}`);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} ref={navRef}>
      <div className="navbar-inner">

        {/* LOGO */}
        <a href="/" className="navbar-logo" onClick={(e) => {
          e.preventDefault();
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          <img src={reddarLockup} alt="REDDAR" className="navbar-logo-mark" />
          <span className="navbar-logo-tagline">Find blood donors near you, fast.</span>
        </a>

        {/* DESKTOP LINKS */}
        <nav className="navbar-links">
          {navLinks.map((l) => (
            <button
              key={l.key}
              className={cls("navbar-link", currentSection === l.key)}
              aria-current={currentSection === l.key ? "true" : undefined}
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </button>
          ))}
          <Link to="/hospitals" className={cls("navbar-link", isRoute("/hospitals"))} aria-current={isRoute("/hospitals") ? "page" : undefined} onClick={closeMenu}>
            Hospitals
          </Link>
          <Link to="/radar-room" className={`${cls("navbar-link", isRoute("/radar-room"))} navbar-link--highlight`} aria-current={isRoute("/radar-room") ? "page" : undefined} onClick={closeMenu}>
            Reddar Room
          </Link>
          <Link to="/stories" className={cls("navbar-link", isRoute("/stories"))} aria-current={isRoute("/stories") ? "page" : undefined} onClick={closeMenu}>
            Stories
          </Link>
          {/* Faircode's own site; "About" covers the Faircode section on this page */}
          <a href={FAIRCODE_URL} target="_blank" rel="noopener noreferrer" className="navbar-link">
            Faircode
          </a>
        </nav>

        {/* DOWNLOAD CTA */}
        <a href="/#download" className="navbar-cta" onClick={(e) => { e.preventDefault(); handleNav("#download"); }}>
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
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`navbar-mobile ${menuOpen ? "navbar-mobile--open" : ""}`}>
        {navLinks.map((l) => (
          <button
            key={l.key}
            className={cls("navbar-mobile-link", currentSection === l.key)}
            aria-current={currentSection === l.key ? "true" : undefined}
            onClick={() => handleNav(l.href)}
          >
            {l.label}
          </button>
        ))}
        <Link to="/hospitals" className={cls("navbar-mobile-link", isRoute("/hospitals"))} aria-current={isRoute("/hospitals") ? "page" : undefined} onClick={closeMenu}>
          Hospitals
        </Link>
        <Link to="/radar-room" className={`${cls("navbar-mobile-link", isRoute("/radar-room"))} navbar-mobile-link--highlight`} aria-current={isRoute("/radar-room") ? "page" : undefined} onClick={closeMenu}>
          Reddar Room
        </Link>
        <Link to="/stories" className={cls("navbar-mobile-link", isRoute("/stories"))} aria-current={isRoute("/stories") ? "page" : undefined} onClick={closeMenu}>
          Stories of Hope
        </Link>
        <a href={FAIRCODE_URL} target="_blank" rel="noopener noreferrer" className="navbar-mobile-link" onClick={closeMenu}>
          Faircode Initiative
        </a>
        <a href="/#download" className="navbar-mobile-cta" onClick={(e) => { e.preventDefault(); handleNav("#download"); }}>
          Download App
        </a>
      </div>
    </header>
  );
}
