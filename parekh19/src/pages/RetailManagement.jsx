import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const teamMembers = [
  { 
    id: 1, 
    name: 'Rajesh Sharma', 
    role: 'Managing Director', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80' 
  },
  { 
    id: 2, 
    name: 'Ananya Sharma', 
    role: 'Head of Retail Operations', 
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80' 
  },
  { 
    id: 3, 
    name: 'Vikram Mehta', 
    role: 'Supply Chain Director', 
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80' 
  },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF9F6' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#152E47]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Retail Management
          </h1>
        </div>
      </div>

      <div className="pb-24 max-w-7xl mx-auto px-4 pt-4 pb-10">
        <p className="text-center text-[13px] sm:text-[14px] mb-10 max-w-2xl mx-auto leading-relaxed text-[#6B7280] font-bold uppercase tracking-wider">
          URBAN FASHION TEXTILE is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        {/* Small, compact circular profile cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto text-center"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="bg-white border border-[#E8E5DC] rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md hover:border-[#244C73]/30 transition-all duration-300 flex flex-col items-center justify-center"
            >
              {/* Circular Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#C5A880]/30 mb-3 bg-[#FAF9F6] shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#152E47] mb-1 font-serif uppercase tracking-wide">
                {member.name}
              </h3>
              <p className="text-[8px] sm:text-[9px] uppercase tracking-widest font-extrabold text-[#C5A880]">
                {member.role}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
