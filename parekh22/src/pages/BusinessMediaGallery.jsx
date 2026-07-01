import { useState } from 'react';
import { motion } from 'framer-motion';

const C = { primary: '#721C2B', primaryDark: '#4A0E17', accent: '#CDA75E', bg: '#FAF6F0', bgLight: '#EFF3EB', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };

const galleryItems = [
  { title: "Grand Showroom Launch in Mumbai", date: "Oct 12, 2026", category: "Exhibition", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80", desc: "Our major flagship store opens to the public, displaying all luxury sarees, linens and premium materials." },
  { title: "National Handloom Day Celebrations", date: "Aug 07, 2026", category: "Event", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80", desc: "Honoring traditional weaving methods with showcases and live handloom demonstrations at our venues." },
  { title: "Unveiling the Royal Bridal Collection", date: "Sep 01, 2026", category: "Showroom", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80", desc: "An exclusive exhibition showcasing silk lehengas and heavily embroidered sarees for the upcoming wedding season." },
  { title: "Weavers & Artisans Development Workshop", date: "Jun 24, 2026", category: "Workshop", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80", desc: "Helping rural craftsmen integrate with digital systems and master advanced thread-spinning setups." },
  { title: "Annual Textile Merchants Summit", date: "Nov 10, 2026", category: "Event", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80", desc: "Connecting with retail managers and merchant panels to secure clean, durable fibers at scale." }
];

const categories = ["All", "Event", "Exhibition", "Showroom", "Workshop"];

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

      <div className="pb-20 max-w-7xl mx-auto px-4 py-8">
        
        {/* Subtext and category filter list */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-black mb-4" style={{ color: C.accent }}>
            Discover our visual history, manufacturing hubs, global expos, and the brilliant artisans who bring our threads to life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 border-b pb-4" style={{ borderColor: `${C.border}60` }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-5 py-2 text-[11px] font-black uppercase tracking-wider rounded-full transition-all duration-200"
                  style={{
                    background: isActive ? C.primary : 'transparent',
                    color: isActive ? '#FFFFFF' : C.textMid,
                    border: `1.5px solid ${isActive ? C.primary : C.border}`,
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 text-left">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group rounded-2xl overflow-hidden flex flex-col bg-white hover:shadow-md transition-all duration-300"
              style={{ border: `1.5px solid ${C.border}` }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-sm"
                  style={{ background: 'rgba(114,28,43,0.85)', backdropFilter: 'blur(8px)' }}>
                  {item.category}
                </div>
              </div>

              <div className="p-3.5 sm:p-6 flex flex-col flex-1 text-left">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest" style={{ color: C.accent }}>{item.category}</span>
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">{item.date}</span>
                </div>
                <h3 className="font-black text-[12.5px] sm:text-base mb-2 leading-snug transition-colors line-clamp-2"
                  style={{ color: C.textDark }}>
                  {item.title}
                </h3>
                <p className="text-[11.5px] sm:text-[12.5px] font-medium leading-relaxed text-gray-500 line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
