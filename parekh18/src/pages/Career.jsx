import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail } from 'lucide-react';

const Career = () => {
  const jobs = [
    {
      id: 1,
      title: 'Retail Operations Manager',
      location: 'Mumbai, India',
      salary: '₹8,00,000 - ₹12,00,000 / Year',
      description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.',
    },
    {
      id: 2,
      title: 'Senior Fabric Technologist',
      location: 'Surat, India',
      salary: '₹10,00,000 - ₹15,00,000 / Year',
      description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.',
    },
    {
      id: 3,
      title: 'B2B Sales Executive',
      location: 'Delhi, India',
      salary: '₹5,00,000 - ₹8,00,000 / Year',
      description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.',
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      location: 'Remote',
      salary: '₹6,00,000 - ₹10,00,000 / Year',
      description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.',
    },
  ];

  return (
    <div className="pb-16 w-full max-w-6xl mx-auto px-6 py-10 md:py-14 text-left">
      {/* Direct Page Heading (No Banner) */}
      <div className="mb-10 text-left">
        <h1 className="text-[#3D223B] border-b border-[#BD7B88]/20 pb-4 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
          Career
        </h1>
      </div>

      {/* 1 Column Layout of Wide Job Cards */}
      <div className="flex flex-col gap-6">
        {jobs.map((job, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={job.id}
            className="bg-white border border-[#BD7B88]/15 rounded-xl hover:border-[#BD7B88]/40 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row overflow-hidden shadow-sm"
          >
            {/* Left Content Area */}
            <div className="p-8 md:p-10 flex-grow text-left">
              <h3 className="text-xl md:text-2xl font-playfair font-semibold text-[#3D223B] mb-4 uppercase tracking-wide">
                {job.title}
              </h3>
              <p className="text-gray-650 text-xs sm:text-sm leading-relaxed mb-6 font-outfit">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider font-outfit">
                <div className="flex items-center gap-1.5 bg-[#FAF4F6] px-3 py-1.5 border border-[#BD7B88]/15 rounded">
                  <MapPin size={12} className="text-[#BD7B88]" /> {job.location}
                </div>
                <div className="flex items-center gap-1.5 bg-[#FAF4F6] px-3 py-1.5 border border-[#BD7B88]/15 rounded">
                  <Briefcase size={12} className="text-[#BD7B88]" /> {job.salary}
                </div>
                <div className="flex items-center gap-1.5 bg-[#FAF4F6] px-3 py-1.5 border border-[#BD7B88]/15 rounded">
                  <Mail size={12} className="text-[#BD7B88]" />
                  <a href="mailto:careers@royalweaves.com" className="hover:text-[#BD7B88] transition-colors">Apply via Email</a>
                </div>
              </div>
            </div>

            {/* Right Button Panel */}
            <div className="px-8 pb-8 md:p-10 md:w-60 flex items-center justify-center border-t md:border-t-0 md:border-l border-[#BD7B88]/10 shrink-0">
              <button className="w-full border border-[#3D223B] text-[#3D223B] hover:bg-[#3D223B] hover:text-white py-3 rounded-lg text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer">
                Apply Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Career;
