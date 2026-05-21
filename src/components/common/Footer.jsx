import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-charcoal pt-32 pb-12 px-6 md:px-12 border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-32">
        <div className="max-w-xl mb-12 md:mb-0">
          <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-none text-silk">
            Let's build
            <br />
            your dream.
          </h2>
          <a
            href="mailto:hello@luxe-studio.com"
            className="border border-silk text-silk px-10 py-4 rounded-full hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 uppercase tracking-widest hover-trigger inline-block"
          >
            Book Consultation
          </a>
        </div>
        <div className="flex gap-16 text-sm uppercase tracking-widest text-concrete">
          <div className="flex flex-col gap-4">
            <span className="text-silk border-b border-white/20 pb-2">
              Socials
            </span>
            <a href="#" className="hover:text-silk transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-silk transition-colors">
              Pinterest
            </a>
            <a href="#" className="hover:text-silk transition-colors">
              Behance
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-silk border-b border-white/20 pb-2">
              Studio
            </span>
            <a href="#" className="hover:text-silk transition-colors">
              Pakistan
            </a>
            <a href="#" className="hover:text-silk transition-colors">
              Paris
            </a>
            <a href="#" className="hover:text-silk transition-colors">
              Tokyo
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end border-t border-white/5 pt-8">
        <h1 className="text-[15vw] leading-[0.7] font-display font-bold text-white/5 select-none">
          Luxe Studio Design
        </h1>
        <p className="text-xs text-concrete uppercase hidden md:block">
          © 2026 Luxe Studio Design
        </p>
      </div>
    </footer>
  );
};

export default Footer;
