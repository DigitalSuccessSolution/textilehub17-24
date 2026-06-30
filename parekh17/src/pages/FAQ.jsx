import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Mail, Phone, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What makes Vara Weaves textiles unique?",
      answer: "Vara Weaves is dedicated to combining time-honored artisanal handloom craftsmanship with sustainable, state-of-the-art weaving technologies. Every product is crafted using premium Mulberry silk, high-quality zari threads, and organic cotton to ensure supreme comfort and lasting durability."
    },
    {
      question: "Can I request customization for bridal sarees or specific fabric blends?",
      answer: "Yes, we offer bespoke consultations. You can visit our Flagship Luxury Retail Showrooms or submit an inquiry through our Trade Enquiry portal. Our expert design and styling team will collaborate with you to create custom-woven layouts, metallic thread combinations, or customized patterns."
    },
    {
      question: "What is the recommended care instructions for your luxury silk products?",
      answer: "We recommend professional dry cleaning only for all premium silk sarees, brocades, and garments with heavy metallic zari or embroidery. Keep them stored in a cool, dark, dry place, wrapped in breathable soft cotton or muslin covers to maintain fabric integrity."
    },
    {
      question: "How does the e-Quotation and e-Auction system work for wholesalers?",
      answer: "Verified wholesale buyers can participate in scheduled auctions and submit price quotations for bulk industrial yarn or fabric rolls. You can register via our e-Auction or e-Quotation portals, upload required trade credentials, and receive digital notifications on tender releases."
    },
    {
      question: "Can we arrange a corporate site visit to your spinning mills and color labs?",
      answer: "Absolutely. We offer organized educational and business tours at our state-of-the-art spinning, dyeing, and color R&D facilities. Please contact our corporate office at least two weeks in advance to schedule a visit."
    },
    {
      question: "Do you ship products globally?",
      answer: "Yes, we facilitate international shipping for both retail buyers and wholesale container shipments. International delivery times vary depending on the country of destination and custom clearance processes."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-16 w-full min-h-screen bg-[#FFF5F6]">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-12 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center font-playfair">
            Frequently Asked Questions
          </h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">
            Help, Guidelines & Customer Support
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Accordion FAQ Grid */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#C88E9B]/15 overflow-hidden shadow-sm hover:shadow-md hover:border-[#C88E9B]/30 transition-all duration-300"
              >
                {/* Question Row - Standard case formatting without uppercase style */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left text-[#702A3C] font-semibold font-playfair text-sm md:text-base cursor-pointer hover:text-[#C88E9B] transition-colors duration-250 bg-white"
                >
                  <span className="pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-[#C88E9B] shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Answer Box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-2 text-xs md:text-sm text-[#8E5A67] font-outfit leading-relaxed border-t border-[#C88E9B]/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Section */}
        <div className="bg-[#FFF0F2] border border-[#C88E9B]/30 rounded-2xl p-8 text-center shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F6] to-[#FFF0F2] z-0" />
          <div className="relative z-10 max-w-xl mx-auto">
            <HelpCircle size={36} className="text-[#C88E9B] mx-auto mb-4" />
            <h3 className="font-playfair text-xl md:text-2xl text-[#702A3C] uppercase tracking-wide font-bold mb-2">
              Still Have Questions?
            </h3>
            <p className="text-[#8E5A67] text-xs md:text-sm font-outfit leading-relaxed mb-8">
              If you couldn't find the answers you were looking for, please feel free to reach out to our dedicated client assistance desk.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="mailto:support@varaweaves.com"
                className="flex flex-col items-center p-4 rounded-xl bg-white border border-[#C88E9B]/15 hover:border-[#C88E9B] transition-colors duration-300"
              >
                <Mail size={18} className="text-[#C88E9B] mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#702A3C]">Email Us</span>
                <span className="text-[9px] text-[#8E5A67] mt-1 truncate w-full">support@varaweaves.com</span>
              </a>
              <a
                href="tel:+916353778329"
                className="flex flex-col items-center p-4 rounded-xl bg-white border border-[#C88E9B]/15 hover:border-[#C88E9B] transition-colors duration-300"
              >
                <Phone size={18} className="text-[#C88E9B] mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#702A3C]">Call Us</span>
                <span className="text-[9px] text-[#8E5A67] mt-1">+91 63537 78329</span>
              </a>
              <Link
                to="/trade-enquiry"
                className="flex flex-col items-center p-4 rounded-xl bg-white border border-[#C88E9B]/15 hover:border-[#C88E9B] transition-colors duration-300"
              >
                <MessageSquare size={18} className="text-[#C88E9B] mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#702A3C]">Enquire Now</span>
                <span className="text-[9px] text-[#8E5A67] mt-1">Submit Bulk Query</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
