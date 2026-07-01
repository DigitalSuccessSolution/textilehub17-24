import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail } from 'lucide-react';

const C = { 
  primary: '#C5A377', 
  primaryDark: '#3D3025', 
  accent: '#C5A377', 
  bg: '#F6F1EA', 
  bgLight: '#FAF7F2', 
  border: '#E8E2D7', 
  textDark: '#3D3025', 
  textMid: '#3D3025', 
  textMuted: '#C5A377' 
};

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', salary: '₹8,00,000 - ₹12,00,000 P.A.', description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', salary: '₹10,00,000 - ₹15,00,000 P.A.', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', salary: '₹4,00,000 - ₹6,00,000 P.A.', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', salary: '₹5,00,000 - ₹8,00,000 P.A.', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

const Career = () => {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #F6F1EA 0%, #E8E2D7 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-normal text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>Career Page</h1>
          <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {jobs.map((job, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={job.id}
              className="group flex flex-col justify-between rounded-2xl bg-white transition-all duration-300 hover:shadow-md p-6 border h-full"
              style={{ borderColor: C.border }}
            >
              <div className="flex-grow mb-6">
                <h3 className="text-xl font-bold mb-4 leading-tight serif-title line-clamp-2" style={{ color: C.textDark }}>
                  {job.title}
                </h3>
                <div className="flex flex-col gap-3 mb-5">
                  <div className="flex items-center gap-2 text-[13px] font-semibold opacity-75" style={{ color: C.textDark }}>
                    <MapPin size={14} className="shrink-0" color={C.primary} /> <span className="truncate">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold opacity-75" style={{ color: C.textDark }}>
                    <Briefcase size={14} className="shrink-0" color={C.primary} /> <span className="truncate">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold opacity-75" style={{ color: C.textDark }}>
                    <Mail size={14} className="shrink-0" color={C.primary} />
                    <a href="mailto:careers@shreetextilemall.com" className="hover:underline truncate" style={{ color: C.primary }}>
                      careers@shreetextilemall.com
                    </a>
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed font-medium opacity-80 line-clamp-3" style={{ color: C.textMid }}>{job.description}</p>
              </div>

              <div className="w-full shrink-0 border-t pt-5 mt-auto" style={{ borderColor: C.border }}>
                <button
                  className="w-full py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-95 text-white shadow-sm cursor-pointer"
                  style={{ background: C.primary }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.primaryDark; e.currentTarget.style.color = '#F6F1EA'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#3D3025'; }}
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
