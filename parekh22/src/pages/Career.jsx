import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail } from 'lucide-react';

const C = { primary: '#721C2B', primaryDark: '#4A0E17', accent: '#CDA75E', bg: '#FAF6F0', bgLight: '#EFF3EB', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', salary: '₹6,00,000 - ₹9,00,000 P.A.', description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', salary: '₹8,00,000 - ₹12,00,000 P.A.', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', salary: '₹4,00,000 - ₹6,00,000 P.A.', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', salary: '₹5,00,000 - ₹8,00,000 P.A.', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

const Career = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: `linear-gradient(135deg, ${C.bgLight} 0%, ${C.bg} 100%)`, borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl" style={{ color: C.textDark }}>Careers</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {jobs.map((job, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={job.id}
              className="group flex flex-col justify-between rounded-2xl bg-white transition-all duration-300 hover:shadow-md p-6 relative"
              style={{ border: `1.5px solid ${C.border}` }}
            >
              <div className="flex flex-col flex-grow">
                <h3 className="text-base font-black mb-3 leading-snug line-clamp-2 min-h-[44px]" style={{ color: C.textDark }}>
                  {job.title}
                </h3>
                <div className="flex flex-col gap-2.5 mb-4 border-b pb-4" style={{ borderColor: `${C.border}60` }}>
                  <div className="flex items-center gap-2 text-[12px] font-semibold" style={{ color: '#4B5563' }}>
                    <MapPin size={13} color={C.primary} className="shrink-0" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-[12px] font-semibold" style={{ color: '#4B5563' }}>
                    <Briefcase size={13} color={C.primary} className="shrink-0" /> {job.salary}
                  </div>
                  <div className="flex items-center gap-2 text-[12px] font-semibold" style={{ color: '#4B5563' }}>
                    <Mail size={13} color={C.primary} className="shrink-0" />
                    <a href="mailto:careers@grandtextilemart.com" className="hover:underline truncate text-[11.5px]" style={{ color: C.primary }}>
                      careers@grandtextilemart.com
                    </a>
                  </div>
                </div>
                <p className="text-[12.5px] leading-relaxed mb-6 font-medium text-gray-500 line-clamp-4 flex-grow">
                  {job.description}
                </p>
              </div>

              <div className="mt-auto">
                <button
                  className="w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-200 hover:opacity-95 text-white shadow-sm cursor-pointer"
                  style={{ background: C.primary }}
                  onMouseEnter={e => e.currentTarget.style.background = C.primaryDark}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
