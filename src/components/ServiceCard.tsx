import React from 'react';
import { Card } from './Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-zinc-50 to-white border-zinc-100 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
      <div className="mb-4 text-amber-500">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-zinc-900 mb-2">{title}</h4>
      <p className="text-sm text-zinc-500 leading-relaxed">
        {description}
      </p>
    </Card>
  );
}
