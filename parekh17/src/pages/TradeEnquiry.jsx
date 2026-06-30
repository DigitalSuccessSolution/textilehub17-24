import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div className="pb-16 w-full relative min-h-screen bg-[#FFF5F6]">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center font-playfair">
            Trade Enquiry
          </h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">
            Bulk Orders & Wholesale Collaborations
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="max-w-2xl mx-auto text-[#8E5A67] text-sm leading-relaxed font-outfit">
            We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-[#C88E9B]/15 shadow-sm rounded-lg">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <h3 className="font-playfair text-xl text-[#702A3C] border-b border-[#C88E9B]/15 pb-3 font-semibold uppercase tracking-wider">Company Details</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#702A3C]/80 uppercase tracking-wider font-outfit">Company Name *</label>
                  <input type="text" className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#702A3C]/80 uppercase tracking-wider font-outfit">Contact Person *</label>
                  <input type="text" className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all" required />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#702A3C]/80 uppercase tracking-wider font-outfit">Email Address *</label>
                  <input type="email" className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#702A3C]/80 uppercase tracking-wider font-outfit">Phone Number *</label>
                  <input type="tel" className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all" required />
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6">
              <h3 className="font-playfair text-xl text-[#702A3C] border-b border-[#C88E9B]/15 pb-3 font-semibold uppercase tracking-wider">Enquiry Details</h3>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#702A3C]/80 uppercase tracking-wider font-outfit">Interested Categories</label>
                <select className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all">
                  <option>Sarees</option>
                  <option>Leggings</option>
                  <option>Kurtis</option>
                  <option>Suiting & Shirting</option>
                  <option>Home Furnishing</option>
                  <option>Multiple / Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#702A3C]/80 uppercase tracking-wider font-outfit">Expected Order Volume</label>
                <select className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all">
                  <option>Small (Below 1000 meters / units)</option>
                  <option>Medium (1000 - 5000 meters / units)</option>
                  <option>Large (5000+ meters / units)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#702A3C]/80 uppercase tracking-wider font-outfit">Additional Requirements / Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 resize-none font-outfit text-sm rounded transition-all"></textarea>
              </div>
            </div>

            <button className="w-full bg-[#C88E9B] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#b37d8a] transition-colors mt-8 shadow-md rounded-md cursor-pointer font-outfit text-[11px]">
              Submit Trade Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
