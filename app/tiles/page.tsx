import Image from "next/image";
import Link from "next/link";
import { getTilesByCategories } from "@/data/tiles";
import { getCategoryBySlug } from "@/data/categories";
import TileFilters from "@/components/TileFilters";
import TileCard from "@/components/TileCard";
import Pagination, { PER_PAGE } from "@/components/Pagination";

function parseCategoryIds(
  searchParams: Record<string, string | string[] | undefined>
): string[] {
  const raw = searchParams["category_ids[]"] ?? searchParams.category_ids ?? searchParams.category;
  if (!raw) return [];
  return Array.isArray(raw) ? raw : [raw];
}

function parsePage(
  searchParams: Record<string, string | string[] | undefined>
): number {
  const p = searchParams.page;
  if (!p) return 1;
  const n = typeof p === "string" ? parseInt(p, 10) : parseInt(String(p[0]), 10);
  return Number.isFinite(n) && n >= 1 ? n : 1;
}

export default async function TilesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const categoryIds = parseCategoryIds(params);
  const allTiles = getTilesByCategories(categoryIds);
  const page = parsePage(params);
  const totalPages = Math.max(1, Math.ceil(allTiles.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PER_PAGE;
  const tiles = allTiles.slice(start, start + PER_PAGE);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Tiles banner (same style as category pages) */}
      <section className="relative h-[320px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-bathroom.webp"
            alt="Tiles"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-8 md:pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Tiles
          </h1>
          {/* Breadcrumbs */}
          <nav className="text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Tiles</span>
          </nav>
        </div>
      </section>

      {/* Main Content: Filters + Tile Grid */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <TileFilters
              mode="tiles"
              selectedCategorySlugs={categoryIds}
              tileCount={allTiles.length}
              currentFilters={params}
            />
          </aside>

          {/* Tile Grid */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col gap-2">
              <p className="text-gray-600 text-sm">
                Filter By <span className="font-semibold text-gray-900">{allTiles.length} tiles</span> available
              </p>
              <div className="flex flex-wrap gap-2">
              {categoryIds.map((slug) => {
                const cat = getCategoryBySlug(slug);
                if (!cat) return null;
                const remaining = categoryIds.filter((s) => s !== slug);
                const href =
                  remaining.length > 0
                    ? `/tiles?${remaining.map((s) => `category_ids[]=${encodeURIComponent(s)}`).join("&")}`
                    : "/tiles";
                return (
                  <Link
                    key={slug}
                    href={href}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-200 text-gray-800 text-sm hover:bg-gray-300 transition-colors border border-gray-300"
                    title="Remove filter"
                  >
                    {cat.title} ×
                  </Link>
                );
              })}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {tiles.map((tile) => (
                <TileCard key={tile.id} tile={tile} />
              ))}
            </div>
            {tiles.length === 0 && (
              <p className="text-center text-gray-500 py-12">
                No tiles found.
              </p>
            )}
            {allTiles.length > PER_PAGE && (
              <Pagination
                totalItems={allTiles.length}
                currentPage={currentPage}
                baseUrl="/tiles"
                searchParams={params}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
