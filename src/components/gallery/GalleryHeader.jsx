import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GalleryHeader = ({ activeFilter, setActiveFilter, setViewMode, viewMode }) => {
  const filters = ['all', 'residential', 'commercial', 'concept'];

  // Parallax Effect for Background
  useEffect(() => {
    gsap.to(".header-bg", {
      yPercent: 30, // Moves the image down slower than scroll
      ease: "none",
      scrollTrigger: {
        trigger: ".header-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <section className="header-section relative min-h-[60vh] flex flex-col justify-end px-6 md:px-12 pb-12 border-b border-white/10 overflow-hidden pt-32 md:pt-0">
      
      {/* BACKGROUND IMAGE WRAPPER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-void/70 z-10"></div> {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent z-10"></div> {/* Bottom Fade */}
        
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400" 
          className="header-bg w-full h-[120%] object-cover opacity-50 grayscale brightness-75"
          alt="Gallery Header Background"
        />
      </div>

      {/* CONTENT (Relative z-20 puts it above background) */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 w-full">
        
        {/* Left: Title */}
        <div className="w-full md:w-auto">
          <span className="text-gold text-xs uppercase tracking-widest mb-2 md:mb-4 block animate-fade">
            The Archive
          </span>
          <h1 className="text-[15vw] md:text-[8vw] font-display font-bold leading-[0.85] md:leading-[0.8] text-silk animate-fade mix-blend-screen tracking-tighter">
            Work<span className="text-gold">.</span>
          </h1>
        </div>

        {/* Right: Controls */}
        <div className="flex flex-col items-start md:items-end gap-6 md:gap-8 animate-fade w-full md:w-auto">
            
            {/* View Toggle */}
            <div className="flex gap-4 text-xs uppercase tracking-widest backdrop-blur-sm bg-void/30 p-1.5 md:p-2 rounded-full border border-white/5 self-start md:self-end">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`hover-trigger px-4 py-2 md:px-3 md:py-1 rounded-full transition-all duration-300 ${viewMode === 'grid' ? 'bg-gold text-void font-bold' : 'text-concrete hover:text-silk'}`}
                >
                  Grid
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`hover-trigger px-4 py-2 md:px-3 md:py-1 rounded-full transition-all duration-300 ${viewMode === 'list' ? 'bg-gold text-void font-bold' : 'text-concrete hover:text-silk'}`}
                >
                  Index
                </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-start md:justify-end gap-4 md:gap-8 text-sm uppercase tracking-widest w-full md:w-auto">
                {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`hover-trigger transition-all duration-300 relative group py-2 md:py-0 ${
                    activeFilter === filter 
                        ? 'text-silk' 
                        : 'text-concrete hover:text-silk'
                    }`}
                >
                    {filter}
                    {/* Animated Underline */}
                    <span className={`absolute left-0 bottom-1 md:-bottom-1 h-[1px] bg-gold transition-all duration-300 ${activeFilter === filter ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHeader;