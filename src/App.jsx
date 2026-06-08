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
      {/* <RadarRoom/> */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/radar-room" element={<RadarRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;