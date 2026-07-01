import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
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

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Premium preloader timing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      setShowPopup(true);
    }
  }, [loading]);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPopup]);

  return (
    <>
      <ScrollToTop />
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
          <Route path="gallery" element={<BusinessMediaGallery />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
      {loading && <Preloader />}
      <WelcomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}

function WelcomePopup({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity cursor-pointer"
      />
      
      {/* Modal Container */}
      <div 
        className="bg-[#FAF6F0] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col border border-[#E6D8C5] max-h-[90vh] animate-in fade-in zoom-in-95 duration-300"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Header Image */}
        <div className="h-48 w-full relative overflow-hidden bg-gray-100">
          <img 
            src="https://images.pexels.com/photos/6766385/pexels-photo-6766385.jpeg" 
            alt="Welcome to Grand Textile Mart" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
          
          <div className="absolute bottom-4 left-6 right-6 text-left">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#CDA75E] mb-1">Welcome Offer</p>
            <h3 className="text-xl font-bold text-white serif-title">Grand Textile Mart</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 text-center flex flex-col items-center">
          <p className="text-[13.5px] leading-relaxed text-[#554447] mb-6 font-medium">
            Discover our heritage collections of traditional handloom sarees, premium leggings, elegant kurtis, custom suiting, and luxury home linens. Experience the perfect blend of heritage and comfort.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              onClick={() => {
                navigate('/products');
                onClose();
              }}
              className="flex-1 py-3 px-6 rounded-xl font-black uppercase tracking-widest text-xs text-white transition-all hover:opacity-95 shadow-md cursor-pointer"
              style={{ background: '#721C2B' }}
            >
              Explore Collections
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 px-6 rounded-xl font-black uppercase tracking-widest text-xs transition-all hover:bg-gray-100 cursor-pointer border border-[#E6D8C5]"
              style={{ background: '#FFFFFF', color: '#554447' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
