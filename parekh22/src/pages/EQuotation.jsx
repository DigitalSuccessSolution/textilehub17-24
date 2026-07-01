import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const C = { primary: '#721C2B', primaryDark: '#4A0E17', accent: '#CDA75E', bg: '#FAF6F0', bgLight: '#EFF3EB', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };
const inputStyle = { background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark };

const activeQuotations = [
  {
    id: 1,
    title: "Wholesale Cotton Shirting Fabrics Supply",
    description: "Requesting competitive price quotes for premium grade long-staple cotton fabrics, 150-180 GSM, multiple color weaves.",
    date: "Published: 2026-06-25",
  },
  {
    id: 2,
    title: "Bulk Designer Kurti Set Manufacturing",
    description: "Inviting quotations for contract manufacturing of 5,000 units of handloom cotton kurti sets. Technical specs attached.",
    date: "Published: 2026-06-28",
  }
];

const EQuotation = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: `linear-gradient(135deg, ${C.bgLight} 0%, ${C.bg} 100%)`, borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl" style={{ color: C.textDark }}>e-Quotation</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-3xl mx-auto px-4 md:px-8 py-10">

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-left">
          <div className="flex items-center gap-3 mb-5">
            <ClipboardCheck size={20} color={C.primary} />
            <h2 className="font-black text-lg uppercase tracking-wide" style={{ color: C.textDark }}>Active Quotation Requests</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {activeQuotations.map((quote) => (
              <div 
                key={quote.id} 
                className="bg-white p-3.5 sm:p-6 border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 text-left"
                style={{ borderColor: C.border }}
              >
                {/* Logo file icon remains */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(114,28,43,0.08)', border: '1px solid rgba(114,28,43,0.2)' }}>
                  <FileText size={18} className="sm:w-[22px] sm:h-[22px]" color={C.primary} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider block mb-1.5" style={{ color: C.accent }}>{quote.date}</span>
                  <h3 className="text-[12.5px] sm:text-[14px] font-black mb-2 leading-snug line-clamp-2" style={{ color: C.textDark }}>{quote.title}</h3>
                  <p className="text-[11.5px] sm:text-[12.5px] leading-relaxed font-medium line-clamp-3" style={{ color: C.textMid }}>{quote.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left"
          style={{ border: `1.5px solid ${C.border}` }}>
          <div className="p-4 sm:p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5" style={{ borderBottom: `1px solid ${C.border}60` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(114,28,43,0.08)', border: '1px solid rgba(114,28,43,0.2)' }}>
                <FileText size={22} color={C.primary} />
              </div>
              <div>
                <h2 className="font-black text-xl uppercase tracking-wide" style={{ color: C.textDark }}>Request a Price Quote</h2>
                <p className="text-[11px] uppercase tracking-widest font-black mt-0.5" style={{ color: '#6B7280' }}>Fill in your details below</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: 'Name of the Trader *', type: 'text', req: true },
                  { label: 'Business Name *', type: 'text', req: true },
                  { label: 'Business Address with PIN Code *', type: 'text', req: true },
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
                className="w-full py-3.5 sm:py-4 rounded-xl font-black tracking-widest uppercase text-white text-[12px] sm:text-sm flex items-center justify-center gap-2 sm:gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-sm cursor-pointer"
                style={{ background: C.primary }}
                onMouseEnter={e => e.currentTarget.style.background = C.primaryDark}
                onMouseLeave={e => e.currentTarget.style.background = C.primary}
              >
                <Send size={15} className="shrink-0" /> Submit Quotation Request
              </button>


            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EQuotation;
