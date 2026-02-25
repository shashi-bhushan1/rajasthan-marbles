export interface Adhesive {
  id: string;
  name: string;
  slug: string;
  image: string;
  /** Category / product type e.g. "Tile Adhesive", "Grout" */
  type: string;
  /** Coverage per unit */
  coverage?: string;
  /** Curing / drying time */
  dryingTime?: string;
  /** Use case */
  application?: string;
  /** Pack size */
  packSize?: string;
  description?: string;
}

export const ADHESIVES: Adhesive[] = [
  {
    id: "a1",
    name: "Tile Adhesive Plus",
    slug: "tile-adhesive-plus",
    image: "/images/home-bathroom.webp",
    type: "Tile Adhesive",
    coverage: "4–5 kg/m²",
    dryingTime: "24 hours",
    application: "Interior wall & floor tiles",
    packSize: "20 kg bag",
    description: "Premium tile adhesive for interior wall and floor applications.",
  },
  {
    id: "a2",
    name: "EZY Fix",
    slug: "ezy-fix",
    image: "/images/home-kitchen.webp",
    type: "Tile Adhesive",
    coverage: "~3 sq m per 20 kg bag",
    dryingTime: "2–4 hours",
    application: "Vitrified & ceramic tiles",
    packSize: "20 kg bag",
    description: "Fast-setting adhesive for vitrified and ceramic tiles.",
  },
  {
    id: "a3",
    name: "Wall Adhesive",
    slug: "wall-adhesive",
    image: "/images/home-livingroom.webp",
    type: "Wall Adhesive",
    coverage: "5–6 kg/m²",
    dryingTime: "24 hours",
    application: "Interior wall tiles",
    packSize: "25 kg bag",
    description: "Strong bond for wall tile installations.",
  },
  {
    id: "a4",
    name: "Grout Plus",
    slug: "grout-plus",
    image: "/images/home-commercial_space.webp",
    type: "Grout",
    coverage: "~2 kg per 10 sq m",
    dryingTime: "24 hours",
    application: "Tile joints",
    packSize: "5 kg bag",
    description: "Water-resistant grout for tile joints.",
  },
  {
    id: "a5",
    name: "Marble Adhesive",
    slug: "marble-adhesive",
    image: "/images/home-bathroom.webp",
    type: "Marble Adhesive",
    coverage: "4–5 kg/m²",
    dryingTime: "48 hours",
    application: "Marble & natural stone",
    packSize: "20 kg bag",
    description: "White adhesive for marble and natural stone.",
  },
  {
    id: "a6",
    name: "Flexible Adhesive",
    slug: "flexible-adhesive",
    image: "/images/home-kitchen.webp",
    type: "Tile Adhesive",
    coverage: "~3.5 sq m per 20 kg bag",
    dryingTime: "24 hours",
    application: "Large format & exterior",
    packSize: "20 kg bag",
    description: "Flexible, weather-resistant adhesive for large format tiles.",
  },
];

export function getAllAdhesives(): Adhesive[] {
  return ADHESIVES;
}

export function getAdhesiveBySlug(slug: string): Adhesive | undefined {
  return ADHESIVES.find((a) => a.slug === slug);
}

export function getSimilarAdhesives(
  adhesive: Adhesive,
  limit: number = 8
): Adhesive[] {
  return ADHESIVES.filter((a) => a.id !== adhesive.id).slice(0, limit);
}
