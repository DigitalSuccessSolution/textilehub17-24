import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const C = { primary: '#5F6F5E', accent: '#C5A880', bg: '#F8F5EF', border: '#E2D9CC', textDark: '#2A3325' };

const notices = [
  {
    id: 1,
    title: 'Annual General Meeting 2026',
    date: 'Nov 01, 2026',
    description: 'We invite all partners and shareholders to join our annual meeting reviewing general performance and outline the upcoming roadmap.'
  },
  {
    id: 2,
    title: 'Warehouse Closure Notice for Maintenance',
    date: 'Oct 20, 2026',
    description: 'Our Mumbai depot will be closed for quarterly stock auditing and facility maintenance. Regular operations will resume shortly.'
  },
  {
    id: 3,
    title: 'e-Way Bill Integration in Partner Portal',
    date: 'Sep 15, 2026',
    description: 'Starting this week, all trade partners can automatically generate e-Way bills directly from the updated distributor dashboard.'
  },
  {
    id: 4,
    title: 'Recruitment Drive for Zonal Sales Managers',
    date: 'Aug 22, 2026',
    description: 'We are expanding our retail distribution team and hiring Zonal Sales Managers for Gujarat and Maharashtra circles.'
  },
];

const NoticeBoard = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #EFF3EB 0%, #F8F5EF 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl" style={{ color: C.textDark }}>Notice Board</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl p-5 bg-white flex flex-col transition-all duration-300 hover:shadow-md"
              style={{ border: `1.5px solid ${C.border}` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(95,111,94,0.08)', border: `1px solid rgba(95,111,94,0.15)` }}>
                  <Bell size={16} color={C.primary} />
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: C.accent }}>{notice.date}</span>
                <h3 className="text-sm font-black leading-snug mb-2 uppercase tracking-wide" style={{ color: C.textDark }}>
                  {notice.title}
                </h3>
                <p className="text-[11px] leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                  {notice.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
