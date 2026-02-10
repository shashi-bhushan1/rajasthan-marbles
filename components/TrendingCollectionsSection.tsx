"use client";

import Image from "next/image";

interface TrendingCollection {
  id: number;
  title: string;
  description: string;
  image: string;
}

const TrendingCollectionsSection = () => {
  const collections: TrendingCollection[] = [
    {
      id: 1,
      title: "Outdoor Elegance",
      description:
        "Durable, weather-resistant tiles that bring resort-style sophistication to patios, balconies, and poolside spaces.",
      image: "/images/home-bathroom.webp",
    },
    {
      id: 2,
      title: "Marble Inspirations",
      description:
        "Classic marble-inspired surfaces that blend rich veining with a contemporary palette for signature interiors.",
      image: "/images/home-kitchen.webp",
    },
    {
      id: 3,
      title: "Designer Wall Series",
      description:
        "Statement wall tiles that add depth, texture, and personality to living rooms, lobbies, and feature walls.",
      image: "/images/home-livingroom.webp",
    },
    {
      id: 4,
      title: "Wood-Look Collections",
      description:
        "Warm, natural wood aesthetics with the everyday durability and easy maintenance of premium tile.",
      image: "/images/home-commercial_space.webp",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f7f7f9]">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-12 md:mb-16">
        <h2 className="section-heading mb-3 text-center">
          Explore Our Trending Collections
        </h2>
        <p className="section-caption text-center max-w-3xl mx-auto">
          Discover the looks that designers and homeowners are choosing right
          now&mdash;curated collections that combine style, performance, and
          everyday comfort.
        </p>
      </div>

      {/* Full-width 4-column image grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[60vh] md:h-[70vh]">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="relative overflow-hidden group"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Text overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {collection.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCollectionsSection;

