import { Github, Linkedin } from 'lucide-react';
import { profileLinks } from '../information';
export function SocialSidebar() {
  return (
    <div className="fixed left-4 top-0 hidden xl:flex flex-col items-center gap-4 z-40">
      <div className="w-px h-32 bg-secondary"></div>
      <div className="flex flex-col gap-4">
        <a href={profileLinks.linkedin} className="text-secondary hover:text-white transition-colors"><Linkedin size={24} /></a>
        <a href={profileLinks.github} className="text-secondary hover:text-white transition-colors"><Github size={24} /></a>
        <a href={profileLinks.leetcode} className="text-secondary hover:text-white transition-colors"><img src="/leetcode.png" className="w-6 text-secondary hover:text-neutral-400 transition-colors invert" alt="" /></a>
        <a href={profileLinks.hackerrank} className="text-secondary hover:text-white transition-colors"><img src="/hackerrank.png" className="w-6 text-secondary hover:text-neutral-400 transition-colors invert" alt="" /></a>
      </div>
    </div>
  );
}
