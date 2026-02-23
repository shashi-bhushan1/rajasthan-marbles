export interface Granite {
  id: string;
  name: string;
  slug: string;
  image: string;
  /** Slab thickness, e.g. "18 mm", "20 mm" */
  thickness: string;
  /** Finish type: polished, honed, leathered, etc. */
  finish: string;
  /** Slab dimensions or size range */
  size: string;
  /** Origin / quarry region */
  origin: string;
  /** Primary color(s) */
  color: string;
  /** Optional short description */
  description?: string;
}

// Granite data - replace with real data or API later
export const GRANITES: Granite[] = [
  {
    id: "g1",
    name: "Black Galaxy",
    slug: "black-galaxy",
    image: "/images/home-bathroom.webp",
    thickness: "18 mm",
    finish: "Polished",
    size: "280 x 160 cm",
    origin: "India",
    color: "Black with gold speckles",
    description: "Premium black granite with distinctive gold and white speckles.",
  },
  {
    id: "g2",
    name: "Tan Brown",
    slug: "tan-brown",
    image: "/images/home-kitchen.webp",
    thickness: "18 mm",
    finish: "Polished",
    size: "280 x 160 cm",
    origin: "India",
    color: "Tan / Brown",
    description: "Warm tan and brown tones with subtle movement.",
  },
  {
    id: "g3",
    name: "Absolute Black",
    slug: "absolute-black",
    image: "/images/home-bathroom.webp",
    thickness: "18 mm",
    finish: "Honed",
    size: "280 x 160 cm",
    origin: "India",
    color: "Black",
    description: "Dense black granite with minimal variation.",
  },
  {
    id: "g4",
    name: "Kashmir White",
    slug: "kashmir-white",
    image: "/images/home-livingroom.webp",
    thickness: "20 mm",
    finish: "Polished",
    size: "280 x 160 cm",
    origin: "India",
    color: "White / Grey",
    description: "Classic white and grey with soft veining.",
  },
  {
    id: "g5",
    name: "Imperial Red",
    slug: "imperial-red",
    image: "/images/home-kitchen.webp",
    thickness: "18 mm",
    finish: "Polished",
    size: "280 x 160 cm",
    origin: "India",
    color: "Red / Burgundy",
    description: "Bold red granite with dark accents.",
  },
  {
    id: "g6",
    name: "Forest Green",
    slug: "forest-green",
    image: "/images/home-bathroom.webp",
    thickness: "18 mm",
    finish: "Leathered",
    size: "280 x 160 cm",
    origin: "India",
    color: "Green",
    description: "Deep green with natural texture.",
  },
];

export function getAllGranites(): Granite[] {
  return GRANITES;
}

export function getGraniteBySlug(slug: string): Granite | undefined {
  return GRANITES.find((g) => g.slug === slug);
}

export function getSimilarGranites(
  granite: Granite,
  limit: number = 8
): Granite[] {
  return GRANITES.filter((g) => g.id !== granite.id).slice(0, limit);
}
