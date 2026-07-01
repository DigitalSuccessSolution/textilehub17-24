import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const C = { primary: '#721C2B', accent: '#CDA75E', bg: '#FAF6F0', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };

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

const categories = ["All", "Craftsmanship", "Trends", "Sustainability"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(p => p.category === activeCategory);
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative pt-16 sm:pt-24 pb-10 flex flex-col items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-black text-4xl sm:text-5xl mb-6" style={{ color: C.textDark }}>
            Blog
          </h1>
       
          <div className="w-32 sm:w-48 h-[1px]" style={{ background: C.border }} />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-8">
        
        {/* Categories Paragraph and Tabs above cards */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-black mb-4" style={{ color: C.accent }}>
            Explore our latest articles, insights and stories from the world of premium fabrics and traditional handlooms.
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

        {/* Blog Post Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white"
              style={{ border: `1.5px solid ${C.border}` }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest uppercase"
                  style={{ background: 'rgba(255,255,255,0.9)', border: `1px solid ${C.border}`, color: C.primary, backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-3.5 sm:p-6 flex flex-col flex-1 text-left">
                <div className="flex items-center gap-2 sm:gap-3 mb-2.5">
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest" style={{ color: C.accent }}>{post.date}</span>
                  <span className="w-1 h-1 rounded-full" style={{ background: C.accent }} />
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">By {post.author}</span>
                </div>
                <h3 className="font-black text-[12.5px] sm:text-base mb-2 leading-snug transition-colors line-clamp-2" style={{ color: C.textDark }}
                  onMouseEnter={e => e.currentTarget.style.color = C.primary}
                  onMouseLeave={e => e.currentTarget.style.color = C.textDark}>
                  {post.title}
                </h3>
                <p className="text-[11.5px] sm:text-[13px] leading-relaxed mb-3 font-medium text-gray-500 line-clamp-3" style={{ color: C.textMid }}>
                  {post.description}
                </p>
                <div className="mt-auto pt-2.5" style={{ borderTop: `1px solid ${C.border}60` }}>
                  <span className="flex items-center gap-1.5 text-[11px] font-black tracking-widest uppercase cursor-pointer" style={{ color: C.primary }}>
                    Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
