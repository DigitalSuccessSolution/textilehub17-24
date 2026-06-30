import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const C = { primary: '#5F6F5E', accent: '#C5A880', bg: '#F8F5EF', border: '#E2D9CC', textDark: '#2A3325', textMid: '#3D3D30' };

const faqs = [
  {
    id: 1,
    question: "What types of products does Grand Textile Mart offer?",
    answer: "Grand Textile Mart offers a comprehensive range of premium textile products including Sarees, Kurtis, Leggings, Dress Suits, Bedsheets & Linen, Hosiery Items, Suiting, Shirting, Formal & Ethnic Wear for Men, Women and Children, and Home Upholstery & Furnishing. We stock 5000+ products across all major textile categories."
  },
  {
    id: 2,
    question: "How can I place a bulk / wholesale order?",
    answer: "You can place a bulk or wholesale order by filling out our Trade Enquiry form on the website, or by submitting an e-Quotation request. Our dedicated B2B sales team will review your requirements and get back to you within 24–48 business hours with pricing and availability details."
  },
  {
    id: 3,
    question: "Do you offer nationwide delivery across India?",
    answer: "Yes, Grand Textile Mart delivers across all major cities and states in India. We have a robust logistics network covering 1000+ retail outlets. For international shipments, please contact our exports team directly via the Trade Enquiry page."
  },
  {
    id: 4,
    question: "What is the e-Auction feature and how does it work?",
    answer: "Our e-Auction platform is a digital liquidation system where we list surplus or overstocked textile inventory for competitive bidding. Registered participants can view active auctions, place bids, and secure premium fabrics at competitive prices. To participate, register on the e-Auction page by filling out the Participation Registration form and uploading your GST certificate."
  },
  {
    id: 5,
    question: "How do I apply for a career opportunity at Grand Textile Mart?",
    answer: "You can view all current job openings on our Careers page. Each listing includes the job title, location, salary range, and description. To apply, click the 'Apply Now' button and send your resume to careers@grandtextilemart.com. We regularly hire for roles in retail operations, fabric technology, sales, and digital marketing."
  },
  {
    id: 6,
    question: "What is the quality assurance process for your products?",
    answer: "Every product at Grand Textile Mart undergoes a rigorous multi-stage quality check. Our in-house fabric technologists inspect incoming batches for GSM accuracy, colorfastness, weave consistency, and dimensional stability. We maintain a 100% quality assurance policy — any defective products are rejected at source before reaching our retail partners."
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl" style={{ color: C.textDark }}>
            Frequently Asked Questions
          </h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 pb-20">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
            style={{ background: 'rgba(95,111,94,0.1)', border: `1px solid rgba(95,111,94,0.2)` }}>
            <HelpCircle size={26} color={C.primary} strokeWidth={1.5} />
          </div>
          <p className="text-[14px] font-medium max-w-xl mx-auto leading-relaxed" style={{ color: '#4B5563' }}>
            Find answers to the most common questions about our products, services, ordering process, and more.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                className="rounded-2xl overflow-hidden bg-white"
                style={{
                  border: `1.5px solid ${isOpen ? C.primary : C.border}`,
                  boxShadow: isOpen ? '0 4px 20px rgba(95,111,94,0.1)' : 'none',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {/* Number badge */}
                    <span
                      className="flex-none w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black"
                      style={{
                        background: isOpen ? C.primary : 'rgba(95,111,94,0.08)',
                        color: isOpen ? '#fff' : C.primary,
                        border: `1px solid ${isOpen ? C.primary : 'rgba(95,111,94,0.2)'}`,
                        transition: 'all 0.25s',
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-black text-[14px] sm:text-[15px] leading-snug" style={{ color: C.textDark }}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown size={18} color={isOpen ? C.primary : '#9CA3AF'} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 ml-10">
                        <div className="h-px mb-4" style={{ background: C.border }} />
                        <p className="text-[13.5px] leading-[1.8] font-medium" style={{ color: C.textMid }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center rounded-2xl p-8"
          style={{ background: 'rgba(95,111,94,0.06)', border: `1px solid ${C.border}` }}>
          <p className="font-black text-[15px] mb-1" style={{ color: C.textDark }}>Still have questions?</p>
          <p className="text-[13px] font-medium mb-4" style={{ color: '#6B7280' }}>
            Our team is happy to help you with any queries.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[11px] font-black tracking-widest uppercase text-white transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
            style={{ background: C.primary }}
            onMouseEnter={e => e.currentTarget.style.background = '#3B4A32'}
            onMouseLeave={e => e.currentTarget.style.background = C.primary}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
