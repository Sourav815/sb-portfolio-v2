import { Facebook, X, Link } from 'lucide-react';
import { followMe } from '../information.ts';

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#1c1a25]">
      <div className="border-t border-secondary max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-4">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-white mb-2">
            <img src="./favicon.png" className="w-4 h-4 text-neutral-400 " alt="" />
            <span>Sourav Bhunia</span>
          </div>
          <p className="text-white text-sm">Engineer | Developer | Designer</p>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-white font-bold text-lg mb-2">Follow me on</h3>
          <div className="flex gap-4 justify-center md:justify-end">
            <a href={followMe.facebook} className="text-secondary hover:text-white"><Facebook size={20} /></a>
            <a href={followMe.x} className="text-secondary hover:text-white"><X size={20} /></a>
            <a href={followMe.companyURL} className="text-secondary hover:text-white"><Link size={20} /></a>
          </div>
        </div>

      </div>
      <div className="text-center text-secondary text-sm mt-4">
        © Copyright {new Date().getFullYear()}. Made by {`<Sourav Bhunia/>`}
      </div>
    </footer>
  );
}
