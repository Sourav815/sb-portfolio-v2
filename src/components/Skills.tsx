import { SectionHeader } from './SectionHeader';
import { skillset } from '../information.ts';

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="skills" />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Decor (Abstract Shapes) */}
          <div className="lg:col-span-2 hidden lg:block relative min-h-[300px]">
             <div className="absolute top-10 left-10 w-20 h-20 border border-secondary"></div>
             <div className="absolute bottom-10 right-20 w-16 h-16 border border-secondary"></div>
             
             <div className="absolute top-1/2 left-1/4 grid grid-cols-5 gap-2">
                {Array.from({ length: 25 }).map((_, i) => (
                   <div key={i} className="w-1 h-1 bg-secondary rounded-full"></div>
                ))}
             </div>
          </div>

          {/* Right Skills Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="flex flex-col gap-4">
               <SkillBox title="Programming Languages" items={skillset.languages} />
            </div>

            <div className="flex flex-col gap-4">
               <SkillBox title="Databases" items={skillset.databases} />
               <SkillBox title="CS Core" items={skillset.coreCS} />
            </div>

            <div className="flex flex-col gap-4">
               {/* HTML, CSS, StrapiJS, ReactJS, NextJS, NodeJS, ExpressJS, MySQL, TailwindCSS, Shadcn UI */}
               <SkillBox title="Dev-Tools" items={skillset.dev_tools} />
               <SkillBox title="Frameworks" items={skillset.frameworks} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBox({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="border border-secondary h-fit">
      <div className="p-2 border-b border-secondary font-bold text-white">
        {title}
      </div>
      <div className="p-2 text-secondary text-sm leading-6">
        {items.join(' ')}
      </div>
    </div>
  );
}
