"use client";

import Link from "next/link";
import Image from "next/image";
import type { Granite } from "@/data/granite";

interface GraniteCardProps {
  granite: Granite;
}

export default function GraniteCard({ granite }: GraniteCardProps) {
  return (
    <Link
      href={`/granite/${granite.slug}`}
      className="group block bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={granite.image}
          alt={granite.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 uppercase tracking-wide text-sm md:text-base mb-0">
          {granite.name}
        </h3>
      </div>
    </Link>
  );
}
