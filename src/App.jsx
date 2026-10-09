import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyReddar from "./components/WhyReddar";
import Screenshots from "./components/Screenshots";
import Faircode from "./components/Faircode";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import RadarRoom from "./components/RadarRoom";
import RadarRoomArticle from "./components/RadarRoomArticle";
import Stories from "./components/Stories";
import bannerImg from "./assets/banner.webp";
import Hospitals from './components/Hospitals';
import { useSeo } from './seo/head';
import LegalPage from './components/LegalPage';
import { contactPage } from './constants/legal';
import { appPrivacyPolicy, APP_PRIVACY_EFFECTIVE, APP_PRIVACY_UPDATED } from './constants/appPrivacyPolicy';

  
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useSeo();
  useEffect(() => {
    // Links like "/#faq" (footer) should land on that section, not the top
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* MISSION STRIP */}
<div style={{
  // Soft shade at the top so the strip eases out of the white/black hero instead of a hard edge
  background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0, rgba(0,0,0,0) 96px), color-mix(in srgb, var(--red) 55%, black)",
  padding: "64px 24px",
  textAlign: "center",
}}>
  <p style={{
    fontSize: "0.875rem",
    fontWeight: 600,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#FF9C9D", // light red: brand red on this dark red was ~2.4:1 contrast, this is ~4.9:1
    marginBottom: "16px",
  }}>
    RED for Life. RADAR for Hope.
  </p>
  <h2 style={{
    fontFamily: "var(--font-display)",
    fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
    color: "#ffffff",
    lineHeight: 1.1,
    marginBottom: "24px",
    maxWidth: "700px",
    margin: "0 auto 24px",
  }}>
    A <span style={{ whiteSpace: "nowrap" }}>real-time</span> network designed to help blood donors become discoverable during emergencies.
  </h2>
  <p style={{
    fontSize: "1rem",
    color: "rgba(255,255,255,0.85)", // was 0.55 (~3.7:1); 0.85 is ~7:1 on this red
    lineHeight: 1.8,
    maxWidth: "560px",
    margin: "0 auto",
  }}>
    Stay visible. Receive alerts. Respond when you can. Because sometimes 
    the difference between panic and hope is knowing someone is out&nbsp;there.
  </p>
</div>
<HowItWorks />
      {/* BANNER */}
<div style={{ width: "100%", lineHeight: 0 }}>
  <img
    src={bannerImg}
    alt="Find Donors. Request Blood. Save Lives."
    style={{ width: "100%", height: "auto", display: "block" }}
  />
</div>




      <WhyReddar />
      <Screenshots />
      
      <Faircode />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/hospitals" element={
  <>
    <Navbar />
    <Hospitals />
    <Footer />
  </>
} />

<Route path="/radar-room" element={
  <>
    <Navbar />
    <RadarRoom />
    <Footer />
  </>
} />
        <Route path="/radar-room/:slug" element={
          <>
            <Navbar />
            <RadarRoomArticle />
            <Footer />
          </>
        } />

        <Route path="/stories" element={
          <>
            <Navbar />
            <Stories />
            <Footer />
          </>
        } />

        <Route path="/privacy" element={
          <>
            <Navbar />
            <LegalPage eyebrow="Legal" title="Privacy Policy" blocks={appPrivacyPolicy} updatedLabel={`Effective date: ${APP_PRIVACY_EFFECTIVE} · Last updated: ${APP_PRIVACY_UPDATED}`} />
            <Footer />
          </>
        } />

        <Route path="/contact" element={
          <>
            <Navbar />
            <LegalPage eyebrow="Get in touch" title="Contact Us" blocks={contactPage} showUpdated={false} />
            <Footer />
          </>
        } />

      </Routes>
    </>
  );
}

export default App;