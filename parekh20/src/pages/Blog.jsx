import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const C = { primary: '#5F6F5E', accent: '#C5A880', bg: '#F8F5EF', border: '#E2D9CC', textDark: '#2A3325' };

const posts = [
  {
    title: "The Art of Pure Silk Weaving: Traditional Indian Looms",
    date: "June 28, 2026",
    category: "Craftsmanship",
    author: "Ananya Patel",
    description: "Explore the traditional processes and intricate craftsmanship behind India's finest silk sarees, blending heritage looms with modern color palettes.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60"
  },
  {
    title: "Innovations in Wholesale Fabric Dyeing Techniques",
    date: "June 15, 2026",
    category: "Innovation",
    author: "Rajiv Kapoor",
    description: "How modern high-speed dyeing machines and eco-friendly dye formulas are transforming mass textile production while reducing chemical footprints.",
    image: "https://images.pexels.com/photos/5264914/pexels-photo-5264914.jpeg"
  },
  {
    title: "Top 5 Home Upholstery Fabrics for the Festive Season",
    date: "June 02, 2026",
    category: "Trends",
    author: "Neha Gupta",
    description: "Discover how luxury jacquards and textured linens can elevate modern living spaces, combining long-term durability with sleek styles.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60"
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative pt-16 sm:pt-24 pb-6 flex flex-col items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6" style={{ color: C.textDark }}>
            Blog &amp; Articles
          </h1>

          <h2 className="text-base sm:text-lg font-black tracking-widest mb-1 uppercase" style={{ color: C.textDark }}>
            Grand Textile Mart
          </h2>
          <p className="text-[11px] sm:text-[13px] font-black tracking-wide mb-6" style={{ color: C.accent }}>
            Textile Manufacturer &amp; Entrepreneur
          </p>
          <div className="w-32 sm:w-48 h-[1px]" style={{ background: C.border }} />
        </div>
      </div>

      <div className="pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 pt-1 pb-8">

        {/* Category pills */}
        <div className="text-center mb-10">
          <p className="text-[12px] sm:text-[13px] font-semibold mb-4 max-w-md mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Read stories, guides and news directly from the weavers, innovators, and curators of Indian fabrics.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['All', 'Craftsmanship', 'Innovation', 'Trends'].map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer border"
                  style={isActive
                    ? { background: C.primary, color: '#fff', borderColor: C.primary }
                    : { background: '#fff', color: C.primary, borderColor: C.border }
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 bg-white text-left hover:shadow-md"
              style={{ border: `1.5px solid ${C.border}` }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest uppercase"
                  style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.3)', color: C.primary, backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3 text-[10px] uppercase tracking-wider font-black" style={{ color: C.accent }}>
                  <span>{post.category}</span>
                  <span style={{ color: '#6B7280' }}>{post.date}</span>
                </div>
                <h3 className="font-black text-base mb-2.5 leading-snug group-hover:opacity-70 transition-opacity" style={{ color: C.textDark }}>
                  {post.title}
                </h3>
                <p className="text-[12px] mb-4 leading-relaxed font-semibold line-clamp-4" style={{ color: '#4B5563' }}>
                  {post.description}
                </p>
                <div className="mt-auto pt-3 flex items-center justify-between" style={{ borderTop: `1px solid ${C.border}60` }}>
                  <span className="text-[11px] font-black uppercase tracking-wide" style={{ color: '#6B7280' }}>By {post.author}</span>
                  <span className="flex items-center gap-1.5 text-[11px] font-black tracking-wide" style={{ color: C.primary }}>
                    Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
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
