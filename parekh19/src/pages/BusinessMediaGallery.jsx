import { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { 
    title: "Sustainable Weaving Expo 2026", 
    category: "Exhibition", 
    date: "June 25, 2026",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    title: "New Flagship Showroom Launch", 
    category: "Launch", 
    date: "June 20, 2026",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Annual B2B Distributors Meet", 
    category: "Conferences", 
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Best Textile Brand National Award", 
    category: "Achievement", 
    date: "May 28, 2026",
    image: "https://images.pexels.com/photos/7005687/pexels-photo-7005687.jpeg" 
  },
  { 
    title: "Artisan Weaving Skill Workshop", 
    category: "CSR Initiative", 
    date: "May 15, 2026",
    image: "https://images.pexels.com/photos/7679877/pexels-photo-7679877.jpeg" 
  },
];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF9F6' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#152E47]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Business Media Gallery
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 pt-1 pb-8">
        
        {/* Short paragraph and category pills above cards */}
        <div className="text-center mb-10">
          <p className="text-[12px] sm:text-[13px] font-semibold text-[#6B7280] mb-4 max-w-md mx-auto leading-relaxed">
            Take a visual journey through our corporate events, collection launches, and milestone achievements.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['All', 'Exhibition', 'Launch', 'Conferences', 'Achievement', 'CSR Initiative'].map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs border"
                  style={isActive
                    ? { background: '#244C73', color: '#fff', borderColor: '#244C73' }
                    : { background: '#fff', color: '#244C73', borderColor: '#E8E5DC' }
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group rounded-2xl overflow-hidden flex flex-col bg-white transition-all duration-300 hover:shadow-md"
              style={{ border: '1.5px solid #E8E5DC' }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.95]"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#244C73]"
                  style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.3)', backdropFilter: 'blur(8px)' }}>
                  {item.category}
                </div>
              </div>

              <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[9px] text-[#C5A880] font-bold block mb-1 uppercase tracking-widest">{item.date}</span>
                  <h3 className="font-bold text-xs sm:text-sm mb-1 leading-snug transition-colors text-[#152E47]"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
