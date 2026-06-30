import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WelcomePopup({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    onClose();
    navigate('/products');
  };
  // Disable background scrolling when modal is open
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#E8E5DC] text-center shadow-2xl z-10"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#6B7280] hover:text-[#244C73] transition-colors p-1 rounded-full hover:bg-[#FAF9F6] border border-transparent hover:border-[#E8E5DC]"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Premium Icon Badge */}
            <div className="w-12 h-12 rounded-2xl bg-[#244C73]/10 border border-[#244C73]/20 flex items-center justify-center mx-auto mb-5">
              <Sparkles size={22} className="text-[#244C73]" />
            </div>

            {/* Brand Title */}
            <h2 
              className="text-2xl font-bold text-[#152E47] mb-1 uppercase font-serif tracking-wider"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Urban Fashion
            </h2>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-extrabold mb-4">
              Textile Mall
            </p>

            {/* Welcome Body Text */}
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6 font-semibold">
              Welcome to our newly updated platform! We specialize in manufacturing high-quality fabrics, heritage silk sarees, and premium home upholstery. Explore our latest B2B tools, Notice Board, and Collections.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleExplore}
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#244C73] hover:bg-[#1E3A5F] transition-all duration-300 shadow-md hover:shadow-lg font-sans border border-[#244C73]/30 cursor-pointer"
            >
              Explore Collections
            </button>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
