import { useState } from 'react';
import { motion } from 'framer-motion';

const C = { 
  primary: '#6E64B4', 
  primaryDark: '#252131', 
  accent: '#6E64B4', 
  bg: '#FAF9F5', 
  bgLight: '#FAF9F5', 
  border: '#E1DFEB', 
  textDark: '#252131', 
  textMid: '#252131', 
  textMuted: '#6E64B4' 
};

const galleryItems = [
  { 
    title: "Artisan Craftsmanship Showcase", 
    date: "June 20, 2026", 
    category: "Exhibition", 
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Eco-Friendly Fabric Launch Event", 
    date: "May 12, 2026", 
    category: "Launches", 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Annual Loom Weavers Workshop", 
    date: "April 29, 2026", 
    category: "Workshops", 
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Traditional Textiles Expo 2026", 
    date: "March 18, 2026", 
    category: "Exhibition", 
    image: "https://images.pexels.com/photos/7005687/pexels-photo-7005687.jpeg" 
  },
  { 
    title: "Next-Gen Bio-Cotton Production Unit", 
    date: "February 25, 2026", 
    category: "Infrastructure", 
    image: "https://images.pexels.com/photos/7679877/pexels-photo-7679877.jpeg" 
  },
];

const categories = ["All", "Exhibition", "Launches", "Workshops", "Infrastructure"];

export default function BusinessMediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: C.bg, minHeight: '100vh' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>
            Business Media Gallery
          </h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="mb-12">
          <p className="text-center text-xs uppercase tracking-widest font-black opacity-60 mb-4" style={{ color: C.textDark }}>
            Our visual journey and media highlights from textile manufacturing across the country.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer"
                style={{
                  background: selectedCategory === cat ? C.primary : 'transparent',
                  color: selectedCategory === cat ? '#FAF9F5' : C.textDark,
                  borderColor: selectedCategory === cat ? C.primary : C.border,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group rounded-2xl overflow-hidden flex flex-col bg-white cursor-pointer transition-all duration-300 hover:shadow-md border"
              style={{ borderColor: C.border }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.9]"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-[#FAF9F5] shadow-sm"
                  style={{ background: 'rgba(37,33,49,0.7)', backdropFilter: 'blur(8px)' }}>
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider mb-2 opacity-70" style={{ color: C.textDark }}>
                  {item.date}
                </span>
                <h3 className="font-black text-lg leading-snug transition-colors serif-title"
                  style={{ color: C.textDark }}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
