import React from 'react';

const Locations = () => {
  const offices = [
    { city: "New York", address: "142 Greene St, SoHo", time: "09:41 AM" },
    { city: "Tokyo", address: "Minato City, Akasaka", time: "10:41 PM" },
    { city: "Paris", address: "Le Marais, 3rd Arr", time: "03:41 PM" },
  ];

  return (
    <section className="py-32 px-6 md:px-24 bg-void border-t border-white/5">
        <span className="text-gold text-xs uppercase tracking-[0.2em] mb-12 block text-center">
            Global Presence
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
                <div key={i} className="relative group h-[60vh] border border-white/10 p-8 flex flex-col justify-between overflow-hidden hover:border-gold/50 transition-colors duration-500">
                    
                    {/* Top Info */}
                    <div className="relative z-10 flex justify-between items-start">
                        <span className="text-xs text-concrete uppercase tracking-widest">0{i+1}</span>
                        <span className="text-xs text-gold font-mono">{office.time}</span>
                    </div>

                    {/* City Name */}
                    <h3 className="relative z-10 text-5xl md:text-6xl font-display font-bold text-silk group-hover:translate-x-2 transition-transform duration-500">
                        {office.city}
                    </h3>

                    {/* Address */}
                    <p className="relative z-10 text-sm text-concrete uppercase tracking-widest group-hover:text-silk transition-colors">
                        {office.address}
                    </p>

                    {/* Hover Image Background */}
                    <div className="absolute inset-0 opacity-20 transition-opacity duration-700 pointer-events-none">
                        <img 
                            src={`https://images.unsplash.com/photo-${i === 0 ? '1496442226666-8d4d0e62e6e9' : i === 1 ? '1540959733332-eab4deabeeaf' : '1502602898657-3e91760cbb34'}?q=80&w=800`} 
                            className="w-full h-full object-cover grayscale" 
                            alt={office.city} 
                        />
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Locations;