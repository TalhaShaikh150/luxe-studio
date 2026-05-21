import React, { useState, useRef } from 'react';

const BeforeAfter = ({ beforeImg, afterImg }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <section className="py-24 px-6 md:px-24 bg-void">
      <div className="mb-12 text-center">
        <span className="text-gold text-xs uppercase tracking-[0.2em] mb-4 block">Renovation</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-silk">Transformation</h2>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-[60vh] overflow-hidden cursor-ew-resize group select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Background) */}
        <img 
            src={afterImg || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600"} 
            alt="After" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-8 right-8 bg-black/50 backdrop-blur px-3 py-1 text-xs uppercase text-white tracking-widest pointer-events-none">
            After
        </div>

        {/* BEFORE Image (Foreground - Clipped) */}
        <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
        >
            <img 
                src={beforeImg || "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=1000"} 
                alt="Before" 
                className="absolute inset-0 w-full h-[60vh] object-cover max-w-none" // max-w-none keeps image size static
                style={{ width: containerRef.current?.offsetWidth }}
            />
            <div className="absolute top-8 left-8 bg-black/50 backdrop-blur px-3 py-1 text-xs uppercase text-white tracking-widest pointer-events-none">
                Before
            </div>
        </div>

        {/* The Slider Handle */}
        <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-xl">
                <div className="flex gap-4">
                    <span className="text-void text-xs font-bold">←</span>
                    <span className="text-void text-xs font-bold">→</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfter;