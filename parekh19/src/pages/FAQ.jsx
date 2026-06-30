import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What types of fabrics do you manufacture?",
    answer: "We specialize in manufacturing a comprehensive range of premium textiles, including pure silk sarees, cotton bedsheets, leggings, kurtis, high-grade shirting and suiting fabric, and customized home upholstery textiles."
  },
  {
    question: "Do you accept wholesale or bulk B2B orders?",
    answer: "Yes, we are wholesale manufacturers and suppliers. We accept high-volume B2B orders for domestic and export clients. You can submit your requirements via our Trade Enquiry or e-Quotation forms."
  },
  {
    question: "How can I participate in your e-Auctions?",
    answer: "To participate in active auctions, register on our e-Auction page by uploading a valid GST Certificate. Once our compliance team approves your registration, you can place bids on active listings."
  },
  {
    question: "How do I request an e-Quotation?",
    answer: "Navigate to our e-Quotation page, fill out the required details including your business name, GST number, and select the appropriate category. Provide detailed particulars of the products, and our team will send a quote."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship our premium textiles globally. Lead times and delivery costs vary based on order volume and destination. Reach out to our export department for personalized assistance."
  },
  {
    question: "Where are your main retail showrooms and depots located?",
    answer: "Our flagship showrooms and warehouses are located in key textile hubs across India, including Mumbai, Surat, and Delhi. You can find detailed addresses on our Contact Us page."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF9F6' }}>
      
      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#152E47]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-3xl mx-auto px-4 py-12 pb-24 text-left">
        <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#E8E5DC]/60">
          <HelpCircle size={22} color="#244C73" />
          <h2 className="font-bold text-xl uppercase tracking-wide text-[#152E47]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            General FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
                style={{ border: '1.5px solid #E8E5DC' }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none transition-colors duration-200"
                >
                  <span className="font-bold text-sm sm:text-base text-[#152E47]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {faq.question}
                  </span>
                  <div className="ml-4 w-7 h-7 rounded-full flex items-center justify-center bg-[#FAF9F6] border border-[#E8E5DC] shrink-0">
                    {isOpen ? (
                      <ChevronUp size={16} className="text-[#244C73]" />
                    ) : (
                      <ChevronDown size={16} className="text-[#244C73]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#E8E5DC]/40 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
