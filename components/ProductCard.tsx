"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productSlug = product.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      href={`/${product.categorySlug}/${productSlug}`}
      className="group block bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 uppercase tracking-wide text-sm md:text-base mb-1">
          {product.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 mb-1">{product.type}</p>
        <p className="text-xs text-gray-500">{product.size}</p>
      </div>
    </Link>
  );
}
