import Link from "next/link";

const PER_PAGE = 12;

export { PER_PAGE };

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  baseUrl: string;
  searchParams?: Record<string, string | string[] | undefined>;
}

function buildPageUrl(
  baseUrl: string,
  page: number,
  searchParams?: Record<string, string | string[] | undefined>
): string {
  if (page <= 1) {
    if (!searchParams || Object.keys(searchParams).length === 0) return baseUrl;
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (key === "page") return;
      if (Array.isArray(value)) value.forEach((v) => params.append(key, v));
      else if (value) params.set(key, value);
    });
    const q = params.toString();
    return q ? `${baseUrl}?${q}` : baseUrl;
  }
  const params = new URLSearchParams();
  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      if (Array.isArray(value)) value.forEach((v) => params.append(key, v));
      else if (value) params.set(key, value);
    });
  }
  params.set("page", String(page));
  return `${baseUrl}?${params.toString()}`;
}

export default function Pagination({
  totalItems,
  currentPage,
  baseUrl,
  searchParams,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / PER_PAGE));
  const page = Math.max(1, Math.min(currentPage, totalPages));

  if (totalPages <= 1) return null;

  const prevUrl = page > 1 ? buildPageUrl(baseUrl, page - 1, searchParams) : null;
  const nextUrl = page < totalPages ? buildPageUrl(baseUrl, page + 1, searchParams) : null;

  // Show page numbers: 1, 2, 3, ... N (like Kajaria)
  const pages: (number | "ellipsis")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (page > 3) pages.push("ellipsis");
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) {
      if (!pages.includes(i)) pages.push(i);
    }
    if (page < totalPages - 2) pages.push("ellipsis");
    if (totalPages > 1) pages.push(totalPages);
  }

  return (
    <nav className="flex items-center justify-center gap-1 mt-10 mb-4" aria-label="Pagination">
      {prevUrl ? (
        <Link
          href={prevUrl}
          className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          aria-label="Previous page"
        >
          <span className="sr-only">Previous</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      ) : (
        <span className="flex h-9 w-9 items-center justify-center rounded border border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
      )}

      <div className="flex items-center gap-1 mx-2">
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <span key={`ellipsis-${i}`} className="px-2 text-gray-400">
              …
            </span>
          ) : (
            <Link
              key={p}
              href={buildPageUrl(baseUrl, p, searchParams)}
              className={`flex h-9 min-w-[2.25rem] items-center justify-center rounded border px-2 text-sm font-medium ${
                p === page
                  ? "border-[#17458A] bg-[#17458A] text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {p}
            </Link>
          )
        )}
      </div>

      {nextUrl ? (
        <Link
          href={nextUrl}
          className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          aria-label="Next page"
        >
          <span className="sr-only">Next</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <span className="flex h-9 w-9 items-center justify-center rounded border border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </nav>
  );
}
