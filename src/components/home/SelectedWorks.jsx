import React from 'react';
import { ProjectCard } from '../ui/Cards';

const SelectedWorks = () => {
  return (
    <>
      <section id="gallery" className="py-20 bg-void overflow-hidden relative">
        <div className="px-6 md:px-24 mb-20 flex justify-between items-end">
          <h3 className="text-5xl md:text-7xl font-display font-bold">
            Selected<br />Works
          </h3>
          <a href="#" className="text-xs uppercase tracking-widest text-gold border-b border-gold pb-1 hidden md:block">
            View Full Archive
          </a>
        </div>

        {/* Changed to md:grid-cols-3 for a 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-6 md:px-12">
          
          {/* Card 1 - Top Left */}
          <div className="flex flex-col gap-6 md:mt-0 parallax-col">
            <article className="group hover-trigger cursor-pointer">
              <div className="overflow-hidden mb-4 zoom-wrap aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 zoom-img" 
                  alt="Penthouse" 
                  loading="lazy" 
                />
              </div>
              <h4 className="text-2xl font-display">The Vertex</h4>
              <p className="text-xs text-concrete uppercase tracking-widest">Manhattan, NY</p>
            </article>
          </div>

          {/* Card 2 - Top Middle (Pushed down slightly) */}
          <div className="flex flex-col gap-6 md:mt-16 parallax-col">
            <article className="group hover-trigger cursor-pointer">
              <div className="overflow-hidden mb-4 zoom-wrap aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 zoom-img" 
                  alt="Villa" 
                  loading="lazy" 
                />
              </div>
              <h4 className="text-2xl font-display">Nordic Villa</h4>
              <p className="text-xs text-concrete uppercase tracking-widest">Oslo, Norway</p>
            </article>
          </div>

          {/* Card 3 - Top Right */}
          <div className="flex flex-col gap-6 md:mt-0 parallax-col">
            <article className="group hover-trigger cursor-pointer">
              <div className="overflow-hidden mb-4 zoom-wrap aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1000" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 zoom-img" 
                  alt="Loft" 
                  loading="lazy" 
                />
              </div>
              <h4 className="text-2xl font-display">The Loft</h4>
              <p className="text-xs text-concrete uppercase tracking-widest">Soho, London</p>
            </article>
          </div>

          {/* Card 4 - Bottom Left */}
          <div className="flex flex-col gap-6 md:mt-0 parallax-col">
            <article className="group hover-trigger cursor-pointer">
              <div className="overflow-hidden mb-4 zoom-wrap aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 zoom-img" 
                  alt="House" 
                  loading="lazy" 
                />
              </div>
              <h4 className="text-2xl font-display">Kyoto House</h4>
              <p className="text-xs text-concrete uppercase tracking-widest">Kyoto, Japan</p>
            </article>
          </div>

          {/* Card 5 - Bottom Middle (Pushed down slightly) */}
          <div className="flex flex-col gap-6 md:mt-16 parallax-col">
            <article className="group hover-trigger cursor-pointer">
              <div className="overflow-hidden mb-4 zoom-wrap aspect-[3/4]">
                <img 
                                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" 

                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 zoom-img" 
                  alt="Desert Pavilion" 
                  loading="lazy" 
                />
              </div>
              <h4 className="text-2xl font-display">Desert Pavilion</h4>
              <p className="text-xs text-concrete uppercase tracking-widest">Palm Springs, CA</p>
            </article>
          </div>

          {/* Card 6 - Bottom Right */}
          <div className="flex flex-col gap-6 md:mt-0 parallax-col">
            <article className="group hover-trigger cursor-pointer">
              <div className="overflow-hidden mb-4 zoom-wrap aspect-[3/4]">
                <img 
                                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" 

                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 zoom-img" 
                  alt="Modern House" 
                  loading="lazy" 
                />
              </div>
              <h4 className="text-2xl font-display">The Glasshouse</h4>
              <p className="text-xs text-concrete uppercase tracking-widest">Melbourne, AU</p>
            </article>
          </div>

        </div>
      </section>
    </>
  );
};

export default SelectedWorks;