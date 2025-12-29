import React, { useState } from 'react';
import { Mail, MapPin, Smartphone, Calendar, Github, Linkedin, Twitter, Download, ChevronDown } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { cn } from '../lib/utils';

export function ProfileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="p-6 flex flex-col gap-6 h-fit sticky top-6 bg-white border-zinc-200 shadow-lg shadow-zinc-200/50">
      <div className="flex gap-4 items-center md:flex-col md:items-center md:text-center">
        <div className="relative shrink-0">
          <div className="w-20 h-20 md:w-36 md:h-36 rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-100 shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h1 className="text-xl md:text-2xl font-bold text-zinc-900 truncate">Alex Morgan</h1>
          <div className="mt-1.5 inline-block px-3 py-1 bg-zinc-100 rounded-lg text-xs font-medium text-zinc-600">
            Product Designer
          </div>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-600"
        >
          <ChevronDown className={cn("transition-transform", isOpen ? "rotate-180" : "")} />
        </button>
      </div>

      <div className={cn("flex-col gap-6 md:flex", isOpen ? "flex" : "hidden")}>
        <div className="h-px bg-zinc-100 w-full" />

        <div className="flex flex-col gap-4">
          <InfoItem 
            icon={<Mail size={18} />} 
            label="Email" 
            value="alex@example.com" 
          />
          <InfoItem 
            icon={<Smartphone size={18} />} 
            label="Phone" 
            value="+1 (234) 567-890" 
          />
          <InfoItem 
            icon={<Calendar size={18} />} 
            label="Birthday" 
            value="June 23, 1995" 
          />
          <InfoItem 
            icon={<MapPin size={18} />} 
            label="Location" 
            value="San Francisco, USA" 
          />
        </div>

        <div className="h-px bg-zinc-100 w-full" />

        <div className="flex justify-center gap-3">
          <SocialButton icon={<Github size={18} />} href="#" />
          <SocialButton icon={<Linkedin size={18} />} href="#" />
          <SocialButton icon={<Twitter size={18} />} href="#" />
        </div>
        
        <Button fullWidth className="gap-2 bg-gradient-to-r from-zinc-900 to-zinc-800 shadow-lg shadow-zinc-900/20">
          Download CV <Download size={16} />
        </Button>
      </div>
    </Card>
  );
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href}
      className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
    >
      {icon}
    </a>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2.5 bg-white shadow-sm border border-zinc-100 rounded-xl text-amber-500 shrink-0">
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs text-zinc-400 uppercase tracking-wide">{label}</span>
        <span className="text-sm font-medium text-zinc-900 truncate">{value}</span>
      </div>
    </div>
  );
}
