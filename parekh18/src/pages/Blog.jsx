import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Tag } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "The Art of Handloom Weaving: A Heritage Revived",
      author: "Rajesh K. Parekh",
      category: "Heritage",
      date: "June 25, 2026",
      description: "Uncover the intricate secrets of ancient Indian handloom weaving techniques, passed down through generations of master artisans in our cooperative.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "Sustainable Fashion: Why Organic Silk Matters",
      author: "Ananya Sharma",
      category: "Sustainability",
      date: "June 18, 2026",
      description: "An in-depth look at how ethical silk cultivation and natural organic dyeing processes are reducing the carbon footprint of contemporary luxury fashion.",
      image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "Bridal Couture: The Evolution of Banarasi Sarees",
      author: "Priya Mehta",
      category: "Couture",
      date: "June 05, 2026",
      description: "Tracing the glorious history of Banarasi brocades from royal Mughal courts to the modern Indian wedding runways of today.",
      image: "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?w=600&auto=format&fit=crop&q=80"
    }
  ];

  const categories = ["All", "Heritage", "Sustainability", "Couture"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="pb-16 w-full min-h-screen bg-pearl-100">
      <div className="max-w-6xl mx-auto px-6 pt-10 md:pt-14">
        {/* Direct Page Heading (No Banner) */}
        <div className="mb-10 text-left">
          <h1 className="text-[#3D223B] border-b border-[#BD7B88]/20 pb-4 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
            Blog
          </h1>
        </div>

        {/* Short description paragraph above categories */}
        <div className="text-left mb-6 max-w-xl">
          <p className="text-gray-650 text-xs md:text-sm font-outfit leading-relaxed border-l-2 border-[#BD7B88] pl-3 italic">
            Discover our curated collection of expert insights, weaving heritage stories, and fashion trends.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-6 border-b border-[#BD7B88]/15 font-outfit justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#3D223B] text-white border-[#BD7B88] shadow-md"
                  : "bg-white text-[#3D223B] border-[#BD7B88]/20 hover:bg-[#3D223B] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-white rounded-xl border border-[#BD7B88]/15 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#BD7B88]/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 cursor-pointer text-left"
            >
              {/* Image Section */}
              <div className="aspect-[4/3] w-full overflow-hidden relative shrink-0 bg-[#FAF4F6]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent z-0" />
                <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#3D223B] text-[#BD7B88] border border-[#BD7B88]/20 text-[7px] sm:text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-sm shadow-md z-10 font-outfit">
                  {post.category}
                </span>
              </div>
              
              {/* Content Section */}
              <div className="p-3 sm:p-6 flex flex-col flex-grow">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-3 text-[#BD7B88] text-[7px] sm:text-[9px] font-bold uppercase tracking-wider mb-2 sm:mb-4 border-b border-[#BD7B88]/10 pb-2 sm:pb-3 font-outfit">
                  <span className="flex items-center gap-1">
                    <User size={10} /> By {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={10} /> {post.date}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-playfair text-xs sm:text-base text-[#3D223B] group-hover:text-[#BD7B88] transition-colors duration-300 font-bold uppercase tracking-wide leading-snug mb-1.5 sm:mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-650 text-[10px] sm:text-xs leading-relaxed mb-3 sm:mb-6 flex-grow font-outfit line-clamp-3 sm:line-clamp-none">
                  {post.description}
                </p>
                
                {/* Category indicator under desc */}
                <div className="mt-auto pt-2 sm:pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[7px] sm:text-[9px] font-bold uppercase tracking-wider text-gray-400 font-outfit">
                  <Tag size={10} className="text-[#BD7B88]" />
                  <span>Category: {post.category}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
