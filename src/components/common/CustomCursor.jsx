import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // 1. Mobile Check: If touch device, do nothing.
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth < 768) return;

    const cursor = cursorRef.current;
    
    // 2. Movement Logic
    const moveCursor = (e) => {
      // Using transform allows sub-pixel rendering (smoother than top/left)
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };
    
    const addHover = () => cursor?.classList.add("hovered");
    const removeHover = () => cursor?.classList.remove("hovered");

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", (e) => {
      if(e.target.closest(".hover-trigger")) addHover();
    });
    document.addEventListener("mouseout", (e) => {
      if(e.target.closest(".hover-trigger")) removeHover();
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      // Clean up other listeners...
    };
  }, []);

  // Hidden on mobile via Tailwind (hidden md:block)
  return <div id="cursor" ref={cursorRef} className="hidden md:block"></div>;
};

export default CustomCursor;