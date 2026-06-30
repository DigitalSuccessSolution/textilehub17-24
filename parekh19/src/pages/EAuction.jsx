import { motion } from 'framer-motion';
import { Gavel, UploadCloud, Send } from 'lucide-react';

const inputStyle = {
  background: '#FAF9F6',
  border: '1.5px solid #E8E5DC',
  color: '#152E47',
};

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
  }
];

const EAuction = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF9F6' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#152E47]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            e-Auction
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-6xl mx-auto px-4 md:px-6 py-10">
        <p className="text-center text-[14px] mb-10 text-[#4B5563] font-medium">
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Active Auctions (Left Side) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full lg:w-5/12 shrink-0 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Gavel size={20} color="#244C73" />
              <h2 className="font-bold text-lg  tracking-wide text-[#152E47]"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Active e-Auctions
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {activeAuctions.map((auction) => (
                <div
                  key={auction.id}
                  className="bg-white rounded-2xl border border-[#E8E5DC] overflow-hidden shadow-sm hover:shadow-md hover:border-[#244C73]/30 transition-all duration-300 flex flex-col"
                >
                  <div className="h-36 w-full relative overflow-hidden">
                    <img
                      src={auction.image}
                      alt={auction.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-[9px] text-[#C5A880] font-bold block mb-1 uppercase tracking-widest">{auction.date}</span>
                    <h3 className="text-sm font-bold text-[#152E47] mb-2 uppercase tracking-wide leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {auction.title}
                    </h3>
                    <p className="text-[#4B5563] text-[11px] leading-relaxed font-semibold">
                      {auction.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form (Right Side) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="flex-grow w-full rounded-3xl shadow-md overflow-hidden bg-white text-left"
            style={{ border: '1.5px solid #E8E5DC' }}>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#E8E5DC]/60">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.2)' }}>
                  <Gavel size={22} color="#244C73" />
                </div>
                <div>
                  <h2 className="font-bold text-xl uppercase tracking-wide text-[#152E47]"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    Participation Registration
                  </h2>
                  <p className="text-[11px] uppercase tracking-widest font-bold mt-0.5 text-[#6B7280]">
                    Register your interest for upcoming auctions
                  </p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  {[
                    { label: 'Name of the Participant *', type: 'text', req: true },
                    { label: 'Legal Name of Business *', type: 'text', req: true },
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

                {/* Upload */}
                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-bold mb-3 text-[#393E46]">
                    Upload GST Certificate *
                  </label>
                  <label htmlFor="gst-file" className="w-full border-2 border-dashed rounded-2xl py-12 flex flex-col items-center justify-center cursor-pointer transition-all hover:opacity-80 animate-none"
                    style={{ borderColor: '#E8E5DC', background: '#FAF9F6' }}>
                    <input id="gst-file" type="file" required className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                    <UploadCloud size={32} className="mb-3" color="#244C73" strokeWidth={1.5} />
                    <p className="text-sm font-semibold text-[#4B5563]">Click to upload GST Certificate</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold mt-1 text-[#6B7280]">PDF, JPG, PNG Accepted</p>
                  </label>
                </div>

                <button type="submit"
                  className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 btn-primary shadow-sm"
                >
                  <Send size={16} /> Submit Registration
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
