import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send } from 'lucide-react';

const inputStyle = {
  background: '#FAF9F6',
  border: '1.5px solid #E8E5DC',
  color: '#152E47',
};

const activeQuotations = [
  {
    id: 1,
    title: "Bulk Supply of Premium Combed Cotton Yarn",
    description: "Submit pricing for 5000 kg of premium combed cotton yarn, 40s count, suitable for luxury bedsheets weaving.",
    date: "June 25, 2026",
  },
  {
    id: 2,
    title: "Procurement of Varanasi Zari Silk Fabrics",
    description: "Submit quotes for 1200 meters of double warp Banarasi zari border silk fabrics in wedding collection colorways.",
    date: "June 28, 2026",
  }
];

const EQuotation = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF9F6' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#152E47]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            e-Quotation
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Active Quotations (Left Side) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full lg:w-5/12 shrink-0 text-left">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck size={20} color="#244C73" />
              <h2 className="font-bold text-lg uppercase tracking-wide text-[#152E47]"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Active Quotation Requests
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {activeQuotations.map((quote) => (
                <div
                  key={quote.id}
                  className="bg-white p-5 rounded-2xl border border-[#E8E5DC] shadow-sm hover:border-[#244C73]/30 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#244C73]/10 flex items-center justify-center shrink-0 border border-[#244C73]/20">
                    <FileText size={18} className="text-[#244C73]" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-[9px] text-[#C5A880] font-bold block mb-1 uppercase tracking-widest">{quote.date}</span>
                    <h3 className="text-[13px] font-bold text-[#152E47] mb-2 uppercase tracking-wide leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {quote.title}
                    </h3>
                    <p className="text-[#4B5563] text-[11px] leading-relaxed font-semibold">
                      {quote.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form (Right Side) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="flex-grow w-full rounded-3xl shadow-md overflow-hidden bg-white text-left"
            style={{ border: '1.5px solid #E8E5DC' }}>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#E8E5DC]/60">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.2)' }}>
                  <FileText size={22} color="#244C73" />
                </div>
                <div>
                  <h2 className="font-bold text-xl uppercase tracking-wide text-[#152E47]"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    Request a Price Quote
                  </h2>
                  <p className="text-[11px] uppercase tracking-widest font-bold mt-0.5 text-[#6B7280]">Fill in your details below</p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  {[
                    { label: 'Name of the Trader *', type: 'text', req: true },
                    { label: 'Business Name *', type: 'text', req: true },
                    { label: 'Business Address with Pin Code *', type: 'text', req: true },
                    { label: 'GST No.', type: 'text', req: false },
                    { label: 'Mobile No. *', type: 'tel', req: true },
                    { label: 'Email ID *', type: 'email', req: true },
                  ].map((f, i) => (
                    <div key={i}>
                      <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#393E46]">
                        {f.label}
                      </label>
                      <input type={f.type} required={f.req}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#244C73'}
                        onBlur={e => e.target.style.borderColor = '#E8E5DC'}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#393E46]">
                    Options *
                  </label>
                  <select required className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
                    style={inputStyle}>
                    <option value="" disabled>Select Option</option>
                    <option value="option1">Textile Products</option>
                    <option value="option2">Raw Materials</option>
                    <option value="option3">Corporate Gifting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#393E46]">
                    Particulars of the Products *
                  </label>
                  <textarea rows={4} required
                    placeholder="Enter product details, GSM, quantity, color, specifications..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#244C73'}
                    onBlur={e => e.target.style.borderColor = '#E8E5DC'}
                  />
                </div>

                <button type="submit"
                  className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 btn-primary shadow-sm"
                >
                  <Send size={16} /> Submit Quotation Request
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default EQuotation;
