import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="flex gap-2 p-1 bg-zinc-100/80 rounded-xl w-fit">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors z-10",
            activeTab === tab ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white rounded-lg shadow-sm border border-zinc-200/50 -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab}
        </button>
      ))}
    </div>
  );
}
