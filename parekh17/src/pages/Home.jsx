import { ArrowRight, ShieldCheck, Truck, Award, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const heroImages = [
    'https://images.pexels.com/photos/8886952/pexels-photo-8886952.jpeg',
    'https://images.pexels.com/photos/29427497/pexels-photo-29427497.jpeg',
    'https://images.pexels.com/photos/5264903/pexels-photo-5264903.jpeg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const categoryList = [
    { name: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60' },
    { name: 'Leggings', image: 'https://images.pexels.com/photos/13908744/pexels-photo-13908744.jpeg' },
    { name: 'Kurtis', image: 'https://images.unsplash.com/photo-1669199814244-75e25eb1a1bd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Dress Suits', image: 'https://images.pexels.com/photos/18999069/pexels-photo-18999069.jpeg' },
    { name: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=60' },
    { name: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&auto=format&fit=crop&q=60' },
    { name: 'Suiting', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60' },
    { name: 'Shirting', image: 'https://plus.unsplash.com/premium_photo-1691367279403-aaa787d264f6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=60' },
    { name: 'Formal & Ethnic Wear for Men', image: 'https://images.pexels.com/photos/27687923/pexels-photo-27687923.jpeg' }
  ];

  const featuredProducts = [
    {
      name: 'Royal Kanjivaram Silk Saree',
      category: 'Sarees',
      image: 'https://images.unsplash.com/photo-1705164453572-69b94a306f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      desc: 'Woven with pure gold zari and fine mulberry silk, embodying traditional luxury.'
    },
    {
      name: 'Bespoke Heritage Sherwani',
      category: 'Formal & Ethnic Wear for Men',
      image: 'https://images.unsplash.com/photo-1678805408312-04e5fd7a9dcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      desc: 'Handcrafted embroidery on raw silk, designed for monumental celebrations.'
    },
    {
      name: 'Designer Handloom Kurti Set',
      category: 'Kurtis',
      image: 'https://images.unsplash.com/photo-1735553816867-88cd8496df58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      desc: 'A blend of contemporary silhouettes and artisanal handloom cotton.'
    },
    {
      name: 'Luxurious Egyptian Cotton Sheets',
      category: 'Bedsheets & Linen',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=80',
      desc: 'High-thread-count pure sheets crafted to provide supreme comfort and classic luxury.'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section - Spans full width, light pink layout */}
      <section className="relative w-full min-h-[460px] md:min-h-[520px] bg-[#FFF0F2] flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 pt-0 pb-10 md:py-6 overflow-hidden">
        
        {/* Abstract luxury background overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF0F2] via-[#FFF5F6]/40 to-[#FFF0F2] z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#C88E9B]/10 to-transparent rounded-full filter blur-3xl z-0"></div>
        
        {/* Left Column: Text & Content */}
        <div className="w-full md:w-7/12 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 space-y-6 mt-8 md:mt-0">
          {/* Subtitle */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-6 h-[1px] bg-[#C88E9B]/60"></div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#702A3C]">
              PREMIUM BY TRADITION
            </span>
            <div className="w-6 h-[1px] bg-[#C88E9B]/60 md:hidden"></div>
          </div>

          {/* Heading */}
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[52px] text-[#702A3C] leading-tight font-light tracking-wide border-0 pb-0 mb-0">
            Woven with Heritage, <br />
            <span className="text-[#C88E9B] font-normal italic font-playfair">Designed for You</span>
          </h1>

          {/* Description */}
          <p className="text-[#702A3C]/90 text-xs sm:text-sm font-outfit leading-relaxed max-w-lg">
            Discover luxury textiles crafted with tradition, passion and perfection.
          </p>

          {/* Button */}
          <div className="pt-2">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-3 bg-[#C88E9B] hover:bg-[#b37d8a] text-white px-8 py-3.5 font-semibold tracking-widest uppercase transition-all duration-300 text-[10px] rounded-sm shadow-md font-outfit"
            >
              Shop Collection <ArrowRight size={13} className="text-white" />
            </Link>
          </div>
        </div>

        {/* Right Column: Premium framed image */}
        <div className="w-full md:w-5/12 flex justify-center mb-4 md:mb-0 z-10 relative">
          <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] relative overflow-hidden bg-white/40 border border-[#C88E9B]/20 p-2 rounded-t-[140px] rounded-b-lg shadow-xl">
            <div className="w-full h-full relative overflow-hidden rounded-t-[132px] rounded-b bg-[#FFF5F6]">
              <AnimatePresence initial={false}>
                <motion.img 
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]} 
                  alt="Vara Weaves Apparel Campaign" 
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </div>
          {/* Slide Indicators */}
          <div className="absolute right-2 sm:right-4 md:-right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentImageIndex === index ? 'bg-[#702A3C] h-4' : 'bg-[#702A3C]/30 hover:bg-[#702A3C]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Features Bar - Positioned immediately under Hero section, light pink background */}
      <section className="bg-[#FFF5F6] border-y border-[#C88E9B]/15 py-6 px-6 sm:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Feature 1 */}
          <div className="flex items-center gap-2 sm:gap-4 lg:border-r border-[#C88E9B]/15 lg:pr-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#C88E9B]/20 flex items-center justify-center text-[#C88E9B] shrink-0 bg-white shadow-sm">
              <ShieldCheck size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[10px] font-bold uppercase tracking-widest text-[#702A3C]">PREMIUM QUALITY</h4>
              <p className="text-[8px] text-[#8E5A67] font-semibold mt-0.5 uppercase tracking-wider">Finest fabrics assured</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-2 sm:gap-4 lg:border-r border-[#C88E9B]/15 lg:pr-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#C88E9B]/20 flex items-center justify-center text-[#C88E9B] shrink-0 bg-white shadow-sm">
              <Truck size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[10px] font-bold uppercase tracking-widest text-[#702A3C]">PAN INDIA DELIVERY</h4>
              <p className="text-[8px] text-[#8E5A67] font-semibold mt-0.5 uppercase tracking-wider">Safe & fast delivery</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-2 sm:gap-4 lg:border-r border-[#C88E9B]/15 lg:pr-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#C88E9B]/20 flex items-center justify-center text-[#C88E9B] shrink-0 bg-white shadow-sm">
              <Award size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[10px] font-bold uppercase tracking-widest text-[#702A3C]">WHOLESALE PRICES</h4>
              <p className="text-[8px] text-[#8E5A67] font-semibold mt-0.5 uppercase tracking-wider">Best rates for bulk orders</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-2 sm:gap-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#C88E9B]/20 flex items-center justify-center text-[#C88E9B] shrink-0 bg-white shadow-sm">
              <Headphones size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[10px] font-bold uppercase tracking-widest text-[#702A3C]">CUSTOMER SUPPORT</h4>
              <p className="text-[8px] text-[#8E5A67] font-semibold mt-0.5 uppercase tracking-wider">We are here to help you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content body wrapper - Padded and Centered */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 space-y-12">
        
        {/* 3. Row containing Categories (Left) and Promo Column (Right) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
          
          {/* Left Block: Categories Grid (Takes ~75% width) */}
          <div className="flex-1 w-full text-left space-y-6">
            <div className="flex justify-between items-end border-b border-[#C88E9B]/15 pb-4">
              <div>
                <span className="text-[9px] font-bold uppercase text-[#C88E9B] tracking-[0.2em]">EXPLORE COLLECTIONS</span>
                <h3 className="font-playfair text-2xl text-[#702A3C] font-bold uppercase tracking-wide mt-1">
                  Shop by Category
                </h3>
              </div>
              <Link 
                to="/products" 
                className="text-[10px] font-bold uppercase text-[#702A3C] hover:text-[#C88E9B] transition-colors flex items-center gap-1.5 tracking-wider font-outfit"
              >
                View All Categories <ArrowRight size={12} className="text-[#C88E9B]" />
              </Link>
            </div>

            {/* Categories Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {categoryList.map((cat, idx) => (
                <Link
                  to="/products"
                  state={{ category: cat.name }}
                  key={idx}
                  className="bg-white border border-[#C88E9B]/10 rounded-t-[100px] rounded-b-lg p-1.5 hover:border-[#C88E9B]/40 hover:shadow-md hover:bg-white/70 transition-all duration-300 flex flex-col group"
                >
                  {/* Arched image container */}
                  <div className="aspect-[2/3] overflow-hidden rounded-t-[92px] rounded-b bg-[#FFF5F6] relative">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-white/10 group-hover:opacity-0 transition-opacity"></div>
                  </div>
                  
                  {/* Category text content */}
                  <div className="pt-3 pb-2 text-center">
                    <h4 className="font-playfair text-[10px] text-[#702A3C] font-bold uppercase tracking-wider group-hover:text-[#C88E9B] transition-colors truncate">
                      {cat.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Block: Promo Column (Takes ~25% width) */}
          <div className="w-full lg:w-[280px] flex flex-col gap-6 shrink-0 text-left lg:mt-[88px]">
            
            {/* Promo Card 1: Exclusive Offer / Wholesale Excellence (Pink Light Card) */}
            <div className="bg-[#FFF0F2] text-[#702A3C] p-6 rounded-lg flex flex-col justify-between relative overflow-hidden min-h-[220px] border border-[#C88E9B]/20 shadow-md">
              
              {/* Full Background Image */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#FFF0F2]/75 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1623310658847-33f12eaab710?w=600&auto=format&fit=crop&q=60" 
                  alt="Wholesale Fabrics Stack" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              
              <div className="space-y-2.5 z-10 relative">
                <span className="text-[9px] uppercase font-bold text-[#702A3C] tracking-[0.2em] font-outfit">EXCLUSIVE OFFER</span>
                <h3 className="font-playfair text-xl font-bold leading-tight text-[#702A3C] uppercase tracking-wider">
                  Wholesale <br />Excellence
                </h3>
                <p className="text-[#702A3C]/90 text-[10px] font-outfit leading-relaxed max-w-[180px]">
                  Special pricing for retailers & bulk buyers
                </p>
              </div>

              <div className="z-10 mt-4 relative">
                <Link 
                  to="/trade-enquiry" 
                  className="inline-flex items-center gap-2 bg-[#C88E9B] hover:bg-[#b37d8a] text-white px-4 py-2 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 rounded-sm font-outfit shadow"
                >
                  Enquire Now <ArrowRight size={11} className="text-white" />
                </Link>
              </div>
            </div>

            {/* Promo Card 2: New Arrivals */}
            <div className="bg-[#FFF5F6] text-[#702A3C] p-5 rounded-lg flex flex-col justify-between border border-[#C88E9B]/15 min-h-[160px] relative overflow-hidden shadow-sm">
              <div className="space-y-1 z-10">
                <span className="text-[8px] uppercase font-bold text-[#C88E9B] tracking-[0.2em] font-outfit">NEW ARRIVALS</span>
                <h3 className="font-playfair text-base font-bold leading-tight text-[#702A3C] uppercase tracking-wide">
                  Discover Our Latest Luxury Collection
                </h3>
              </div>

              <div className="flex items-center justify-between mt-4 z-10">
                <Link 
                  to="/products" 
                  className="text-[9px] font-bold text-[#702A3C] hover:text-[#C88E9B] uppercase tracking-wider font-outfit flex items-center gap-1.5"
                >
                  Shop Now <ArrowRight size={11} className="text-[#C88E9B]" />
                </Link>
                
                {/* Circular image with gold hover arrow button */}
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C88E9B]/30 shrink-0 bg-[#FFF0F2]">
                    <img 
                      src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=1000&auto=format&fit=crop&q=60" 
                      alt="New Arrivals Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#C88E9B] flex items-center justify-center text-white hover:bg-[#b37d8a] transition-colors cursor-pointer">
                    <ArrowRight size={10} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Featured Curated Collection */}
        <div className="text-left w-full">
          <div className="flex justify-between items-end mb-8 border-b border-[#C88E9B]/15 pb-4">
            <div>
              <p className="text-[#C88E9B] font-bold tracking-[0.2em] uppercase text-[9px] mb-1 font-outfit">Curated Masterpieces</p>
              <h2 className="font-playfair text-2xl text-[#702A3C] font-bold uppercase tracking-wide">Featured Collection</h2>
            </div>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-1.5 text-[#702A3C] hover:text-[#C88E9B] transition-colors font-bold uppercase text-[9px] tracking-wider font-outfit"
            >
              View Catalogue <ArrowRight size={12} className="text-[#C88E9B]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-white border border-[#C88E9B]/10 overflow-hidden hover:border-[#C88E9B]/40 hover:shadow-md transition-all duration-300 rounded-md"
              >
                <div className="relative h-[130px] md:h-[160px] overflow-hidden bg-[#FFF5F6]">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-[#C88E9B] text-white text-[7px] uppercase tracking-widest px-2 py-0.5 font-bold rounded-sm border-none font-outfit">
                    {prod.category}
                  </span>
                </div>
                <div className="p-3 md:p-4 flex flex-col flex-grow bg-white">
                  <h3 className="text-[#702A3C] font-playfair text-[12px] md:text-sm font-bold mb-1 md:mb-1.5 group-hover:text-[#C88E9B] transition-colors uppercase tracking-wide leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-[#8E5A67] text-[9px] md:text-[11px] leading-relaxed mb-3 md:mb-4 flex-grow font-outfit">
                    {prod.desc}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 text-[#C88E9B] hover:text-[#702A3C] font-bold uppercase text-[8px] tracking-wider border-b border-transparent hover:border-[#702A3C] w-fit pb-0.5 transition-all duration-250 font-outfit"
                  >
                    View Details <ArrowRight size={10} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
