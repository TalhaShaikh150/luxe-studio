import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GalleryGrid = ({ projects, activeFilter }) => {
  const gridRef = useRef(null);

  // Layout Pattern (Applies mainly to Desktop via md: classes)
  const getLayout = (index) => {
    const pattern = [
      { span: "md:col-span-8", height: "h-[50vh] md:h-[60vh]", offset: "mt-0" },
      { span: "md:col-span-4", height: "h-[50vh] md:h-[40vh]", offset: "md:mt-32" },
      { span: "md:col-span-5", height: "h-[50vh] md:h-[70vh]", offset: "md:-mt-20" },
      { span: "md:col-span-7", height: "h-[50vh] md:h-[50vh]", offset: "md:mt-12" },
    ];
    return pattern[index % pattern.length];
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current.querySelectorAll('.gallery-item-wrapper');
      const mm = gsap.matchMedia();

      // --- DESKTOP ANIMATIONS (Complex Parallax) ---
      mm.add("(min-width: 768px)", () => {
        items.forEach((item, i) => {
          const img = item.querySelector('img');
          
          // Image Parallax
          if(img) {
            gsap.fromTo(img, 
              { scale: 1.2, yPercent: -15 },
              { scale: 1.2, yPercent: 15, ease: "none", scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: 1.2 } }
            );
          }

          // Column Offset Parallax
          const yOffset = i % 2 === 0 ? -80 : 80;
          gsap.to(item, {
            y: yOffset,
            ease: "none",
            scrollTrigger: { trigger: gridRef.current, start: "top bottom", end: "bottom top", scrub: 1.5 }
          });
        });
      });

      // --- MOBILE ANIMATIONS (Simple Fade Up) ---
      mm.add("(max-width: 767px)", () => {
        items.forEach((item) => {
           gsap.fromTo(item, 
             { opacity: 0, y: 50 },
             { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 85%" } }
           );
        });
      });

      // --- FILTER LOGIC (Universal) ---
      items.forEach((item) => {
        const category = item.getAttribute('data-category');
        if (activeFilter === 'all' || category === activeFilter) {
            gsap.to(item, { autoAlpha: 1, height: 'auto', display: 'block', marginBottom: 'auto', duration: 0.5 });
        } else {
            gsap.to(item, { autoAlpha: 0, height: 0, display: 'none', marginBottom: 0, duration: 0.5 });
        }
      });

    }, gridRef);
    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section className="px-6 md:px-12 py-16 md:py-40 max-w-[1920px] mx-auto bg-void min-h-screen">
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-x-16 md:gap-y-32">
        
        {projects.map((project, i) => {
          const layout = getLayout(i);

          return (
            <div
              key={project.id}
              className={`gallery-item-wrapper relative group ${layout.span} ${layout.offset}`}
              data-category={project.category}
            >
              
              {/* IMAGE CONTAINER */}
              <div className={`relative w-full ${layout.height} overflow-hidden bg-charcoal shadow-lg rounded-sm`}>
                
                {/* Overlay: Hidden on mobile, Visible on Desktop until hover */}
                <div className="hidden md:block absolute inset-0 bg-void/20 group-hover:bg-transparent z-10 transition-colors duration-700 ease-out"></div>
                
                <img 
                    src={project.img} 
                    className="w-full h-[130%] object-cover -mt-[15%] will-change-transform" 
                    alt={project.title} 
                    loading="lazy" 
                />
              </div>

              {/* INFO BLOCK */}
              <div className="flex justify-between items-start mt-4 md:mt-6 border-t border-white/10 pt-4 
                              opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-500">
                <div>
                    <span className="block text-gold text-[10px] uppercase tracking-[0.2em] mb-1">
                        0{i+1} — {project.year}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-display font-bold text-silk">
                        {project.title}
                    </h3>
                </div>
                <div className="text-right">
                    <span className="block text-concrete text-[10px] md:text-xs uppercase tracking-widest">{project.category}</span>
                    <span className="hidden md:block text-concrete text-xs uppercase tracking-widest mt-1">New York</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GalleryGrid;