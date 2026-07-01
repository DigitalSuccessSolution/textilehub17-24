import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const C = { primary: '#721C2B', primaryDark: '#4A0E17', accent: '#CDA75E', bg: '#FAF6F0', bgLight: '#FCEEF1', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces&q=80', email: 'rajesh@grandtextilemart.com' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces&q=80', email: 'ananya@grandtextilemart.com' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces&q=80', email: 'vikram@grandtextilemart.com' },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: `linear-gradient(135deg, ${C.bgLight} 0%, ${C.bg} 100%)`, borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl" style={{ color: C.textDark }}>Our Retail Management</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-24 max-w-7xl mx-auto px-4 pt-10">
        <p className="text-center text-[15px] mb-16 max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: '#4B5563' }}>
          GRAND TEXTILE MART is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto text-left"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-center"
              style={{ border: `1.5px solid ${C.border}` }}
            >
              {/* Card Header Pattern/Banner */}
              <div className="h-24 w-full relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryDark} 100%)`, borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '12px 12px' }}
                />
              </div>

              {/* Profile Image (Avatar) */}
              <div className="w-24 h-24 rounded-full border-4 border-white mx-auto -mt-12 overflow-hidden relative shadow-md bg-white shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 pt-4 flex-grow flex flex-col justify-between items-center">
                <div>
                  <h3 className="text-base font-black mb-1.5" style={{ color: C.textDark }}>
                    {member.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest font-black mb-4" style={{ color: C.accent }}>
                    {member.role}
                  </p>
                </div>

                <div className="pt-4 w-full flex justify-center border-t" style={{ borderColor: `${C.border}60` }}>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-white transition-all cursor-pointer hover:opacity-95 shadow-sm"
                    style={{ background: C.primary }}
                  >
                    <Mail size={13} /> Email Management
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
