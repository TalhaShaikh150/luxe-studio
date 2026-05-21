import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const MenuOverlay = ({ isMenuOpen, toggleMenu }) => {
  const overlayRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      overlayRef.current.style.clipPath = "inset(0 0 0 0)";
      gsap.to(".menu-link", { y: 0, opacity: 1, stagger: 0.1, delay: 0.3, duration: 0.8, ease: "power3.out" });
    } else {
      overlayRef.current.style.clipPath = "inset(0 0 100% 0)";
      gsap.to(".menu-link", { y: 40, opacity: 0, duration: 0.3 });
    }
  }, [isMenuOpen]);

  const links = [
    { path: "/", label: "Home" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-void z-40 flex flex-col justify-center items-center text-center md:hidden transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]"
      style={{ clipPath: "inset(0 0 100% 0)" }}
    >
      <nav className="flex flex-col gap-6">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={toggleMenu}
            className={`menu-link text-5xl font-display font-bold transition-all translate-y-10 opacity-0 ${
              location.pathname === link.path 
                ? 'text-gold italic' // Active State Style
                : 'text-concrete hover:text-silk hover:italic'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MenuOverlay;