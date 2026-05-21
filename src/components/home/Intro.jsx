import React from 'react';

const Intro = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-24 bg-void relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-12 h-[1px] bg-gold"></span>
          <span className="text-xs uppercase tracking-widest text-concrete">The Vision</span>
        </div>
        <h2 className="text-3xl md:text-6xl font-display leading-[1.1] text-reveal text-silk">
          We design spaces that feel like{" "}
          <span className="text-gold italic">visual silence</span>. A curated
          blend of raw materiality and refined luxury for the modern
          connoisseur.
        </h2>
      </div>
    </section>
  );
};

export default Intro;