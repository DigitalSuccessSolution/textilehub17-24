import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send, Mail } from 'lucide-react';

const C = { 
  primary: '#C5A377', 
  primaryDark: '#3D3025', 
  accent: '#C5A377', 
  bg: '#F6F1EA', 
  bgLight: '#FAF7F2', 
  border: '#E8E2D7', 
  textDark: '#3D3025', 
  textMid: '#3D3025', 
  textMuted: '#C5A377' 
};
const inputStyle = { background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark };

const EAuction = () => {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #F6F1EA 0%, #E8E2D7 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-normal text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>e-Auction</h1>
          <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-[14px] mb-10 font-semibold opacity-80" style={{ color: C.textDark }}>
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        {/* Active Auctions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-left">
          <div className="flex items-center gap-3 mb-6">
            <Gavel size={20} color={C.primary} />
            <h2 className="font-bold text-lg tracking-wide serif-title " style={{ color: C.textDark }}>Active e-Auctions</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Surplus Cotton Yarn Liquidation",
                description: "Online bidding for 2,500 kg of premium grade carded cotton yarn. Starting bid ₹180/kg.",
                date: "July 05, 2026",
                image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=600&auto=format&fit=crop&q=60"
              },
              {
                title: "Unused Jacquard Fabric Rolls",
                description: "Liquidation of 450 meters of high-end jacquard brocade fabrics. Starting bid ₹320/meter.",
                date: "July 08, 2026",
                image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&auto=format&fit=crop&q=60"
              }
            ].map((auction, idx) => (
              <div 
                key={idx} 
                className="flex flex-col rounded-2xl bg-white border overflow-hidden transition-all duration-300 hover:shadow-md"
                style={{ borderColor: C.border }}
              >
                {/* Item Image */}
                <div className="w-full h-32 sm:h-48 relative overflow-hidden bg-[#F6F1EA]">
                  <img 
                    src={auction.image} 
                    alt={auction.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content Area */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                  <div className="mb-2 sm:mb-4">
                    <h3 className="font-bold text-[13px] sm:text-[16px] mb-2 serif-title line-clamp-2" style={{ color: C.textDark }}>
                      {auction.title}
                    </h3>
                    
                    <p className="text-[10px] sm:text-xs opacity-80 leading-relaxed mb-3 sm:mb-4 min-h-[48px] line-clamp-3 sm:line-clamp-none" style={{ color: C.textDark }}>
                      {auction.description}
                    </p>

                    <div className="text-left pt-2 sm:pt-3 border-t border-dashed" style={{ borderColor: C.border }}>
                      <span className="text-[9px] uppercase tracking-widest font-bold block" style={{ color: C.primary }}>
                        Date
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold" style={{ color: C.textDark }}>
                        {auction.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          id="auction-reg-form"
          className="max-w-3xl mx-auto rounded-3xl shadow-md overflow-hidden bg-white text-left border scroll-mt-6"
          style={{ borderColor: C.border }}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                style={{ background: 'rgba(197, 163, 119, 0.08)', borderColor: 'rgba(197, 163, 119, 0.2)' }}>
                <Gavel size={22} color={C.primary} />
              </div>
              <div>
                <h2 className="font-bold text-xl uppercase tracking-wide serif-title" style={{ color: C.textDark }}>Participation Registration</h2>
                <p className="text-[11px] uppercase tracking-widest font-bold mt-0.5 opacity-70" style={{ color: C.textDark }}>
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
                    <label className="block text-[11px] uppercase tracking-widest font-bold mb-2" style={{ color: C.textMid }}>{f.label}</label>
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
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-3" style={{ color: C.textMid }}>
                  Upload GST Certificate
                </label>
                <label className="w-full border-2 border-dashed rounded-2xl py-12 flex flex-col items-center justify-center cursor-pointer transition-all hover:opacity-85"
                  style={{ borderColor: C.border, background: C.bg }}>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  <UploadCloud size={32} className="mb-3" color={C.primary} strokeWidth={1.5} />
                  <p className="text-sm font-semibold opacity-85" style={{ color: C.textDark }}>Click to upload GST Certificate</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold mt-1 opacity-70" style={{ color: C.textDark }}>PDF, JPG, PNG Accepted</p>
                </label>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-[#3D3025] bg-[#C5A377] hover:bg-[#3D3025] hover:text-[#F6F1EA] text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-sm cursor-pointer border border-[#C5A377]"
              >
                <Send size={16} /> Submit Registration
              </button>

              <div className="pt-2 text-center flex items-center justify-center gap-2">
                <Mail size={14} color={C.primary} />
                <a href="mailto:info@shreetextilemall.com"
                  className="text-[11px] font-bold tracking-widest hover:underline"
                  style={{ color: C.primary }}>
                  info@shreetextilemall.com
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EAuction;
