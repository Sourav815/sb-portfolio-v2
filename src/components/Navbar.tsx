import { useState } from 'react';
import { Menu, X, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileLinks } from '../information';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'about-me', href: '#about' },
    { name: 'experiences', href: '#experiences' },
    { name: 'skills', href: '#skills' },
    { name: 'achievements', href: '#achievements' },
    { name: 'contacts', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ">

      {/* Navbar */}
      <div className="relative max-w-5xl mx-auto mt-2 px-6 py-4
        flex justify-between items-center
        bg-white/5 backdrop-blur-xl
        border border-white/10 shadow-lg ">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-white">
          <img
            src="/code.png"
            className="w-8 h-8 invert opacity-80"
            alt=""
          />
          <span>Sourav Bhunia</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-white transition-colors"
            >
              <span className="text-neutral-400">#</span>{link.name}
            </a>
          ))}
          <img src="/india.png" className="w-8 opacity-80 hover:opacity-100" />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 right-0 top-full
                z-50 md:hidden
                bg-[#1c1a25] backdrop-blur-sm
                border border-white/10
                p-6
                flex flex-col gap-6 shadow-2xl"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-secondary hover:text-white"
                >
                  <span className="text-neutral-400">#</span>{link.name}
                </a>
              ))}

              {/* Social Links */}
              <div className="flex justify-between gap-4 pt-4 border-t border-white/10">
                <div className='flex gap-4'>
                  <a href={profileLinks.linkedin} className="text-secondary hover:text-white">
                    <Linkedin size={24} />
                  </a>
                  <a href={profileLinks.github} className="text-secondary hover:text-white">
                    <Github size={24} />
                  </a>
                  <a href={profileLinks.leetcode}><img src="/leetcode.png" className="w-6 invert opacity-80 hover:opacity-100" /></a>
                  <a href={profileLinks.hackerrank}><img src="/hackerrank.png" className="w-6 invert opacity-80 hover:opacity-100" /></a>
                </div>
                <img src="/india.png" className="w-8 opacity-80 hover:opacity-100" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}
