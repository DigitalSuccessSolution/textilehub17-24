import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Calendar, Filter } from 'lucide-react';

export default function BusinessMediaGallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Premium Cotton Loom Setup",
      category: "Weaving",
      date: "June 2026",
      desc: "High-speed modern weaving loom processing high-quality organic cotton threads.",
      image: "https://images.pexels.com/photos/6634603/pexels-photo-6634603.jpeg"
    },
    {
      id: 2,
      title: "Vibrant Dyed Silk Thread Spools",
      category: "Dyeing",
      date: "June 2026",
      desc: "Spools of premium dyed mulberry silk yarn ready for warp preparation.",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Flagship Textile Showroom Display",
      category: "Retail",
      date: "May 2026",
      desc: "Bespoke curated apparel displays in our premium flagship store at Vara Weaves.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Quality Inspection of Jacquard Fabric",
      category: "Quality Assurance",
      date: "May 2026",
      desc: "Expert inspection team evaluating the weave consistency of Banarasi silk fabrics.",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      title: "Designer Sketching and Drafting Room",
      category: "Design",
      date: "April 2026",
      desc: "Our design lab where new ethnic clothing designs and patterns are conceived.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const categories = ["All", "Weaving", "Dyeing", "Retail", "Quality Assurance", "Design"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pb-16 w-full min-h-screen bg-[#FFF5F6]">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center font-playfair">
            Business Gallery
          </h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">
            Media, Infrastructure & Operations
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Short paragraph of exactly 1 line */}
        <div className="text-center mb-8">
          <p className="text-[#8E5A67] text-xs md:text-sm font-outfit leading-none">
            Take a virtual tour through our modern manufacturing mills, design studios, and luxury retail experience zones.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 text-[#702A3C] text-xs font-bold uppercase tracking-widest mb-4">
            <Filter size={14} className="text-[#C88E9B]" />
            <span>Filter Operations</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl font-outfit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#C88E9B] text-white border-[#C88E9B] shadow-sm scale-105"
                    : "bg-white text-[#702A3C] border-[#C88E9B]/15 hover:!bg-[#C88E9B] hover:!text-white hover:!border-[#C88E9B]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Column Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-xl border border-[#C88E9B]/15 overflow-hidden shadow-sm hover:shadow-md hover:border-[#C88E9B]/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5 cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                {/* Image Section */}
                <div className="aspect-[4/3] w-full overflow-hidden relative shrink-0 bg-[#FFF5F6]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 z-10">
                    <div className="w-10 h-10 rounded-full border border-[#C88E9B] bg-[#702A3C]/85 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={16} />
                    </div>
                    <span className="text-white text-[9px] font-bold tracking-widest uppercase mt-1 font-outfit">
                      Zoom Image
                    </span>
                  </div>
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-[#C88E9B] text-white border-none text-[8px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm shadow-sm z-10 font-outfit">
                    {item.category}
                  </span>
                </div>

                {/* Details Section */}
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <span className="flex items-center gap-1.5 text-[#C88E9B] text-[9px] font-bold uppercase tracking-wider mb-2.5 font-outfit">
                    <Calendar size={11} />
                    {item.date}
                  </span>
                  <h3 className="font-playfair text-base text-[#702A3C] group-hover:text-[#C88E9B] transition-colors duration-300 font-bold uppercase tracking-wide leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#FFF0F2] border border-[#C88E9B]/30 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 text-[#702A3C] bg-white/70 rounded-full p-2.5 hover:bg-[#C88E9B] hover:text-white transition-colors border border-[#C88E9B]/20 cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Image Side */}
              <div className="md:w-3/5 relative min-h-[300px] md:min-h-[450px] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Side */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between text-[#702A3C] bg-[#FFF0F2]">
                <div>
                  <span className="text-[#C88E9B] text-[9px] uppercase tracking-widest font-semibold border border-[#C88E9B]/30 px-3.5 py-1.5 self-start rounded-sm mb-4 inline-block font-outfit">
                    {activeItem.category}
                  </span>
                  <h3 className="font-playfair text-2xl text-[#702A3C] uppercase font-bold tracking-wide mb-3 leading-tight mt-2">
                    {activeItem.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#8E5A67] text-[9px] uppercase tracking-wider mb-5 font-outfit">
                    <Calendar size={11} className="text-[#C88E9B]" />
                    <span>Captured on {activeItem.date}</span>
                  </div>
                  <p className="text-[#702A3C]/90 text-xs md:text-sm leading-relaxed font-outfit">
                    {activeItem.desc}
                  </p>
                </div>
                
                {/* Branding footer inside modal */}
                <div className="border-t border-[#C88E9B]/15 pt-4 mt-8 flex items-center justify-between text-[9px] tracking-widest uppercase text-[#8E5A67] font-outfit">
                  <span>Vara Weaves Operations</span>
                  <span className="text-[#C88E9B]">Live Capture</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
