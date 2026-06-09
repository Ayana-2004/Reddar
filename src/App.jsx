import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
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