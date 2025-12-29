import React from 'react';
import { cn } from '../lib/utils';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("bg-white rounded-2xl border border-zinc-200/60 shadow-sm overflow-hidden", className)}>
      {children}
    </div>
  );
}
