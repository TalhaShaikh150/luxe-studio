// src/components/contact/LocationMap.jsx
import React from "react";

const LocationMap = () => {
  return (
    <section className="w-full h-[60vh] relative grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out border-y border-white/5 group">
      {/* Google Map Embed (Custom Dark Mode Style) */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.232552277717!2d-74.00176468459424!3d40.72254797933094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25988e7b7b7b7%3A0x123456789!2sSoHo%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{
          border: 0,
          filter: "invert(90%) hue-rotate(180deg) contrast(80%)",
        }} // CSS Filter for Dark Mode Map
        allowFullScreen=""
        loading="lazy"
        title="Studio Location"
        className="pointer-events-none group-hover:pointer-events-auto" // Enable interaction only on hover
      ></iframe>

      {/* Overlay Card (Disappears on Hover) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-void p-8 md:p-12 text-center pointer-events-none transition-opacity duration-500 group-hover:opacity-0 shadow-2xl">
        <span className="text-gold text-xs uppercase tracking-widest block mb-4">
          Visit Us
        </span>
        <h3 className="text-3xl md:text-5xl font-display font-bold text-silk">
          Luxe Studio
        </h3>
        <p className="text-concrete text-sm mt-4">142 Greene St, NY</p>
      </div>
    </section>
  );
};

export default LocationMap;
