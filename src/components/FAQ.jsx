import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "What is REDDAR?",
    a: "REDDAR is a blood donor response network that connects blood donors and recipients during emergencies. It helps ensure that no life is lost due to the unavailability of blood.",
  },
  {
    q: "Who can use REDDAR?",
    a: "Anyone above the eligible age for blood donation can register as a donor. Individuals seeking blood can use REDDAR to create requests and find donors nearby.",
  },
  {
    q: "What does 'Visible on Radar' mean?",
    a: "When you are Visible on Radar, your profile is available for matching when blood requests arise in your area. Nearby patients and healthcare providers can discover you during emergencies.",
  },
  {
    q: "What is Stealth Mode?",
    a: "Stealth Mode temporarily hides your profile from active donor searches and request alerts. You can switch back to visible anytime you are ready to help.",
  },
  {
    q: "How do I request blood?",
    a: "Open the app, create a blood request, and provide the required details — blood group, units needed, hospital, and urgency level. REDDAR will immediately notify matching donors nearby.",
  },
  {
    q: "Is my personal information protected?",
    a: "Yes. REDDAR follows strict privacy and security practices. Your contact information is only shared when necessary and according to the app's workflow — never publicly exposed.",
  },
  {
    q: "Can I donate multiple times?",
    a: "Yes, subject to medical eligibility and standard donation intervals. The app helps you track your donation history so you always know when you are next eligible.",
  },
  {
    q: "Is REDDAR free to use?",
    a: "Yes. REDDAR is completely free for donors and recipients. It is a public welfare initiative designed to save lives, not generate profit.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">

        <div className="faq-header">
          <span className="faq-label">Got Questions</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-sub">
            Everything you need to know about REDDAR and how it works.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              className={`faq-item ${open === i ? "faq-item--open" : ""}`}
              key={i}
              onClick={() => toggle(i)}
            >
              <div className="faq-question">
                <span className="faq-q-text">{item.q}</span>
                <div className="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" className="faq-icon-v" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}