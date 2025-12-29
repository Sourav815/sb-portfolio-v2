"use client";

interface SectionHeaderProps {
  title: string;
  viewAll?: boolean;
  onNext?: () => void;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8 w-full">
      <div className="flex items-center gap-4 w-full md:w-2/3">
        <h2 className="text-3xl font-medium text-white">
          <span className="text-neutral-400">#</span>{title}
        </h2>
        <div className="h-px bg-primary flex-1 max-w-[200px] md:max-w-[400px]"></div>
      </div>
    </div>
  );
}
