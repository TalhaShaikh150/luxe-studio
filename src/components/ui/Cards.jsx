import React from 'react';

export const ProjectCard = ({ img, title, location }) => (
  <article className="group hover-trigger cursor-pointer">
    <div className="overflow-hidden mb-4 zoom-wrap aspect-[3/4]">
      <img
        src={img}
        className="w-full h-full object-cover transition-all duration-700 zoom-img"
        alt={title}
        loading="lazy"
      />
    </div>
    <h4 className="text-2xl font-display text-silk">{title}</h4>
    <p className="text-xs text-concrete uppercase tracking-widest">{location}</p>
  </article>
);

export const JournalCard = ({ img, category, title }) => (
  <article className="group cursor-pointer hover-trigger">
    <div className="aspect-[4/3] overflow-hidden mb-6">
      <img
        src={img}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        alt={title}
        loading="lazy"
      />
    </div>
    <span className="text-xs text-gold uppercase tracking-widest mb-2 block">{category}</span>
    <h3 className="text-xl font-display font-bold group-hover:text-gold transition-colors">{title}</h3>
  </article>
);