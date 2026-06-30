import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, Printer } from 'lucide-react';

const TradeCircular = () => {
  const circulars = [
    { id: 1, title: 'Revised Pricing for Silk Yarns - Q4', date: 'Oct 15, 2026', ref: 'TC/2026/45' },
    { id: 2, title: 'New Distributor Onboarding Guidelines', date: 'Sep 28, 2026', ref: 'TC/2026/42' },
    { id: 3, title: 'Festive Season Dispatch Schedule', date: 'Sep 10, 2026', ref: 'TC/2026/38' },
    { id: 4, title: 'GST Update on Handloom Products', date: 'Aug 05, 2026', ref: 'TC/2026/31' },
  ];

  return (
    <div className="pb-16 w-full relative min-h-screen bg-[#FFF5F6]">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center font-playfair">
            Trade Circulars
          </h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">
            Official Corporate & Trade Documents
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
        {/* List of Circulars formatted as Individual Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="space-y-4"
        >
          {circulars.map((circular) => (
            <div
              key={circular.id}
              className="bg-white border border-[#C88E9B]/15 shadow-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md hover:border-[#C88E9B]/40 transition-all duration-300 group rounded-lg"
            >
              {/* Left Info Area */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-[#C88E9B]/20 bg-[#FFF5F6] flex items-center justify-center shrink-0 group-hover:border-[#C88E9B] group-hover:bg-[#C88E9B]/10 transition-all shadow-sm rounded">
                  <FileText size={20} className="text-[#C88E9B] transition-colors" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#702A3C] text-base mb-1.5 group-hover:text-[#C88E9B] transition-colors uppercase tracking-wide font-playfair">
                    {circular.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#8E5A67] font-semibold uppercase tracking-wider font-outfit">
                    <span>Reference: {circular.ref}</span>
                    <span>·</span>
                    <span>Date: {circular.date}</span>
                  </div>
                </div>
              </div>

              {/* Right Buttons Panel */}
              <div className="flex items-center gap-3 shrink-0">
                <button className="flex items-center gap-1.5 px-4 py-2 border border-[#C88E9B] text-[#702A3C] hover:bg-[#C88E9B] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded cursor-pointer font-outfit">
                  <Eye size={12} /> View
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 bg-[#C88E9B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#b37d8a] transition-all duration-200 shadow-sm rounded cursor-pointer font-outfit">
                  <Printer size={12} /> Print
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TradeCircular;
