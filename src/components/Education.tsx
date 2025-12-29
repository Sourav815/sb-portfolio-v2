"use client";
import { SectionHeader } from "./SectionHeader";
import { EducationCard } from "./EducationCard";
import {educations} from "../information"

export default function Education() {

    return (
        <section id="projects" className="py-8">
            <SectionHeader title="education" />

            <div className="flex flex-wrap gap-4 justify-around">
                {educations.map((education, idx) => (
                    <div
                        key={idx}
                        className="
          w-full 
          sm:w-[48%] 
          lg:w-[32%]
        "
                    >
                        <EducationCard {...education} />
                    </div>
                ))}
            </div>
        </section>

    );
}
