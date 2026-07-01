import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gavel, FileText, UploadCloud } from 'lucide-react';

const C = { primary: '#721C2B', primaryDark: '#4A0E17', accent: '#CDA75E', bg: '#FAF6F0', bgLight: '#FCEEF1', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };
const inputStyle = { background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark };

const activeAuctions = [
  { id: 1, title: 'Surplus Silk Fabric & Yarn Stock', description: 'Bidding for surplus premium Mulberry silk yarn lots and unstitched fabric rolls from our central depot.', date: 'Jul 24, 2026', image: 'https://images.pexels.com/photos/2252000/pexels-photo-2252000.jpeg' },
  { id: 2, title: 'Excess Shirting & Suiting Rolls', description: 'Liquidation of end-of-season designer suiting fabrics and premium high-grade cotton shirting rolls.', date: 'Jul 28, 2026', image: 'https://images.pexels.com/photos/6766359/pexels-photo-6766359.jpeg' },
  { id: 3, title: 'Ex-Display Home Linens & Furnishings', description: 'Liquidation auction of showroom-display luxury bedsheets, hand-woven curtains, and premium linens.', date: 'Aug 02, 2026', image: 'https://images.pexels.com/photos/22711513/pexels-photo-22711513.jpeg' }
];

const EAuction = () => {
  const [gstFileName, setGstFileName] = useState('');

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: `linear-gradient(135deg, ${C.bgLight} 0%, ${C.bg} 100%)`, borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl" style={{ color: C.textDark }}>e-Auction</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-6xl mx-auto px-4 md:px-8 py-10">
        <p className="text-center text-[14px] mb-10 font-medium" style={{ color: '#4B5563' }}>
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">

          {/* Active Auctions (Left Column) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full lg:w-[340px] shrink-0 text-left">
            <div className="flex items-center gap-3 mb-5">
              <Gavel size={20} color={C.primary} />
              <h2 className="font-black text-lg tracking-wide" style={{ color: C.textDark }}>Active e-Auctions</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
              {activeAuctions.map((auc) => (
                <div key={auc.id} className="rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col group transition-all hover:shadow-md" style={{ border: `1.5px solid ${C.border}` }}>
                  <div className="h-28 sm:h-40 w-full relative overflow-hidden">
                    <img src={auc.image} alt={auc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-3.5 sm:p-5 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-1 block" style={{ color: C.accent }}>{auc.date}</span>
                      <h3 className="font-black text-xs sm:text-sm mb-1 leading-snug line-clamp-2" style={{ color: C.textDark }}>{auc.title}</h3>
                      <p className="text-[10px] sm:text-[12px] leading-relaxed mb-1 font-medium line-clamp-2" style={{ color: C.textMid }}>{auc.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form (Right Column) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="rounded-3xl shadow-md overflow-hidden bg-white text-left flex-grow w-full max-w-2xl"
            style={{ border: `1.5px solid ${C.border}` }}>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8 pb-5" style={{ borderBottom: `1px solid ${C.border}60` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(114,28,43,0.08)', border: '1px solid rgba(114,28,43,0.2)' }}>
                  <Gavel size={22} color={C.primary} />
                </div>
                <div>
                  <h2 className="font-black text-xl uppercase tracking-wide" style={{ color: C.textDark }}>Participation Registration</h2>
                  <p className="text-[11px] uppercase tracking-widest font-black mt-0.5" style={{ color: '#6B7280' }}>
                    Register your interest for upcoming auctions
                  </p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                  {[
                    { label: 'Name of the Participant *', type: 'text', req: true },
                    { label: 'Legal Name of Business *', type: 'text', req: true },
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

                {/* Upload */}
                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-black mb-3" style={{ color: C.textMid }}>
                    Upload GST Certificate *
                  </label>
                  <label className="w-full border-2 border-dashed rounded-2xl py-12 flex flex-col items-center justify-center cursor-pointer transition-all hover:opacity-80"
                    style={{ borderColor: C.border, background: C.bg }}>
                    <input
                      type="file"
                      required
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          setGstFileName(e.target.files[0].name);
                        }
                      }}
                    />
                    {gstFileName ? (
                      <div className="text-center flex flex-col items-center gap-1.5">
                        <FileText size={32} color="#16A34A" />
                        <p className="text-xs font-black text-green-600">✓ File Selected</p>
                        <p className="text-[11px] font-semibold text-gray-500 max-w-xs truncate">{gstFileName}</p>
                      </div>
                    ) : (
                      <>
                        <UploadCloud size={32} className="mb-3" color={C.primary} strokeWidth={1.5} />
                        <p className="text-sm font-semibold" style={{ color: '#4B5563' }}>Click to upload GST Certificate</p>
                        <p className="text-[10px] uppercase tracking-widest font-black mt-1" style={{ color: '#6B7280' }}>PDF, JPG, PNG Accepted</p>
                      </>
                    )}
                  </label>
                </div>

                <button type="submit"
                  className="w-full py-4 rounded-xl font-black tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-sm cursor-pointer"
                  style={{ background: C.primary }}
                  onMouseEnter={e => e.currentTarget.style.background = C.primaryDark}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                >
                  Submit Registration
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EAuction;
