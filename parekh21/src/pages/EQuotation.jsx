import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send } from 'lucide-react';

const C = { primary: '#721C2B', primaryDark: '#4A0E17', accent: '#CDA75E', bg: '#FAF6F0', bgLight: '#FCEEF1', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };
const inputStyle = { background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark };

const activeQuotations = [
  { id: 1, title: 'Supply of Premium Cotton Shirting Fabric', description: 'Requesting quotations for 5,000 meters of premium long-staple cotton shirting fabric, 120 GSM, in pastel color sets.', date: 'Jul 10, 2026' },
  { id: 2, title: 'Festive Banarasi Silk Saree Bulk Order', description: 'Looking for verified traders to supply 250 Banarasi silk sarees in traditional wedding colors (crimson red, gold, royal blue).', date: 'Jul 15, 2026' },
  { id: 3, title: 'Home Upholstery & Cushion Covers Procurement', description: 'Seeking quotations for custom jacquard fabric cushion covers, size 16x16 inches, quantity 1,200 pieces.', date: 'Jul 22, 2026' }
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

      <div className="pb-20 max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">

          {/* Active Quotations (Left Column) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full lg:w-[340px] shrink-0 text-left">
            <div className="flex items-center gap-3 mb-5">
              <ClipboardCheck size={20} color={C.primary} />
              <h2 className="font-black text-lg uppercase tracking-wide" style={{ color: C.textDark }}>Active Quotation Requests</h2>
            </div>
            <div className="flex flex-col gap-5">
              {activeQuotations.map((q) => (
                <div key={q.id} className="p-5 rounded-2xl bg-white shadow-sm flex flex-col justify-between group transition-all hover:shadow-md" style={{ border: `1.5px solid ${C.border}` }}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: C.accent }}>{q.date}</span>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#721C2B]/10 border border-[#721C2B]/20">
                        <FileText size={15} color={C.primary} />
                      </div>
                    </div>
                    <h3 className="font-black text-sm mb-1.5 leading-snug" style={{ color: C.textDark }}>{q.title}</h3>
                    <p className="text-[12px] leading-relaxed mb-4" style={{ color: C.textMid }}>{q.description}</p>
                  </div>
                  <div className="pt-3 border-t" style={{ borderColor: `${C.border}60` }}>
                    <button className="w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider bg-[#FAF6F0] hover:bg-[#E6D8C5]/30 text-[#721C2B] border border-[#E6D8C5] transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                      <FileText size={12} /> Specs_Sheet.pdf
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form (Right Column) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="rounded-3xl shadow-md overflow-hidden bg-white text-left flex-grow w-full max-w-2xl"
            style={{ border: `1.5px solid ${C.border}` }}>
            <div className="p-8 md:p-12">
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
                  className="w-full py-4 rounded-xl font-black tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-sm cursor-pointer"
                  style={{ background: C.primary }}
                  onMouseEnter={e => e.currentTarget.style.background = C.primaryDark}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                >
                  Submit Quotation Request
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
