import React from "react";

const Journal = () => {
  const articles = [
    {
      category: "Trends",
      title: "The Return of Dark Wood",
      date: "Oct 12",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
    },
    {
      category: "Press",
      title: "Featured in Vogue Living",
      date: "Sep 28",
      img: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=1000",
    },
    {
      category: "Awards",
      title: "AD100 Winner 2026",
      date: "Aug 15",
      img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000",
    },
  ];

  return (
    <section
      id="journal"
      className="py-24 px-6 md:px-12 bg-silk text-void border-t border-charcoal/10"
    >
      {/* Header */}
      <div className="flex justify-between items-end mb-12 border-b border-charcoal/20 pb-6">
        <h2 className="text-6xl font-display font-bold uppercase tracking-tight">
          The Journal
        </h2>
        <span className="text-xs uppercase tracking-widest text-charcoal/60">
          Read Insights
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured Article (Large) */}
        <div className="md:col-span-8 group cursor-pointer">
          <div className="overflow-hidden aspect-video mb-6">
            <img
              src={articles[0].img}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Main"
            />
          </div>
          <div className="flex justify-between items-start border-t border-charcoal/20 pt-4">
            <div>
              <span className="text-xs text-gold uppercase tracking-widest mb-2 block">
                {articles[0].category}
              </span>
              <h3 className="text-4xl font-display font-bold leading-tight group-hover:text-charcoal/70 transition-colors">
                {articles[0].title}
              </h3>
            </div>
            <span className="text-xs uppercase tracking-widest mt-1">
              {articles[0].date}
            </span>
          </div>
        </div>

        {/* Sidebar List (Small) */}
        <div className="md:col-span-4 flex flex-col gap-8 border-l border-charcoal/10 pl-8">
          {articles.slice(1).map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[3/2] mb-4">
                <img
                  src={article.img}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Thumb"
                />
              </div>
              <span className="text-[10px] text-gold uppercase tracking-widest mb-1 block">
                {article.category}
              </span>
              <h4 className="text-xl font-display font-bold group-hover:underline decoration-gold underline-offset-4">
                {article.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
