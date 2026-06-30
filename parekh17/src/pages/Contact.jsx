import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pb-16 w-full relative min-h-screen bg-[#FFF5F6]">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center font-playfair">
            Contact Us
          </h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">
            Get In Touch With Our Offices
          </p>
        </div>
      </div>

      {/* 1 Column Layout of Wide Spanning Panels */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
        {/* Panel 1: Intro & Quick Contact Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#C88E9B]/15 p-8 md:p-12 shadow-sm rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div className="md:w-1/2 space-y-4">
            <h2 className="font-playfair text-2xl md:text-3xl text-[#702A3C] font-semibold uppercase tracking-wide leading-tight">
              Let's connect. <br />
              <span className="text-[#C88E9B] italic font-playfair">Get in touch.</span>
            </h2>
            <p className="text-[#8E5A67] text-sm leading-relaxed max-w-md font-outfit">
              Experience the finest craftsmanship. Our headquarters brings you premium quality and timeless apparel traditions. Reach out for consultations or support.
            </p>
          </div>

          <div className="md:w-1/2 space-y-4 shrink-0">
            {/* Location Pill */}
            <div className="flex items-center gap-4 bg-[#FFF5F6] p-4 border border-[#C88E9B]/20 rounded w-full">
              <div className="p-3 bg-[#C88E9B] text-white border border-transparent shadow-sm rounded">
                <MapPin size={18} />
              </div>
              <div className="text-left">
                <h4 className="font-playfair font-bold text-sm text-[#702A3C] uppercase tracking-wide">Headquarters</h4>
                <p className="text-[#8E5A67] text-xs mt-0.5 leading-relaxed font-outfit">123 Premium Apparel Road<br />Fashion Hub, Chennai, TN, 600001</p>
              </div>
            </div>

            {/* Phone Pill */}
            <div className="flex items-center gap-4 bg-[#FFF5F6] p-4 border border-[#C88E9B]/20 rounded w-full">
              <div className="p-3 bg-[#C88E9B] text-white border border-transparent shadow-sm rounded">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <h4 className="font-playfair font-bold text-sm text-[#702A3C] uppercase tracking-wide">Call Us</h4>
                <p className="text-[#8E5A67] text-xs mt-0.5 font-outfit">+91 63537 78329</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Panel 2: Email, Working Hours & Map (Wider map layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#C88E9B]/15 p-8 md:p-12 shadow-sm rounded-lg flex flex-col md:flex-row gap-8"
        >
          {/* Details Card (md:w-[35%]) */}
          <div className="md:w-[35%] flex flex-col justify-center text-left space-y-6">
            <h3 className="font-playfair text-xl font-bold text-[#702A3C] uppercase tracking-wide border-b border-[#C88E9B]/15 pb-2">Business Details</h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="text-[#C88E9B] bg-[#FFF5F6] p-2.5 border border-[#C88E9B]/20 rounded">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-widest uppercase text-[#8E5A67] mb-0.5 font-outfit">Email Enquiries</p>
                  <p className="text-[#702A3C] text-xs md:text-sm font-semibold font-outfit">info@varaweaves.com</p>
                  <p className="text-[#702A3C] text-xs md:text-sm font-semibold font-outfit">sales@varaweaves.com</p>
                </div>
              </div>

              <div className="h-px w-full bg-[#C88E9B]/15"></div>

              <div className="flex items-center gap-4">
                <div className="text-[#C88E9B] bg-[#FFF5F6] p-2.5 border border-[#C88E9B]/20 rounded">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-widest uppercase text-[#8E5A67] mb-0.5 font-outfit">Business Hours</p>
                  <p className="text-[#702A3C] text-xs md:text-sm font-semibold font-outfit">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-[#702A3C] text-xs md:text-sm font-semibold font-outfit">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map (md:w-[65%] - Increased width and height) */}
          <div className="md:w-[65%] overflow-hidden rounded-lg shadow-sm h-72 border border-[#C88E9B]/20 bg-[#FFF5F6] p-1">
            <iframe
              src="https://maps.google.com/maps?q=Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              className="rounded"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
