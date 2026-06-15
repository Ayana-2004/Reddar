import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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
import bannerImg from "./assets/reddar-banner.png";

  
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* MISSION STRIP */}
<div style={{
  background: "#0E0E0E",
  padding: "64px 24px",
  textAlign: "center",
}}>
  <p style={{
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#C0292A",
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
    A real-time network designed to help blood donors become discoverable during emergencies.
  </h2>
  <p style={{
    fontSize: "1rem",
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.8,
    maxWidth: "560px",
    margin: "0 auto",
  }}>
    Stay visible. Receive alerts. Respond when you can. Because sometimes 
    the difference between panic and hope is knowing someone is out there.
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



{/* <HowItWorks /> */}
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
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;