import React from 'react';

const Services = () => {
  const services = [
    { title: "Architectural Design", desc: "Full-scale structural planning and execution." },
    { title: "Interior Architecture", desc: "Spatial planning and material selection." },
    { title: "Bespoke Furniture", desc: "Custom pieces designed specifically for your space." },
    { title: "Art Curation", desc: "Sourcing vintage and contemporary art." },
    { title: "Landscape Design", desc: "Blurring the boundary between indoor and outdoor." },
  ];

  return (
    <section className="px-6 md:px-24 py-32 bg-void border-b border-white/5">
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* Left: Sticky Title */}
        <div className="w-full md:w-1/3">
            <div className="md:sticky md:top-32">
                <span className="text-gold text-xs uppercase tracking-[0.2em] mb-4 block">
                    Capabilities
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-silk mb-8">
                    Holistic<br/>Design.
                </h2>
                <p className="text-concrete text-sm leading-relaxed max-w-xs">
                    We manage every detail, from the first sketch to the final door handle.
                </p>
            </div>
        </div>

        {/* Right: The List */}
        <div className="w-full md:w-2/3 flex flex-col">
            {services.map((service, i) => (
                <div key={i} className="group border-t border-white/10 py-12 hover:bg-white/5 transition-colors duration-500 px-4 cursor-pointer">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl md:text-3xl font-display text-silk group-hover:text-gold transition-colors">
                            {service.title}
                        </h3>
                        <span className="text-2xl text-concrete group-hover:text-gold group-hover:rotate-45 transition-all duration-300">
                            ↗
                        </span>
                    </div>
                    <p className="text-concrete text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {service.desc}
                    </p>
                </div>
            ))}
            <div className="border-t border-white/10"></div>
        </div>

      </div>
    </section>
  );
};

export default Services;