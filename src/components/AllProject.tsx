"use client";
import { useState, useEffect } from "react";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../information.ts"

function useCardsPerView() {
  const [cards, setCards] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCards(1);
      else if (window.innerWidth < 1024) setCards(2);
      else setCards(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cards;
}

export default function Projects() {
  const [page, setPage] = useState(0);

  const cardsPerView = useCardsPerView();
  const totalPages = Math.ceil(projects.length / cardsPerView);

  const handleNext = () => {
    setPage((p) => Math.min(p + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setPage((p) => Math.max(p - 1, 0));
  };

  return (
    <section id="projects" className="py-8">
      <SectionHeader title="projects" />

      {/* Navigation */}
      <div className="flex justify-end gap-4 mb-4">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="px-2 border border-primary text-white disabled:opacity-40"
        >
          ←
        </button>

        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className="px-2 border border-primary text-white disabled:opacity-40"
        >
          →
        </button>
      </div>

      {/* Slider */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-4 transition-transform duration-500 will-change-transform"
          style={{
            transform: `translateX(-${page * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="flex-shrink-0 flex gap-4"
              style={{ width: "100%" }}
            >
              {projects
                .slice(
                  pageIndex * cardsPerView,
                  pageIndex * cardsPerView + cardsPerView
                )
                .map((project, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
