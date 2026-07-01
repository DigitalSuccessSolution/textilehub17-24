import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const C = { 
  primary: '#C5A377', 
  accent: '#C5A377', 
  bg: '#F6F1EA', 
  border: '#E8E2D7', 
  textDark: '#3D3025', 
  textMid: '#3D3025', 
  textMuted: '#C5A377' 
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
  { 
    title: "Innovations in Smart Textiles", 
    date: "July 10, 2026", 
    category: "Innovation", 
    author: "Ananya Patel", 
    description: "An overview of how integrating technology into fabrics is revolutionizing both fashion and functional wear.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=60" 
  },
];

export default function Blog() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center animate-fade-in"
        style={{ background: 'linear-gradient(135deg, #F6F1EA 0%, #E8E2D7 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-normal text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>
            Blog & Insights
          </h1>
          <div className="w-12 h-[2px] mx-auto mt-4 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-[14px] mb-10 font-semibold opacity-80" style={{ color: C.textDark }}>
          Explore our curated stories and expert insights from the world of premium Indian textiles.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
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
              <div className="p-3 sm:p-5 flex flex-col flex-1 text-left">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <span className="text-[9px] sm:text-[11px] font-semibold opacity-70 uppercase tracking-widest line-clamp-1" style={{ color: C.textDark }}>Publish Date: {post.date}</span>
                </div>
                <h3 className="font-bold text-[13px] sm:text-lg mb-2 leading-snug transition-colors serif-title cursor-pointer line-clamp-2" style={{ color: C.textDark }}
                  onMouseEnter={e => e.currentTarget.style.color = C.primary}
                  onMouseLeave={e => e.currentTarget.style.color = C.textDark}>
                  {post.title}
                </h3>
                <p className="text-[9px] sm:text-[12px] mb-2 sm:mb-3 font-semibold opacity-85" style={{ color: C.primary }}>By {post.author}</p>
                <p className="text-[10px] sm:text-xs opacity-80 leading-relaxed line-clamp-3" style={{ color: C.textDark }}>
                  {post.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
