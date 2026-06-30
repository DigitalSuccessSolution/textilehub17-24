import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, SlidersHorizontal, X, Search } from 'lucide-react';

export default function Products() {
  const location = useLocation();
  const categories = [
    "Sarees", "Leggings", "Kurtis", "Dress Suits", 
    "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting", 
    "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men", 
    "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
  ];

  const allProducts = [
    { id: 101, name: 'Kanjivaram Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80' },
    { id: 102, name: 'Stretch Premium Leggings', category: 'Leggings', image: 'https://images.pexels.com/photos/8402216/pexels-photo-8402216.jpeg' },
    { id: 103, name: 'Designer Handloom Kurti', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1669199814244-75e25eb1a1bd?q=80&w=735&auto=format&fit=crop&q=80' },
    { id: 104, name: 'Anarkali Salwar Suit Set', category: 'Dress Suits', image: 'https://images.pexels.com/photos/13584944/pexels-photo-13584944.jpeg' },
    { id: 105, name: 'Egyptian Cotton Bedsheet', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=80' },
    { id: 106, name: 'Soft Hosiery Daily Pack', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&auto=format&fit=crop&q=80' },
    { id: 107, name: 'Premium Blazer Fabric', category: 'Suiting', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80' },
    { id: 108, name: 'Executive Cotton Shirting', category: 'Shirting', image: 'https://plus.unsplash.com/premium_photo-1691367279403-aaa787d264f6?q=80&w=687&auto=format&fit=crop&q=80' },
    { id: 109, name: 'Grand Bridal Lehenga', category: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80' },
    { id: 110, name: 'Heritage Silk Sherwani', category: 'Formal & Ethnic Wear for Men', image: 'https://images.pexels.com/photos/16199169/pexels-photo-16199169.jpeg' },
    { id: 111, name: 'Kids Traditional Wear', category: 'Formal & Ethnic Wear for Children', image: 'https://images.pexels.com/photos/12100636/pexels-photo-12100636.jpeg' },
    { id: 112, name: 'Luxury Silk Cushion Set', category: 'Home Upholstery & Furnishing', image: 'https://images.pexels.com/photos/6207464/pexels-photo-6207464.jpeg' },
  ];

  const categoryDetails = {
    "All": { desc: "View our entire catalogue of premium products", monogram: "ALL" },
    "Sarees": { desc: "Elegant silk, banarasi & cotton weaves", monogram: "SR" },
    "Leggings": { desc: "Premium comfort fit and stretchy leggings", monogram: "LG" },
    "Kurtis": { desc: "Artisanal designer kurtis & tunic sets", monogram: "KR" },
    "Dress Suits": { desc: "Graceful salwar suits & ethnic dress sets", monogram: "DS" },
    "Bedsheets & Linen": { desc: "Luxurious pure cotton linens & sheets", monogram: "BL" },
    "Hosiery Items": { desc: "Comfy soft-knit daily hosiery items", monogram: "HS" },
    "Suiting": { desc: "Premium blazer & classic suit fabrics", monogram: "ST" },
    "Shirting": { desc: "Crisp cotton, linen & executive shirting", monogram: "SH" },
    "Formal & Ethnic Wear for Women": { desc: "Bridal, festival & celebration wear", monogram: "FW" },
    "Formal & Ethnic Wear for Men": { desc: "Classic sherwanis, bandhgalas & kurtas", monogram: "FM" },
    "Formal & Ethnic Wear for Children": { desc: "Vibrant ethnic clothes for boys & girls", monogram: "FC" },
    "Home Upholstery & Furnishing": { desc: "Drapes, cushions & bespoke furnishings", monogram: "HU" }
  };

  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isFilterOpen]);

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const getProductCount = (categoryName) => {
    if (categoryName === "All") return allProducts.length;
    return allProducts.filter(p => p.category === categoryName).length;
  };

  const filteredCategories = categories.filter(cat => 
    cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-16 w-full relative min-h-screen bg-[#FFF5F6]">
      {/* Page Header Banner - Light Pink styled */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center font-playfair">
            Catalogue
          </h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">
            Explore Our Exquisite Collections
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Filter & Spacing Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 pb-6 border-b border-[#C88E9B]/15">
          {/* Count Badge & Active Category Indicator */}
          <div className="bg-white text-[#702A3C] px-6 py-3.5 border border-[#C88E9B]/15 flex items-center gap-3 shadow-md w-full sm:w-auto font-semibold text-xs md:text-sm rounded-lg">
            <ShoppingBag size={18} className="text-[#C88E9B]" />
            <span className="text-[#702A3C]">{filteredProducts.length} Products Available</span>
          </div>

          {/* Filter Trigger Button */}
          <button
            onClick={() => {
              setSearchQuery("");
              setIsFilterOpen(true);
            }}
            className="group relative bg-[#FFF0F2] text-[#702A3C] hover:bg-[#C88E9B] hover:text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center gap-2.5 cursor-pointer border border-[#C88E9B]/25 w-full sm:w-auto justify-center overflow-hidden rounded-md"
          >
            <SlidersHorizontal size={14} className="relative z-10 text-[#C88E9B] group-hover:text-white group-hover:rotate-180 transition-transform duration-500" />
            <span className="relative z-10 transition-colors duration-300">
              Select Category Collection
            </span>
          </button>
        </div>

      {/* Sleek Right-side Slide-out Category Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/45 backdrop-blur-sm z-[100] cursor-pointer"
            />

            {/* Right Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.35 }}
              className="fixed inset-y-0 right-0 z-[101] w-full max-w-md bg-[#FFF0F2] text-[#702A3C] border-l border-[#C88E9B]/20 flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#C88E9B]/15 shrink-0 flex items-center justify-between">
                <div>
                  <h3 className="font-playfair text-lg text-[#702A3C] font-bold uppercase tracking-wider">
                    Select Collection
                  </h3>
                  <div className="w-12 h-[1px] bg-[#C88E9B] mt-2" />
                </div>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-[#C88E9B] hover:text-[#702A3C] bg-[#C88E9B]/10 hover:bg-[#C88E9B]/20 p-2.5 rounded-full transition-colors border border-[#C88E9B]/10 cursor-pointer"
                  aria-label="Close Drawer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Categories List */}
              <div className="flex-grow overflow-y-auto p-5 custom-scrollbar bg-[#FFF0F2]">
                <div className="flex flex-col gap-2">
                  {/* "All" Product Button */}
                  <button
                    onClick={() => {
                      setActiveCategory("All");
                      setIsFilterOpen(false);
                    }}
                    className={`group w-full text-left py-3.5 px-5 rounded-lg border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      activeCategory === "All"
                        ? "bg-[#C88E9B]/15 border-[#C88E9B] text-[#702A3C] shadow-sm font-bold"
                        : "bg-[#FFF5F6] border-[#C88E9B]/10 text-[#702A3C]/80 hover:bg-[#C88E9B]/10 hover:border-[#C88E9B]/30"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#702A3C]">
                      All Collections
                    </span>
                  </button>

                  {/* Category Loop */}
                  {categories.map((cat) => {
                    const isSelected = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setIsFilterOpen(false);
                        }}
                        className={`group w-full text-left py-3.5 px-5 rounded-lg border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-[#C88E9B]/15 border-[#C88E9B] text-[#702A3C] shadow-sm font-bold"
                            : "bg-[#FFF5F6] border-[#C88E9B]/10 text-[#702A3C]/80 hover:bg-[#C88E9B]/10 hover:border-[#C88E9B]/30"
                        }`}
                      >
                        <span className="text-xs font-bold uppercase tracking-widest text-[#702A3C] truncate">
                          {cat}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-[#C88E9B]/15 shrink-0 bg-[#FFF5F6] flex justify-end">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="bg-[#C88E9B] text-white hover:bg-[#b37d8a] px-5 py-2.5 font-bold tracking-widest transition-colors cursor-pointer uppercase text-[9px] rounded-sm font-outfit shadow-sm"
                >
                  Close Panel
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Products Display */}
      <div className="space-y-16">
        {activeCategory === "All" ? (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
              {filteredProducts.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group bg-white rounded-xl border border-[#C88E9B]/15 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C88E9B]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full cursor-pointer"
                >
                  <div className="h-56 md:h-72 w-full relative overflow-hidden shrink-0 bg-[#FFF5F6]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent z-0" />
                    <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-white text-[#702A3C] border border-[#C88E9B]/20 text-[7px] md:text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 md:px-2.5 md:py-1 rounded-sm shadow-sm z-10 font-outfit">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-3 md:p-5 text-center bg-white border-t border-[#FFE4E8] flex-grow flex flex-col justify-center">
                    <p className="text-[#C88E9B] text-[8px] md:text-[9px] uppercase tracking-widest font-semibold mb-1 md:mb-1.5 font-outfit">
                      {product.category} Collection
                    </p>
                    <h3 className="font-playfair text-[12px] md:text-sm text-[#702A3C] group-hover:text-[#C88E9B] transition-colors duration-300 font-bold uppercase tracking-wider leading-snug">
                      {product.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          Object.entries(groupedProducts).map(([categoryName, products]) => (
            <div key={categoryName}>
              <h2 className="font-playfair text-xl text-[#702A3C] font-semibold uppercase tracking-wider mb-6 border-b border-[#C88E9B]/20 pb-2">
                {categoryName}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
                {products.map((product, idx) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group bg-white rounded-xl border border-[#C88E9B]/15 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C88E9B]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full cursor-pointer"
                  >
                    <div className="h-56 md:h-72 w-full relative overflow-hidden shrink-0 bg-[#FFF5F6]">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent z-0" />
                      <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-white text-[#702A3C] border border-[#C88E9B]/20 text-[7px] md:text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 md:px-2.5 md:py-1 rounded-sm shadow-sm z-10 font-outfit">
                        {product.category}
                      </span>
                    </div>
                    <div className="p-3 md:p-5 text-center bg-white border-t border-[#FFE4E8] flex-grow flex flex-col justify-center">
                      <p className="text-[#C88E9B] text-[8px] md:text-[9px] uppercase tracking-widest font-semibold mb-1 md:mb-1.5 font-outfit">
                        {product.category} Collection
                      </p>
                      <h3 className="font-playfair text-[12px] md:text-sm text-[#702A3C] group-hover:text-[#C88E9B] transition-colors duration-300 font-bold uppercase tracking-wider leading-snug">
                        {product.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        )}
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white border border-[#C88E9B]/10 rounded-xl shadow-md">
            <h3 className="font-playfair text-base text-gray-500 uppercase tracking-widest font-semibold">
              Products for this category will be available soon.
            </h3>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}
