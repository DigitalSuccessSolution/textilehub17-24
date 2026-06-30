import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pb-16 w-full relative min-h-screen bg-[#FFF5F6]">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[#702A3C] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center font-playfair">
            About Us
          </h1>
          <p className="text-[#C88E9B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold font-outfit">
            Our Story & Heritage
          </p>
        </div>
      </div>

      {/* Story Section - Displayed directly on page background */}
      <section className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col-reverse md:flex-col gap-8 w-full text-center"
        >
          {/* Text Content */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-playfair text-2xl md:text-3xl text-[#702A3C] font-semibold uppercase tracking-wide">
              A Legacy of <span className="text-[#C88E9B] italic font-playfair">Excellence</span>
            </h2>
            <p className="text-[#8E5A67] leading-relaxed text-sm md:text-base font-outfit">
              Since 2026, VARA WEAVES TEXTILE MALL has stood as a beacon of premium apparel and visionary design. We blend the richness of traditional Indian craftsmanship with modern manufacturing technology to weave elegance into every thread.
            </p>
            <p className="text-[#8E5A67] leading-relaxed text-sm font-outfit">
              Our commitment to sustainable sourcing, ethical labor practices, and zero-defect quality defines our corporate journey. We build apparel crafted to stand the test of time.
            </p>
          </div>

          {/* Compact Landscape Image Content */}
          <div className="w-full max-w-2xl mx-auto relative h-48 md:h-64 overflow-hidden border border-[#C88E9B]/15 rounded shadow-md bg-white p-1">
            <div className="w-full h-full overflow-hidden rounded relative bg-[#FFF5F6]">
              <img
                src="https://images.pexels.com/photos/7171902/pexels-photo-7171902.jpeg"
                alt="About VARA WEAVES TEXTILE MALL"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
