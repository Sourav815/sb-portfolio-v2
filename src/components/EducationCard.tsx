interface EducationCardProp {
    title: string;
    desc: string;
    info: string;
    image: string;
    url: string;
}

export function EducationCard({ title, desc, info, image, url }: EducationCardProp) {
    return (
        <div className="border border-secondary bg-transparent group transition-transform duration-300">
            {/* Image */}
            <div className="h-48 overflow-hidden border-b border-secondary">
                <img src={image} alt={title} className="w-full h-full object-cover  grayscale hover:grayscale-0 hover:scale-[1.02]  hover:brightness-110 transition-all duration-500" />
            </div>

            {/* Tags */}
            <div className="border-b border-secondary p-2 text-secondary text-sm flex flex-wrap gap-2">

                <span >{info}</span>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-2xl font-medium text-white mb-4">{title}</h3>
                <p className="text-secondary text-sm mb-6 leading-relaxed">
                    {desc}
                </p>

                <div className="flex gap-4">
                    <button className="px-4 py-2 border border-primary text-white text-sm hover:bg-primary/20 transition-colors">
                        <a href={url}>View Details &lt;~&gt;</a>
                    </button>
                </div>
            </div>
        </div>
    );
}
