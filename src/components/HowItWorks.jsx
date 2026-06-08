import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Register",
    desc: "Create your profile and add your blood group and location.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Stay Visible",
    desc: "Enable your visibility status to stay available for blood requests.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M2 12S5 5 12 5s10 7 10 7-3 7-10 7S2 12 2 12z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Receive Alerts",
    desc: "Get notified when someone nearby requires your blood group.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Respond",
    desc: "Accept requests and coordinate with recipients or hospitals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Save Lives",
    desc: "Your donation can make a life-saving difference.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw" id="how">
      <div className="hiw-inner">

        <div className="hiw-header">
          <span className="hiw-label">The Process</span>
          <h2 className="hiw-title">How REDDAR Works</h2>
          <p className="hiw-sub">
            From registration to response — simple, fast, and built for emergencies.
          </p>
        </div>

        <div className="hiw-steps">
          {steps.map((step, i) => (
            <div className="hiw-step" key={step.number}>
              <div className="hiw-step-icon">{step.icon}</div>
              <div className="hiw-step-num">{step.number}</div>
              <h3 className="hiw-step-title">{step.title}</h3>
              <p className="hiw-step-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="hiw-connector" />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}