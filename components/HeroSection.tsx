"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      image: "/images/hero/img1.jpg",
      title: "",
      description: "",
      ctaText: "",
      ctaLink: "/tiles",
    },
    {
      id: 2,
      image: "/images/hero/img2.webp",
      title: "Shaping Dreams Into Living Spaces",
      description:
        "Set the tone of your space with tiles that go beyond function.",
      ctaText: "EXPLORE RANGE",
      ctaLink: "/tiles",
    },
    {
      id: 3,
      image: "/images/hero/img3.webp",
      title: "Where Tile Meets Culinary Craft",
      description:
        "Elevate your living room with tiles that blend timeless elegance and enduring strength.",
      ctaText: "EXPLORE RANGE",
      ctaLink: "/tiles",
    },
    {
      id: 4,
      image: "/images/hero/img4.webp",
      title: "Timeless Tiles for Tranquil Spaces",
      description:
        "Elevate your bathroom with tiles that blend elegance and serenity. The timeless collection is designed to create a calming environment.",
      ctaText: "EXPLORE RANGE",
      ctaLink: "/tiles",
    },
    {
      id: 5,
      image: "/images/hero/img5.webp",
      title: "Beauty That Lasts Beyond Seasons",
      description:
        "Built to endure, designed to impress—our outdoor tiles bring lasting beauty to every season.",
      ctaText: "EXPLORE RANGE",
      ctaLink: "/tiles",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, heroSlides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Hero carousel"
    >
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Fallback background color if image fails to load */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-700" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
              onError={(e) => {
                // Hide image on error, show gradient background
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>

      {/* Text & CTA Overlay (no dark background) */}
      <div className="absolute inset-0 flex items-center justify-center z-30 px-4 md:px-8">
        <div className="text-center max-w-4xl w-full">
          {currentSlide.title && (
            <h2 className="hero-title text-white mb-4 md:mb-6 drop-shadow-[0_6px_24px_rgba(0,0,0,0.5)]">
              {currentSlide.title}
            </h2>
          )}
          {currentSlide.description && (
            <p className="hero-description text-white mb-6 md:mb-8 max-w-3xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">
              {currentSlide.description}
            </p>
          )}

          {currentSlide.ctaText && (
            <Link
              href={currentSlide.ctaLink}
              className="inline-flex items-center space-x-3 px-8 py-3 border border-white rounded-full text-white font-semibold tracking-[0.18em] text-xs md:text-sm uppercase hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              <span>{currentSlide.ctaText}</span>
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-gray-900">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          )}
        </div>
      </div>


      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-40">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm ${
              index === currentIndex
                ? "h-1.5 w-12 bg-white rounded-sm"
                : "h-2 w-2 bg-white/60 rounded-full hover:bg-white/80 cursor-pointer"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
