import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BRAND = {
  name: 'Grand Textile Mart',
  line1: 'Grand Textile',
  line2: 'MART',
};

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const mainLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'PRODUCT', path: '/products' },
    { name: 'OUR RETAIL MANAGEMENT', path: '/retail-management' },
    { name: 'e-QUOTATION', path: '/e-quotation' },
    { name: 'e-AUCTION', path: '/e-auction' },
    { name: 'TRADE CIRCULAR', path: '/trade-circular' },
  ];

  const moreLinks = [
    { name: 'BLOG', path: '/blog' },
    { name: 'NOTICE BOARD', path: '/notice-board' },
    { name: 'CAREER', path: '/career' },
    { name: 'CUSTOMER REVIEW', path: '/reviews' },
    { name: 'BUSINESS MEDIA GALLERY', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isMoreActive = moreLinks.some(l => location.pathname === l.path);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ── BRAND HEADER ROW ── */}
      <div className={`w-full bg-white transition-all duration-300 ${scrolled ? 'shadow-sm py-1.5' : 'border-b py-2.5'}`}
        style={{ borderColor: '#E2D9CC' }}>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center border group-hover:scale-105 transition-transform duration-300 shadow-sm"
              style={{ background: 'linear-gradient(135deg, #5F6F5E, #3B4A32)', borderColor: 'rgba(95,111,94,0.3)' }}
            >
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 35 C20 35, 50 20, 80 35 L80 55 C80 70, 65 80, 50 80 C35 80, 20 70, 20 55 Z"
                  stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
                <path d="M30 45 L50 55 L70 45" stroke="#C5A880" strokeWidth="3" strokeLinecap="round" />
                <circle cx="50" cy="55" r="4" fill="#C5A880" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-black tracking-[0.06em] leading-none uppercase" style={{ color: '#2A3325' }}>
                Grand Textile Mart
              </span>
              <span className="text-[8.5px] tracking-[0.28em] uppercase leading-tight font-extrabold mt-0.5" style={{ color: '#C5A880' }}>
                textile hub
              </span>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              to="/trade-enquiry"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-white transition-all duration-300 shadow-sm hover:shadow-md border"
              style={{ background: '#5F6F5E', borderColor: 'rgba(95,111,94,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.background = '#4D6040'}
              onMouseLeave={e => e.currentTarget.style.background = '#5F6F5E'}
            >
              <Phone size={12} />
              Trade Enquiry
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none p-1.5 rounded-lg transition-colors"
              style={{ color: '#2A3325' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── NAVIGATION LINKS BAR (Desktop) ── */}
      <nav className="hidden md:block w-full shadow-md" style={{ background: '#5F6F5E', borderBottom: '1px solid rgba(43,51,37,0.3)' }}>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-9">
            <div className="flex items-center gap-1">
              {mainLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative px-4 py-1.5 text-[11.5px] font-bold tracking-wider transition-colors duration-200"
                    style={{ color: isActive ? '#C5A880' : 'rgba(255,255,255,0.92)' }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#C5A880'; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.92)'; }}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2.5px] rounded-full" style={{ background: '#C5A880' }} />
                    )}
                  </Link>
                );
              })}

              {/* More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                <button
                  className="relative flex items-center gap-1 px-4 py-1.5 text-[11.5px] font-bold tracking-wider transition-colors duration-200"
                  style={{ color: isMoreActive ? '#C5A880' : 'rgba(255,255,255,0.92)' }}
                  onMouseEnter={e => { if (!isMoreActive) e.currentTarget.style.color = '#C5A880'; }}
                  onMouseLeave={e => { if (!isMoreActive) e.currentTarget.style.color = 'rgba(255,255,255,0.92)'; }}
                >
                  MORE
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                  />
                  {isMoreActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2.5px] rounded-full" style={{ background: '#C5A880' }} />
                  )}
                </button>

                {isMoreOpen && (
                  <div className="absolute top-[30px] right-0 w-60 bg-white border rounded-xl shadow-xl overflow-hidden mt-0.5 py-1 z-50"
                    style={{ borderColor: '#E2D9CC' }}>
                    {moreLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block px-4 py-2.5 text-[12px] font-bold tracking-wider transition-all duration-150"
                          style={{
                            background: isActive ? '#EFF3EB' : 'transparent',
                            color: isActive ? '#5F6F5E' : '#2A3325',
                          }}
                          onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = '#F8F5EF'; e.currentTarget.style.color = '#5F6F5E'; e.currentTarget.style.paddingLeft = '20px'; } }}
                          onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2A3325'; e.currentTarget.style.paddingLeft = '16px'; } }}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER NAVIGATION (Slide-out Panel) ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-[3px]"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed inset-y-0 right-0 w-[80%] max-w-[320px] bg-white z-50 shadow-2xl flex flex-col"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {/* Drawer Header */}
              <div className="p-4 border-b flex justify-between items-center bg-[#F8F5EF]" style={{ borderColor: '#E2D9CC' }}>
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #5F6F5E, #3B4A32)' }}
                  >
                    <svg viewBox="0 0 100 100" className="w-5 h-5 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 35 C20 35, 50 20, 80 35 L80 55 C80 70, 65 80, 50 80 C35 80, 20 70, 20 55 Z"
                        stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
                      <path d="M30 45 L50 55 L70 45" stroke="#C5A880" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-black tracking-[0.05em] uppercase" style={{ color: '#2A3325' }}>
                      Grand Textile
                    </span>
                    <span className="text-[7px] tracking-[0.2em] uppercase font-bold" style={{ color: '#C5A880' }}>
                      textile hub
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-black/5 transition-colors"
                  style={{ color: '#2A3325' }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {mainLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-[12px] font-bold tracking-wider transition-all duration-200"
                      style={{
                        background: isActive ? '#EFF3EB' : 'transparent',
                        color: isActive ? '#5F6F5E' : '#2A3325',
                        borderLeft: isActive ? '3.5px solid #5F6F5E' : '3.5px solid transparent',
                      }}
                    >
                      <span>{link.name}</span>
                    </Link>
                  );
                })}

                <div className="h-px my-3" style={{ background: '#E2D9CC' }} />
                <p className="px-4 text-[9px] font-black tracking-[0.2em] uppercase mb-1.5" style={{ color: '#C5A880' }}>More Pages</p>

                <div className="space-y-0.5 pl-1">
                  {moreLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-4 py-2.5 rounded-lg text-[12px] font-bold tracking-wider transition-all duration-200"
                        style={{
                          background: isActive ? '#F8F5EF' : 'transparent',
                          color: isActive ? '#5F6F5E' : '#6B7280',
                          borderLeft: isActive ? '3px solid #C5A880' : '3px solid transparent',
                        }}
                      >
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer Call to Action */}
              <div className="p-4 border-t bg-white" style={{ borderColor: '#E2D9CC' }}>
                <Link
                  to="/trade-enquiry"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white transition-all duration-300 shadow-md w-full active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #5F6F5E, #3B4A32)' }}
                >
                  <Phone size={13} />
                  Trade Enquiry
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
