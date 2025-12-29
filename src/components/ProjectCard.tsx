interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  url: string;
}

export function ProjectCard({ title, desc, tags, image, url }: ProjectCardProps) {
  return (
    <div className="h-full flex flex-col border border-secondary bg-transparent group hover:shadow-lg hover:shadow-slate-600 transition-transform duration-300">

      {/* Image */}
      <div className="h-48 overflow-hidden border-b border-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tags */}
      <div className="border-b border-secondary p-2 text-secondary text-sm flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i}>{tag}, </span>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">

        {/* Title — 1 line only */}
        <h3 className="text-2xl font-medium text-white mb-3 truncate">
          {title}
        </h3>

        {/* Description — fixed lines */}
        <p className="text-secondary text-sm leading-relaxed line-clamp-3">
          {desc}
        </p>

        {/* Button pinned to bottom */}
        <div className="mt-auto pt-6">
          <button className="px-4 py-2 border border-primary text-white text-sm hover:bg-primary/20 transition-colors">
            <a href={url}>View Details &lt;~&gt;</a>
          </button>
        </div>
      </div>
    </div>
  );
}
