import { motion } from 'framer-motion';
import { Mail, Globe, Phone } from 'lucide-react';

const C = { 
  primary: '#6E64B4', 
  primaryDark: '#252131', 
  accent: '#6E64B4', 
  bg: '#FAF9F5', 
  bgLight: '#FAF9F5', 
  border: '#E1DFEB', 
  textDark: '#252131', 
  textMid: '#252131', 
  textMuted: '#6E64B4' 
};

const teamMembers = [
  { 
    id: 1, 
    name: 'Rajesh Sharma', 
    role: 'Managing Director', 
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' 
  },
  { 
    id: 2, 
    name: 'Ananya Sharma', 
    role: 'Head of Retail Operations', 
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' 
  },
  { 
    id: 3, 
    name: 'Vikram Mehta', 
    role: 'Supply Chain Director', 
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' 
  },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: C.bg, minHeight: '100vh' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>Our Retail Management</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-24 max-w-7xl mx-auto px-4 pt-12">
        <p className="text-center text-[15px] mb-16 max-w-2xl mx-auto leading-relaxed font-semibold opacity-80" style={{ color: C.textDark }}>
          AURA LOOM is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-lg bg-white border relative"
              style={{ borderColor: C.border }}
            >
              {/* Top Banner inside Card */}
              <div className="h-28 w-full absolute top-0 left-0 transition-colors duration-500 group-hover:opacity-80" 
                style={{ background: `linear-gradient(135deg, ${C.primary}15 0%, ${C.primary}05 100%)` }} />
              
              <div className="relative pt-12 pb-8 px-6 flex flex-col items-center">
                {/* Circular Profile Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 shadow-sm mb-5 transition-transform duration-500 group-hover:scale-105"
                  style={{ borderColor: '#ffffff', background: '#ffffff' }}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                
                {/* Info */}
                <h3 className="text-[20px] font-black mb-1 serif-title" style={{ color: C.textDark }}>{member.name}</h3>
                <p className="text-[10px] uppercase tracking-widest font-extrabold mb-6" style={{ color: C.primary }}>{member.role}</p>
                
                {/* Social Links / Contact */}
                <div className="flex gap-4 pt-4 w-full justify-center border-t border-dashed" style={{ borderColor: C.border }}>
                  <a href={`mailto:${member.name.toLowerCase().replace(' ', '')}@auraloom.com`}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                    style={{ background: 'rgba(110, 100, 180, 0.08)', color: C.primary }}
                  >
                    <Mail size={16} />
                  </a>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                    style={{ background: 'rgba(110, 100, 180, 0.08)', color: C.primary }}>
                    <Globe size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                    style={{ background: 'rgba(110, 100, 180, 0.08)', color: C.primary }}>
                    <Phone size={16} />
                  </button>
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
