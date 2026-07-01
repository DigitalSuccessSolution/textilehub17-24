import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const C = {
  primary: '#5F6F5E',
  primaryDark: '#3B4A32',
  accent: '#C5A880',
  bg: '#F8F5EF',
  border: '#E2D9CC',
  textDark: '#2A3325',
};

export default function WelcomePopup({ show, onClose }) {
  // Lock body scroll when popup is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[999]"
            style={{ background: 'rgba(42, 51, 37, 0.65)', backdropFilter: 'blur(4px)' }}
          />

          {/* ── Popup Card ── */}
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-[1000] inset-0 flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-sm rounded-3xl overflow-hidden pointer-events-auto"
              style={{
                background: C.bg,
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 24px 60px rgba(42,51,37,0.25)',
              }}
            >
              {/* ── Close Button ── */}
              <button
                onClick={onClose}
                className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(42,51,37,0.08)', border: `1px solid ${C.border}` }}
                aria-label="Close popup"
              >
                <X size={15} color={C.textDark} />
              </button>

              {/* ── Image ── */}
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&auto=format&fit=crop&q=75"
                  alt="Grand Textile Mart"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(42,51,37,0.7) 0%, transparent 55%)' }}
                />
                {/* Brand label on image */}
                <div className="absolute bottom-4 left-5">
                  <p className="text-[9px] font-black tracking-[0.25em] uppercase mb-0.5" style={{ color: C.accent }}>
                    ⬥ Welcome to ⬥
                  </p>
                  <h2 className="text-white font-black text-xl leading-tight tracking-wide uppercase">
                    Grand Textile<br />Mart
                  </h2>
                </div>
              </div>

              {/* ── Content ── */}
              <div className="px-6 pt-5 pb-6">
                {/* Divider with diamond */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 h-px" style={{ background: C.border }} />
                  <span className="text-[10px]" style={{ color: C.accent }}>⬥</span>
                  <div className="flex-1 h-px" style={{ background: C.border }} />
                </div>

                <p className="text-[13px] font-medium leading-relaxed mb-5 text-center" style={{ color: '#4B5563' }}>
                  Explore <strong style={{ color: C.textDark }}>5000+ premium textile products</strong> — from luxury sarees to home furnishings. Trusted by 1000+ retailers across India.
                </p>

                {/* ── Two Buttons ── */}
                <div className="flex flex-col gap-2.5">
                  {/* Primary CTA */}
                  <Link
                    to="/products"
                    onClick={onClose}
                    className="w-full py-3.5 rounded-2xl text-[12px] font-black uppercase tracking-widest text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryDark} 100%)` }}
                  >
                    Explore Collections <ArrowRight size={14} />
                  </Link>

                  {/* Secondary CTA */}
                  <a
                    href="tel:+916353778329"
                    onClick={onClose}
                    className="w-full py-3.5 rounded-2xl text-[12px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-sm"
                    style={{
                      background: 'transparent',
                      color: C.primary,
                      border: `1.5px solid ${C.border}`,
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = C.primary}
                    onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
                  >
                    <Phone size={13} /> Call Us Now
                  </a>
                </div>

                {/* Skip text */}
                <p
                  onClick={onClose}
                  className="text-center text-[10px] mt-4 cursor-pointer underline underline-offset-2 font-semibold"
                  style={{ color: '#9CA3AF' }}
                >
                  No thanks, continue browsing
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
