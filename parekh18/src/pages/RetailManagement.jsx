import React from 'react';
import { motion } from 'framer-motion';

const RetailManagement = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajiv Parekh',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Oversees brand initiatives, managing core growth and retail strategy to expand our operations while maintaining textile heritage.'
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Head of Retail Operations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Drives retail operations and visual merchandising across flagship stores to ensure a luxury customer experience.'
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Supply Chain Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Manages our textile supply chain, coordinating between weavers and distributors to ensure seamless operations.'
    }
  ];

  return (
    <div className="pb-16 w-full max-w-6xl mx-auto px-6 py-10 md:py-14 text-left">
      {/* Direct Page Heading (No Banner) */}
      <div className="mb-10 text-left">
        <h1 className="text-[#3D223B] border-b border-[#BD7B88]/20 pb-4 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
          Our Retail Management
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto"
      >
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border border-[#BD7B88]/15 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg hover:border-[#BD7B88]/40 transition-all duration-300 text-center flex flex-col items-center"
          >
            {/* Circular Profile Image (Avatar) */}
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#BD7B88]/30 mb-3 sm:mb-4 bg-[#FAF4F6] shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Title & Role */}
            <h3 className="text-xs sm:text-base font-playfair font-semibold text-[#3D223B] mb-0.5 sm:mb-1 uppercase tracking-wide">
              {member.name}
            </h3>
            <p className="text-[7px] sm:text-[9px] uppercase tracking-widest text-[#BD7B88] font-bold mb-2 sm:mb-3 font-outfit">
              {member.role}
            </p>
            <p className="text-[#7A6273] text-[9px] sm:text-[11px] leading-relaxed font-outfit text-center line-clamp-4 sm:line-clamp-none">
              {member.bio}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RetailManagement;
