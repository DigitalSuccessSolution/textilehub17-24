import { useState } from 'react';
import { motion } from 'framer-motion';

const C = { primary: '#721C2B', accent: '#CDA75E', bg: '#FAF6F0', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };

const categories = ["All", "Craftsmanship", "Trends", "Sustainability"];

const posts = [
  {
    title: "The Art of Banarasi Silk Weaving",
    date: "Jun 28, 2026",
    category: "Craftsmanship",
    author: "Ananya Iyer",
    description: "Delve deep into the centuries-old heritage of Banarasi weavers. Discover how fine silk threads are intertwined with real gold and silver zari to create timeless masterpieces.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80"
  },
  {
    title: "Modern Trends in Indian Ethnic Fusion Wear",
    date: "Jun 15, 2026",
    category: "Trends",
    author: "Rajesh Sen",
    description: "Explore how contemporary silhouettes are blending with traditional Indian handlooms to reshape ethnic fashion for the modern generation.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80"
  },
  {
    title: "Sustainable Fashion: The Handloom Revolution",
    date: "Jun 05, 2026",
    category: "Sustainability",
    author: "Priya Das",
    description: "Hand-spun, hand-woven, and naturally dyed. Learn why switching to handloom apparel supports local weavers and promotes an eco-friendly wardrobe.",
    image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=80"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative pt-16 pb-10 flex flex-col items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-black text-4xl sm:text-5xl mb-6" style={{ color: C.textDark }}>
            Blog
          </h1>
        
          <div className="w-32 sm:w-48 h-[1px]" style={{ background: C.border }} />
        </div>
      </div>

      {/* Categories & Filter Section */}
      <div className="max-w-7xl mx-auto px-4 pt-12 text-center">
        {/* Small half-line description paragraph */}
        <p className="text-[13px] sm:text-sm font-semibold tracking-wide mb-5 max-w-xl mx-auto" style={{ color: '#6B7280' }}>
          Explore our latest insights, trends, and stories from the heart of Indian heritage and handloom craftsmanship.
        </p>

        {/* Categories above cards */}
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
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white text-left"
                style={{ border: `1.5px solid ${C.border}` }}
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-black tracking-widest uppercase"
                    style={{ background: 'rgba(250,246,240,0.9)', border: `1px solid ${C.border}`, color: C.primary, backdropFilter: 'blur(6px)' }}>
                    {post.category}
                  </div>
                </div>
                <div className="p-3.5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-3 text-[9px] sm:text-[11px]">
                    <span className="font-semibold text-gray-500">{post.date}</span>
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: C.primary }} />
                    <span className="font-semibold text-gray-500 truncate">By {post.author}</span>
                  </div>
                  <h3 className="font-black text-xs sm:text-lg mb-2 sm:mb-3 leading-snug line-clamp-2" style={{ color: C.textDark }}>
                    {post.title}
                  </h3>
                  <p className="text-[11px] sm:text-[12.5px] leading-relaxed mb-2 sm:mb-6 font-medium text-gray-600 line-clamp-2 sm:line-clamp-none">
                    {post.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-sm font-semibold" style={{ color: C.textMuted }}>No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
