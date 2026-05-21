import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = (containerRef, isMenuOpen, setIsMenuOpen) => {
  useLayoutEffect(() => {
    let lenis;

    const ctx = gsap.context(() => {
      // 1. Lenis Setup
      lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        smooth: true,
        touchMultiplier: 2,
      });

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // 2. Smooth Anchors
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          const targetElem = document.querySelector(targetId);
          if (targetElem) {
            if (setIsMenuOpen) setIsMenuOpen(false);
            lenis.scrollTo(targetId, {
              offset: 0,
              duration: 2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        });
      });

      // 3. PRELOADER LOGIC (Strict One-Time)
      const hasLoaded = sessionStorage.getItem("hasLoaded");
      const tl = gsap.timeline();

      if (!hasLoaded) {
        // --- FIRST VISIT (Fresh Tab) ---
        sessionStorage.setItem("hasLoaded", "true");

        tl.to(".loader-bar", { 
            width: "100%", 
            duration: 1.2, 
            ease: "power2.inOut" 
        })
        .to(".loader-text", { 
            opacity: 1, 
            y: 0, 
            duration: 0.5 
        }, "-=0.2")
        .to(".loader-wrap", { 
            y: "-100%", 
            duration: 1.0, 
            ease: "power4.inOut", 
            delay: 0.2 
        })
        .to(".collage-text", { 
            y: "0%", 
            duration: 1.1, 
            stagger: 0.05, 
            ease: "power4.out" 
        }, "-=0.9")
        .to(".collage-main", { 
            scale: 1, 
            duration: 1.8, 
            ease: "power2.out" 
        }, "<")
        .to([".collage-fade", ".collage-detail"], { 
            opacity: 1, 
            y: 0, 
            duration: 1.0 
        }, "-=0.8");

      } else {
        // --- RETURNING VISIT (Navigating Back) ---
        
        // 1. Instantly hide loader
        gsap.set(".loader-wrap", { display: "none" });
        
        // 2. Instantly set Hero state to "Visible" (No Animation)
        gsap.set(".collage-text", { y: "0%" });
        gsap.set(".collage-main", { scale: 1 });
        gsap.set([".collage-fade", ".collage-detail"], { opacity: 1, y: 0 });
      }

      // 4. Parallax Logic (Standard)
      if(document.querySelector(".collage-main")) {
        gsap.to(".collage-main", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: { trigger: ".collage-main", start: "top top", end: "bottom top", scrub: true }
        });
      }

      gsap.utils.toArray(".zoom-img").forEach((img) => {
        if (img.closest(".zoom-wrap")) gsap.set(img, { scale: 1.15 });
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.utils.toArray(".parallax-col").forEach((col) => {
          const speed = col.getAttribute("data-speed");
          gsap.to(col, {
            y: -100 * speed,
            scrollTrigger: { trigger: "#gallery", start: "top bottom", end: "bottom top", scrub: 1 }
          });
        });
      });

      gsap.utils.toArray(".text-reveal").forEach((text) => {
        gsap.from(text, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: { trigger: text, start: "top 85%" }
        });
      });

    }, containerRef);

    return () => {
      ctx.revert();
      if (lenis) {
        lenis.destroy();
        gsap.ticker.remove(lenis.raf);
      }
    };
  }, [containerRef]);
};