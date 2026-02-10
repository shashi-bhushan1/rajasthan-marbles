"use client";

import Image from "next/image";

interface NewArrival {
  id: number;
  title: string;
  image: string;
}

const NewArrivalsSection = () => {
  const arrivals: NewArrival[] = [
    {
      id: 1,
      title: "Signature Living Room",
      image: "/images/home-livingroom.webp",
    },
    {
      id: 2,
      title: "Elevated Kitchen",
      image: "/images/home-kitchen.webp",
    },
    {
      id: 3,
      title: "Spa-Inspired Bathroom",
      image: "/images/home-bathroom.webp",
    },
    {
      id: 4,
      title: "Contemporary Outdoors",
      image: "/images/home-commercial_space.webp",
    },
    {
      id: 5,
      title: "Urban Marble Mix",
      image: "/images/hero/img3.webp",
    },
    {
      id: 6,
      title: "Luxury Statements",
      image: "/images/hero/img4.webp",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center mb-10 md:mb-12">
        <h2 className="section-heading mb-3 text-center">New Arrivals</h2>
        <p className="section-caption text-center max-w-3xl mx-auto">
          Fresh designs just added to our collection&mdash;explore the latest
          surfaces crafted to elevate modern homes and spaces.
        </p>
      </div>

      <div className="w-full px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {arrivals.map((item) => (
            <div key={item.id} className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;

