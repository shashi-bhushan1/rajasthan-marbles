"use client";

import Link from "next/link";
import Image from "next/image";
import { getCategoryPageUrl } from "@/data/categories";

const CollectionsSection = () => {
  const collections = [
    {
      id: 1,
      title: "Bathroom",
      description:
        "Create spa-like retreats with tiles designed for moisture resistance, easy maintenance, and timeless style.",
      image: "/images/home-bathroom.webp",
      slug: "bathroom-tiles",
    },
    {
      id: 2,
      title: "Kitchen",
      description:
        "Elevate your kitchen with durable, stain-resistant tiles that balance everyday practicality with premium design.",
      image: "/images/home-kitchen.webp",
      slug: "kitchen-tiles",
    },
    {
      id: 3,
      title: "Living Room",
      description:
        "Set the tone of your living spaces with elegant floor and wall tiles that bring warmth and character.",
      image: "/images/home-livingroom.webp",
      slug: "living-room-tiles",
    },
    {
      id: 4,
      title: "Commercial Spaces",
      description:
        "Design high-traffic commercial areas with tiles engineered for performance, safety, and lasting impressions.",
      image: "/images/home-commercial_space.webp",
      slug: "commercial-spaces",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-3 text-center">
            Find Tiles by Category
          </h2>
          <p className="section-caption text-center max-w-3xl mx-auto">
            Kajaria offers premium wall and floor tiles, combining advanced technology with elegant designs for lasting
            quality and easy maintenance.
          </p>
        </div>

        {/* Collections Grid - 2 x 2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={getCategoryPageUrl(collection.slug)}
              className="group relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden">
                {/* Fallback gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400" />
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
                  {collection.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200 line-clamp-2 overflow-hidden">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Discover More Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <span className="text-[#17458A] font-semibold text-base md:text-lg tracking-wide uppercase">
              Discover More
            </span>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#17458A] text-white shadow-sm">
              <svg
                className="w-5 h-5"
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
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
