import { motion } from 'framer-motion';
import { introduction } from '../information.ts'
import { contactInfo } from '../information.ts';

export function Hero() {
  return (
    <section className="pt-20 px-2 md:px-0">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-4 lg:mb-24 mb-8 border border-secondary bg-[#1c1a25] p-2 flex items-center gap-3 w-fit mx-auto md:mx-0">
            <div className="animate-ping w-3 h-2 lg:w-2 lg:h-2 bg-green-500 rounded-full"></div>
            <span className="text-secondary text-sm">Currently working as <strong className="text-white">{introduction.Currrent_designation}</strong> @ <strong className="text-white">{introduction.current_office}</strong></span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
            I am a <span className="text-neutral-400">Computer Engineer</span> and <span className="text-neutral-400">Backend Developer.</span>
          </h1>
          <p className="text-secondary mb-8 leading-relaxed max-w-md">
            {introduction.short_desc}
          </p>

          
          {/* todo */}
          <button className="px-4 py-2 border border-primary text-white hover:bg-primary/10 transition-colors">
            <a href={`mailto:${contactInfo.email}`}>Contact me!!</a>
          </button>
        </motion.div>

        {/* Right Content - Image & Decor */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Abstract Logo overlay */}
          <div className="absolute top-10 left-0 w-24 h-24 border-2 border-secondary opacity-20 -z-10"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 flex flex-wrap gap-2 opacity-50">
            {/* Dots pattern simulation */}
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-secondary rounded-full"></div>
            ))}
          </div>

          <div className="relative z-10">
            <img
              src="/sourav.png"
              alt="Sourav"
              className="w-full max-w-md mx-auto hover:grayscale grayscale-0 transition-all duration-500 rounded-tl-[40px] rounded-br-[40px]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
