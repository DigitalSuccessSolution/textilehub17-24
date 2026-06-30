import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Gavel, UploadCloud, Send } from 'lucide-react';

const EAuction = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const activeAuctions = [
    {
      id: 1,
      title: "Excess Inventory Silk Yarn Clearance",
      description: "Online bidding for 1200kg of surplus dyed Mulberry silk yarn. Available in assorted jewel tones.",
      date: "Auction Date: July 20, 2026",
      image: "https://images.pexels.com/photos/19191099/pexels-photo-19191099.jpeg",
    },
    {
      id: 2,
      title: "Premium Handloom Jacquard Loom Machinery",
      description: "Liquidation auction of 3 industrial high-speed electronic jacquard handlooms in fully operational condition.",
      date: "Auction Date: July 28, 2026",
      image: "https://images.pexels.com/photos/15391097/pexels-photo-15391097.jpeg",
    }
  ];

  return (
    <div className="pb-20 w-full relative min-h-screen bg-[#FFF5F6]">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider normal-case font-bold m-0 text-center font-playfair">e-AUCTION</h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">Digital Liquidation & Auction System</p>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6">

        {/* Main Content Area */}
        <div className="bg-[#FFF5F6] p-0 flex flex-col gap-8">

          {/* Active e-Auctions Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-2">
            <div className="flex items-center gap-3 mb-6">
              <Gavel size={20} className="text-[#C88E9B]" />
              <h2 className="text-[#702A3C] font-semibold text-lg tracking-wider font-playfair ">
                Active e-Auctions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeAuctions.map((auction) => (
                <div
                  key={auction.id}
                  className="bg-white rounded-xl border border-[#C88E9B]/15 overflow-hidden shadow-sm hover:shadow-md hover:border-[#C88E9B]/40 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="h-48 w-full relative overflow-hidden shrink-0">
                    <img
                      src={auction.image}
                      alt={auction.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex-grow text-left">
                    <span className="text-[10px] text-[#C88E9B] font-bold block mb-1.5 uppercase tracking-wider font-outfit">{auction.date}</span>
                    <h3 className="font-playfair text-base text-[#702A3C] font-bold uppercase tracking-wider mb-2 leading-snug">
                      {auction.title}
                    </h3>
                    <p className="text-[#8E5A67] text-xs leading-relaxed font-outfit">
                      {auction.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Participation Registration Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 md:p-12 border border-[#C88E9B]/15 shadow-sm rounded-lg text-left">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#C88E9B]/15">
              <div className="w-12 h-12 bg-[#C88E9B]/10 flex items-center justify-center rounded">
                <Gavel size={24} className="text-[#C88E9B]" />
              </div>
              <div>
                <h2 className="text-[#702A3C] font-semibold text-xl uppercase tracking-wider font-playfair">Participation Registration</h2>
                <p className="text-[#8E5A67] text-[9px] uppercase tracking-widest font-bold mt-1 font-outfit">Register your interest for upcoming auctions</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); if(!selectedFile) { alert("Please upload GST Certificate"); return; } }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-widest text-[#702A3C]/80 font-bold font-outfit">
                    Name of the Participant <span className="text-[#C88E9B]">*</span>
                  </label>
                  <input type="text" className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-widest text-[#702A3C]/80 font-bold font-outfit">
                    Legal Name of Business <span className="text-[#C88E9B]">*</span>
                  </label>
                  <input type="text" className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all" required />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-widest text-[#702A3C]/80 font-bold font-outfit">
                    Business Address with Pin Code <span className="text-[#C88E9B]">*</span>
                  </label>
                  <input type="text" className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-widest text-[#702A3C]/80 font-bold font-outfit">
                    GST No.
                  </label>
                  <input type="text" className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-widest text-[#702A3C]/80 font-bold font-outfit">
                    Mobile No. <span className="text-[#C88E9B]">*</span>
                  </label>
                  <input type="tel" className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-widest text-[#702A3C]/80 font-bold font-outfit">
                    Email ID <span className="text-[#C88E9B]">*</span>
                  </label>
                  <input type="email" className="w-full px-4 py-3 bg-[#FFF5F6] border border-[#C88E9B]/15 text-[#702A3C] focus:outline-none focus:border-[#C88E9B] focus:ring-1 focus:ring-[#C88E9B]/20 font-outfit text-sm rounded transition-all" required />
                </div>
              </div>

              <div className="pt-4">
                <label className="block text-[10px] uppercase tracking-widest text-[#702A3C]/80 font-bold mb-3 font-outfit">
                  Upload GST Certificate <span className="text-[#C88E9B]">*</span>
                </label>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  required
                />

                <div
                  onClick={() => fileInputRef.current.click()}
                  className="w-full border-2 border-dashed border-[#C88E9B]/15 py-12 flex flex-col items-center justify-center bg-[#FFF5F6] hover:bg-[#C88E9B]/10 transition-colors cursor-pointer group rounded"
                >
                  <UploadCloud size={32} className="text-[#C88E9B]/55 group-hover:text-[#C88E9B] mb-3 transition-colors" />
                  {selectedFile ? (
                    <>
                      <p className="text-[#C88E9B] font-bold text-sm">Selected: {selectedFile.name}</p>
                      <p className="text-[#8E5A67] text-xs mt-1">Size: {(selectedFile.size / 1024).toFixed(1)} KB (Click to change)</p>
                    </>
                  ) : (
                    <>
                      <p className="text-[#702A3C] font-medium text-sm">Click to upload GST Certificate</p>
                      <p className="text-[#8E5A67] text-[10px] mt-1.5 uppercase tracking-widest font-bold font-outfit">PDF, JPG, PNG ACCEPTED</p>
                    </>
                  )}
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-[#C88E9B] text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#b37d8a] transition-all duration-300 shadow-md flex items-center justify-center gap-3 cursor-pointer rounded-md font-outfit"
                >
                  <Send size={14} /> Submit Registration
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EAuction;
