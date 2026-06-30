import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, ShieldCheck, Heart, User, ShoppingBag,
  Home, Info, PhoneCall, Users, FileText, Gavel, FileDown, BookOpen, 
  Bell, Briefcase, Star, Image as ImageIcon, HelpCircle, ChevronRight 
} from 'lucide-react';
import { useState, useEffect } from 'react';

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
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const mainLinks = [
    { name: 'HOME', path: '/', icon: Home },
    { name: 'ABOUT US', path: '/about', icon: Info },
    { name: 'CONTACT US', path: '/contact', icon: PhoneCall },
    { name: 'PRODUCT', path: '/products', icon: ShoppingBag },
    { name: 'OUR RETAIL MANAGEMENT', path: '/retail-management', icon: Users },
    { name: 'e-QUOTATION', path: '/e-quotation', icon: FileText },
    { name: 'e-AUCTION', path: '/e-auction', icon: Gavel },
    { name: 'TRADE CIRCULAR', path: '/trade-circular', icon: FileDown },
  ];

  const moreLinks = [
    { name: 'BLOG', path: '/blog', icon: BookOpen },
    { name: 'NOTICE BOARD', path: '/notice-board', icon: Bell },
    { name: 'CAREER', path: '/career', icon: Briefcase },
    { name: 'CUSTOMER REVIEW', path: '/reviews', icon: Star },
    { name: 'BUSINESS MEDIA GALLERY', path: '/gallery', icon: ImageIcon },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
  ];

  const isMoreActive = moreLinks.some(l => location.pathname === l.path);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">

      {/* ── BRAND HEADER ROW (Website name & Trade Enquiry CTA) ── */}
      <div className={`w-full bg-white transition-all duration-300 ${scrolled ? 'shadow-sm py-1.5' : 'border-b border-[#E8E5DC]/55 py-2.5'}`}>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-[#244C73]/20 bg-[#FAF9F6] group-hover:scale-105 transition-transform duration-300 shadow-sm">
              <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 text-[#244C73]" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer borders */}
                <rect x="8" y="8" width="84" height="84" rx="10" stroke="currentColor" strokeWidth="3" />
                <rect x="15" y="15" width="70" height="70" rx="6" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" className="opacity-75" />
                {/* Stylized Serif Letter 'U' */}
                <path d="M36 26 V58 C36 68, 42 74, 50 74 C58 74, 64 68, 64 58 V26" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[#152E47] text-xl font-black tracking-[0.08em] leading-none uppercase font-serif">
                URBAN FASHION
              </span>
              <span className="text-[8.5px] tracking-[0.22em] uppercase text-[#C5A880] leading-tight font-extrabold mt-1 font-sans">
                TEXTILE
              </span>
            </div>
          </Link>

          {/* Right Side: Trade Enquiry Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-4">
            <Link
              to="/trade-enquiry"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#244C73] hover:bg-[#1E3A5F] transition-all duration-300 shadow-sm hover:shadow-md font-sans border border-[#244C73]/30"
            >
              <Phone size={12} />
              Trade Enquiry
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#152E47] hover:text-[#244C73] focus:outline-none p-1.5 rounded-lg hover:bg-[#FAF9F6] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── NAVIGATION LINKS BAR (Desktop bottom row: Solid Slate Navy color) ── */}
      <nav className="hidden md:block w-full bg-[#244C73] border-b border-[#1E3A5F]/40 shadow-md">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-9">
            <div className="flex items-center gap-1">
              {mainLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-1.5 text-[12px] font-bold tracking-wider transition-colors duration-200 font-sans ${
                      isActive ? 'text-[#C5A880]' : 'text-white hover:text-[#C5A880]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2.5px] rounded-full bg-[#C5A880]" />
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
                  className={`relative flex items-center gap-1 px-4 py-1.5 text-[12px] font-bold tracking-wider transition-colors duration-200 font-sans ${
                    isMoreActive ? 'text-[#C5A880]' : 'text-white hover:text-[#C5A880]'
                  }`}
                >
                  MORE
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                  />
                  {isMoreActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2.5px] rounded-full bg-[#C5A880]" />
                  )}
                </button>

                {isMoreOpen && (
                  <div className="absolute top-[30px] right-0 w-56 bg-white border border-[#E8E5DC] rounded-xl shadow-xl overflow-hidden mt-0.5 py-1 z-50">
                    {moreLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`block px-4 py-2.5 text-[12px] font-bold tracking-wider transition-all duration-150 font-sans ${
                            isActive
                              ? 'bg-[#E8F1FA] text-[#244C73]'
                              : 'text-[#152E47] hover:bg-[#FAF7F2] hover:text-[#244C73] hover:pl-5'
                          }`}
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

      {/* ── MOBILE DRAWER NAVIGATION ── */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[58px] bg-[#FAF9F6] z-40 flex flex-col animate-fade-in">
          <div className="flex-1 overflow-y-auto px-4 py-6 pb-20 space-y-1">
            {/* Main Links */}
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-[12.5px] font-bold tracking-wider transition-all duration-200 font-sans ${
                    isActive
                      ? 'bg-[#244C73]/15 text-[#244C73] border-l-4 border-[#244C73]'
                      : 'text-[#152E47] hover:bg-[#244C73]/5 hover:text-[#244C73]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className={isActive ? 'text-[#244C73]' : 'text-[#6B7280]'} />
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight size={14} className={isActive ? 'text-[#244C73]' : 'text-[#C5A880]/70'} />
                </Link>
              );
            })}

            {/* Divider */}
            <div className="h-px bg-[#E8E5DC] my-6" />
            <p className="px-4 text-[9px] font-bold text-[#6B7280] tracking-[0.2em] uppercase mb-3">More Pages</p>

            {/* Dropdown Links (2-column layout) */}
            <div className="grid grid-cols-2 gap-2 px-1">
              {moreLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-[11px] font-bold tracking-wider transition-all duration-200 font-sans ${
                      isActive
                        ? 'bg-[#C5A880]/20 text-[#A3855E] border border-[#C5A880]/40'
                        : 'text-[#4B5563] bg-white border border-[#E8E5DC]/55 hover:bg-[#FAF9F6] hover:text-[#244C73]'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-[#A3855E]' : 'text-[#6B7280]'} />
                    <span className="truncate">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Trade Enquiry button */}
            <div className="pt-6 px-1">
              <Link
                to="/trade-enquiry"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#244C73] hover:bg-[#1E3A5F] transition-all duration-300 shadow-md font-sans w-full border border-[#244C73]/30"
              >
                <Phone size={13} />
                Trade Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
