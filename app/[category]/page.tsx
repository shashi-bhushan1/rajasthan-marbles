import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getCategoryBySlug,
  getCategorySlugs,
} from "@/data/categories";
import { getTilesByCategory } from "@/data/tiles";
import TileFilters from "@/components/TileFilters";
import TileCard from "@/components/TileCard";
import Pagination, { PER_PAGE } from "@/components/Pagination";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  return getCategorySlugs().map((slug) => ({ category: slug }));
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const filters = await searchParams;
  const allTiles = getTilesByCategory(slug);
  const pageParam = filters.page;
  const pageNum = !pageParam ? 1 : (() => {
    const p = typeof pageParam === "string" ? pageParam : pageParam[0];
    const n = parseInt(String(p), 10);
    return Number.isFinite(n) && n >= 1 ? n : 1;
  })();
  const totalPages = Math.max(1, Math.ceil(allTiles.length / PER_PAGE));
  const currentPage = Math.min(pageNum, totalPages);
  const start = (currentPage - 1) * PER_PAGE;
  const tiles = allTiles.slice(start, start + PER_PAGE);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[320px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-8 md:pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {category.title}
          </h1>
          <p className="text-white/90 max-w-2xl text-sm md:text-base">
            {category.description}
          </p>
          {/* Breadcrumbs */}
          <nav className="mt-4 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{category.title}</span>
          </nav>
        </div>
      </section>

      {/* Main Content: Filters + Tile Grid */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <TileFilters
              mode="category"
              categorySlug={slug}
              categoryTitle={category.title}
              selectedCategorySlugs={[slug]}
              tileCount={allTiles.length}
              currentFilters={filters}
            />
          </aside>

          {/* Tile Grid */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col gap-2">
              <p className="text-gray-600 text-sm">
                Filter By <span className="font-semibold text-gray-900">{allTiles.length} tiles</span> available
              </p>
              <div className="flex flex-wrap gap-2">
              <Link
                href="/tiles"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-200 text-gray-800 text-sm hover:bg-gray-300 transition-colors border border-gray-300"
                title="Remove filter"
              >
                {category.title} ×
              </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {tiles.map((tile) => (
                <TileCard key={tile.id} tile={tile} />
              ))}
            </div>
            {tiles.length === 0 && (
              <p className="text-center text-gray-500 py-12">
                No tiles found for this category.
              </p>
            )}
            {allTiles.length > PER_PAGE && (
              <Pagination
                totalItems={allTiles.length}
                currentPage={currentPage}
                baseUrl={`/${slug}`}
                searchParams={filters}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
