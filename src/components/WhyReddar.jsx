import "./WhyReddar.css";

const features = [
  {
    title: "Real-Time Matching",
    desc: "Donors and recipients are matched instantly based on blood group and location — no delays, no middlemen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "Location-Aware Discovery",
    desc: "REDDAR uses location intelligence to find the nearest available donor when every second counts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    title: "Emergency Broadcasting",
    desc: "Critical requests are broadcast to all eligible donors in the area simultaneously for faster response.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    title: "Visibility Control",
    desc: "Donors decide when they are visible on the radar. Switch to Stealth Mode anytime you are unavailable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    ),
  },
  {
    title: "Hospital Ready",
    desc: "Built with integration capabilities for hospitals and blood banks to raise and manage requests efficiently.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Community Driven",
    desc: "REDDAR grows stronger with every donor. A network built on community trust and collective responsibility.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

export default function WhyReddar() {
  return (
    <section className="why" id="why">
      <div className="why-inner">

        <div className="why-header">
          <span className="why-label">The Difference</span>
          <h2 className="why-title">Why REDDAR</h2>
         <p className="why-sub">
  Not just an app. A community that responds. When someone needs blood,
  time becomes precious. REDDAR brings together donors, recipients,
  hospitals, and communities so that help can be found when it matters most.
  Because no one should face a blood emergency alone.
</p>
        </div>

        <div className="why-grid">
          {features.map((f) => (
            <div className="why-card" key={f.title}>
              <div className="why-card-icon">{f.icon}</div>
              <h3 className="why-card-title">{f.title}</h3>
              <p className="why-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Visibility highlight */}
        <div className="why-highlight">
          <div className="why-highlight-left">
            <span className="why-highlight-tag">Unique Feature</span>
            <h3 className="why-highlight-title">Stay on the Radar.<br />Save Lives on Demand.</h3>
            <p className="why-highlight-desc">
              When you are Visible on Radar, nearby patients and healthcare providers
              can discover you during emergencies. Switch to Stealth Mode whenever
              you are unavailable. You decide when you want to help.
            </p>
            <div className="why-highlight-modes">
              <div className="why-mode why-mode--visible">
                <span className="why-mode-dot" />
                Visible on Radar
              </div>
              <div className="why-mode why-mode--stealth">
                <span className="why-mode-dot" />
                Stealth Mode
              </div>
            </div>
          </div>
          <div className="why-highlight-right">
            <div className="why-radar-mini">
              <div className="wrm-ring r1" />
              <div className="wrm-ring r2" />
              <div className="wrm-ring r3" />
              <div className="wrm-sweep" />
              <div className="wrm-center" />
              <div className="wrm-blip b1" />
              <div className="wrm-blip b2" />
              <div className="wrm-blip b3" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}