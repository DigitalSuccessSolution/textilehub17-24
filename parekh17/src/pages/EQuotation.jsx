import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send } from 'lucide-react';

const EQuotation = () => {
  const activeQuotations = [
    {
      id: 1,
      title: "Bulk Supply of Premium Combed Cotton Yarn",
      description: "Request for quotation for supply of 5000 kg of premium combed cotton yarn, 40s count, suitable for luxury bedsheets weaving.",
      date: "Published Date: June 25, 2026",
    },
    {
      id: 2,
      title: "Procurement of Varanasi Zari Silk Fabrics",
      description: "Submit prices for 1200 meters of double warp Banarasi zari border silk fabrics in wedding collection colorways.",
      date: "Published Date: June 28, 2026",
    }
  ];

  return (
    <div className="pb-20 w-full">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider normal-case font-bold m-0 text-center font-playfair">e-QUOTATION</h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">Request a Price Quote Online</p>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6">

        {/* Main Content Area */}
        <div className="flex flex-col gap-8 w-full">

          {/* Active Quotation Requests Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-2">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck size={20} className="text-rosegold-500" />
              <h2 className="text-gray-900 font-semibold text-lg uppercase tracking-wider">Active Quotation Requests</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeQuotations.map((quote) => (
                <div
                  key={quote.id}
                  className="bg-white p-6 border border-gray-200 shadow-sm hover:border-[#C5A880] transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C5A880]/15 flex items-center justify-center shrink-0">
                    <FileText size={20} className="text-[#C5A880]" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-[10px] text-gray-400 font-bold block mb-1 uppercase tracking-wider">{quote.date}</span>
                    <h3 className="text-sm font-playfair font-bold text-gray-900 mb-2 uppercase tracking-wide leading-snug">
                      {quote.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed font-outfit">
                      {quote.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Request a Price Quote Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 md:p-12 border border-gray-200 shadow-lg">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 bg-rosegold-500/10 flex items-center justify-center">
                <FileText size={24} className="text-rosegold-500" />
              </div>
              <div>
                <h2 className="text-gray-900 font-semibold text-xl uppercase tracking-wider">Request a Price Quote</h2>
                <p className="text-gray-400 text-[9px] uppercase tracking-widest font-bold mt-1">Fill in your requirements details below</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                    Name of the Trader <span className="text-rosegold-500">*</span>
                  </label>
                  <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                    Business Name <span className="text-rosegold-500">*</span>
                  </label>
                  <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                    Business Address with Pin Code <span className="text-rosegold-500">*</span>
                  </label>
                  <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                    GST No.
                  </label>
                  <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                    Mobile No. <span className="text-rosegold-500">*</span>
                  </label>
                  <input type="tel" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                    Email ID <span className="text-rosegold-500">*</span>
                  </label>
                  <input type="email" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors" required />
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                  Options <span className="text-rosegold-500">*</span>
                </label>
                <select className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors appearance-none text-sm text-gray-750" required>
                  <option value="" disabled selected>Select Option</option>
                  <option value="textiles">Textile Products</option>
                  <option value="materials">Raw Materials</option>
                  <option value="gifting">Corporate Gifting</option>
                </select>
              </div>

              <div className="pt-2">
                <label className="block text-[10px] uppercase tracking-widest text-gray-700 font-bold mb-2">
                  Particulars of the Products <span className="text-rosegold-500">*</span>
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 transition-colors resize-none text-sm"
                  placeholder="Enter product details, GSM, quantity, color, specifications..."
                  required
                ></textarea>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-[#C88E9B] text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#b37d8a] transition-all duration-300 shadow-md flex items-center justify-center gap-3 cursor-pointer rounded-md font-outfit"
                >
                  <Send size={14} /> Submit Quotation Request
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EQuotation;
