import { useNavigate } from "react-router-dom";
import "./Stories.css";

const stories = [
  {
    id: 1,
    time: "12 minutes",
    title: "Blood Found in 12 Minutes",
    quote: "My son needed O negative blood urgently. The hospital said it would take hours. REDDAR found a donor 2 km away in under 12 minutes. That donor saved my son's life.",
    name: "Rajesh Menon",
    location: "Kozhikode, Kerala",
    bloodGroup: "O−",
    role: "Father of recipient",
    impact: "Life saved",
  },
  {
    id: 2,
    time: "3 donors",
    title: "Three Donors Saved My Father",
    quote: "My father needed 3 units of B positive blood for emergency surgery. Within 40 minutes, three donors had responded through REDDAR. The surgery was successful.",
    name: "Ananya Krishnan",
    location: "Thrissur, Kerala",
    bloodGroup: "B+",
    role: "Daughter of recipient",
    impact: "Surgery successful",
  },
  {
    id: 3,
    time: "18 months",
    title: "Why I Stay Visible on REDDAR",
    quote: "I've been a donor for 18 months. I've responded to 7 requests. Each time my phone alerts me, I know someone somewhere is counting on people like me. That's why I stay visible.",
    name: "Mohammed Siddiq",
    location: "Malappuram, Kerala",
    bloodGroup: "A+",
    role: "Active donor",
    impact: "7 lives impacted",
  },
  {
    id: 4,
    time: "8 minutes",
    title: "A Stranger's Blood, A Mother's Life",
    quote: "After a complicated delivery, my wife needed blood immediately. We didn't know anyone in the city. REDDAR connected us with a donor who arrived at the hospital in 8 minutes.",
    name: "Sreekanth P.",
    location: "Kochi, Kerala",
    bloodGroup: "AB+",
    role: "Husband of recipient",
    impact: "Mother survived",
  },
  {
    id: 5,
    time: "2 years",
    title: "Donating Every 3 Months, Saving Lives Every Time",
    quote: "I donate every 3 months like clockwork. REDDAR has made the whole process easier — I get matched with urgent requests, I show up, and I know exactly who I'm helping.",
    name: "Priya Nair",
    location: "Thiruvananthapuram, Kerala",
    bloodGroup: "O+",
    role: "Regular donor",
    impact: "8 donations",
  },
  {
    id: 6,
    time: "30 minutes",
    title: "Accident on the Highway",
    quote: "A truck accident left three people needing blood urgently. The hospital broadcast a request through REDDAR. Six donors arrived within 30 minutes. All three patients survived.",
    name: "Dr. Suresh Babu",
    location: "Palakkad, Kerala",
    bloodGroup: "Multiple",
    role: "ER Physician",
    impact: "3 lives saved",
  },
];

const stats = [
  { value: "2,400+", label: "Donors Active on Radar" },
  { value: "840+", label: "Requests Fulfilled" },
  { value: "12 min", label: "Average Response Time" },
  { value: "Kerala", label: "Network Live" },
];

export default function Stories() {
  const navigate = useNavigate();

  return (
    <div className="stories">

      {/* ── HERO ── */}
      <section className="stories-hero">
        <div className="stories-hero-inner">
          <span className="stories-eyebrow">Stories of Hope</span>
          <h1 className="stories-title">
            Real People.<br />
            Real Blood.<br />
            <span className="stories-accent">Real Miracles.</span>
          </h1>
          <p className="stories-sub">
            These are not statistics. These are real moments when someone needed help, and someone else showed up. This is what REDDAR is for.
          </p>
        </div>
        <div className="stories-hero-line" />
      </section>

      {/* ── STATS ── */}
      <section className="stories-stats">
        {stats.map((s, i) => (
          <div className="stories-stat" key={i}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── STORIES GRID ── */}
      <section className="stories-grid-section">
        <div className="stories-grid-inner">
          <div className="stories-grid">
            {stories.map((story) => (
              <article className="story-card" key={story.id}>
                <div className="story-card-top">
                  <div className="story-blood-badge">{story.bloodGroup}</div>
                  <div className="story-time-badge">{story.time}</div>
                </div>
                <h3 className="story-title">{story.title}</h3>
                <blockquote className="story-quote">
                  <span className="story-quote-mark">"</span>
                  {story.quote}
                </blockquote>
                <div className="story-footer">
                  <div className="story-person">
                    <div className="story-avatar">
                      {story.name.charAt(0)}
                    </div>
                    <div className="story-person-info">
                      <strong>{story.name}</strong>
                      <span>{story.role} · {story.location}</span>
                    </div>
                  </div>
                  <div className="story-impact">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    </svg>
                    {story.impact}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHARE YOUR STORY CTA ── */}
      <section className="stories-cta">
        <div className="stories-cta-inner">
          <span className="stories-cta-eyebrow">Your Story Matters</span>
          <h2 className="stories-cta-title">Have a Story to Share?</h2>
          <p className="stories-cta-sub">
            If REDDAR helped you find blood, or if you donated and saved a life — we want to hear from you. Your story could inspire the next donor.
          </p>
          <div className="stories-cta-btns">
            <a href="mailto:stories@reddar.in" className="stories-btn-primary">
              Share Your Story
            </a>
            <button className="stories-btn-outline" onClick={() => navigate("/")}>
              Download REDDAR
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}