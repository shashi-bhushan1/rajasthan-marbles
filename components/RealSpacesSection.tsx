"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface RealSpace {
  id: number;
  title: string;
  description?: string;
  image: string;
  location?: string;
}

const RealSpacesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const realSpaces: RealSpace[] = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      description: "A contemporary kitchen featuring premium tiles",
      image: "/images/home-kitchen.webp",
      location: "Mumbai, Maharashtra",
    },
    {
      id: 2,
      title: "Luxury Bathroom Retreat",
      description: "Spa-inspired bathroom with elegant tile design",
      image: "/images/home-bathroom.webp",
      location: "Delhi, NCR",
    },
    {
      id: 3,
      title: "Elegant Living Room",
      description: "Timeless elegance meets modern comfort",
      image: "/images/home-livingroom.webp",
      location: "Bangalore, Karnataka",
    },
    {
      id: 4,
      title: "Commercial Lobby Design",
      description: "Professional spaces with premium finishes",
      image: "/images/home-commercial_space.webp",
      location: "Pune, Maharashtra",
    },
    {
      id: 5,
      title: "Outdoor Patio Paradise",
      description: "Weather-resistant tiles for outdoor living",
      image: "/images/home-kitchen.webp",
      location: "Goa",
    },
    {
      id: 6,
      title: "Master Bedroom Suite",
      description: "Serene bedroom with sophisticated tile work",
      image: "/images/home-bathroom.webp",
      location: "Hyderabad, Telangana",
    },
    {
      id: 7,
      title: "Restaurant Interior",
      description: "Commercial space with durable, stylish tiles",
      image: "/images/home-livingroom.webp",
      location: "Chennai, Tamil Nadu",
    },
    {
      id: 8,
      title: "Rooftop Terrace",
      description: "Outdoor entertainment space",
      image: "/images/home-commercial_space.webp",
      location: "Jaipur, Rajasthan",
    },
    {
      id: 9,
      title: "Luxury Hotel Lobby",
      description: "Grand entrance with premium marble finishes",
      image: "/images/home-kitchen.webp",
      location: "Ahmedabad, Gujarat",
    },
    {
      id: 10,
      title: "Modern Office Space",
      description: "Professional workspace with elegant flooring",
      image: "/images/home-bathroom.webp",
      location: "Kolkata, West Bengal",
    },
    {
      id: 11,
      title: "Spa & Wellness Center",
      description: "Tranquil spaces with premium tile designs",
      image: "/images/home-livingroom.webp",
      location: "Chandigarh",
    },
    {
      id: 12,
      title: "Boutique Showroom",
      description: "Elegant display space with sophisticated tiles",
      image: "/images/home-commercial_space.webp",
      location: "Surat, Gujarat",
    },
    {
      id: 13,
      title: "Heritage Home Restoration",
      description: "Classic elegance meets modern durability",
      image: "/images/home-kitchen.webp",
      location: "Udaipur, Rajasthan",
    },
    {
      id: 14,
      title: "Contemporary Villa",
      description: "Luxury living with premium tile selections",
      image: "/images/home-bathroom.webp",
      location: "Gurgaon, Haryana",
    },
    {
      id: 15,
      title: "Retail Store Design",
      description: "Modern retail space with stylish flooring",
      image: "/images/home-livingroom.webp",
      location: "Indore, Madhya Pradesh",
    },
    {
      id: 16,
      title: "Premium Apartment Complex",
      description: "Luxury residential spaces with elegant tiles",
      image: "/images/home-commercial_space.webp",
      location: "Noida, Uttar Pradesh",
    },
  ];

  const cardsToShow = 4;
  const maxIndex = realSpaces.length - cardsToShow;

  // Calculate transform offset for partial card visibility
  // Each card is 23% width on large screens
  // We offset to show partial cards at both ends
  const getTransformValue = () => {
    // On large screens: card is 23%, gap is ~2rem
    // To show 4 full cards + partial cards on sides, we need to:
    // - Start with an offset to show partial card on left
    // - Move by card width (23%) per step
    // Using a simpler calculation that works with the flex layout
    const cardWidthPercent = 23; // lg:w-[23%]
    const initialOffset = 1.5; // Show partial card on left edge
    const moveAmount = currentIndex * cardWidthPercent;
    return `calc(-${moveAmount}% + ${initialOffset}%)`;
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; // Loop back to start
        }
        return prevIndex + 1;
      });
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, maxIndex]);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) {
        return 0; // Loop back to start
      }
      return prevIndex + 1;
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return maxIndex; // Loop to end
      }
      return prevIndex - 1;
    });
  };

  return (
    <section
      className="py-16 md:py-24 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Header */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-12 md:mb-16">
        <h2 className="section-heading mb-3 text-center">
          Real Spaces. Real Stories.
        </h2>
        <p className="section-caption text-center max-w-3xl mx-auto">
          Discover how our tiles transform real homes and commercial spaces
          across India. See the difference quality makes.
        </p>
      </div>

      {/* Carousel Container - Full width like TrendingCollectionsSection */}
      <div className="relative w-full" ref={containerRef}>
        {/* Cards Container - Full width with overflow */}
        <div className="overflow-hidden w-full">
          <div 
            className="flex gap-6 md:gap-8 transition-transform duration-500 ease-in-out will-change-transform"
            style={{
              transform: `translateX(${getTransformValue()})`,
            }}
          >
            {realSpaces.map((space) => (
              <article
                key={space.id}
                className="group flex-shrink-0 w-[85%] sm:w-[42%] lg:w-[23%] overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border-b-2 border-gray-200"
              >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400" />
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    {space.location && (
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        {space.location}
                      </p>
                    )}
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {space.title}
                    </h3>
                    {space.description && (
                      <p className="text-sm text-gray-600 line-clamp-2 flex-1">
                        {space.description}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation Arrow - Left - Positioned on top of first visible card */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goToPrevious();
              }}
              type="button"
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm shadow-xl hover:bg-white text-gray-900 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Previous cards"
              onMouseDown={(e) => e.preventDefault()}
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
          )}

          {/* Navigation Arrow - Right - Positioned on top of last visible card */}
          {currentIndex < maxIndex && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goToNext();
              }}
              type="button"
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm shadow-xl hover:bg-white text-gray-900 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Next cards"
              onMouseDown={(e) => e.preventDefault()}
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
          )}
        </div>
    </section>
  );
};

export default RealSpacesSection;
