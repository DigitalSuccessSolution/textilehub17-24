import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import RetailManagement from './pages/RetailManagement';
import TradeEnquiry from './pages/TradeEnquiry';
import EQuotation from './pages/EQuotation';
import EAuction from './pages/EAuction';
import TradeCircular from './pages/TradeCircular';
import Blog from './pages/Blog';
import NoticeBoard from './pages/NoticeBoard';
import Career from './pages/Career';
import CustomerReview from './pages/CustomerReview';
import BusinessMediaGallery from './pages/BusinessMediaGallery';
import FAQ from './pages/FAQ';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Premium preloader timing
    const timer = setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [showPopup]);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* Welcome Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer touch-none"
            />
            {/* Popup Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-[#FFF0F2] border border-[#C88E9B]/30 rounded-2xl p-8 max-w-md w-full shadow-2xl text-center z-10 overflow-hidden"
            >
              {/* Pink Ornament Background Details */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#C88E9B]/5 rounded-full filter blur-xl" />
              <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-[#C88E9B]/5 rounded-full filter blur-xl" />

              {/* Close Button Icon */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-[#702A3C]/70 hover:text-[#702A3C] p-1 hover:bg-[#C88E9B]/10 rounded-full transition-all cursor-pointer border border-[#C88E9B]/15"
              >
                <X size={16} />
              </button>

              {/* Logo SVG */}
              <svg className="w-12 h-12 mx-auto mb-4 text-[#C88E9B]" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 5C52 20 62 30 77 33C62 36 52 46 50 61C48 46 38 36 23 33C38 30 48 20 50 5Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 39C52 49 60 57 70 59C60 61 52 69 50 79C48 69 40 61 30 59C40 57 48 49 50 39Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="50" cy="49" r="3" />
              </svg>

              <h2 className="font-playfair text-2xl md:text-3xl text-[#702A3C] font-bold tracking-[0.1em] uppercase mb-1 border-0 pb-0 w-full text-center">
                Vara Weaves
              </h2>
              <p className="text-[#B37D8A] font-outfit text-[10px] tracking-[0.25em] uppercase font-semibold mb-4">
                Textile Mall
              </p>

              <div className="w-16 h-[1px] bg-[#C88E9B]/30 mx-auto mb-5" />

              <p className="text-[#702A3C]/90 text-xs md:text-sm font-outfit leading-relaxed mb-6 px-2">
                Experience the luxury of premium heritage handloom sarees, bespoke sherwanis, and exquisite cotton weaving. Our collection combines time-honored Indian craftsmanship with contemporary styles.
              </p>

              <Link
                to="/products"
                onClick={() => setShowPopup(false)}
                className="block w-full bg-[#C88E9B] hover:bg-[#b37d8a] text-white font-outfit py-3 px-6 text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 rounded-sm cursor-pointer shadow-md text-center"
              >
                Explore Collection
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {!loading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />} />
            <Route path="retail-management" element={<RetailManagement />} />
            <Route path="trade-enquiry" element={<TradeEnquiry />} />
            <Route path="e-quotation" element={<EQuotation />} />
            <Route path="e-auction" element={<EAuction />} />
            <Route path="trade-circular" element={<TradeCircular />} />
            <Route path="blog" element={<Blog />} />
            <Route path="notice-board" element={<NoticeBoard />} />
            <Route path="career" element={<Career />} />
            <Route path="reviews" element={<CustomerReview />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="gallery" element={<BusinessMediaGallery />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
