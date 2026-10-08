import { LAST_UPDATED } from "../constants/legal";
import "./LegalPage.css";

// Turns email addresses inside plain text into mailto links.
function withEmailLinks(text) {
  return text.split(/([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/).map((part, i) =>
    i % 2 === 1 ? <a key={i} href={`mailto:${part}`}>{part}</a> : part
  );
}

export default function LegalPage({ eyebrow, title, blocks, showUpdated = true }) {
  return (
    <div className="legal">
      <header className="legal-header">
        <div className="legal-inner">
          <span className="legal-eyebrow">{eyebrow}</span>
          <h1 className="legal-title">{title}</h1>
          {showUpdated && <p className="legal-updated">Last updated: {LAST_UPDATED}</p>}
        </div>
      </header>

      <main className="legal-body">
        <div className="legal-inner">
          {blocks.map((b, i) => {
            if (b.type === "h2") return <h2 key={i} className="legal-h2">{b.text}</h2>;
            if (b.type === "notice") return <p key={i} className="legal-notice">{withEmailLinks(b.text)}</p>;
            if (b.type === "list") return (
              <ul key={i} className="legal-list">
                {b.items.map((item, j) => <li key={j}>{withEmailLinks(item)}</li>)}
              </ul>
            );
            return <p key={i} className="legal-p">{withEmailLinks(b.text)}</p>;
          })}
        </div>
      </main>
    </div>
  );
}
