import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const GalleryList = ({ projects, activeFilter }) => {
  const revealRef = useRef(null);
  const revealImgRef = useRef(null);

  useEffect(() => {
    // Only run mouse logic on Desktop
    if(window.innerWidth > 768) {
        const onMove = (e) => {
            gsap.to(revealRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: "power2.out"
            });
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }
  }, []);

  const handleEnter = (img) => {
    if(window.innerWidth > 768) {
        revealImgRef.current.src = img;
        gsap.to(revealRef.current, { autoAlpha: 1, scale: 1, duration: 0.3 });
    }
  };

  const handleLeave = () => {
    if(window.innerWidth > 768) {
        gsap.to(revealRef.current, { autoAlpha: 0, scale: 0.8, duration: 0.3 });
    }
  };

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section className="px-6 md:px-24 py-20 min-h-screen bg-void relative">
        
        {/* Floating Image (Desktop Only) */}
        <div ref={revealRef} className="fixed top-0 left-0 w-[350px] h-[250px] pointer-events-none z-50 opacity-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl hidden md:block border border-white/10 bg-charcoal">
            <img ref={revealImgRef} className="w-full h-full object-cover" alt="Preview" />
        </div>

        {/* The List */}
        <div className="flex flex-col gap-4">
            {filteredProjects.map((project, i) => (
                <div 
                    key={project.id}
                    className="group relative border-b border-white/10 py-6 md:py-8 cursor-pointer hover-trigger flex flex-col md:flex-row md:items-center justify-between gap-4"
                    onMouseEnter={() => handleEnter(project.img)}
                    onMouseLeave={handleLeave}
                >
                    <div className="flex items-baseline gap-4 md:gap-8 w-full md:w-1/2">
                        <span className="text-xs text-gold font-mono">0{i+1}</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-silk group-hover:translate-x-4 transition-transform duration-500">
                            {project.title}
                        </h2>
                    </div>

                    {/* Mobile Image (Visible only on small screens) */}
                    <div className="md:hidden w-full h-48 overflow-hidden mt-2 mb-2 rounded-sm">
                        <img src={project.img} className="w-full h-full object-cover" alt="Mobile Preview" />
                    </div>

                    <div className="flex justify-between w-full md:w-1/2 text-sm text-concrete uppercase tracking-widest">
                        <span>{project.category}</span>
                        <span className="text-right">{project.year}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default GalleryList;