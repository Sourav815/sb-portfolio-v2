interface ServiceCardProps {
    company_logo: string,
    company_name: string,
    designation: string,
    description: string[],
    tags: string[],
    joining_date: string,
    closing_data: string,
    type: string,
    location: string
}

export function ExperienceCard({ company_logo, company_name, designation, description, tags, joining_date, closing_data, type, location }: ServiceCardProps) {
    return (
        <div className="border border-secondary bg-transparent group transition-transform duration-300">

            {/* Tags */}
            <div className="border-b border-secondary p-2 text-secondary text-xs lg:text-base flex flex-wrap justify-between gap-2">
                <span>{joining_date} -- {closing_data ? closing_data : "Present"}</span>
                <span>{location} | {type}</span>
            </div>

            {/* Content */}
            <div className="p-4 gap-4">
                {/* Image */}
                <div className="flex-wrap lg:flex mb-4 gap-4">
                    <img src={company_logo} alt={company_name} className="h-12" />
                    <div className="mt-1 lg:mt-[-6px]">
                        <h3 className="text-xl lg:text-2xl font-bold text-white">{company_name}</h3>
                        <h4 className="text-sm lg:text-md font-medium text-slate-500">{designation}</h4>
                    </div>
                </div>
                {description.map((desc, i) => (
                    <div key={i} className="flex items-start gap-3 mb-2">
                        <span className="mt-1 inline-block w-2 h-2 bg-gray-400/70 backdrop-blur-sm shrink-0"></span>

                        <p className="text-secondary lg:text-sm text-xs leading-relaxed">
                            {desc}
                        </p>
                    </div>
                ))}


                <div className="flex gap-4">
                    {/* Tags */}
                    <div className=" text-secondary text-sm flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <span key={i} className="px-4 py-2 border border-primary text-white text-xs hover:bg-primary/20 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
