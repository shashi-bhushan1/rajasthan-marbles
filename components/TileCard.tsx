"use client";

import Link from "next/link";
import Image from "next/image";
import type { Tile } from "@/data/tiles";

interface TileCardProps {
  tile: Tile;
}

export default function TileCard({ tile }: TileCardProps) {
  const tileSlug = tile.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      href={`/${tile.categorySlug}/${tileSlug}`}
      className="group block bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={tile.image}
          alt={tile.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 uppercase tracking-wide text-sm md:text-base mb-1">
          {tile.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 mb-1">{tile.type}</p>
        <p className="text-xs text-gray-500">{tile.size}</p>
      </div>
    </Link>
  );
}
