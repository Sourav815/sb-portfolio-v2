interface AchievementItemProps {
  title: string;
  desc: string[];
  details: string;
}

export function AchievementItem({
  title,
  desc,
  details,
}: AchievementItemProps) {
  return (
    <section id="achievements" className="backdrop-blur-md p-2">
      
      {/* Header */}
      <div className="flex flex-wrap items-center mb-4 gap-2">
        <h3 className="text-lg font-medium text-white">
          {title} | 
        </h3>

        <button
          onClick={() => window.open(details, "_blank")}
          className="text-sm text-secondary  hover:text-primary/80 transition-colors"
        >
          View details →
        </button>
      </div>

      {/* Bullet points */}
      <ul className="space-y-2">
        {desc.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 bg-gray-100/70" />
            <p className="text-secondary text-sm leading-relaxed">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
