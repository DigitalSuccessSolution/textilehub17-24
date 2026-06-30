import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send } from 'lucide-react';

const EQuotation = () => {
  const activeQuotations = [
    {
      id: 1,
      title: 'Bulk Mulberry Silk Yarn Procurement',
      description: 'Bids invited for high-grade raw Mulberry silk yarn procurement for Q4 manufacturing operations. Minimum order volume: 500 kg.',
      date: 'Closing Date: Jul 15, 2026'
    },
    {
      id: 2,
      title: 'Organic Cotton Weaving Supply Tender',
      description: 'Submission of quotations requested for supplying GOTS certified organic cotton thread blends of 40s and 60s count.',
      date: 'Closing Date: Jul 22, 2026'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 md:py-14 text-left">
      {/* Direct Page Heading (No Banner) */}
      <div className="mb-10 text-left">
        <h1 className="text-[#3D223B] border-b border-[#BD7B88]/20 pb-4 text-3xl md:text-4xl tracking-wider normal-case font-bold m-0 font-playfair">
          e-QUOTATION
        </h1>
      </div>

      {/* Main Content Area - Flat Layout */}
      <div className="flex flex-col gap-8 md:gap-12 w-full">

        {/* Active Quotation Requests Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-2">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} className="text-[#BD7B88]" />
            <h2 className="text-[#3D223B] font-semibold text-lg uppercase tracking-wider font-playfair">
              Active Quotation Requests
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
            {activeQuotations.map((quote) => (
              <div
                key={quote.id}
                className="bg-white border border-[#BD7B88]/15 rounded-xl p-3 sm:p-6 shadow-sm hover:shadow-md hover:border-[#BD7B88]/30 transition-all duration-300 flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg border border-[#BD7B88]/15 bg-[#FAF4F6] flex items-center justify-center shrink-0">
                  <FileText size={14} className="text-[#BD7B88]" />
                </div>
                <div className="flex-grow text-left">
                  <h3 className="font-playfair text-[#3D223B] font-semibold text-[10px] sm:text-sm uppercase tracking-wide mb-1 sm:mb-2 line-clamp-2">
                    {quote.title}
                  </h3>
                  <p className="text-gray-600 text-[9px] sm:text-xs font-outfit mb-2 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {quote.description}
                  </p>
                  <span className="text-[8px] sm:text-[10px] uppercase font-bold text-[#BD7B88] tracking-widest font-outfit block">
                    {quote.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Request a Price Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 md:p-12 border border-[#BD7B88]/15 rounded-xl shadow-md"
        >
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-[#FAF4F6] border border-[#BD7B88]/20 rounded-xl flex items-center justify-center shrink-0">
              <FileText size={24} className="text-[#BD7B88]" />
            </div>
            <div>
              <h2 className="text-[#3D223B] font-semibold text-xl uppercase tracking-wider font-playfair">Request a Price Quote</h2>
              <p className="text-[#7A6273] text-[9px] uppercase tracking-widest font-bold mt-1">Fill in your requirements details below</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  Name of the Trader <span className="text-[#BD7B88]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  Business Name <span className="text-[#BD7B88]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  Business Address with Pin Code <span className="text-[#BD7B88]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  GST No.
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  Mobile No. <span className="text-[#BD7B88]">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                  Email ID <span className="text-[#BD7B88]">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                Options <span className="text-[#BD7B88]">*</span>
              </label>
              <select
                className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-[#3D223B] text-sm transition-all appearance-none cursor-pointer"
                required
              >
                <option value="" disabled selected>Select Option</option>
                <option value="option1">Textile Products</option>
                <option value="option2">Raw Materials</option>
                <option value="option3">Corporate Gifting</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#3D223B] font-bold mb-2">
                Particulars of the Products <span className="text-[#BD7B88]">*</span>
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all resize-none"
                placeholder="Enter product details, GSM, quantity, color, specifications..."
                required
              ></textarea>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#3D223B] hover:bg-[#4D2D4B] text-white py-4 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-3 cursor-pointer"
              >
                <Send size={14} /> Submit Quotation Request
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EQuotation;
