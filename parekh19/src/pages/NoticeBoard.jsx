import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

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
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF9F6' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#152E47]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Notice Board
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl p-5 bg-white flex flex-col transition-all duration-300 hover:shadow-md"
              style={{
                border: '1.5px solid #E8E5DC',
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(36,76,115,0.08)', border: '1px solid rgba(36,76,115,0.15)' }}>
                  <Bell size={16} color="#244C73" />
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-[10px] font-extrabold uppercase tracking-widest mb-1.5 text-[#C5A880]">{notice.date}</span>
                <h3 className="text-sm font-bold leading-snug text-[#152E47] mb-2 font-serif uppercase tracking-wide">
                  {notice.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-[#4B5563] font-semibold">
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
