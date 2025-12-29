import { aboutme } from "../information.ts";
import { SectionHeader } from "./SectionHeader";

export function AboutMe() {
    return (
        <section id="about" className="py-16">
            <SectionHeader title="about-me" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-secondary leading-relaxed space-y-4">
                    <p>Hello, I'm Sourav!</p>
                    <p>{aboutme.about}</p>
                    <button className="mt-4 px-4 py-2 border border-primary text-white hover:bg-primary/10 transition-colors">
                        <a href={aboutme.cv}>Download CV -&gt;</a>
                    </button>
                </div>
                <div className="relative">
                    <img
                        src="/weblayer.png"
                        alt="About"
                        className="w-full max-w-sm ml-auto border-primary"
                    />
                    <div className="absolute top-10 left-10 w-20 h-20 flex flex-wrap gap-2 opacity-50">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-primary rounded-full"></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
