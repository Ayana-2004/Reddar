import { Link, useParams, useNavigate } from "react-router-dom";
import { articles } from "./Articles";
import { articleContent } from "../constants/articleContent";
import { PLAY_STORE_URL, APP_STORE_URL } from "../seo/site";
import NoBreakHyphens from "./NoBreakHyphens";
import "./RadarRoomArticle.css";

export default function RadarRoomArticle() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = articles.find((a) => a.slug === slug);
  const content = articleContent[slug];

  if (!article || !content) {
    return (
      <div className="rra-notfound">
        <div className="rra-notfound-inner">
          <h1>Article not found</h1>
          <button onClick={() => navigate("/radar-room")} className="rra-back-btn">
            ← Back to Reddar Room
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rra">
      {/* Back button */}
      <button className="rra-back" onClick={() => navigate("/radar-room")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back to Reddar Room
      </button>

      {/* Article Header */}
      <header className="rra-header">
        <div className="rra-header-inner">
          <span className="rra-tag">{article.tag}</span>
          <h1 className="rra-title"><NoBreakHyphens>{article.title}</NoBreakHyphens></h1>
          <div className="rra-meta">
            <span className="rra-time">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
              </svg>
              {article.readTime}
            </span>
            <span className="rra-divider" />
            <span className="rra-source">Reddar Room</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <main className="rra-body">
        <div className="rra-body-inner">
          {content.body.map((block, i) => {
            if (block.type === "p") return <p key={i} className="rra-p"><NoBreakHyphens>{block.text}</NoBreakHyphens></p>;
            if (block.type === "h2") return <h2 key={i} className="rra-h2">{block.text}</h2>;
            if (block.type === "list") return (
              <ul key={i} className="rra-list">
                {block.items.map((item, j) => <li key={j}><NoBreakHyphens>{item}</NoBreakHyphens></li>)}
              </ul>
            );
            return null;
          })}
        </div>

        {/* CTA */}
        <div className="rra-cta">
          <div className="rra-cta-inner">
            <h3>Ready to Save a Life?</h3>
            <p>Download REDDAR and become a visible donor in your community today.</p>
            <div className="rra-cta-btns">
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="rra-cta-btn rra-cta-btn--primary">Google Play</a>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="rra-cta-btn rra-cta-btn--primary">App Store</a>
              <Link to="/radar-room" className="rra-cta-btn rra-cta-btn--outline">
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}