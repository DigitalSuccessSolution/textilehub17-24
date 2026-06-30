import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail } from 'lucide-react';

const Career = () => {
  const jobs = [
    {
      id: 1,
      title: 'Retail Operations Manager',
      location: 'Mumbai, India',
      salary: '₹8,00,000 - ₹12,00,000 P.A.',
      description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.',
    },
    {
      id: 2,
      title: 'Senior Fabric Technologist',
      location: 'Surat, India',
      salary: '₹10,00,000 - ₹15,00,000 P.A.',
      description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.',
    },
    {
      id: 3,
      title: 'B2B Sales Executive',
      location: 'Delhi, India',
      salary: '₹4,00,000 - ₹6,00,000 P.A.',
      description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.',
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      location: 'Remote',
      salary: '₹5,00,000 - ₹8,00,000 P.A.',
      description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.',
    },
  ];

  return (
    <div className="pb-16 w-full relative min-h-screen bg-[#FFF5F6]">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center font-playfair">
            Careers
          </h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">
            Join Our Legacy of Excellence
          </p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid Column Layout of Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={job.id}
              className="bg-white border border-[#C88E9B]/15 hover:border-[#C88E9B]/40 hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between h-full rounded-lg text-left"
            >
              {/* Job Info Details */}
              <div className="space-y-4 flex-grow">
                <h3 className="text-lg md:text-xl font-playfair font-semibold text-[#702A3C]">{job.title}</h3>
                <p className="text-[#8E5A67] text-xs leading-relaxed font-outfit">{job.description}</p>

                <div className="flex flex-col gap-2.5 text-[11px] font-bold text-gray-500 font-outfit">
                  <div className="flex items-center gap-2 bg-[#FFF5F6] px-3 py-2 border border-[#C88E9B]/15 text-[#702A3C] rounded">
                    <MapPin size={13} className="text-[#C88E9B]" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 bg-[#FFF5F6] px-3 py-2 border border-[#C88E9B]/15 text-[#702A3C] rounded">
                    <Briefcase size={13} className="text-[#C88E9B]" /> {job.salary}
                  </div>
                  <div className="flex items-center gap-2 bg-[#FFF5F6] px-3 py-2 border border-[#C88E9B]/15 text-[#702A3C] rounded">
                    <Mail size={13} className="text-[#C88E9B]" />
                    <a href="mailto:careers@varaweaves.com" className="hover:text-[#C88E9B] transition-colors">Apply via Email</a>
                  </div>
                </div>
              </div>

              {/* Action Button at the Bottom (Without separation line) */}
              <button className="w-full bg-[#C88E9B] text-white py-3 font-semibold uppercase tracking-widest hover:bg-[#b37d8a] transition-all duration-300 rounded-md cursor-pointer text-[10px] font-outfit mt-6 shadow-sm">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
