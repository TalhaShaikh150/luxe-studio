import React, { useState, useRef } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

// Components
import CustomCursor from "../components/common/CustomCursor";
import Preloader from "../components/common/Preloader";
import Navbar from "../components/common/Navbar";
import MenuOverlay from "../components/common/MenuOverlay";
import Footer from "../components/common/Footer";

// Sections
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import SelectedWorks from "../components/home/SelectedWorks";
import ArchiveSlider from "../components/home/ArchiveSlider";
import Marquee from "../components/home/Marquee";
import Atelier from "../components/home/Atelier";
import Journal from "../components/home/Journal";
import BeforeAfter from "../components/home/BeforeAfter";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  // Initialize animations hook
  useSmoothScroll(containerRef, isMenuOpen, setIsMenuOpen);

  return (
    <div ref={containerRef}>
      <CustomCursor />
      <div className="noise-overlay"></div>

      {/* <Preloader /> */}

      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      <MenuOverlay
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      <main>
        <Hero />
        <Intro />
        <SelectedWorks />
        <ArchiveSlider />
        {/* <Marquee /> */}
        <BeforeAfter/>
        <Journal />
        <Atelier />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
