import React, { useState, useRef, useCallback } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
// import SEO from "../components/common/SEO";

// Components
import CustomCursor from "../components/common/CustomCursor";
import Navbar from "../components/common/Navbar";
import MenuOverlay from "../components/common/MenuOverlay";
import Footer from "../components/common/Footer";

// Gallery Components
import GalleryHeader from "../components/gallery/GalleryHeader";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryList from "../components/gallery/GalleryList";
import Philosophy from "../components/gallery/Philosophy";
import Stats from "../components/gallery/Stats";

// Data (Ideally move to a separate data file)
const projectsData = [
  { id: 1, title: "Manhattan Loft", category: "residential", year: "NY", type: "portrait", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000" },
  { id: 2, title: "Aesop Store", category: "commercial", year: "Tokyo", type: "landscape", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600" },
  { id: 3, title: "Brutalist Hall", category: "concept", year: "Render", type: "portrait", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1000" },
  { id: 4, title: "Kyoto Villa", category: "residential", year: "Kyoto", type: "portrait", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" },
  { id: 5, title: "The Library", category: "commercial", year: "London", type: "landscape", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000" },
  { id: 6, title: "Obsidian House", category: "residential", year: "Iceland", type: "landscape", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600" },
];

const Gallery = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const containerRef = useRef(null);

  useSmoothScroll(containerRef, isMenuOpen, setIsMenuOpen);
  
  const toggleMenu = useCallback(() => setIsMenuOpen(p => !p), []);

  return (
    <div ref={containerRef}>
      {/* <SEO title="Selected Works" /> */}
      <CustomCursor />
      <div className="noise-overlay"></div>
      
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MenuOverlay isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <main className="pt-20 bg-void min-h-screen">
        
        <GalleryHeader 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter}
            viewMode={viewMode}
            setViewMode={setViewMode}
        />

        {viewMode === 'grid' ? (
            <GalleryGrid projects={projectsData} activeFilter={activeFilter} />
        ) : (
            <GalleryList projects={projectsData} activeFilter={activeFilter} />
        )}

        <Philosophy/>
        
        <Stats/>

        <Footer />
      </main>
    </div>
  );
};

export default Gallery;