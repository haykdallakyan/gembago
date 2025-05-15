import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import VideoWalkthrough from './components/VideoWalkthrough';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatIsGemba from './components/WhatIsGemba';
import CaseStudies from './components/CaseStudies';

const HomePage = () => (
  <>
    <Hero />
    <ProblemSolution />
    <Features />
    <VideoWalkthrough videoId="3G29TLZH9uw" />
    <Benefits />
    <HowItWorks />
    <FAQ />
    <FinalCTA />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/what-is-gemba" element={<WhatIsGemba />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;