import React from "react";

const Awards = () => {
  const awards = [
    {
      year: "2026",
      org: "Dezeen Awards",
      award: "Interior of the Year",
      project: "The Vertex",
    },
    {
      year: "2023",
      org: "ArchDaily",
      award: "Best Residential",
      project: "Kyoto Villa",
    },
    { year: "2023", org: "AD100", award: "Hall of Fame", project: "Studio" },
    {
      year: "2022",
      org: "Frame Magazine",
      award: "Retail Design",
      project: "Aesop Soho",
    },
    {
      year: "2021",
      org: "AIA",
      award: "Honor Award",
      project: "Brutalist Hall",
    },
  ];

  return (
    <section className="px-6 md:px-24 py-32 bg-charcoal text-silk">
      <div className="flex justify-between items-end mb-20">
        <h2 className="text-5xl md:text-7xl font-display font-bold">
          Recognition
        </h2>
        <span className="hidden md:block text-xs uppercase tracking-widest text-concrete">
          Selected Honors
        </span>
      </div>

      {/* Table Header */}
      <div className="flex text-xs text-gold px-8 uppercase tracking-widest pb-6 border-b border-white/10">
        <span className="w-1/6">Year</span>
        <span className="w-2/6">Organization</span>
        <span className="w-2/6">Award</span>
        <span className="w-1/6 text-right">Project</span>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {awards.map((item, i) => (
          <div
            key={i}
            className="flex p-8 border-b border-white/10 hover:bg-white/5 transition-colors duration-300 items-center"
          >
            <span className="w-1/6 text-sm font-mono text-concrete">
              {item.year}
            </span>
            <span className="w-2/6 text-lg md:text-xl font-display">
              {item.org}
            </span>
            <span className="w-2/6 text-sm text-concrete">{item.award}</span>
            <span className="w-1/6 text-right text-sm text-silk">
              {item.project}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
