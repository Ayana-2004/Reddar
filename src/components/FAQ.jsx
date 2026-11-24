import { useState } from "react";
import "./FAQ.css";
import { faqs } from "../constants/faqs";



export default function FAQ() {
  // Each question opens and closes on its own. Opening one used to close the open one
  // above it, so the page slid up under the finger (bug 051).
  const [open, setOpen] = useState(() => new Set());

  const toggle = (i) => setOpen((prev) => {
    const next = new Set(prev);
    if (next.has(i)) next.delete(i); else next.add(i);
    return next;
  });

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
              className={`faq-item ${open.has(i) ? "faq-item--open" : ""}`}
              key={i}
            >
              {/* Whole row, "+" included, is one button: clickable and keyboard accessible */}
              <button
                type="button"
                className="faq-question"
                aria-expanded={open.has(i)}
                aria-controls={`faq-answer-${i}`}
                onClick={() => toggle(i)}
              >
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" className="faq-icon-v" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer" id={`faq-answer-${i}`}>
                <div className="faq-answer-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}