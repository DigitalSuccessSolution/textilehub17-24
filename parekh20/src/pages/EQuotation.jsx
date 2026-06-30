import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send } from 'lucide-react';

const C = { primary: '#5F6F5E', accent: '#C5A880', bg: '#F8F5EF', border: '#E2D9CC', textDark: '#2A3325', textMid: '#3D3D30' };
const inputStyle = { background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark };

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
  },
];

const EQuotation = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl" style={{ color: C.textDark }}>e-Quotation</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-3xl mx-auto px-4 md:px-8 py-10">

        {/* Active Quotation Cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} color={C.primary} />
            <h2 className="font-black text-lg uppercase tracking-wide" style={{ color: C.textDark }}>Active Quotation Requests</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeQuotations.map((quote) => (
              <div
                key={quote.id}
                className="bg-white p-5 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:shadow-md"
                style={{ border: `1.5px solid ${C.border}` }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.2)' }}>
                  <FileText size={18} color={C.primary} />
                </div>
                <div className="flex-grow">
                  <span className="text-[9px] font-black block mb-1 uppercase tracking-widest" style={{ color: C.accent }}>{quote.date}</span>
                  <h3 className="text-[13px] font-black mb-1.5 uppercase tracking-wide leading-snug" style={{ color: C.textDark }}>
                    {quote.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                    {quote.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left"
          style={{ border: `1.5px solid ${C.border}` }}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5" style={{ borderBottom: `1px solid ${C.border}60` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.2)' }}>
                <FileText size={22} color={C.primary} />
              </div>
              <div>
                <h2 className="font-black text-xl uppercase tracking-wide" style={{ color: C.textDark }}>Request a Price Quote</h2>
                <p className="text-[11px] uppercase tracking-widest font-black mt-0.5" style={{ color: '#6B7280' }}>Fill in your details below</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-5">
                {[
                  { label: 'Name of the Trader *', type: 'text', req: true },
                  { label: 'Business Name *', type: 'text', req: true },
                  { label: 'Business Address with Pin Code *', type: 'text', req: true },
                  { label: 'GST No.', type: 'text', req: false },
                  { label: 'Mobile No. *', type: 'tel', req: true },
                  { label: 'Email ID *', type: 'email', req: true },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-[11px] uppercase tracking-widest font-black mb-2" style={{ color: C.textMid }}>{f.label}</label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = C.primary}
                      onBlur={e => e.target.style.borderColor = C.border}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-black mb-2" style={{ color: C.textMid }}>Options *</label>
                <select required className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none" style={inputStyle}>
                  <option value="" disabled>Select Option</option>
                  <option value="option1">Textile Products</option>
                  <option value="option2">Raw Materials</option>
                  <option value="option3">Corporate Gifting</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-black mb-2" style={{ color: C.textMid }}>
                  Particulars of the Products *
                </label>
                <textarea rows={4} required
                  placeholder="Enter product details, GSM, quantity, color, specifications..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = C.primary}
                  onBlur={e => e.target.style.borderColor = C.border}
                />
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-black tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-sm"
                style={{ background: C.primary }}
                onMouseEnter={e => e.currentTarget.style.background = '#3B4A32'}
                onMouseLeave={e => e.currentTarget.style.background = C.primary}
              >
                <Send size={16} /> Submit Quotation Request
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EQuotation;
