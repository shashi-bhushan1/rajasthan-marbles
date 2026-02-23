export interface Category {
  id: number;
  slug: string;
  title: string;
  description: string;
  heroImage: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    slug: "bathroom-tiles",
    title: "Bathroom",
    description:
      "Create spa-like retreats with tiles designed for moisture resistance, easy maintenance, and timeless style.",
    heroImage: "/images/home-bathroom.webp",
  },
  {
    id: 2,
    slug: "kitchen-tiles",
    title: "Kitchen",
    description:
      "Elevate your kitchen with durable, stain-resistant tiles that balance everyday practicality with premium design.",
    heroImage: "/images/home-kitchen.webp",
  },
  {
    id: 3,
    slug: "living-room-tiles",
    title: "Living Room",
    description:
      "Set the tone of your living spaces with elegant floor and wall tiles that bring warmth and character.",
    heroImage: "/images/home-livingroom.webp",
  },
  {
    id: 4,
    slug: "commercial-spaces",
    title: "Commercial Spaces",
    description:
      "Design high-traffic commercial areas with tiles engineered for performance, safety, and lasting impressions.",
    heroImage: "/images/home-commercial_space.webp",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategorySlugs(): string[] {
  return CATEGORIES.map((c) => c.slug);
}

/** Kajaria-style URL for category (from nav/homepage): /bathroom-tiles?category_ids[]=1&filtertype=application&filterid=1 */
export function getCategoryPageUrl(slug: string): string {
  const cat = getCategoryBySlug(slug);
  if (!cat) return `/${slug}`;
  const params = new URLSearchParams();
  params.set("category_ids[]", String(cat.id));
  params.set("filtertype", "application");
  params.set("filterid", String(cat.id));
  return `/${slug}?${params.toString()}`;
}
