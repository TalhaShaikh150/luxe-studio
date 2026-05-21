import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to determine active state styling
  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    const baseClasses =
      "hover-trigger h-full flex items-center px-8 text-[10px] uppercase tracking-[0.2em] transition-all border-l border-white/10";

    return isActive
      ? `${baseClasses} text-silk bg-white/5`
      : `${baseClasses} text-concrete hover:text-silk hover:bg-white/5`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-void/90 backdrop-blur-md border-b border-white/10 overflow-hidden">
      <div className="flex items-stretch h-20 justify-between">
        {/* Cell 1: Logo */}
        {/* FIX: Reduced padding from px-8 to px-5 on mobile to prevent overflow */}
        <div className="flex items-center px-5 md:px-8 border-r border-white/10 shrink-0">
          <Link
            to="/"
            className="text-xl font-display font-bold tracking-tight text-silk hover-trigger"
          >
            Luxe Studio <span className="text-gold">.</span>
          </Link>
        </div>

        {/* Cell 2: Spacer */}
        <div className="flex-grow hidden md:block"></div>

        {/* Cell 3: Desktop Navigation */}
        <nav className="hidden md:flex h-full">
          <Link to="/" className={getLinkClasses("/")}>
            Home
          </Link>

          <Link to="/gallery" className={getLinkClasses("/gallery")}>
            Gallery
          </Link>

          <Link to="/about" className={getLinkClasses("/about")}>
            About
          </Link>

          {/* FIX: Changed to Link and applied active state logic */}
          <Link to="/contact" className={getLinkClasses("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Trigger */}
        {/* FIX: Reduced width from w-20 to w-16 on mobile */}
        <button
          onClick={toggleMenu}
          className="flex md:hidden items-center justify-center w-16 md:w-20 border-l border-white/10 hover-trigger group shrink-0"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 items-end w-6">
            <span
              className={`w-full h-[1px] bg-silk transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : "group-hover:bg-gold"}`}
            ></span>
            <span
              className={`w-2/3 h-[1px] bg-silk transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1 w-full" : "group-hover:w-full group-hover:bg-gold"}`}
            ></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
