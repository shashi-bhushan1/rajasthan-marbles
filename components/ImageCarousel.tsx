"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  /** Display name for alt text (e.g. tile name, granite name) */
  itemName: string;
  /** Use when parent has explicit height (e.g. md:h-[55vh]) so image fills the box */
  className?: string;
  /** Controlled current index (use with onChange) */
  value?: number;
  /** Called when current index changes (for controlled mode) */
  onChange?: (index: number) => void;
  /** When set, clicking the image triggers this (e.g. open modal) */
  onImageClick?: () => void;
}

export default function ImageCarousel({
  images,
  itemName,
  className = "",
  value,
  onChange,
  onImageClick,
}: ImageCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const isControlled = value !== undefined && onChange;
  const currentIndex = isControlled ? value : internalIndex;
  const setCurrentIndex = useCallback(
    (updater: (i: number) => number) => {
      const next = updater(currentIndex);
      if (isControlled) onChange(next);
      else setInternalIndex(next);
    },
    [currentIndex, isControlled, onChange]
  );
  const hasMultiple = images.length > 1;

  const goPrev = () => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const imageContent = (
    <Image
      src={images[currentIndex]}
      alt={`${itemName} - ${currentIndex + 1}`}
      fill
      className="object-cover"
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );

  return (
    <div className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 ${className}`.trim()}>
      {onImageClick ? (
        <button
          type="button"
          onClick={onImageClick}
          className="absolute inset-0 z-0 block h-full w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#17458A]"
          aria-label="View full size"
        >
          {imageContent}
        </button>
      ) : (
        imageContent
      )}
      {images.length > 0 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md hover:bg-white transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md hover:bg-white transition-colors"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {hasMultiple && (
            <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(() => i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
