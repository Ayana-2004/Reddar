import { useState } from "react";
import "./FAQ.css";
import { faqs } from "../constants/faqs";



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