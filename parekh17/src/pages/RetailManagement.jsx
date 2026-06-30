import React from 'react';
import { motion } from 'framer-motion';

const RetailManagement = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajiv Parekh',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Head of Retail Operations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Supply Chain Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    }
  ];

  return (
    <div className="pb-16 w-full">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center font-playfair">Our Management</h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">Experienced Leadership & Vision</p>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-5"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-[#C5A880]/15 shadow-sm rounded-xl p-4 flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:border-[#C5A880]/40 transition-all duration-300"
            >
              {/* Leader Photo - Profile Circle */}
              <div className="relative overflow-hidden w-20 h-20 rounded-full shrink-0 border-2 border-[#C5A880]/20 bg-pearl-100 shadow-inner">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Leader Bio */}
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-base font-playfair font-bold text-gray-900 mb-0.5">{member.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed font-outfit">
                  Oversees brand initiatives, managing core growth and retail strategy to expand our operations while maintaining textile heritage and quality standards.
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
