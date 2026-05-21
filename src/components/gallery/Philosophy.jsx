// src/components/gallery/Philosophy.jsx
import React from 'react';

const Philosophy = () => {
  return (
    <section className="py-40 px-6 md:px-24 bg-silk text-void flex flex-col items-center text-center">
      <span className="text-gold text-xs uppercase tracking-[0.3em] mb-8">Our Ethos</span>
      <h2 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] max-w-4xl mb-12">
        We believe that space is not just visual—it is emotional.
      </h2>
      <div className="flex gap-12 text-left mt-8">
        <div className="max-w-xs">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Materiality</h4>
            <p className="text-charcoal/70 text-sm leading-relaxed">
                Honest materials that age with grace. Stone, wood, and light form the foundation of our palette.
            </p>
        </div>
        <div className="max-w-xs hidden md:block">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Timelessness</h4>
            <p className="text-charcoal/70 text-sm leading-relaxed">
                Rejecting trends in favor of permanence. We design spaces meant to last generations.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;