"use client";
import { SectionHeader } from "./SectionHeader";
import { ExperienceCard } from "./ExperienceCard";
import { experience } from "../information.ts";

export default function Experiences() {
    return (
        <section id="experiences" className="py-8">
            <SectionHeader title="experiences" />

            <div className="flex flex-wrap gap-4">
                {experience.map((exp, idx) => (
                    <div
                        key={idx}
                        className="w-full"
                    >
                        <ExperienceCard {...exp} />
                    </div>
                ))}
            </div>
        </section>


    );
}
