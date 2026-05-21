import React from 'react';

const AboutTeam = () => {
  const team = [
    { name: "Alexei Vorn", role: "Principal Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" },
    { name: "Sarah Jenkins", role: "Interior Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800" },
    { name: "Marcus Chen", role: "Design Director", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800" },
  ];

  return (
    <section className="px-6 md:px-24 py-32 bg-charcoal border-t border-white/5">
      
      <div className="mb-16 flex justify-between items-end">
        <h3 className="text-5xl font-display text-silk">Leadership</h3>
        <a href="#" className="text-xs uppercase tracking-widest text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors">
          Join Us
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden mb-6 relative bg-void">
              <img 
                src={member.img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                alt={member.name} 
                loading="lazy"
              />
            </div>
            <h4 className="text-2xl font-display text-silk group-hover:text-gold transition-colors">{member.name}</h4>
            <span className="text-xs text-concrete uppercase tracking-widest">{member.role}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AboutTeam;