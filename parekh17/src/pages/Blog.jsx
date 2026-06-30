import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Calendar, User, Filter } from 'lucide-react';

export default function Blog() {
  const allPosts = [
    {
      title: "The Art of Handloom Weaving in Modern India",
      date: "June 24, 2026",
      category: "Craftsmanship",
      author: "Suresh Kumar",
      excerpt: "Tracing the origins of traditional Indian weaving and how Vara Weaves is reviving century-old handloom techniques for contemporary luxury fashion.",
      readTime: "5 Mins Read",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Sustainable Textiles: Designing for the Future",
      date: "June 18, 2026",
      category: "Sustainability",
      author: "Ananya Sharma",
      excerpt: "How the textile industry is adapting to eco-friendly fibers, natural organic dyes, and zero-waste production principles at Vara Weaves.",
      readTime: "4 Mins Read",
      image: "https://images.pexels.com/photos/35009412/pexels-photo-35009412.jpeg"
    },
    {
      title: "Luxury Silk Care: Keeping the Sheen Alive",
      date: "June 05, 2026",
      category: "Care Guide",
      author: "Rajesh Parekh",
      excerpt: "A comprehensive guide on preserving the gloss, texture, and durability of your Kanjivaram and Banarasi silk sarees for generations to come.",
      readTime: "6 Mins Read",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categories = ["All", "Craftsmanship", "Sustainability", "Care Guide"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pb-16 w-full min-h-screen bg-[#FFF5F6]">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center font-playfair">
            Blogs
          </h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">
            Latest News & Insights
          </p>
        </div>
      </div>
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Short paragraph above categories */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-[#8E5A67] text-xs md:text-sm font-outfit leading-relaxed">
            Explore our collection of articles, insights, and stories directly from the heart of our handloom weaving center, celebrating India's rich textile heritage.
          </p>
          <div className="w-16 h-[1.5px] bg-[#C88E9B]/30 mx-auto mt-4" />
        </div>

        {/* Categories filters above cards */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 text-[#702A3C] text-xs font-bold uppercase tracking-widest mb-3.5">
            <Filter size={12} className="text-[#C88E9B]" />
            <span>Filter by Category</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-xl">
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

        {/* 3 Column Grid (Compact Cards) */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.article 
                layout
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="group bg-white rounded-xl border border-[#C88E9B]/15 overflow-hidden shadow-sm hover:shadow-md hover:border-[#C88E9B]/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Compact Image Section */}
                <div className="h-28 md:h-44 w-full overflow-hidden relative shrink-0 bg-[#FFF5F6]">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent z-0" />
                  <span className="absolute top-3 left-3 bg-[#C88E9B] text-white text-[7.5px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-sm border-none shadow-sm z-10 font-outfit">
                    {post.category}
                  </span>
                </div>
                
                {/* Content Section */}
                <div className="p-4 flex flex-col flex-grow">
                  {/* Meta details */}
                  <div className="flex flex-wrap items-center gap-3.5 text-[#C88E9B] text-[8.5px] font-bold uppercase tracking-wider mb-2.5 font-outfit">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={10} />
                      By {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-playfair text-[11px] md:text-sm text-[#702A3C] group-hover:text-[#C88E9B] transition-colors duration-300 font-bold uppercase tracking-wide leading-snug mb-1 md:mb-2 line-clamp-2 md:line-clamp-none">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-[#8E5A67] text-[9px] md:text-[11px] leading-relaxed mb-3 md:mb-4 flex-grow font-outfit line-clamp-2 md:line-clamp-none">
                    {post.excerpt}
                  </p>
                  
                  {/* Read Button */}
                  <div className="border-t border-[#FFE4E8] pt-3 mt-auto flex items-center justify-between text-[9px] font-bold tracking-widest uppercase text-[#702A3C] group-hover:text-[#C88E9B] transition-colors duration-300 font-outfit">
                    <span>Read Article</span>
                    <ArrowRight size={12} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
