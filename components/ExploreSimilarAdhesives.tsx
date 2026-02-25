"use client";

import { useRef } from "react";
import AdhesiveCard from "@/components/AdhesiveCard";
import type { Adhesive } from "@/data/adhesives";

interface ExploreSimilarAdhesivesProps {
  adhesives: Adhesive[];
}

export default function ExploreSimilarAdhesives({ adhesives }: ExploreSimilarAdhesivesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  if (adhesives.length === 0) return null;

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 mt-14 md:mt-20">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          Explore Similar Adhesives
        </h2>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            aria-label="Previous adhesive"
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next adhesive"
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {adhesives.map((a) => (
          <div key={a.id} className="snap-start shrink-0 w-[280px] sm:w-[300px]">
            <AdhesiveCard adhesive={a} />
          </div>
        ))}
      </div>
    </section>
  );
}
