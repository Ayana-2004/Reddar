import "./Footer.css";
import faircodelogo from "../assets/Faircode.png";

const playstoreUrl = "https://play.google.com/store/apps/details?id=YOUR_APP_ID";
const appstoreUrl  = "https://apps.apple.com/app/YOUR_APP_ID";

const navLinks = [
  { label: "How It Works",  href: "#how" },
  { label: "Why REDDAR",    href: "#why" },
  { label: "Knowledge Hub", href: "#knowledge" },
  { label: "FAQ",           href: "#faq" },
  { label: "About",         href: "#about" },
];

const RadarLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="footer-logo-svg">
    <circle cx="16" cy="16" r="15" stroke="#C0292A" strokeWidth="1.2" opacity="0.4"/>
    <circle cx="16" cy="16" r="10" stroke="#C0292A" strokeWidth="1.2" opacity="0.6"/>
    <circle cx="16" cy="16" r="5"  stroke="#C0292A" strokeWidth="1.2" opacity="0.8"/>
    <path d="M16 9 C16 9 9 15.5 9 19.5 A7 7 0 0 0 23 19.5 C23 15.5 16 9 16 9Z" fill="#C0292A"/>
  </svg>
);

const PlayIcon = () => (
  <svg className="dl-store-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
  </svg>
);

const AppleIcon = () => (
  <svg className="dl-store-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-3.19 1.93-2.68 5.86.16 7.18zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

export default function Footer() {
  return (
    <>
      <section className="dl" id="download">
        <div className="dl-inner">

          <div className="dl-radar">
            <div className="dl-ring r1" />
            <div className="dl-ring r2" />
            <div className="dl-ring r3" />
            <div className="dl-sweep" />
            <div className="dl-center" />
          </div>

          <div className="dl-content">
            <span className="dl-label">Available Free</span>
            <h2 className="dl-title">
              Join the Radar.<br />
              <span className="dl-title-accent">Save Lives.</span>
            </h2>
            <p className="dl-sub">
              Become part of a growing network of lifesavers.
              Download REDDAR today and help ensure that help is
              always within reach when blood is needed most.
            </p>

            <div className="dl-store-row">
              <a href={playstoreUrl} target="_blank" rel="noopener noreferrer" className="dl-store-btn" aria-label="Get REDDAR on Google Play">
                <PlayIcon />
                <div className="dl-store-text">
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </div>
              </a>
              <a href={appstoreUrl} target="_blank" rel="noopener noreferrer" className="dl-store-btn" aria-label="Download REDDAR on the App Store">
                <AppleIcon />
                <div className="dl-store-text">
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </a>
            </div>

            <p className="dl-note">Free forever · No ads · Built for communities</p>
          </div>

        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">

          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <RadarLogo />
                <span className="footer-logo-text">REDDAR</span>
              </div>
              <p className="footer-tagline">Life on Radar.</p>
              <p className="footer-brand-desc">
                India's real-time blood donor response network.
                Connecting donors, recipients, and hospitals
                when every second matters.
              </p>
            </div>

            <div className="footer-nav">
              <span className="footer-nav-title">Navigate</span>
              <ul>
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="footer-nav-link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav">
              <span className="footer-nav-title">Legal</span>
              <ul>
                <li><a href="#" className="footer-nav-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-nav-link">Terms of Service</a></li>
                <li><a href="#" className="footer-nav-link">Contact Us</a></li>
              </ul>
            </div>
          </div>

         <div className="footer-bottom">
  <p className="footer-copy">
    {new Date().getFullYear()} REDDAR. A social impact initiative by{" "}
    <a href="https://faircodetech.com/" target="_blank" rel="noopener noreferrer" className="footer-fc-link">
      <img src={faircodelogo} alt="Faircode Infotech" className="footer-fc-logo" />
    </a>
  </p>
  <p className="footer-made">Made with purpose. Built for lives.</p>
</div>

        </div>
      </footer>
    </>
  );
}