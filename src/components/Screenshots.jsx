import "./Screenshots.css";
import welcome from "../assets/welcome.jpeg";
import request from "../assets/request.jpeg";
import details from "../assets/details.jpeg";
import profile from "../assets/profile.jpeg";

const screens = [
  {
    img: welcome,
    title: "Get Started",
    desc: "Choose your role — Donor, Recipient, or Both. One tap to join India's lifesaving radar.",
  },
  {
    img: request,
    title: "Live Requests",
    desc: "See urgent blood requests near you in real time. Location-aware, blood-group matched.",
  },
  {
    img: details,
    title: "Request Details",
    desc: "View hospital, urgency, and units needed. Confirm your donation with one tap.",
  },
  {
    img: profile,
    title: "Your Profile",
    desc: "Track your donations, manage visibility, and control when you appear on the radar.",
  },
];

export default function Screenshots() {
  return (
    <section className="screenshots" id="screenshots">
      <div className="screenshots-header">
        <p className="section-eyebrow">The App</p>
        <h2 className="section-title">Built for Speed.<br />Designed with Care.</h2>
        <p className="section-body">
          Every screen is crafted to work in the most stressful moments —
          when someone's life depends on a fast response.
        </p>
      </div>

      <div className="screenshots-track">
        {screens.map((s, i) => (
          <div className="screenshot-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="screenshot-phone">
              <div className="phone-notch" />
              <img src={s.img} alt={s.title} className="phone-screen" />
            </div>
            <div className="screenshot-info">
              <span className="screenshot-num">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Download strip */}
      <div className="screenshots-cta">
        <p>Available free on both platforms</p>
        <div className="screenshots-store-row">
          <a
            href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="store-btn-dark"
          >
            <svg viewBox="0 0 24 24" fill="#fff" width="20" height="20">
              <path d="M3.18 23.76c.37.2.8.19 1.19-.03l12.16-7.03-2.63-2.63-10.72 9.69zM.5 1.4C.19 1.77 0 2.3 0 2.98v18.04c0 .68.19 1.21.5 1.58l.08.08 10.1-10.1v-.24L.58 1.32.5 1.4zM20.56 10.14l-2.88-1.66-2.94 2.94 2.94 2.94 2.89-1.67c.82-.48.82-1.25-.01-1.55zM4.37.27L16.53 7.3l-2.63 2.63L3.18.24C3.56.02 3.99.05 4.37.27z"/>
            </svg>
            <span>Google Play</span>
          </a>
          <a
            href="https://apps.apple.com/app/YOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="store-btn-dark"
          >
            <svg viewBox="0 0 24 24" fill="#fff" width="20" height="20">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.82.03 3.02 2.65 4.03 2.68 4.04l-.05.16zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span>App Store</span>
          </a>
        </div>
      </div>
    </section>
  );
}