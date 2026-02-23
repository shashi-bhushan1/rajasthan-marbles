"use client";

import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/data/categories";

type ProductFiltersProps =
  | {
      mode: "products";
      selectedCategorySlugs: string[];
      productCount: number;
      currentFilters: Record<string, string | string[] | undefined>;
    }
  | {
      mode: "category";
      categorySlug: string;
      categoryTitle: string;
      selectedCategorySlugs: string[];
      productCount: number;
      currentFilters: Record<string, string | string[] | undefined>;
    };

const FILTER_GROUPS = [
  {
    title: "Applications",
    type: "applications" as const,
    options: CATEGORIES.map((c) => ({ label: c.title, slug: c.slug })),
  },
  {
    title: "Categories",
    type: "static" as const,
    options: [
      "Glazed Vitrified Tiles",
      "Gres Tiles",
      "Polished Vitrified Tiles",
      "Ceramic Wall Tiles",
    ],
  },
  {
    title: "Sizes",
    type: "static" as const,
    options: ["119x280 cm", "119x240 cm", "60x120 cm", "60x60 cm", "30x60 cm", "30x30 cm"],
  },
  {
    title: "Colors",
    type: "static" as const,
    options: ["Beige", "Black", "Brown", "Cream", "Grey", "White"],
  },
  {
    title: "Finishes",
    type: "static" as const,
    options: ["Glossy", "Matt", "Polished", "Texture"],
  },
];

function buildProductsUrl(categorySlugs: string[]): string {
  if (categorySlugs.length === 0) return "/products";
  return `/products?${categorySlugs.map((s) => `category_ids[]=${encodeURIComponent(s)}`).join("&")}`;
}

export default function ProductFilters(props: ProductFiltersProps) {
  const router = useRouter();
  const selectedSlugs = props.selectedCategorySlugs;
  const totalActiveFilters = selectedSlugs.length;

  const handleApplicationToggle = (slug: string, checked: boolean) => {
    if (props.mode === "products") {
      const next = checked
        ? [...selectedSlugs, slug]
        : selectedSlugs.filter((s) => s !== slug);
      router.push(buildProductsUrl(next));
    } else {
      // Category page: add this slug (navigate to /products with multi-select)
      const next = checked
        ? [...selectedSlugs, slug]
        : selectedSlugs.filter((s) => s !== slug);
      router.push(buildProductsUrl(next));
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-base text-gray-600">
        <span className="font-medium text-[#17458A]">
          {totalActiveFilters} Filter{totalActiveFilters !== 1 ? "s" : ""} Active Now
        </span>
      </div>

      <div className="space-y-4">
        {FILTER_GROUPS.map((group) => (
          <details
            key={group.title}
            className="border-b border-gray-200 pb-4"
            open={group.title === "Applications"}
          >
            <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-gray-900 uppercase text-sm tracking-wider py-2.5">
              {group.title}
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <ul className="mt-2 space-y-2.5">
              {group.type === "applications"
                ? group.options.map((opt) => {
                    const isChecked = selectedSlugs.includes(opt.slug);
                    return (
                      <li key={opt.slug}>
                        <button
                          type="button"
                          onClick={() => handleApplicationToggle(opt.slug, !isChecked)}
                          className="flex w-full items-center gap-3 text-left text-base text-gray-600 hover:text-gray-900 hover:font-medium transition-colors cursor-pointer"
                        >
                          <span
                            className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 ${
                              isChecked
                                ? "border-[#17458A] bg-[#17458A] text-white"
                                : "border-gray-400"
                            }`}
                          >
                            {isChecked && (
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </span>
                          <span>{opt.label}</span>
                        </button>
                      </li>
                    );
                  })
                : group.options.map((option) => (
                    <li key={option}>
                      <label className="flex items-center gap-3 cursor-pointer text-base text-gray-600 hover:text-gray-900">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-2 border-gray-400 text-[#17458A] focus:ring-2 focus:ring-[#17458A] focus:ring-offset-0"
                        />
                        <span>{option}</span>
                      </label>
                    </li>
                  ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}
