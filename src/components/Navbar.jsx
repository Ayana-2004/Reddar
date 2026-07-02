import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import reddarLogo from "../assets/reddar-logo.png";

const navLinks = [
  { label: "How It Works", href: "#how" },
  { label: "Why REDDAR", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRadarRoom = () => {
    setMenuOpen(false);
    navigate("/radar-room");
  };

  const handleStories = () => {
    setMenuOpen(false);
    navigate("/stories");
  };
  const handleHospitals = () => {
  setMenuOpen(false);
  navigate("/hospitals");
};

 const handleFaircode = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector("#faircode");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector("#faircode");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* LOGO */}
        <a href="#" className="navbar-logo" onClick={(e) => {
          e.preventDefault();
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
         <span className="navbar-logo-icon">
  <img src={reddarLogo} alt="REDDAR" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
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
          <button className="navbar-link" onClick={handleHospitals}>
  Hospitals
</button>
<button className="navbar-link navbar-link--highlight" onClick={handleRadarRoom}>
  Radar Room
</button>
        
          <button className="navbar-link" onClick={handleStories}>
            Stories
          </button>
          <button className="navbar-link" onClick={handleFaircode}>
            Faircode
          </button>
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
        <button className="navbar-mobile-link" onClick={handleHospitals}>
  Hospitals
</button>
<button className="navbar-mobile-link navbar-mobile-link--highlight" onClick={handleRadarRoom}>
  Radar Room
</button>
        {/* <button className="navbar-mobile-link navbar-mobile-link--highlight" onClick={handleRadarRoom}>
          Radar Room
        </button> */}
        <button className="navbar-mobile-link" onClick={handleStories}>
          Stories of Hope
        </button>
        <button className="navbar-mobile-link" onClick={handleFaircode}>
          Faircode Initiative
        </button>
        <a href="#download" className="navbar-mobile-cta" onClick={() => { setMenuOpen(false); handleNav("#download"); }}>
          Download App
        </a>
      </div>
    </header>
  );
}