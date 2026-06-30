import { ArrowRight, ShieldCheck, Truck, Award, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const categoryList = [
    { name: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60' },
    { name: 'Leggings', image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&auto=format&fit=crop&q=60' },
    { name: 'Kurtis', image: 'https://images.unsplash.com/photo-1669199814244-75e25eb1a1bd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Dress Suits', image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?w=600&auto=format&fit=crop&q=60' },
    { name: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=60' },
    { name: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&auto=format&fit=crop&q=60' },
    { name: 'Suiting', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60' },
    { name: 'Shirting', image: 'https://plus.unsplash.com/premium_photo-1691367279403-aaa787d264f6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=60' },
    { name: 'Formal & Ethnic Wear for Men', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=60' }
  ];

  const featuredProducts = [
    {
      name: 'Premium Banarasi Brocade Saree',
      category: 'Sarees',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80',
      desc: 'Exquisite hand-woven Banarasi silk saree with authentic gold zari border patterns.'
    },
    {
      name: 'Luxury Linen Dress Suit',
      category: 'Dress Suits',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80',
      desc: 'Premium linen blend salwar suit with hand-embroidered floral necklines.'
    },
    {
      name: 'Classic Herringbone Suiting',
      category: 'Suiting',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80',
      desc: 'Fine merino wool herringbone suiting fabric, ideal for tailored luxury blazers.'
    },
    {
      name: 'Artisanal Handwoven Kurti Set',
      category: 'Kurtis',
      image: 'https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&auto=format&fit=crop&q=80',
      desc: 'Graceful daily wear handloom cotton kurti set detailed with thread embroidery.'
    }
  ];

  return (
    <div className="w-full bg-pearl-100">
      {/* 1. Hero Section - With full background image /images/hero1.png */}
      <section 
        className="relative w-full min-h-[380px] md:min-h-[480px] flex items-center justify-start px-6 sm:px-10 lg:px-16 py-12 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero1.png')" }}
      >
        {/* Left Column: Text & Content */}
        <div className="w-full max-w-2xl flex flex-col justify-center text-left z-10 space-y-6">
          {/* Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-[#BD7B88]/50"></div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#BD7B88]">
              PREMIUM BY TRADITION
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[52px] text-[#3D223B] leading-tight font-light tracking-wide border-0 pb-0 mb-0">
            Woven with <br/> Heritage, <br />
            <span className="text-[#BD7B88] font-normal italic font-playfair">Designed for You</span>
          </h1>

          {/* Description */}
          <p className="text-[#7A6273] text-xs sm:text-sm font-outfit leading-relaxed max-w-lg font-semibold">
            Discover luxury textiles crafted with tradition, passion and perfection.
          </p>

          {/* Button */}
          <div className="pt-2">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-3 bg-[#3D223B] hover:bg-[#4D2D4B] text-white px-8 py-3.5 font-semibold tracking-widest uppercase transition-all duration-300 text-[10px] rounded-lg shadow-md font-outfit"
            >
              Shop Collection <ArrowRight size={13} className="text-white" />
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-16 hidden lg:flex z-10">
          <span className="text-[8px] tracking-[0.3em] font-bold text-[#BD7B88]/60 uppercase rotate-90 origin-center whitespace-nowrap select-none font-outfit">
            SCROLL DOWN
          </span>
          <div className="w-[1px] h-14 bg-gradient-to-b from-[#BD7B88]/40 to-transparent"></div>
        </div>
      </section>

      {/* 2. Features Bar - Clean Light Styling under Hero section */}
      <section className="bg-white border-y border-[#BD7B88]/15 py-6 px-6 sm:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex items-center gap-4 lg:border-r border-[#BD7B88]/15 lg:pr-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#BD7B88]/20 flex items-center justify-center text-[#BD7B88] shrink-0 bg-[#FAF4F6] shadow-sm">
              <ShieldCheck size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[10px] font-bold uppercase tracking-widest text-[#3D223B]">PREMIUM QUALITY</h4>
              <p className="text-[8px] text-[#7A6273] font-semibold mt-0.5 uppercase tracking-wider">Finest fabrics assured</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4 lg:border-r border-[#BD7B88]/15 lg:pr-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#BD7B88]/20 flex items-center justify-center text-[#BD7B88] shrink-0 bg-[#FAF4F6] shadow-sm">
              <Truck size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[10px] font-bold uppercase tracking-widest text-[#3D223B]">PAN INDIA DELIVERY</h4>
              <p className="text-[8px] text-[#7A6273] font-semibold mt-0.5 uppercase tracking-wider">Safe & fast delivery</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 lg:border-r border-[#BD7B88]/15 lg:pr-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#BD7B88]/20 flex items-center justify-center text-[#BD7B88] shrink-0 bg-[#FAF4F6] shadow-sm">
              <Award size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[10px] font-bold uppercase tracking-widest text-[#3D223B]">WHOLESALE PRICES</h4>
              <p className="text-[8px] text-[#7A6273] font-semibold mt-0.5 uppercase tracking-wider">Best rates for bulk orders</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4 last:border-r-0">
            <div className="w-10 h-10 rounded-full border border-[#BD7B88]/20 flex items-center justify-center text-[#BD7B88] shrink-0 bg-[#FAF4F6] shadow-sm">
              <Headphones size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-outfit text-[10px] font-bold uppercase tracking-widest text-[#3D223B]">CUSTOMER SUPPORT</h4>
              <p className="text-[8px] text-[#7A6273] font-semibold mt-0.5 uppercase tracking-wider">We are here to help you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content body wrapper */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 space-y-12">
        
        {/* 3. Shop by Category Title - Spans Full Width */}
        <div className="flex justify-between items-end border-b border-[#BD7B88]/15 pb-4 w-full text-left">
          <div>
            <span className="text-[9px] font-bold uppercase text-[#BD7B88] tracking-[0.2em]">EXPLORE COLLECTIONS</span>
            <h3 className="font-playfair text-2xl text-[#3D223B] font-bold uppercase tracking-wide mt-1">
              Shop by Category
            </h3>
          </div>
          <Link 
            to="/products" 
            className="text-[10px] font-bold uppercase text-[#3D223B] hover:text-[#BD7B88] transition-colors flex items-center gap-1.5 tracking-wider font-outfit"
          >
            View All Categories <ArrowRight size={12} className="text-[#BD7B88]" />
          </Link>
        </div>

        {/* Row containing Categories Grid (Left) and Promo Column (Right) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
          
          {/* Left Block: Categories Grid */}
          <div className="flex-1 w-full text-left">
            {/* Categories Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {categoryList.map((cat, idx) => (
                <Link
                  to="/products"
                  state={{ category: cat.name }}
                  key={idx}
                  className="bg-white border border-[#BD7B88]/10 rounded-t-[100px] rounded-b-lg p-1.5 hover:border-[#BD7B88]/40 hover:shadow-md hover:bg-white/70 transition-all duration-300 flex flex-col group"
                >
                  {/* Arched image container */}
                  <div className="aspect-[2/3] overflow-hidden rounded-t-[92px] rounded-b bg-[#FAF4F6] relative">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-[#3D223B]/10 group-hover:opacity-0 transition-opacity"></div>
                  </div>
                  
                  {/* Category text content */}
                  <div className="pt-3 pb-2 text-center">
                    <h4 className="font-playfair text-[10px] text-[#3D223B] font-bold uppercase tracking-wider group-hover:text-[#BD7B88] transition-colors truncate">
                      {cat.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Block: Promo Column */}
          <div className="w-full lg:w-[280px] flex flex-col gap-6 shrink-0 text-left">
            
            {/* Promo Card 1: Exclusive Offer / Wholesale Excellence (Premium Plum Card) */}
            <div className="relative overflow-hidden min-h-[220px] border border-[#BD7B88]/20 shadow-md rounded-xl flex flex-col justify-between p-6 bg-[#3D223B] group">
              {/* Background Image covering full card */}
              <img 
                src="https://images.unsplash.com/photo-1623310658847-33f12eaab710?w=600&auto=format&fit=crop&q=60" 
                alt="Wholesale Fabrics Stack" 
                className="absolute inset-0 w-full h-full object-cover z-0" 
              />
              {/* High-legibility Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D223B]/95 via-[#3D223B]/80 to-[#3D223B]/90 z-10"></div>
              
              <div className="space-y-2.5 z-20 relative">
                <span className="text-[9px] uppercase font-bold text-[#BD7B88] tracking-[0.2em] font-outfit">EXCLUSIVE OFFER</span>
                <h3 className="font-playfair text-xl font-bold leading-tight text-white uppercase tracking-wider">
                  Wholesale <br />Excellence
                </h3>
                <p className="text-[#FAF4F6]/75 text-[10px] font-outfit leading-relaxed max-w-[190px]">
                  Special pricing for retailers & bulk buyers
                </p>
              </div>

              <div className="z-20 mt-4 relative">
                <Link 
                  to="/trade-enquiry" 
                  className="inline-flex items-center gap-2 bg-[#BD7B88] hover:bg-[#A36471] text-white px-4 py-2 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 rounded-lg font-outfit"
                >
                  Enquire Now <ArrowRight size={11} className="text-white" />
                </Link>
              </div>
            </div>

            {/* Promo Card 2: New Arrivals (Deep Mauve/Plum Layout) */}
            <div className="relative overflow-hidden min-h-[160px] border border-[#BD7B88]/15 shadow-sm rounded-xl flex flex-col justify-between p-6 bg-[#4D2D4B] group">
              {/* Background Image covering full card */}
              <img 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=1000&auto=format&fit=crop&q=60" 
                alt="New Arrivals Preview" 
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              {/* High-legibility Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4D2D4B]/95 via-[#4D2D4B]/80 to-[#4D2D4B]/85 z-10"></div>
              
              <div className="space-y-1.5 z-20 relative">
                <span className="text-[8px] uppercase font-bold text-[#BD7B88] tracking-[0.2em] font-outfit">NEW ARRIVALS</span>
                <h3 className="font-playfair text-base font-bold leading-tight text-white uppercase tracking-wide">
                  Discover Our Latest Luxury Collection
                </h3>
              </div>

              <div className="flex items-center justify-between mt-4 z-20 relative">
                <Link 
                  to="/products" 
                  className="text-[9px] font-bold text-white hover:text-[#BD7B88] uppercase tracking-wider font-outfit flex items-center gap-1.5"
                >
                  Shop Now <ArrowRight size={11} className="text-[#BD7B88]" />
                </Link>
                
                <div className="w-6 h-6 rounded-full bg-[#BD7B88] flex items-center justify-center text-white hover:bg-[#A36471] transition-colors cursor-pointer">
                  <ArrowRight size={10} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Featured Curated Collection - Clean flat layout blending with page */}
        <section className="text-left w-full py-4">
          <div className="flex justify-between items-end mb-8 border-b border-[#BD7B88]/15 pb-4">
            <div>
              <p className="text-[#BD7B88] font-bold tracking-[0.2em] uppercase text-[9px] mb-1 font-outfit">Curated Masterpieces</p>
              <h2 className="font-playfair text-2xl text-[#3D223B] font-bold uppercase tracking-wide">Featured Collection</h2>
            </div>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-1.5 text-[#3D223B] hover:text-[#BD7B88] transition-colors font-bold uppercase text-[9px] tracking-wider font-outfit"
            >
              View Catalogue <ArrowRight size={12} className="text-[#BD7B88]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {featuredProducts.map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-white border border-[#BD7B88]/10 overflow-hidden hover:border-[#BD7B88]/40 hover:shadow-lg transition-all duration-300 rounded-xl"
              >
                <div className="relative h-28 sm:h-[160px] overflow-hidden bg-[#FAF4F6] shrink-0">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-[#3D223B] text-[#BD7B88] text-[7px] sm:text-[8px] uppercase tracking-widest px-2 py-0.5 font-bold rounded-sm border border-[#BD7B88]/15 font-outfit">
                    {prod.category}
                  </span>
                </div>
                <div className="p-3 sm:p-4 flex flex-col flex-grow bg-white text-left">
                  <h3 className="text-[#3D223B] font-playfair text-xs sm:text-sm font-bold mb-1 group-hover:text-[#BD7B88] transition-colors uppercase tracking-wide leading-snug truncate">
                    {prod.name}
                  </h3>
                  <p className="text-[#7A6273] text-[9px] sm:text-[11px] leading-relaxed mb-3 flex-grow font-outfit line-clamp-2">
                    {prod.desc}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 text-[#BD7B88] hover:text-[#3D223B] font-bold uppercase text-[8px] sm:text-[9px] tracking-wider border-b border-transparent hover:border-[#3D223B] w-fit pb-0.5 transition-all duration-250 font-outfit"
                  >
                    View Details <ArrowRight size={10} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
