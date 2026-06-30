import { motion } from 'framer-motion';
import { Gavel, UploadCloud, Send } from 'lucide-react';

const C = { primary: '#5F6F5E', accent: '#C5A880', bg: '#F8F5EF', border: '#E2D9CC', textDark: '#2A3325', textMid: '#3D3D30' };
const inputStyle = { background: C.bg, border: `1.5px solid ${C.border}`, color: C.textDark };

const activeAuctions = [
  {
    id: 1,
    title: "Surplus Cotton Yarn Liquidation",
    description: "Online bidding for 2,500 kg of premium grade carded cotton yarn. Starting bid ₹180/kg.",
    date: "July 05, 2026",
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Unused Jacquard Fabric Rolls",
    description: "Liquidation of 450 meters of high-end jacquard brocade fabrics. Starting bid ₹320/meter.",
    date: "July 08, 2026",
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&auto=format&fit=crop&q=60"
  },
];

const EAuction = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl" style={{ color: C.textDark }}>e-Auction</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-20 max-w-3xl mx-auto px-4 md:px-8 py-10">
        <p className="text-center text-[14px] mb-10 font-medium" style={{ color: '#4B5563' }}>
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        {/* Active Auction Cards — with image, title, description, date */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} color={C.primary} />
            <h2 className="font-black text-lg tracking-wide" style={{ color: C.textDark }}>Active e-Auctions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeAuctions.map((auction) => (
              <div
                key={auction.id}
                className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col"
                style={{ border: `1.5px solid ${C.border}` }}
              >
                {/* Image */}
                <div className="h-36 w-full relative overflow-hidden">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[9px] font-black block mb-1 uppercase tracking-widest" style={{ color: C.accent }}>{auction.date}</span>
                  <h3 className="text-sm font-black mb-1.5 uppercase tracking-wide leading-snug" style={{ color: C.textDark }}>
                    {auction.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                    {auction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left"
          style={{ border: `1.5px solid ${C.border}` }}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5" style={{ borderBottom: `1px solid ${C.border}60` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.2)' }}>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-5">
                {[
                  { label: 'Name of the Participant *', type: 'text', req: true },
                  { label: 'Legal Name of Business *', type: 'text', req: true },
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

              {/* Upload GST Certificate */}
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-black mb-3" style={{ color: C.textMid }}>
                  Upload GST Certificate *
                </label>
                <label htmlFor="gst-upload"
                  className="w-full border-2 border-dashed rounded-2xl py-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:opacity-80"
                  style={{ borderColor: C.border, background: C.bg }}>
                  <input
                    id="gst-upload"
                    type="file"
                    required
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <UploadCloud size={32} className="mb-3" color={C.primary} strokeWidth={1.5} />
                  <p className="text-sm font-semibold" style={{ color: '#4B5563' }}>Click to upload GST Certificate</p>
                  <p className="text-[10px] uppercase tracking-widest font-black mt-1" style={{ color: '#6B7280' }}>PDF, JPG, PNG Accepted</p>
                </label>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-black tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-sm"
                style={{ background: C.primary }}
                onMouseEnter={e => e.currentTarget.style.background = '#3B4A32'}
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
