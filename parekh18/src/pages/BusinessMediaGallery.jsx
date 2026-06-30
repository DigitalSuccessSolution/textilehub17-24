import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Calendar, Filter } from 'lucide-react';

export default function BusinessMediaGallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Exhibition at National Textile Expo 2026",
      category: "Exhibitions",
      date: "October 10, 2026",
      desc: "Showcasing our signature royal Kanjivaram sarees and heritage brocades at the annual National Textile Expo.",
      image: "https://images.pexels.com/photos/23232407/pexels-photo-23232407.jpeg"
    },
    {
      id: 2,
      title: "Weaver Empowerment Workshop in Varanasi",
      category: "Community",
      date: "September 15, 2026",
      desc: "Our collaborative training workshop empowering local handloom weavers with modern dye techniques and digital design tools.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Behind the Scenes: Silk Saree Photo Shoot",
      category: "Fashion Shoot",
      date: "August 04, 2026",
      desc: "Capturing the elegance of our upcoming bridal silk collection for the luxury autumn/winter catalog shoot.",
      image: "https://images.pexels.com/photos/31660165/pexels-photo-31660165.jpeg"
    },
    {
      id: 4,
      title: "Launch of Eco-Friendly Organic Cotton Line",
      category: "Sustainability",
      date: "July 20, 2026",
      desc: "Covering the press release and media launch of our sustainable organic cotton shirting and home furnishings collection.",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      title: "Inauguration of New Retail Showroom in Bangalore",
      category: "Store Launch",
      date: "June 30, 2026",
      desc: "Ribbon cutting and grand inauguration ceremony of our flagship luxury retail experience centre.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const categories = ["All", "Exhibitions", "Community", "Fashion Shoot", "Sustainability", "Store Launch"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pb-16 w-full min-h-screen bg-pearl-100">
      <div className="max-w-6xl mx-auto px-6 pt-10 md:pt-14">
        {/* Direct Page Heading (No Banner) */}
        <div className="mb-10 text-left">
          <h1 className="text-[#3D223B] border-b border-[#BD7B88]/20 pb-4 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
            Business Media Gallery
          </h1>
        </div>
        {/* Short description paragraph above categories */}
        <div className="text-left mb-6 max-w-xl">
          <p className="text-gray-650 text-xs md:text-sm font-outfit leading-relaxed border-l-2 border-[#BD7B88] pl-3 italic">
            Explore our media features, press announcements, and latest events from our luxury weaving hubs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-col items-start mb-10 border-b border-[#BD7B88]/15 pb-6">
          <div className="flex items-center gap-2 text-[#BD7B88] text-xs font-bold uppercase tracking-widest mb-4">
            <Filter size={14} />
            <span>Filter Operations</span>
          </div>
          <div className="flex flex-wrap justify-start gap-2.5 max-w-4xl font-outfit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#3D223B] text-white border-[#BD7B88] shadow-md scale-105"
                    : "bg-white text-[#3D223B] border-[#BD7B88]/20 hover:!bg-[#3D223B] hover:!text-white hover:border-[#BD7B88]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-xl border border-[#BD7B88]/15 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#BD7B88]/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 cursor-pointer text-left"
                onClick={() => setActiveItem(item)}
              >
                {/* Image Section */}
                <div className="aspect-[4/3] w-full overflow-hidden relative shrink-0 bg-[#FAF4F6]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 z-10">
                    <div className="w-10 h-10 rounded-full border border-[#BD7B88] bg-[#3D223B]/75 flex items-center justify-center text-[#BD7B88] scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={16} />
                    </div>
                    <span className="text-[#BD7B88] text-[9px] font-bold tracking-widest uppercase mt-1 font-outfit">
                      Zoom Image
                    </span>
                  </div>
                  {/* Category Tag */}
                  <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#3D223B] text-[#BD7B88] border border-[#BD7B88]/20 text-[7px] sm:text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 sm:px-3 sm:py-1 rounded-sm shadow-md z-10 font-outfit">
                    {item.category}
                  </span>
                </div>

                {/* Details Section */}
                <div className="p-3 sm:p-6 flex flex-col flex-grow bg-white text-left">
                  <span className="flex items-center gap-1.5 text-[#BD7B88] text-[7px] sm:text-[9px] font-semibold uppercase tracking-wider mb-2 font-outfit">
                    <Calendar size={10} />
                    {item.date}
                  </span>
                  <h3 className="font-playfair text-xs sm:text-lg text-[#3D223B] group-hover:text-[#BD7B88] transition-colors duration-300 font-bold uppercase tracking-wide leading-snug mb-1 sm:mb-2 line-clamp-2">
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
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#3D223B] border border-[#BD7B88]/30 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 text-[#BD7B88] bg-black/60 rounded-full p-2.5 hover:bg-black hover:text-white transition-colors border border-[#BD7B88]/20 cursor-pointer"
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
              <div className="md:w-2/5 p-8 flex flex-col justify-between text-white bg-[#3D223B] text-left">
                <div>
                  <span className="text-[#BD7B88] text-[9px] uppercase tracking-widest font-semibold border border-[#BD7B88]/30 px-3.5 py-1.5 self-start rounded-sm mb-4 inline-block font-outfit">
                    {activeItem.category}
                  </span>
                  <h3 className="font-playfair text-2xl text-[#F6EDF0] uppercase font-bold tracking-wide mb-3 leading-tight mt-2">
                    {activeItem.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-gray-400 text-[9px] uppercase tracking-wider mb-5 font-outfit">
                    <Calendar size={11} className="text-[#BD7B88]" />
                    <span>Captured on {activeItem.date}</span>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-outfit">
                    {activeItem.desc}
                  </p>
                </div>
                
                {/* Branding footer inside modal */}
                <div className="border-t border-[#BD7B88]/15 pt-4 mt-8 flex items-center justify-between text-[9px] tracking-widest uppercase text-gray-400 font-outfit">
                  <span>Royal Weaves Operations</span>
                  <span className="text-[#BD7B88]">Live Capture</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
