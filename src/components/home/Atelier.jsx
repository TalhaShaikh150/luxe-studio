import React from 'react';

const Atelier = () => {
  return (
    <section id="studio" className="py-32 px-6 md:px-24 bg-silk text-charcoal">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-gold mb-4 block">The Atelier</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Designed for Life.</h2>
          <p className="text-lg leading-relaxed text-stone-600 mb-8">
            We are a collective of architects, artists, and dreamers based in
            SoHo. Our studio operates at the intersection of art and utility.
            We believe that a well-designed space is the ultimate form of
            self-expression.
          </p>
          <a href="#" className="inline-block border-b border-charcoal pb-1 text-xs uppercase tracking-widest hover:text-concrete transition-colors hover-trigger">
            Meet the Team
          </a>
        </div>
        <div className="relative h-[60vh] overflow-hidden hover-trigger group">
          <img
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1000&auto=format&fit=crop"
            className="w-full h-full object-cover transition-all duration-700"
            alt="Studio"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Atelier; 