import { useState } from 'react';
import { motion } from 'framer-motion';

const C = { primary: '#721C2B', primaryDark: '#4A0E17', accent: '#CDA75E', bg: '#FAF6F0', bgLight: '#FCEEF1', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };

const categories = ["All", "Event", "Exhibition", "Showroom", "Workshop"];

const galleryItems = [
  { title: "Grand Showroom Launch in Mumbai", date: "Oct 12, 2026", category: "Exhibition", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80" },
  { title: "National Handloom Day Celebrations", date: "Aug 07, 2026", category: "Event", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80" },
  { title: "Unveiling the Royal Bridal Collection", date: "Sep 01, 2026", category: "Showroom", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80" },
  { title: "Weavers & Artisans Development Workshop", date: "Jun 24, 2026", category: "Workshop", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80" },
  { title: "Annual Textile Merchants Summit", date: "Nov 10, 2026", category: "Event", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80" }
];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: `linear-gradient(135deg, ${C.bgLight} 0%, ${C.bg} 100%)`, borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl" style={{ color: C.textDark }}>
            Media Gallery
          </h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      {/* Intro & Categories Navigation */}
      <div className="max-w-7xl mx-auto px-4 pt-12 text-center">
        {/* Short 1-line paragraph above categories */}
        <p className="text-[13px] sm:text-sm font-semibold tracking-wide mb-5 max-w-xl mx-auto" style={{ color: '#6B7280' }}>
          Explore key business highlights, collection reveals, and artisan meets at Ethnic Elegance.
        </p>

        {/* Categories navigation */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-[12px] font-bold transition-all duration-200 cursor-pointer shadow-sm"
              style={activeCategory === cat
                ? { background: C.primary, color: '#fff' }
                : { background: '#FFFFFF', color: C.textMid, border: `1.5px solid ${C.border}` }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group rounded-2xl overflow-hidden flex flex-col bg-white transition-all duration-300 hover:shadow-md"
                style={{ border: `1.5px solid ${C.border}` }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-sm"
                    style={{ background: 'rgba(114,28,43,0.9)', backdropFilter: 'blur(8px)' }}>
                    {item.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: C.accent }}>
                    {item.date}
                  </span>
                  <h3 className="font-black text-sm leading-snug" style={{ color: C.textDark }}>
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-sm font-semibold" style={{ color: C.textMuted }}>No gallery items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
