import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ArchiveSlider = () => {
  const archives = [
    { year: "2014", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000" },
    { year: "2017", img: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=1000" },
    { year: "2020", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000" },
    { year: "2023", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000" },
    { year: "2025", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" },
  ];

  // Logic to calculate how far the slider is allowed to be dragged
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // ScrollWidth is the total width of all items, offsetWidth is the visible width on screen
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="py-24 bg-charcoal border-y border-white/5 overflow-hidden">
      
      {/* Header */}
      <div className="px-6 md:px-24 mb-16 flex justify-between items-end select-none">
        <h3 className="text-6xl font-display font-bold text-silk">Timeline</h3>
        <p className="text-gold text-xs uppercase tracking-widest hidden md:block">
          Drag to Explore
        </p>
      </div>

      {/* 
        1. THE WRAPPER: Has overflow-hidden so the extra slides don't break the page 
        2. Ref is attached here to measure the total width 
      */}
      <div ref={carousel} className="overflow-hidden px-6 md:px-24">
        
        {/* 
          3. THE TRACK: This is the actual moving part.
          - drag="x" enables horizontal dragging
          - dragConstraints stops it from scrolling right off the screen
        */}
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex gap-8 md:gap-12 cursor-grab active:cursor-grabbing py-8"
        >
          {archives.map((item, i) => (
            <motion.div 
              key={i} 
              className="relative w-[85vw] md:w-[30vw] shrink-0 aspect-[3/4] group"
            >
              {/* Image Container */}
              <div className="w-full h-full overflow-hidden shadow-2xl transition-transform duration-700 md:group-hover:-translate-y-4">
                <img 
                  src={item.img} 
                  alt={`Archive ${item.year}`}
                  // CRITICAL: pointer-events-none prevents the browser from trying to "save" the image when you click and drag it
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 pointer-events-none select-none" 
                />
              </div>
              
              {/* Year Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-void px-6 py-4 border border-white/10 z-20 group-hover:bg-gold transition-colors duration-300 pointer-events-none select-none">
                <span className="text-3xl font-display font-bold text-silk group-hover:text-void">
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ArchiveSlider;