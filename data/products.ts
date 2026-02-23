export interface Product {
  id: string;
  name: string;
  type: string;
  size: string;
  image: string;
  categorySlug: string;
  filters?: {
    size?: string[];
    color?: string[];
    finish?: string[];
  };
}

// Mock product data - replace with real data or API later
export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Bianco Onduluto",
    type: "Glazed Vitrified Tiles",
    size: "119x280 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["119x280 cm"], color: ["white"], finish: ["glossy"] },
  },
  {
    id: "2",
    name: "Lithico Beige",
    type: "Glazed Vitrified Tiles",
    size: "119x240 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["119x240 cm"], color: ["beige"], finish: ["matt"] },
  },
  {
    id: "3",
    name: "Calcuta Imperial A",
    type: "Glazed Vitrified Tiles",
    size: "119x240 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["119x240 cm"], color: ["white", "grey"], finish: ["polished"] },
  },
  {
    id: "4",
    name: "Laburnum Marfil",
    type: "Gres Tiles",
    size: "60x120 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["60x120 cm"], color: ["beige"], finish: ["matt"] },
  },
  {
    id: "5",
    name: "Maestro Marfil",
    type: "Gres Tiles",
    size: "60x120 cm",
    image: "/images/home-kitchen.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["60x120 cm"], color: ["beige"], finish: ["polished"] },
  },
  {
    id: "6",
    name: "Aura Sand Marfil",
    type: "Gres Tiles",
    size: "60x120 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["60x120 cm"], color: ["beige"], finish: ["texture"] },
  },
  {
    id: "7",
    name: "Marble Classic White",
    type: "Polished Vitrified Tiles",
    size: "60x120 cm",
    image: "/images/home-kitchen.webp",
    categorySlug: "kitchen-tiles",
    filters: { size: ["60x120 cm"], color: ["white"], finish: ["polished"] },
  },
  {
    id: "8",
    name: "Stone Effect Grey",
    type: "Gres Tiles",
    size: "30x60 cm",
    image: "/images/home-kitchen.webp",
    categorySlug: "kitchen-tiles",
    filters: { size: ["30x60 cm"], color: ["grey"], finish: ["matt"] },
  },
  {
    id: "9",
    name: "Wood Look Oak",
    type: "Glazed Vitrified Tiles",
    size: "20x120 cm",
    image: "/images/home-livingroom.webp",
    categorySlug: "living-room-tiles",
    filters: { size: ["20x120 cm"], color: ["brown"], finish: ["matt"] },
  },
  {
    id: "10",
    name: "Industrial Concrete",
    type: "Gres Tiles",
    size: "60x60 cm",
    image: "/images/home-commercial_space.webp",
    categorySlug: "commercial-spaces",
    filters: { size: ["60x60 cm"], color: ["grey"], finish: ["matt"] },
  },
  // Extra dummy products to demonstrate pagination (12 per page)
  {
    id: "11",
    name: "Carrara White",
    type: "Polished Vitrified Tiles",
    size: "60x120 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["60x120 cm"], color: ["white"], finish: ["polished"] },
  },
  {
    id: "12",
    name: "Calacatta Gold",
    type: "Glazed Vitrified Tiles",
    size: "119x280 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["119x280 cm"], color: ["white"], finish: ["glossy"] },
  },
  {
    id: "13",
    name: "Statuario Marble",
    type: "Gres Tiles",
    size: "60x120 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["60x120 cm"], color: ["white"], finish: ["matt"] },
  },
  {
    id: "14",
    name: "Nero Marquina",
    type: "Polished Vitrified Tiles",
    size: "60x60 cm",
    image: "/images/home-kitchen.webp",
    categorySlug: "kitchen-tiles",
    filters: { size: ["60x60 cm"], color: ["black"], finish: ["polished"] },
  },
  {
    id: "15",
    name: "Emperador Dark",
    type: "Gres Tiles",
    size: "30x60 cm",
    image: "/images/home-kitchen.webp",
    categorySlug: "kitchen-tiles",
    filters: { size: ["30x60 cm"], color: ["brown"], finish: ["matt"] },
  },
  {
    id: "16",
    name: "Crema Marfil",
    type: "Glazed Vitrified Tiles",
    size: "60x120 cm",
    image: "/images/home-kitchen.webp",
    categorySlug: "kitchen-tiles",
    filters: { size: ["60x120 cm"], color: ["beige"], finish: ["polished"] },
  },
  {
    id: "17",
    name: "Grey Porcelain",
    type: "Gres Tiles",
    size: "60x60 cm",
    image: "/images/home-livingroom.webp",
    categorySlug: "living-room-tiles",
    filters: { size: ["60x60 cm"], color: ["grey"], finish: ["matt"] },
  },
  {
    id: "18",
    name: "Herringbone Oak",
    type: "Glazed Vitrified Tiles",
    size: "20x120 cm",
    image: "/images/home-livingroom.webp",
    categorySlug: "living-room-tiles",
    filters: { size: ["20x120 cm"], color: ["brown"], finish: ["matt"] },
  },
  {
    id: "19",
    name: "Slate Grey",
    type: "Gres Tiles",
    size: "30x60 cm",
    image: "/images/home-livingroom.webp",
    categorySlug: "living-room-tiles",
    filters: { size: ["30x60 cm"], color: ["grey"], finish: ["texture"] },
  },
  {
    id: "20",
    name: "Terrazzo Look",
    type: "Polished Vitrified Tiles",
    size: "60x120 cm",
    image: "/images/home-commercial_space.webp",
    categorySlug: "commercial-spaces",
    filters: { size: ["60x120 cm"], color: ["grey"], finish: ["polished"] },
  },
  {
    id: "21",
    name: "Anti-Slip Grey",
    type: "Gres Tiles",
    size: "30x30 cm",
    image: "/images/home-commercial_space.webp",
    categorySlug: "commercial-spaces",
    filters: { size: ["30x30 cm"], color: ["grey"], finish: ["matt"] },
  },
  {
    id: "22",
    name: "Large Format White",
    type: "Glazed Vitrified Tiles",
    size: "119x280 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["119x280 cm"], color: ["white"], finish: ["glossy"] },
  },
  {
    id: "23",
    name: "Quartz Look",
    type: "Polished Vitrified Tiles",
    size: "60x120 cm",
    image: "/images/home-kitchen.webp",
    categorySlug: "kitchen-tiles",
    filters: { size: ["60x120 cm"], color: ["white"], finish: ["polished"] },
  },
  // More bathroom-tiles dummy data
  {
    id: "24",
    name: "Venato Marble",
    type: "Gres Tiles",
    size: "60x120 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["60x120 cm"], color: ["white"], finish: ["matt"] },
  },
  {
    id: "25",
    name: "Arabescato Corchia",
    type: "Polished Vitrified Tiles",
    size: "119x240 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["119x240 cm"], color: ["white"], finish: ["polished"] },
  },
  {
    id: "26",
    name: "Thassos White",
    type: "Glazed Vitrified Tiles",
    size: "30x60 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["30x60 cm"], color: ["white"], finish: ["glossy"] },
  },
  {
    id: "27",
    name: "Botticino Classico",
    type: "Gres Tiles",
    size: "60x60 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["60x60 cm"], color: ["beige"], finish: ["matt"] },
  },
  {
    id: "28",
    name: "Rain Grey",
    type: "Polished Vitrified Tiles",
    size: "60x120 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["60x120 cm"], color: ["grey"], finish: ["polished"] },
  },
  {
    id: "29",
    name: "Sahara Beige",
    type: "Glazed Vitrified Tiles",
    size: "30x60 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["30x60 cm"], color: ["beige"], finish: ["glossy"] },
  },
  {
    id: "30",
    name: "Marmo Bianco",
    type: "Gres Tiles",
    size: "119x280 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["119x280 cm"], color: ["white"], finish: ["texture"] },
  },
  {
    id: "31",
    name: "Pearl Grey",
    type: "Polished Vitrified Tiles",
    size: "30x30 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["30x30 cm"], color: ["grey"], finish: ["polished"] },
  },
  {
    id: "32",
    name: "Cloud White",
    type: "Glazed Vitrified Tiles",
    size: "60x120 cm",
    image: "/images/home-bathroom.webp",
    categorySlug: "bathroom-tiles",
    filters: { size: ["60x120 cm"], color: ["white"], finish: ["matt"] },
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

export function getSimilarProducts(
  product: Product,
  limit: number = 8
): Product[] {
  return PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, limit);
}

export function getProductsByCategories(categorySlugs: string[]): Product[] {
  if (categorySlugs.length === 0) return PRODUCTS;
  return PRODUCTS.filter((p) => categorySlugs.includes(p.categorySlug));
}

export function getAllProducts(): Product[] {
  return PRODUCTS;
}
