import { motion } from 'framer-motion';

const C = { 
  primary: '#C5A377', 
  primaryDark: '#3D3025', 
  accent: '#C5A377', 
  bg: '#F6F1EA', 
  bgLight: '#FAF7F2', 
  border: '#E8E2D7', 
  textDark: '#3D3025', 
  textMid: '#3D3025', 
  textMuted: '#C5A377' 
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

export default function BusinessMediaGallery() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #F6F1EA 0%, #E8E2D7 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-normal text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>
            Business Media Gallery
          </h1>
          <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {galleryItems.map((item, idx) => (
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
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#F6F1EA] shadow-sm"
                  style={{ background: 'rgba(61,48,37,0.85)', backdropFilter: 'blur(8px)' }}>
                  {item.category}
                </div>
              </div>

              <div className="p-3 sm:p-5 flex flex-col flex-1">
                <p className="text-[9px] sm:text-[11px] font-bold uppercase tracking-widest mb-1 sm:mb-2 opacity-70 line-clamp-1" style={{ color: C.textMid }}>
                  {item.date}
                </p>
                <h3 className="font-bold text-[13px] sm:text-base leading-snug transition-colors serif-title line-clamp-2"
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
