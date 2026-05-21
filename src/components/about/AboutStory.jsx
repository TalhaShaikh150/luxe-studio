import React from "react";

const AboutStory = () => {
  return (
    <section className="px-6 md:px-24 py-32 flex flex-col md:flex-row gap-16 md:gap-32 border-b border-white/5">
      {/* Left Column: Heading */}
      <div className="w-full md:w-1/3">
        <span className="text-gold text-xs uppercase tracking-[0.2em] mb-4 block animate-fade">
          Our Origin
        </span>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-silk animate-fade">
          From Silence to Form.
        </h2>
      </div>

      {/* Right Column: Narrative */}
      <div className="w-full md:w-2/3 flex flex-col gap-8 animate-fade">
        <p className="text-xl text-silk font-light leading-relaxed">
          Luxe Studio was founded in 2026 with a singular mission: to create
          spaces that allow the mind to rest. In an era of noise, we design
          silence.
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-concrete text-sm leading-relaxed">
          <p>
            Our approach is rooted in the belief that architecture is not just
            about shelter, but about feeling. We strip away the unnecessary to
            reveal the essential beauty of structure, light, and material.
          </p>
          <p>
            Every project is a dialogue between the client, the site, and the
            materials. We do not impose a style; we uncover the potential of the
            space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
