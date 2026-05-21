import React from "react";

const Marquee = () => {
  return (
    <div className="py-8 bg-void text-stone-600 border-b border-white/5">
      <div className="marquee-container">
        <div className="marquee-content text-3xl md:text-5xl font-display font-bold italic">
          AD100 2026 &nbsp; — &nbsp; Vogue Living &nbsp; — &nbsp; Dezeen Awards
          &nbsp; — &nbsp; Elle Decor &nbsp; — &nbsp; The Pakistan Times &nbsp; —
          &nbsp; AD100 2026 &nbsp; — &nbsp; Vogue Living &nbsp; — &nbsp; Dezeen
          Awards &nbsp; — &nbsp;
        </div>
      </div>
    </div>
  );
};

export default Marquee;
