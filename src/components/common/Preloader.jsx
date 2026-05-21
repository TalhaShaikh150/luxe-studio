import React from "react";

const Preloader = () => {
  return (
    <div className="loader-wrap fixed z-100 top-0 left-0 w-full h-full bg-void flex justify-center items-center flex-col z-[100]">
      <div className="line-wrap overflow-hidden">
        <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tighter loader-text translate-y-full text-gold opacity-0">
          Luxe Studio
        </h1>
      </div>
      <div className="w-48 h-[1px] bg-concrete mt-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-silk w-full -translate-x-full loader-bar"></div>
      </div>
    </div>
  );
};

export default Preloader;
