import React, { useState, useRef, useCallback } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

// Common Components
import CustomCursor from "../components/common/CustomCursor";
import Navbar from "../components/common/Navbar";
import MenuOverlay from "../components/common/MenuOverlay";
import Footer from "../components/common/Footer";
import PageHeader from "../components/common/PageHeader";

// About Components
import AboutStory from "../components/about/AboutStory";
import Services from "../components/about/Services"; // New
import AboutTeam from "../components/about/AboutTeam";
import Awards from "../components/about/Awards"; // New
import Locations from "../components/about/Locations"; // New

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useSmoothScroll(containerRef, isMenuOpen, setIsMenuOpen);
  const toggleMenu = useCallback(() => setIsMenuOpen(p => !p), []);

  return (
    <div ref={containerRef}>
     
      <CustomCursor />
      <div className="noise-overlay"></div>
      
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MenuOverlay isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <main className="pt-20 bg-void min-h-screen">
        
        {/* Header */}
        <PageHeader 
            title='The<span class="text-gold"> Studio</span>' 
            subtitle="Who We Are"
            img="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400"
        >
            <p className="text-concrete text-sm max-w-xs md:text-right leading-relaxed hidden md:block animate-fade">
                Defining the future of living through silence and light.
            </p>
        </PageHeader>

        <AboutStory />
        
        {/* New Sections Added Here */}
        <Services />
        <Awards />
        
        <AboutTeam />
        
        <Locations />

        <Footer />
      </main>
    </div>
  );
};

export default About;