import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

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

const notices = [
  { title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', description: 'The Annual General Meeting will be held at the corporate headquarters to discuss yearly performance and future strategies.' },
  { title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)', date: 'Oct 20, 2026', description: 'Please be informed that the Ahmedabad Depot will be closed for scheduled maintenance for 3 days.' },
  { title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', description: 'We have integrated the new e-Way Bill system into the partner portal to streamline logistics.' },
  { title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', description: 'We are expanding our sales team across multiple zones. Interested candidates are requested to apply online.' },
];

const NoticeBoard = () => {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #F6F1EA 0%, #E8E2D7 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-normal text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>Notice Board</h1>
          <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl p-5 bg-white cursor-pointer flex flex-col justify-between transition-all duration-300 hover:shadow-md border"
              style={{
                borderColor: notice.isNew ? 'rgba(197, 163, 119, 0.3)' : C.border,
                borderTop: notice.isNew ? `4px solid ${C.primary}` : `1px solid ${C.border}`,
              }}
            >
              {/* Content */}
              <div>
                <div className="flex flex-col mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider mb-2 opacity-70" style={{ color: C.textDark }}>{notice.date}</span>
                  <h3 className="text-[16px] font-bold leading-snug line-clamp-3 mb-2" style={{ color: C.textDark }}>
                    {notice.title}
                  </h3>
                  <p className="text-xs opacity-80 leading-relaxed" style={{ color: C.textDark }}>
                    {notice.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
