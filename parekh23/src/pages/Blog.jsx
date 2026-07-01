import { useState } from 'react';
import { motion } from 'framer-motion';

const C = { 
  primary: '#6E64B4', 
  accent: '#6E64B4', 
  bg: '#FAF9F5', 
  border: '#E1DFEB', 
  textDark: '#252131', 
  textMid: '#252131', 
  textMuted: '#6E64B4' 
};

const posts = [
  { 
    title: "The Art of Handwoven Silk: A Heritage Revived", 
    date: "June 28, 2026", 
    category: "Craftsmanship", 
    author: "Priya Sharma", 
    description: "Discover the intricate techniques of traditional Indian silk weaving, preserving ancient heritage while adapting to modern styles.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Why Sustainable Fabrics are the Future of Fashion", 
    date: "June 15, 2026", 
    category: "Sustainability", 
    author: "Rajiv Kapoor", 
    description: "How eco-friendly materials like organic cotton and bamboo linen are transforming the clothing industry one loom at a time.",
    image: "https://images.pexels.com/photos/5264914/pexels-photo-5264914.jpeg" 
  },
  { 
    title: "Choosing the Perfect Fabric for Home Furnishing", 
    date: "May 20, 2026", 
    category: "Home Decor", 
    author: "Neha Gupta", 
    description: "Guide to selecting high-durability, premium textures for bedsheets, upholstery, and curtains to elevate your living space.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60" 
  },
];

const categories = ["All", "Craftsmanship", "Sustainability", "Home Decor"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: C.bg, minHeight: '100vh' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center animate-fade-in"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>
            Blog
          </h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="mb-12">
          <p className="text-center text-xs uppercase tracking-widest font-black opacity-60 mb-4" style={{ color: C.textDark }}>
            Explore our curated stories and expert insights from the world of premium Indian textiles.
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white border"
              style={{ borderColor: C.border }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest uppercase border"
                  style={{ background: 'rgba(110, 100, 180, 0.08)', borderColor: 'rgba(110, 100, 180, 0.2)', color: C.primary, backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1 text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] sm:text-[11px] font-semibold opacity-70" style={{ color: C.textDark }}>{post.date}</span>
                </div>
                <h3 className="font-bold text-[13px] sm:text-lg mb-2 leading-snug transition-colors serif-title cursor-pointer" style={{ color: C.textDark }}
                  onMouseEnter={e => e.currentTarget.style.color = C.primary}
                  onMouseLeave={e => e.currentTarget.style.color = C.textDark}>
                  {post.title}
                </h3>
                <p className="text-[10px] sm:text-sm opacity-75 leading-relaxed mb-4 flex-1 line-clamp-3 sm:line-clamp-none" style={{ color: C.textDark }}>
                  {post.description}
                </p>
                <div className="mt-auto pt-4 border-t" style={{ borderColor: C.border }}>
                  <p className="text-[10px] sm:text-[12px] font-semibold opacity-85" style={{ color: C.textDark }}>By {post.author}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
