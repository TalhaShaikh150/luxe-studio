// src/components/gallery/Stats.jsx
import React from 'react';

const Stats = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        
        <div>
            <span className="block text-5xl md:text-7xl font-display font-bold text-silk mb-2">10+</span>
            <span className="text-xs text-gold uppercase tracking-widest">Years Active</span>
        </div>
        <div>
            <span className="block text-5xl md:text-7xl font-display font-bold text-silk mb-2">42</span>
            <span className="text-xs text-gold uppercase tracking-widest">Projects Completed</span>
        </div>
        <div>
            <span className="block text-5xl md:text-7xl font-display font-bold text-silk mb-2">08</span>
            <span className="text-xs text-gold uppercase tracking-widest">Design Awards</span>
        </div>
        <div>
            <span className="block text-5xl md:text-7xl font-display font-bold text-silk mb-2">03</span>
            <span className="text-xs text-gold uppercase tracking-widest">Continents</span>
        </div>

      </div>
    </section>
  );
};

export default Stats;