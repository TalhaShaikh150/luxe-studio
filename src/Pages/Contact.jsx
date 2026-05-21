import React, { useState, useRef, useCallback } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

// Common Components
import CustomCursor from "../components/common/CustomCursor";
import Navbar from "../components/common/Navbar";
import MenuOverlay from "../components/common/MenuOverlay";
import Footer from "../components/common/Footer";
import PageHeader from "../components/common/PageHeader";
import ContactSection from "../components/contact/ContactSection";
import LocationMap from "../components/contact/LocationMap";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useSmoothScroll(containerRef, isMenuOpen, setIsMenuOpen);
  const toggleMenu = useCallback(() => setIsMenuOpen((p) => !p), []);

  return (
    <div ref={containerRef}>
      <CustomCursor />
      <div className="noise-overlay"></div>

      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MenuOverlay isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <main className="pt-20 bg-void min-h-screen">
        {/* HEADER */}
        <PageHeader
          title='Get in<span class="text-gold"> Touch</span>'
          subtitle="Start a Project"
          img="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400"
        >
          <div className="flex flex-col items-end gap-2 text-sm text-concrete animate-fade">
            <span>Open for new commissions</span>
            <span className="text-gold">2026 — 2025</span>
          </div>
        </PageHeader>

        <ContactSection />
        <LocationMap />
        <Footer />
      </main>
    </div>
  );
};

export default Contact;
