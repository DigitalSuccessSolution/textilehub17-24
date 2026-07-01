import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const C = { primary: '#5F6F5E', accent: '#C5A880', bg: '#F8F5EF', border: '#E2D9CC', textDark: '#2A3325' };

const teamMembers = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
    email: 'rajesh@grandtextilemart.com',
    about: 'Visionary leader with 20+ years in the textile industry, driving Grand Textile Mart to national excellence.',
    gender: 'male',
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    role: 'Head of Retail Operations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    email: 'ananya@grandtextilemart.com',
    about: 'Expert in retail strategy and supply chain optimization with a passion for customer-first operations.',
    gender: 'female',
  },
  {
    id: 3,
    name: 'Vikram Mehta',
    role: 'Supply Chain Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
    email: 'vikram@grandtextilemart.com',
    about: 'Drives end-to-end logistics and vendor management across 1000+ retail partner outlets nationwide.',
    gender: 'male',
  },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-2xl sm:text-4xl lg:text-5xl leading-tight" style={{ color: C.textDark }}>
            Our Retail Management
          </h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-24 max-w-7xl mx-auto px-4 pt-10">
        <p className="text-center text-[14px] sm:text-[15px] mb-12 max-w-2xl mx-auto leading-relaxed font-medium px-2"
          style={{ color: '#4B5563' }}>
          GRAND TEXTILE MART is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        {/* Profile Cards Grid — compact */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ border: `1px solid ${C.border}` }}
            >
              {/* ── Coloured Top Strip ── */}
              <div className="h-16 w-full"
                style={{ background: 'linear-gradient(135deg, #D4E0CF 0%, #C5D4BF 100%)' }}>
                <div className="h-full w-full opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #5F6F5E 1px, transparent 1px)',
                    backgroundSize: '12px 12px',
                  }} />
              </div>

              {/* ── Circular Avatar — overlapping strip ── */}
              <div className="flex justify-center -mt-10 mb-3 relative z-10">
                <div
                  className="w-20 h-20 rounded-full overflow-hidden shadow-md"
                  style={{
                    border: '3px solid #fff',
                    outline: `2px solid ${C.accent}`,
                    outlineOffset: '1px',
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* ── Info ── */}
              <div className="px-4 pb-5">
                <h3 className="font-black text-[15px] leading-tight mb-0.5" style={{ color: C.textDark }}>
                  {member.name}
                </h3>
                <p className="text-[8px] uppercase tracking-[0.2em] font-black mb-3" style={{ color: C.accent }}>
                  {member.role}
                </p>

                <div className="h-px mb-3" style={{ background: C.border }} />

                <p className="text-[11px] leading-relaxed font-medium mb-4" style={{ color: '#6B7280' }}>
                  {member.about}
                </p>

                {/* Email button */}
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-200"
                  style={{ background: 'rgba(95,111,94,0.08)', color: C.primary, border: `1px solid rgba(95,111,94,0.18)` }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(95,111,94,0.08)'; e.currentTarget.style.color = C.primary; }}
                >
                  <Mail size={11} /> Contact
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetailManagement;
