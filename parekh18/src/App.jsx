import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { AnimatePresence, motion } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

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
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      {!loading && (
        <>
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

          {/* Premium Welcome Popup */}
          <AnimatePresence>
            {showPopup && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowPopup(false)}
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
                />

                {/* Modal Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 350 }}
                  className="relative bg-[#3D223B] border border-[#BD7B88]/30 rounded-2xl p-8 max-w-md w-full shadow-2xl text-center text-white z-50 overflow-hidden"
                >
                  {/* Decorative background gradients */}
                  <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#BD7B88]/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#BD7B88]/10 rounded-full blur-3xl" />

                  {/* Close button */}
                  <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-4 right-4 text-[#BD7B88] hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors cursor-pointer border border-[#BD7B88]/20"
                    aria-label="Close popup"
                  >
                    <X size={16} />
                  </button>

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon Header */}
                    <div className="w-14 h-14 bg-[#BD7B88]/20 border border-[#BD7B88]/30 rounded-full flex items-center justify-center text-[#BD7B88] mb-5 shadow-inner">
                      <Sparkles size={24} className="animate-pulse" />
                    </div>

                    {/* Logo/Brand Name */}
                    <h2 className="font-playfair text-2xl font-bold uppercase tracking-[0.2em] text-white mb-2">
                      Royal Weaves
                    </h2>
                    <div className="w-16 h-[1.5px] bg-[#BD7B88] mb-6" />

                    {/* Message Body */}
                    <p className="text-gray-300 text-xs sm:text-sm font-outfit leading-relaxed mb-8 px-2">
                      Experience the timeless elegance of handloom artistry combined with modern design. Discover our premium collection of silk sarees, dress suits, and custom-woven luxury fabrics.
                    </p>

                    {/* CTA Button */}
                    <button
                      onClick={() => setShowPopup(false)}
                      className="w-full bg-[#BD7B88] hover:bg-[#A36471] text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-lg transition-all duration-300 shadow-md cursor-pointer border border-white/10"
                    >
                      Explore Collection
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>
      )}
    </Router>
  );
}

export default App;
