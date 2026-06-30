import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const categories = [
  "Sarees", "Leggings", "Kurtis", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
];

const allProducts = [
  { id: 101, name: 'Royal Banarasi Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60' },
  { id: 102, name: 'Premium Stretch Leggings', category: 'Leggings', image: 'https://images.pexels.com/photos/16701772/pexels-photo-16701772.jpeg' },
  { id: 103, name: 'Chanderi Embroidered Kurti', category: 'Kurtis', image: 'https://images.pexels.com/photos/22064227/pexels-photo-22064227.jpeg' },
  { id: 104, name: 'Corporate Slim-Fit Dress Suit', category: 'Dress Suits', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60' },
  { id: 105, name: 'Luxury Egyptian Bed Linen', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60' },
  { id: 106, name: 'Premium Cotton Hosiery Wear', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=60' },
  { id: 107, name: 'Royal English Wool Suiting', category: 'Suiting', image: 'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 108, name: 'Classic Giza Cotton Shirting', category: 'Shirting', image: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 109, name: 'Embroidered Festive Lehenga', category: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=60' },
  { id: 110, name: 'Silk Jacquard Sherwani', category: 'Formal & Ethnic Wear for Men', image: 'https://images.pexels.com/photos/16199169/pexels-photo-16199169.jpeg' },
  { id: 111, name: 'Kids Ethnic Kurta Pajama', category: 'Formal & Ethnic Wear for Children', image: 'https://images.pexels.com/photos/17015459/pexels-photo-17015459.jpeg' },
  { id: 112, name: 'Premium Brocade Upholstery', category: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");

  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = activeCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF9F6' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#152E47]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Collections
          </h1>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-white border border-[#E8E5DC] text-[#244C73]">
            <ShoppingBag size={14} className="shrink-0" />
            <span className="font-bold text-xs">{filteredProducts.length} Products Available</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Left Sidebar */}
          <aside className="hidden lg:block lg:w-1/4 shrink-0 text-left">
            <div className="bg-white rounded-2xl border border-[#E8E5DC] p-6 sticky top-24 shadow-sm">
              <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl font-bold text-[#152E47] mb-5 border-b border-[#E8E5DC] pb-3 uppercase tracking-wider">
                Categories
              </h3>
              <ul className="space-y-1 max-h-[350px] overflow-y-auto pr-1 scrollbar-thin">
                {['All', ...categories].map(cat => {
                  const isActive = activeCategory === cat;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-[12.5px] font-bold transition-all duration-150 flex items-center justify-between group ${
                          isActive 
                            ? 'bg-[#244C73] text-white shadow-sm' 
                            : 'text-[#393E46] hover:bg-[#244C73]/5 hover:text-[#244C73]'
                        }`}
                      >
                        <span className="truncate">{cat}</span>
                        <ChevronRight size={13} className={`transition-transform duration-200 shrink-0 ${isActive ? 'translate-x-0.5' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5'}`} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-grow w-full">
            
            {/* Mobile Categories Horizontally Scrollable list */}
            <div className="lg:hidden flex overflow-x-auto gap-2 pb-3 mb-4 snap-x snap-mandatory custom-mini-scrollbar">
              {['All', ...categories].map(cat => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className="px-4 py-2 rounded-full text-[12px] font-bold whitespace-nowrap transition-all duration-200 snap-start shrink-0"
                    style={isActive
                      ? { background: '#244C73', color: '#fff', boxShadow: '0 4px 12px rgba(95,111,94,0.25)' }
                      : { background: '#FFFFFF', color: '#393E46', border: '1.5px solid #E8E5DC' }
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                    style={{ border: '1.5px solid #E8E5DC' }}
                  >
                    <div className="h-60 w-full relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'rgba(44,54,43,0.25)' }} />
                    </div>
                    <div className="p-4 text-center border-t border-[#E8E5DC]">
                      <p className="text-[10px] uppercase tracking-widest font-bold mb-1.5 text-[#C5A880]">
                        {product.category}
                      </p>
                      <h3 className="font-bold text-base text-[#152E47]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {product.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 rounded-3xl bg-white"
                style={{ border: '1.5px solid #E8E5DC' }}>
                <p className="text-lg font-bold text-[#4B5563]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Products for this category will be available soon.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
