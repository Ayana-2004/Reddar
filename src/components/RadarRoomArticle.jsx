import { useParams, useNavigate } from "react-router-dom";
import { articles } from "./Articles";
import "./RadarRoomArticle.css";

const articleContent = {
  "who-can-donate-blood": {
    body: [
      { type: "p", text: "Blood donation saves millions of lives every year. In India alone, over 4.7 million units of blood are needed annually — yet many eligible donors never donate. Understanding eligibility is the first step." },
      { type: "h2", text: "Basic Eligibility Criteria" },
      { type: "p", text: "Most healthy adults between 18 and 65 years of age, weighing over 50kg, are eligible to donate whole blood. You must be in good general health and feeling well on the day of donation." },
      { type: "list", items: ["Age: 18–65 years", "Weight: Minimum 50 kg", "Hemoglobin: At least 12.5 g/dL", "Blood pressure: Normal range (systolic 100–180, diastolic 50–100)", "Pulse: 50–100 beats per minute, regular"] },
      { type: "h2", text: "Who Cannot Donate?" },
      { type: "p", text: "Certain conditions temporarily or permanently prevent donation. These include recent illness, certain medications, travel to malaria-endemic regions, and pregnancy." },
      { type: "list", items: ["Recent illness or fever in the last 2 weeks", "Pregnancy or recent childbirth (within 6 months)", "Recent surgery or dental work", "Tattoos or piercings within the last 6 months", "HIV, Hepatitis B or C diagnosis"] },
      { type: "h2", text: "How Often Can You Donate?" },
      { type: "p", text: "Whole blood donors can donate once every 3 months (90 days). Platelet donors can donate more frequently — up to once every 2 weeks. Your body typically replenishes blood volume within 24–48 hours and red blood cells within 4–6 weeks." },
    ]
  },
  "blood-donation-myths-debunked": {
    body: [
      { type: "p", text: "Despite blood donation being one of the most impactful things a person can do, persistent myths keep many eligible donors away. Let's set the record straight." },
      { type: "h2", text: "Myth 1: Donating blood makes you weak" },
      { type: "p", text: "Fact: Most donors return to normal activity within hours. Your body replaces the fluid lost during donation within 24 hours. The slight tiredness some feel passes quickly with rest and hydration." },
      { type: "h2", text: "Myth 2: You can get infected from donating blood" },
      { type: "p", text: "Fact: Donation centers use sterile, single-use equipment. A new needle is used for every donor and disposed of immediately after. There is zero risk of infection from the donation process itself." },
      { type: "h2", text: "Myth 3: People with diabetes can't donate" },
      { type: "p", text: "Fact: Diabetics who are well-controlled and not on insulin are generally eligible to donate. Always consult with the donation center beforehand." },
      { type: "h2", text: "Myth 4: Donating blood is painful" },
      { type: "p", text: "Fact: You may feel a brief pinch when the needle is inserted, but the donation itself (which takes about 8–10 minutes) is painless for most people." },
      { type: "h2", text: "Myth 5: You need to fast before donating" },
      { type: "p", text: "Fact: You should actually eat a light meal and drink plenty of fluids before donating. Fasting can lead to dizziness and fainting." },
    ]
  },
  "abo-rh-blood-groups-explained": {
    body: [
      { type: "p", text: "Understanding blood groups is essential not just for medical professionals but for every potential donor and recipient. The ABO and Rh systems are the most clinically significant." },
      { type: "h2", text: "The ABO System" },
      { type: "p", text: "The ABO blood group system classifies blood into four types based on the presence or absence of antigens on red blood cells: A, B, AB, and O." },
      { type: "list", items: ["Type A: Has A antigens, anti-B antibodies", "Type B: Has B antigens, anti-A antibodies", "Type AB: Has both antigens, no antibodies (universal recipient)", "Type O: No antigens, both anti-A and anti-B antibodies (universal donor)"] },
      { type: "h2", text: "The Rh System" },
      { type: "p", text: "The Rh factor refers to the presence (+) or absence (–) of the RhD antigen. A person is either Rh-positive or Rh-negative. This matters enormously during pregnancy and transfusions." },
      { type: "h2", text: "Why O Negative is the Universal Donor" },
      { type: "p", text: "O negative blood can be given to anyone regardless of their blood type. This makes it invaluable in emergencies when there's no time to determine the patient's blood type. O negative donors are always in critical demand." },
    ]
  },
  "48-hour-recovery-after-donating": {
    body: [
      { type: "p", text: "You've just done something incredible — you've given the gift of life. Now it's time to take care of yourself so you recover quickly and feel your best." },
      { type: "h2", text: "Immediately After Donation" },
      { type: "list", items: ["Rest for 10–15 minutes before leaving the donation center", "Drink extra fluids — at least 4 extra glasses in the next few hours", "Have a light snack provided at the center", "Avoid alcohol for 24 hours", "Keep the bandage on for at least 4–5 hours"] },
      { type: "h2", text: "What to Eat" },
      { type: "p", text: "Focus on iron-rich foods to help your body replenish red blood cells. Good options include red meat, fish, poultry, beans, spinach, iron-fortified cereals, and dried fruits." },
      { type: "p", text: "Pair iron-rich foods with Vitamin C (oranges, tomatoes, bell peppers) to boost iron absorption. Avoid tea and coffee with meals as they inhibit iron absorption." },
      { type: "h2", text: "Activities to Avoid" },
      { type: "list", items: ["Heavy lifting or strenuous exercise for 24 hours", "Operating heavy machinery if feeling lightheaded", "Smoking for at least 1 hour after donation", "Hot baths or saunas on the day of donation"] },
      { type: "h2", text: "When to Call a Doctor" },
      { type: "p", text: "Seek medical attention if you experience prolonged bleeding, swelling or pain at the needle site, fever, or chest pain in the days following donation." },
    ]
  },
};

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
            ← Back to Radar Room
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
        Back to Radar Room
      </button>

      {/* Article Header */}
      <header className="rra-header">
        <div className="rra-header-inner">
          <span className="rra-tag">{article.tag}</span>
          <h1 className="rra-title">{article.title}</h1>
          <div className="rra-meta">
            <span className="rra-time">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
              </svg>
              {article.readTime}
            </span>
            <span className="rra-divider" />
            <span className="rra-source">REDDAR Radar Room</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <main className="rra-body">
        <div className="rra-body-inner">
          {content.body.map((block, i) => {
            if (block.type === "p") return <p key={i} className="rra-p">{block.text}</p>;
            if (block.type === "h2") return <h2 key={i} className="rra-h2">{block.text}</h2>;
            if (block.type === "list") return (
              <ul key={i} className="rra-list">
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
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
              <a href="#" className="rra-cta-btn rra-cta-btn--primary">Download App</a>
              <button className="rra-cta-btn rra-cta-btn--outline" onClick={() => navigate("/radar-room")}>
                More Articles
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}