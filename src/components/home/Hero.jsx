import React from "react";
import { motion } from "framer-motion";

// Custom easing curve for a highly luxurious, buttery smooth feel
const premiumEase = [0.76, 0, 0.24, 1];

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row bg-void overflow-hidden">
      {/* Left: Typography */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-20 z-20 relative">
        <h1 className="text-[12vw] md:text-[8vw] font-display font-bold leading-[0.8] text-silk mb-6">
          {/* Word 1: Masked Reveal */}
          <span className="block overflow-hidden pb-2">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              // Delay matches the page transition, so it animates right as the page appears
              transition={{ duration: 1.2, ease: premiumEase, delay: 0.4 }}
              className="block"
            >
              Luxe Studio
            </motion.span>
          </span>

          {/* Word 2: Masked Reveal (Staggered slightly later) */}
          <span className="block overflow-hidden pb-4">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, ease: premiumEase, delay: 0.5 }}
              className="block text-gold"
            >
              Studio
            </motion.span>
          </span>
        </h1>

        {/* Subtext: Gentle Fade & Slide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase, delay: 0.7 }}
          className="flex items-start gap-8 mt-4 overflow-hidden mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-concrete pt-2">
            Est 2026
          </span>
          <p className="text-lg font-light text-silk/80 max-w-sm">
            We build sanctuaries for the senses. <br />A bespoke approach to
            modern living.
          </p>
        </motion.div>

        {/* Button: Fade & Slide (Staggered last) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="group relative inline-block px-10 py-4 border border-gold/40 rounded-full overflow-hidden w-fit hover-trigger"
          >
            <div className="absolute inset-0 w-full h-full bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
            <span className="relative z-10 text-xs font-medium uppercase tracking-[0.2em] text-gold group-hover:text-void transition-colors duration-300">
              Start A Project
            </span>
          </a>
        </motion.div>
      </div>

      {/* Right: Hero Image */}
      <div className="absolute md:relative inset-0 w-full md:w-1/2 h-full">
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#1c1d20]">
          {/* Image: Slow un-scale and fade-in (Classic Architectural Reveal) */}
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
            className="w-full h-full object-cover opacity-60 md:opacity-100 sepia-[20%] brightness-75 contrast-125"
            alt="Space"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
