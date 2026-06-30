import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: 'Annual General Meeting 2026',
      description: 'The Board of Directors requests the presence of all corporate stakeholders for our 15th Annual General Meeting to review our expansion in sustainable luxury textiles.',
      date: 'Nov 01, 2026'
    },
    {
      id: 2,
      title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)',
      description: 'Our central Mumbai depot will remain closed for a comprehensive machinery audit and safety inspection. Dispatch schedules will resume within 48 hours.',
      date: 'Oct 20, 2026'
    },
    {
      id: 3,
      title: 'Introduction of e-Way Bill Integration in Partner Portal',
      description: 'Effective immediately, the new automated e-way bill generation utility is live on the partner portal, streamlining bulk supply chain clearances.',
      date: 'Sep 15, 2026'
    },
    {
      id: 4,
      title: 'Recruitment Drive for Zonal Sales Managers',
      description: 'We are expanding our retail footprint in North and South India. Applications are invited for experienced Sales Managers in major cities.',
      date: 'Aug 22, 2026'
    }
  ];

  return (
    <div className="pb-16 w-full max-w-6xl mx-auto px-6 py-10 md:py-14 text-left">
      {/* Direct Page Heading (No Banner) */}
      <div className="mb-10 text-left">
        <h1 className="text-[#3D223B] border-b border-[#BD7B88]/20 pb-4 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
          Notice Board
        </h1>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white border border-[#BD7B88]/15 p-3 sm:p-6 flex items-start gap-3 sm:gap-4 hover:shadow-lg hover:border-[#BD7B88]/40 transition-all duration-300 rounded-xl"
          >
            <div className="p-2 sm:p-3 shrink-0 rounded-lg bg-[#FAF4F6] border border-[#BD7B88]/15">
              <Bell size={16} className="text-[#3D223B]" />
            </div>
            <div className="flex-grow text-left">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1 sm:mb-2">
                <h3 className="text-xs sm:text-base font-semibold text-[#3D223B] font-playfair uppercase tracking-wide">
                  {notice.title}
                </h3>
                <span className="text-[8px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider font-outfit shrink-0">
                  {notice.date}
                </span>
              </div>
              <p className="text-gray-600 text-[10px] sm:text-sm leading-relaxed font-outfit mt-1">
                {notice.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
