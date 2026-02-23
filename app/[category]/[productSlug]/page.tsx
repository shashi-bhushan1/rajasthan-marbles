import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug } from "@/data/categories";
import {
  getProductsByCategory,
  getSimilarProducts,
} from "@/data/products";
import ProductImageWithModal from "@/components/ProductImageWithModal";
import ExploreSimilarTiles from "@/components/ExploreSimilarTiles";
import ShareButton from "@/components/ShareButton";

interface ProductDetailPageProps {
  params: Promise<{ category: string; productSlug: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { category: categorySlug, productSlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(categorySlug);
  const product = products.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === productSlug
  );

  if (!product) {
    notFound();
  }

  const similarProducts = getSimilarProducts(product);

  const sizes = product.filters?.size?.length
    ? product.filters.size.join(", ")
    : product.size;
  const finishes = product.filters?.finish?.join(", ") || "—";
  const colors = product.filters?.color?.join(", ") || "—";

  return (
    <main className="min-h-screen bg-white pt-24 pb-12 px-6 md:px-8 lg:px-10">
      {/* Kajaria-style layout: full-width two columns, image ~50% with minimal left margin, content fills right */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 mb-8 md:mb-10">
        {/* Left: image ~50%, minimal left margin; constrained height so Explore Similar in same view */}
        <div className="md:pl-4 lg:pl-6 pr-4 md:pr-0 flex flex-col">
          <div className="relative w-full max-md:aspect-square md:h-[55vh] md:max-h-[520px]">
            <ProductImageWithModal
              images={[product.image]}
              productName={product.name}
              className="max-md:!block md:!aspect-auto md:!h-full md:!w-full md:!rounded-none"
            />
          </div>
        </div>
        {/* Right: breadcrumbs + share same line; larger title; Kajaria-style specs */}
        <div className="px-4 md:pl-10 md:pr-8 lg:pr-12 lg:pl-12 flex flex-col justify-center pt-2 md:pt-4 pb-8 md:pb-10">
          {/* Breadcrumbs + Share on same line, a little above title */}
          <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
            <nav className="text-sm text-gray-500 min-w-0">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span className="mx-2">/</span>
              <Link href={`/${categorySlug}`} className="hover:text-gray-700">{category.title}</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{product.name}</span>
            </nav>
            <ShareButton title={product.name} className="shrink-0" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
            {product.name}
          </h1>

          {/* Type line: two segments with vertical separator (Kajaria-style) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#17458A]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              {product.type}
            </span>
            <span className="text-gray-300" aria-hidden>|</span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#17458A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Wall Tile - Floor Tile
            </span>
          </div>

          <hr className="border-gray-200 my-4" />

          {/* Specs: Sizes | Finishes | Colors on one line with vertical dividers */}
          <div className="grid grid-cols-3 gap-4 py-2">
            <div className="pr-4 border-r border-gray-200">
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">Sizes</dt>
              <dd className="text-base text-gray-900 font-medium">{sizes}</dd>
            </div>
            <div className="px-4 border-r border-gray-200">
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">Finishes</dt>
              <dd className="text-base text-gray-900 font-medium">{finishes}</dd>
            </div>
            <div className="pl-4">
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">Colors</dt>
              <dd className="text-base text-gray-900 font-medium">{colors}</dd>
            </div>
          </div>

          <hr className="border-gray-200 my-4" />

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 text-base font-semibold bg-[#17458A] text-white rounded-none hover:bg-[#133d75] transition-colors"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Where to Buy
          </Link>
        </div>
      </section>

      {/* Explore Similar Tiles - in same view, horizontal carousel with arrows */}
      <ExploreSimilarTiles products={similarProducts} />
    </main>
  );
}
