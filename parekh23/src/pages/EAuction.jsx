import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send, Mail } from 'lucide-react';

const C = { 
  primary: '#6E64B4', 
  primaryDark: '#252131', 
  accent: '#6E64B4', 
  bg: '#FAF9F5', 
  bgLight: '#FAF9F5', 
  border: '#E1DFEB', 
  textDark: '#252131', 
  textMid: '#252131', 
  textMuted: '#6E64B4' 
};
const inputStyle = { background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark };

const EAuction = () => {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>e-Auction</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-3xl mx-auto px-4 md:px-8 py-10">
        <p className="text-center text-[14px] mb-10 font-semibold opacity-80" style={{ color: C.textDark }}>
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        {/* Active Auctions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} color={C.primary} />
            <h2 className="font-black text-lg tracking-wide serif-title" style={{ color: C.textDark }}>Active e-Auctions</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                id: "AUC-2026-01",
                title: "Surplus Cotton Yarn Liquidation",
                description: "Online bidding for 2,500 kg of premium grade carded cotton yarn. Starting bid ₹180/kg.",
                closingTime: "July 05, 2026",
                image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=600&auto=format&fit=crop&q=60"
              },
              {
                id: "AUC-2026-02",
                title: "Unused Jacquard Fabric Rolls",
                description: "Liquidation of 450 meters of high-end jacquard brocade fabrics. Starting bid ₹320/meter.",
                closingTime: "July 08, 2026",
                image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&auto=format&fit=crop&q=60"
              }
            ].map((auction) => (
              <div 
                key={auction.id} 
                className="flex flex-col rounded-2xl bg-white border overflow-hidden transition-all duration-300 hover:shadow-md"
                style={{ borderColor: C.border }}
              >
                {/* Item Image */}
                <div className="w-full h-32 md:h-48 shrink-0 relative overflow-hidden bg-[#FAF9F5]">
                  <img 
                    src={auction.image} 
                    alt={auction.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex flex-col justify-between gap-1 mb-3">
                    <h3 className="font-bold text-[12px] sm:text-[16px] serif-title leading-tight" style={{ color: C.textDark }}>
                      {auction.title}
                    </h3>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest mt-1 sm:mt-0 shrink-0" style={{ color: C.primary }}>
                      {auction.closingTime}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs opacity-80 leading-relaxed line-clamp-3" style={{ color: C.textDark }}>
                    {auction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          id="auction-reg-form"
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left border scroll-mt-6"
          style={{ borderColor: C.border }}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                style={{ background: 'rgba(110, 100, 180, 0.08)', borderColor: 'rgba(110, 100, 180, 0.2)' }}>
                <Gavel size={22} color={C.primary} />
              </div>
              <div>
                <h2 className="font-black text-xl uppercase tracking-wide serif-title" style={{ color: C.textDark }}>Participation Registration</h2>
                <p className="text-[11px] uppercase tracking-widest font-extrabold mt-0.5 opacity-70" style={{ color: C.textDark }}>
                  Register your interest for upcoming auctions
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: 'Name of the Participant *', type: 'text', req: true },
                  { label: 'Legal Name of Business *', type: 'text', req: true },
                  { label: 'Business Address with Pin Code *', type: 'text', req: true },
                  { label: 'GST No.', type: 'text', req: false },
                  { label: 'Mobile No. *', type: 'tel', req: true },
                  { label: 'Email ID *', type: 'email', req: true },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2" style={{ color: C.textMid }}>{f.label}</label>
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
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-3" style={{ color: C.textMid }}>
                  Upload GST Certificate *
                </label>
                <label htmlFor="gst-cert-upload" className="w-full border-2 border-dashed rounded-2xl py-12 flex flex-col items-center justify-center cursor-pointer transition-all hover:opacity-85"
                  style={{ borderColor: C.border, background: C.bg }}>
                  <input id="gst-cert-upload" type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                  <UploadCloud size={32} className="mb-3" color={C.primary} strokeWidth={1.5} />
                  <p className="text-sm font-semibold opacity-85" style={{ color: C.textDark }}>Click to upload GST Certificate</p>
                  <p className="text-[10px] uppercase tracking-widest font-extrabold mt-1 opacity-70" style={{ color: C.textDark }}>PDF, JPG, PNG Accepted</p>
                </label>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-black tracking-widest uppercase text-[#FAF9F5] text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-sm cursor-pointer"
                style={{ background: C.primary }}
                onMouseEnter={e => e.currentTarget.style.background = C.primaryDark}
                onMouseLeave={e => e.currentTarget.style.background = C.primary}
              >
                <Send size={16} /> Submit Registration
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EAuction;
