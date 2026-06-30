import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: 'Annual General Meeting 2026',
      description: 'The Annual General Meeting of Vara Weaves Textile Mall is scheduled to be held in the corporate office boardroom to discuss the fiscal results and expansion plans.',
      date: 'Nov 01, 2026'
    },
    {
      id: 2,
      title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)',
      description: 'The Mumbai depot warehouse will remain temporarily closed for bi-annual structural safety maintenance, stock auditing, and machinery alignment.',
      date: 'Oct 20, 2026'
    },
    {
      id: 3,
      title: 'Introduction of e-Way Bill Integration in Partner Portal',
      description: 'We are rolling out an automated GST e-Way Bill generation utility inside our wholesale trade partner login dashboard for quicker dispatch clearances.',
      date: 'Sep 15, 2026'
    },
    {
      id: 4,
      title: 'Recruitment Drive for Zonal Sales Managers',
      description: 'Applications are invited from experienced textile sales professionals to lead our retail and distribution networks in Western and Southern territories.',
      date: 'Aug 22, 2026'
    },
  ];

  return (
    <div className="pb-16 w-full">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-[#F3ECE0] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center">Notice Board</h1>
          <p className="text-[#C5A880] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold">Official Corporate Announcements</p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group bg-white border border-gray-200 px-6 py-5 flex items-start gap-4 hover:shadow-md transition-all duration-300 rounded-xl"
            >
              <div className="p-3 shrink-0 bg-pearl-100 rounded-lg text-gray-500 border border-gray-200">
                <Bell size={20} className="text-[#C5A880]" />
              </div>
              <div className="flex-grow">
                <span className="text-[10px] text-gray-400 font-bold block mb-1 uppercase tracking-wider">{notice.date}</span>
                <h3 className="text-base font-playfair font-bold text-gray-900 group-hover:text-[#C5A880] transition-colors uppercase tracking-wide mb-2">
                  {notice.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-outfit">
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
