import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PageHeader = ({ title, subtitle, img, children }) => {

  useEffect(() => {
    gsap.to(".header-bg", {
      yPercent: 30, 
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
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-void/70 z-10"></div> 
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent z-10"></div> 
        
        <img 
          src={img} 
          className="header-bg w-full h-[120%] object-cover opacity-50 grayscale brightness-75"
          alt={title}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 w-full">
        
        {/* Left: Title */}
        <div className="w-full md:w-auto">
          <span className="text-gold text-xs uppercase tracking-widest mb-2 md:mb-4 block animate-fade">
            {subtitle}
          </span>
          <h1 className="text-[15vw] md:text-[8vw] font-display font-bold leading-[0.85] md:leading-[0.8] text-silk animate-fade mix-blend-screen tracking-tighter" dangerouslySetInnerHTML={{ __html: title }}>
            {/* Allows for <span class="text-gold">.</span> in title */}
          </h1>
        </div>

        {/* Right: Optional Controls (Children) */}
        {children && (
            <div className="flex flex-col items-start md:items-end gap-6 md:gap-8 animate-fade w-full md:w-auto">
                {children}
            </div>
        )}

      </div>
    </section>
  );
};

export default PageHeader;