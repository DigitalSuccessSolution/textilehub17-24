import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#2A3325', fontFamily: "'Outfit', sans-serif", borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Accent top gold bar */}
      <div className="h-0.5 w-full" style={{ background: '#C5A880' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand Column - full width on mobile */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
                style={{ background: 'rgba(197,168,128,0.15)', border: '1px solid rgba(197,168,128,0.3)' }}
              >
                <svg viewBox="0 0 100 100" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="84" height="84" rx="6" stroke="#C5A880" strokeWidth="3" />
                  <rect x="14" y="14" width="72" height="72" rx="4" stroke="#C5A880" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
                  <path d="M36 26 V58 C36 68, 42 74, 50 74 C58 74, 64 68, 64 58 V26" stroke="#C5A880" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-white text-xl font-black tracking-wider leading-none">
                  GRAND TEXTILE
                </div>
                <div className="text-[8.5px] tracking-widest uppercase mt-1 font-black" style={{ color: '#C5A880' }}>
                  MART
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 font-medium" style={{ color: 'rgba(248,245,239,0.75)' }}>
              Your trusted partner in premium textiles, ethnic wear &amp; home furnishing since generations. Spanning across 1200+ outlets in India.
            </p>
          </div>

          {/* Company + Services - side by side in 2-col grid */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 grid grid-cols-2 gap-6">

            {/* Company */}
            <div>
              <h3 className="text-white text-base font-black mb-5 tracking-wide uppercase">Company</h3>
              <ul className="space-y-2.5">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Products', path: '/products' },
                  { name: 'Trade Enquiry', path: '/trade-enquiry' },
                  { name: 'Contact Us', path: '/contact' },
                ].map(link => (
                  <li key={link.name}>
                    <Link to={link.path}
                      className="flex items-center gap-1.5 group font-semibold text-sm transition-colors duration-200"
                      style={{ color: 'rgba(248,245,239,0.85)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#C5A880'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,245,239,0.85)'}
                    >
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'rgba(197,168,128,0.5)' }} />
                      <span className="truncate">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-base font-black mb-5 tracking-wide uppercase">Services</h3>
              <ul className="space-y-2.5">
                {[
                  { name: 'e-Quotation', path: '/e-quotation' },
                  { name: 'e-Auction', path: '/e-auction' },
                  { name: 'Trade Circular', path: '/trade-circular' },
                  { name: 'Blog', path: '/blog' },
                ].map(link => (
                  <li key={link.name}>
                    <Link to={link.path}
                      className="flex items-center gap-1.5 group font-semibold text-sm transition-colors duration-200"
                      style={{ color: 'rgba(248,245,239,0.85)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#C5A880'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,245,239,0.85)'}
                    >
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'rgba(197,168,128,0.5)' }} />
                      <span className="truncate">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>{/* end Company+Services wrapper */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-base font-black mb-5 tracking-wide uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" color="#C5A880" />
                <span className="text-sm leading-relaxed font-semibold" style={{ color: 'rgba(248,245,239,0.85)' }}>
                  123 Premium Textile Avenue,<br />Fashion District, Chennai, TN, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0" color="#C5A880" />
                <span className="text-sm font-semibold" style={{ color: 'rgba(248,245,239,0.85)' }}>+91 6353778329</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0" color="#C5A880" />
                <span className="text-sm font-semibold" style={{ color: 'rgba(248,245,239,0.85)' }}>info@grandtextilemart.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-xs tracking-wide font-semibold" style={{ color: 'rgba(248,245,239,0.6)' }}>
            © 2026 · All Rights Reserved · GRAND TEXTILE MART
          </p>
        </div>
      </div>
    </footer>
  );
}
