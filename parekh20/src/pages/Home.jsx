import { Link } from 'react-router-dom';
import { ArrowRight, Quote, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// ── Same categories as parekh19 in same order ──
const shopCategories = [
  { name: 'Sarees', imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop&q=80' },
  { name: 'Leggings', imageUrl: 'https://images.pexels.com/photos/16701769/pexels-photo-16701769.jpeg' },
  { name: 'Kurtis', imageUrl: 'https://images.pexels.com/photos/28213774/pexels-photo-28213774.jpeg' },
  { name: 'Dress Suits', imageUrl: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400&h=300&fit=crop&q=80' },
  { name: 'Bedsheets & Linen', imageUrl: 'https://images.pexels.com/photos/22711513/pexels-photo-22711513.jpeg' },
  { name: 'Hosiery Items', imageUrl: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&h=300&fit=crop&q=80' },
  { name: 'Suiting', imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop&q=80' },
  { name: 'Shirting', imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop&q=80' },
  { name: 'Formal & Ethnic Wear for Women', imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=300&fit=crop&q=80' },
  { name: 'Formal & Ethnic Wear for Men', imageUrl: 'https://images.pexels.com/photos/1096849/pexels-photo-1096849.jpeg' },
  { name: 'Formal & Ethnic Wear for Children', imageUrl: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&h=300&fit=crop&q=80' },
  { name: 'Home Upholstery & Furnishing', imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop&q=80' },
];

// All 8 hero images flat
const allHeroImages = [
  { label: 'Sarees',      image: '/images/hero1.png' },
  { label: 'Fabrics',     image: '/images/hero2.png' },
  { label: 'Kids Wear',   image: '/images/hero3.png' },
  { label: 'Bedsheets',   image: '/images/hero4.png' },
  { label: 'Women Wear',  image: 'https://images.pexels.com/photos/5418894/pexels-photo-5418894.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { label: 'Ethnic Wear', image: 'https://images.pexels.com/photos/30916976/pexels-photo-30916976.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { label: 'Collection',  image: 'https://images.pexels.com/photos/37420545/pexels-photo-37420545.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { label: 'Furnishing',  image: 'https://images.pexels.com/photos/30324297/pexels-photo-30324297.jpeg?auto=compress&cs=tinysrgb&w=600' },
];
// Desktop: 2 groups of 4
const desktopGroups = [allHeroImages.slice(0, 4), allHeroImages.slice(4, 8)];
// Mobile: 4 groups of 2
const mobileGroups = [
  allHeroImages.slice(0, 2),
  allHeroImages.slice(2, 4),
  allHeroImages.slice(4, 6),
  allHeroImages.slice(6, 8),
];

const stats = [
  { value: '35+', label: 'Years of Trust' },
  { value: '1000+', label: 'Retail Outlets' },
  { value: '5000+', label: 'Products' },
  { value: '25K+', label: 'Happy Retailers' },
  { value: '24/7', label: 'Dedicated Support' },
];

const reviews = [
  { text: "Grand Textile Mart has been our trusted partner for years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
];

const COLORS = {
  primary: '#5F6F5E',
  primaryDark: '#3B4A32',
  primaryLight: '#EFF3EB',
  accent: '#C5A880',
  bg: '#F8F5EF',
  bgCard: '#FFFFFF',
  border: '#E2D9CC',
  textDark: '#2A3325',
  textMid: '#3D3D30',
  textMuted: '#6B7280',
};

export default function Home() {
  // ── DESKTOP SLIDER (2 groups of 4) ──
  const deskExtended = [...desktopGroups, desktopGroups[0]];
  const [dIdx, setDIdx] = useState(0);
  const [dTr, setDTr]   = useState(true);
  const dBusy = useRef(false);

  // ── MOBILE SLIDER (4 groups of 2) ──
  const mobExtended = [...mobileGroups, mobileGroups[0]];
  const [mIdx, setMIdx] = useState(0);
  const [mTr, setMTr]   = useState(true);
  const mBusy = useRef(false);

  // ── Shared helper: make slider ──
  const makeSlider = (extended, idx, setIdx, tr, setTr, busy) => ({
    goNext: () => {
      if (busy.current) return;
      busy.current = true;
      setTr(true);
      setIdx(p => p + 1);
    },
    goPrev: () => {
      if (busy.current) return;
      busy.current = true;
      setTr(true);
      setIdx(p => (p <= 0 ? extended.length - 2 : p - 1));
    },
    onEnd: () => {
      if (idx === extended.length - 1) {
        setTr(false);
        setIdx(0);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          setTr(true);
          busy.current = false;
        }));
      } else {
        busy.current = false;
      }
    },
  });

  const desk = makeSlider(deskExtended, dIdx, setDIdx, dTr, setDTr, dBusy);
  const mob  = makeSlider(mobExtended,  mIdx, setMIdx, mTr, setMTr, mBusy);

  // Auto-play both in sync
  useEffect(() => {
    const t = setInterval(() => {
      desk.goNext();
      mob.goNext();
    }, 4000);
    return () => clearInterval(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dActiveDot = dIdx % desktopGroups.length;
  const mActiveDot = mIdx % mobileGroups.length;

  // Chevron button style
  const chevBtn = (onClick, side) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center
                 w-9 h-9 sm:w-11 sm:h-11 rounded-full
                 transition-all duration-200 hover:scale-110 active:scale-95"
      style={{
        [side]: '10px',
        background: 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(6px)',
        border: '1.5px solid rgba(197,168,128,0.35)',
        boxShadow: '0 4px 16px rgba(42,51,37,0.18)',
      }}
      aria-label={side === 'left' ? 'Previous' : 'Next'}
    >
      {side === 'left'
        ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B4A32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B4A32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      }
    </button>
  );

  return (
    <div className="w-full pb-10" style={{ background: COLORS.bg, fontFamily: "'Outfit', sans-serif" }}>

      {/* ══ HERO INFINITE SLIDER ══ */}
      <section className="w-full" style={{ background: '#F8F5EF' }}>
        <div className="max-w-[85rem] mx-auto px-3 sm:px-6 lg:px-8 pt-4 pb-2 sm:pb-3 sm:pt-10">

          {/* ── MOBILE SLIDER (< sm): 2 images per slide ── */}
          <div className="sm:hidden">
            {/* Outer relative — buttons sit here, OUTSIDE overflow-hidden */}
            <div className="relative">
              {/* Left chevron — outside images */}
              <button onClick={mob.goPrev}
                className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                style={{ left: '-4px', background: 'rgba(255,255,255,0.9)', border: '1.5px solid rgba(197,168,128,0.4)', boxShadow: '0 3px 12px rgba(42,51,37,0.18)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B4A32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>

              {/* Track — overflow hidden, slightly inset for chevrons */}
              <div className="overflow-hidden rounded-2xl mx-5">
                <div className="flex" onTransitionEnd={mob.onEnd}
                  style={{
                    width: `${mobExtended.length * 100}%`,
                    transform: `translateX(-${(mIdx * 100) / mobExtended.length}%)`,
                    transition: mTr ? 'transform 0.72s cubic-bezier(0.86,0,0.07,1)' : 'none',
                    willChange: 'transform',
                  }}>
                  {mobExtended.map((group, si) => (
                    <div key={si} style={{ width: `${100 / mobExtended.length}%` }} className="flex-shrink-0">
                      <div className="flex gap-2 h-[310px]">
                        {group.map((panel, idx) => (
                          <div key={idx} className="relative flex-1 rounded-[18px] overflow-hidden shadow-sm">
                            <img src={panel.image} alt={panel.label}
                              className="absolute inset-0 w-full h-full object-cover object-top" />
                            <div className="absolute inset-x-0 bottom-0 h-20 rounded-b-[18px]"
                              style={{ background: 'linear-gradient(to top,rgba(42,51,37,0.8) 0%,transparent 100%)' }} />
                            <div className="absolute bottom-2.5 left-0 right-0 text-center">
                              <span className="text-white text-[9px] font-black uppercase tracking-widest drop-shadow">
                                {panel.label}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right chevron — outside images */}
              <button onClick={mob.goNext}
                className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                style={{ right: '-4px', background: 'rgba(255,255,255,0.9)', border: '1.5px solid rgba(197,168,128,0.4)', boxShadow: '0 3px 12px rgba(42,51,37,0.18)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B4A32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>

            {/* Mobile dots — BELOW images, centered */}
            <div className="flex justify-center gap-2 mt-3">
              {mobileGroups.map((_, i) => (
                <span key={i} className="rounded-full transition-all duration-300 block"
                  style={{
                    width: mActiveDot === i ? '18px' : '7px',
                    height: '7px',
                    background: mActiveDot === i ? '#C5A880' : '#D4C9BD',
                  }} />
              ))}
            </div>
          </div>

          {/* ── DESKTOP SLIDER (sm+): 4 images per slide ── */}
          <div className="hidden sm:block">
            {/* Outer relative — buttons outside overflow-hidden */}
            <div className="relative">
              {/* Left chevron — outside images */}
              <button onClick={desk.goPrev}
                className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                style={{ left: '-6px', background: 'rgba(255,255,255,0.92)', border: '1.5px solid rgba(197,168,128,0.4)', boxShadow: '0 4px 16px rgba(42,51,37,0.18)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B4A32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>

              {/* Track — overflow hidden, inset from chevrons */}
              <div className="overflow-hidden rounded-3xl mx-6">
                <div className="flex" onTransitionEnd={desk.onEnd}
                  style={{
                    width: `${deskExtended.length * 100}%`,
                    transform: `translateX(-${(dIdx * 100) / deskExtended.length}%)`,
                    transition: dTr ? 'transform 0.75s cubic-bezier(0.86,0,0.07,1)' : 'none',
                    willChange: 'transform',
                  }}>
                  {deskExtended.map((group, si) => (
                    <div key={si} style={{ width: `${100 / deskExtended.length}%` }} className="flex-shrink-0">
                      <div className="grid grid-cols-4 gap-3 h-[350px] lg:h-[450px]">
                        {group.map((panel, idx) => (
                          <div key={idx} className="relative rounded-2xl overflow-hidden w-full h-full shadow-sm">
                            <img src={panel.image} alt={panel.label}
                              className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-x-0 bottom-0 h-20"
                              style={{ background: 'linear-gradient(to top,rgba(42,51,37,0.65) 0%,transparent 100%)' }} />
                            <div className="absolute bottom-3 left-0 right-0 text-center">
                              <span className="text-white text-[11px] font-black uppercase tracking-widest drop-shadow">
                                {panel.label}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right chevron — outside images */}
              <button onClick={desk.goNext}
                className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                style={{ right: '-6px', background: 'rgba(255,255,255,0.92)', border: '1.5px solid rgba(197,168,128,0.4)', boxShadow: '0 4px 16px rgba(42,51,37,0.18)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B4A32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>

            {/* Desktop dots — BELOW images, centered */}
            <div className="flex justify-center gap-2 mt-4">
              {desktopGroups.map((_, i) => (
                <span key={i} className="rounded-full transition-all duration-300 block"
                  style={{
                    width: dActiveDot === i ? '22px' : '8px',
                    height: '8px',
                    background: dActiveDot === i ? '#C5A880' : '#D4C9BD',
                  }} />
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          SHOP BY CATEGORY
      ══════════════════════════════════════════ */}
      <section className="max-w-[85rem] mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-14">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-10" style={{ background: COLORS.accent, opacity: 0.5 }} />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: COLORS.accent }}>
              ⬥ Shop By Category ⬥
            </span>
            <span className="h-px w-10" style={{ background: COLORS.accent, opacity: 0.5 }} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-wide uppercase" style={{ color: COLORS.textDark }}>
            Browse Our Collections
          </h2>
          <div className="w-16 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: COLORS.primary }} />
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {shopCategories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 block"
              style={{ border: `1px solid ${COLORS.border}` }}
            >
              {/* Category Image */}
              <div className="relative h-28 sm:h-32 overflow-hidden">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(42,51,37,0.7) 0%, rgba(42,51,37,0.1) 60%, transparent 100%)' }}
                />
                {/* Arrow button */}
                <div
                  className="absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  style={{ background: COLORS.accent }}
                >
                  <ArrowRight size={10} color="white" />
                </div>
              </div>
              {/* Card Label */}
              <div className="p-3 text-center" style={{ background: '#FFFFFF' }}>
                <p className="text-[12px] font-black tracking-wide leading-tight" style={{ color: COLORS.textDark }}>
                  {cat.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="max-w-[85rem] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 my-2 rounded-2xl" style={{ background: COLORS.primaryLight, border: `1px solid ${COLORS.primary}20` }}>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.primary }}>
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11.5px] font-bold uppercase tracking-wider mt-1 leading-tight" style={{ color: COLORS.textMuted }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROMO BANNERS ── */}
      <section className="max-w-[85rem] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Wholesale Banner */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[180px]"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1664299852788-5a24db0d7e05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVsayUyMGNsb3RoZXMlMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D"
              alt="Wholesale"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(42,51,37,0.85) 0%, rgba(42,51,37,0.2) 100%)' }} />
            <div className="relative z-10">
              <p className="text-[9px] font-black tracking-[0.25em] uppercase mb-2 text-white/80">
                EXCLUSIVE OFFER
              </p>
              <h3 className="text-xl sm:text-2xl font-black leading-tight mb-2 text-white">
                Wholesale<br />Excellence
              </h3>
              <p className="text-[13px] font-medium mb-5 text-white/90">
                Special pricing for retailers & bulk buyers
              </p>
              <Link
                to="/trade-enquiry"
                className="inline-flex items-center gap-2 text-[11px] font-black tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all"
                style={{ background: COLORS.primary, color: '#fff' }}
              >
                ENQUIRE NOW <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* New Arrivals Banner */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[180px]"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <img
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=300&fit=crop&q=80"
              alt="New Arrivals"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(42,51,37,0.85) 0%, rgba(42,51,37,0.2) 100%)' }} />
            <div className="relative z-10">
              <p className="text-[9px] font-black tracking-[0.25em] uppercase mb-2 text-white/80">
                NEW ARRIVALS
              </p>
              <h3 className="text-xl sm:text-2xl font-black leading-tight mb-2 text-white">
                Discover Our<br />Latest Collection
              </h3>
              <p className="text-[13px] font-medium mb-5 text-white/90">
                Explore the finest addition to our store
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-[11px] font-black tracking-wider uppercase px-5 py-2.5 rounded-lg border transition-all text-white border-white hover:bg-white hover:text-black"
              >
                SHOP NEW ARRIVALS <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ── */}
      <section className="max-w-[85rem] mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-10">
          <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-1" style={{ color: COLORS.accent }}>Testimonials</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide" style={{ color: COLORS.textDark }}>
            What Our Customers Say
          </h2>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: COLORS.primary }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl flex flex-col bg-white transition-all duration-300 cursor-pointer"
              style={{ border: `1px solid ${COLORS.border}` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.primary; e.currentTarget.style.boxShadow = '0 4px 20px rgba(95,111,94,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div className="mb-4">
                <Quote size={24} style={{ color: `${COLORS.primary}40`, transform: 'rotate(180deg)' }} fill="currentColor" />
              </div>
              <p className="leading-relaxed text-[13.5px] mb-6 flex-grow text-left italic font-medium" style={{ color: COLORS.textMid }}>
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t mt-auto" style={{ borderColor: `${COLORS.border}80` }}>
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover shadow-sm" style={{ border: `1px solid ${COLORS.border}` }} />
                <div className="text-left">
                  <h4 className="font-black text-[13px] uppercase tracking-wide" style={{ color: COLORS.textDark }}>{review.name}</h4>
                  <p className="text-[10px] font-semibold" style={{ color: COLORS.textMuted }}>{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT US / MAP CTA SECTION ── */}
      <section className="max-w-[85rem] mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-10 mb-6 sm:mb-10">
        <div className="text-center mb-10">
          <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-1" style={{ color: COLORS.accent }}>Get In Touch</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide" style={{ color: COLORS.textDark }}>
            Connect With Us
          </h2>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: COLORS.primary }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left: Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-sm text-left flex flex-col justify-center"
            style={{ background: '#FFFFFF', border: `1.5px solid ${COLORS.border}` }}
          >
            <div className="p-8 lg:p-10">
              <h2 className="font-black text-3xl mb-2" style={{ color: COLORS.textDark }}>
                Contact Details
              </h2>
              <p className="text-[13px] mb-8 font-medium" style={{ color: '#4B5563' }}>
                We're here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Headquarters', lines: ['123 Premium Textile Avenue', 'Fashion District, Chennai, TN, India'] },
                  { icon: Phone, label: 'Call Us', lines: ['+91 6353778329'] },
                  { icon: Mail, label: 'Email Enquiries', lines: ['info@grandtextilemart.com'] },
                  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
                ].map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.2)' }}>
                      <Icon size={18} color={COLORS.primary} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-1" style={{ color: COLORS.accent }}>{label}</p>
                      {lines.map((line, i) => (
                        <p key={i} className="text-[14px] font-semibold" style={{ color: COLORS.textMid }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl text-[12px] font-black tracking-wider uppercase text-white transition-all duration-300 shadow-sm"
                  style={{ background: COLORS.primary }}
                  onMouseEnter={e => e.currentTarget.style.background = COLORS.primaryDark}
                  onMouseLeave={e => e.currentTarget.style.background = COLORS.primary}
                >
                  VISIT CONTACT PAGE <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full w-full"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm min-h-[280px] sm:min-h-[350px] md:min-h-[450px]"
              style={{ border: `1.5px solid ${COLORS.border}` }}>
              <iframe
                src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Textile Mart Location Map"
              />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
