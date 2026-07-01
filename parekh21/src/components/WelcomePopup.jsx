import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const C = {
  primary: '#721C2B',
  primaryDark: '#4A0E17',
  accent: '#CDA75E',
  bg: '#FAF6F0',
  border: '#E6D8C5',
  textDark: '#330A10',
  textMid: '#554447',
};

export default function WelcomePopup({ isOpen, onClose }) {
  const navigate = useNavigate();

  // Scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleExplore = () => {
    onClose();
    navigate('/products');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl z-10 flex flex-col text-center"
            style={{ border: `1.5px solid ${C.border}`, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {/* Close Icon Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Header Image */}
            <div className="h-48 w-full relative">
              <img
                src="https://images.pexels.com/photos/7679682/pexels-photo-7679682.jpeg"
                alt="Ethnic Elegance Textiles"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 px-6 text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#CDA75E]">
                  Est. Generations Ago
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-wide">
                  Ethnic Elegance
                </h3>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 bg-[#FAF6F0] flex flex-col items-center">
              {/* Decorative line */}
              <div className="w-12 h-[2px] mb-4" style={{ background: C.primary }} />

              <h4 className="text-lg font-black mb-3 leading-snug" style={{ color: C.textDark }}>
                Discover Premium Indian Handlooms
              </h4>

              <p className="text-[13px] leading-relaxed mb-6 font-medium" style={{ color: C.textMid }}>
                Experience the timeless legacy of Indian craftsmanship and luxury apparel. Explore our exclusive collections of heritage sarees, fine suiting fabrics, and designer ethnic wear.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={handleExplore}
                  className="flex-1 py-3 rounded-xl font-black text-xs uppercase tracking-widest text-white transition-all shadow-sm cursor-pointer hover:opacity-95"
                  style={{ background: C.primary }}
                >
                  Explore Collection
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all border cursor-pointer hover:bg-black/5"
                  style={{ borderColor: C.border, color: C.textMid }}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
