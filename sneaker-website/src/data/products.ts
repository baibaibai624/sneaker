import type { Product } from "@/components/product-card";

export const products: Product[] = [
  {
    slug: "nike-pegasus-41",
    brand: "Nike",
    name: "Air Zoom Pegasus 41",
    price: 899,
    tag: "热销",
  },
  {
    slug: "nike-vaporfly-3",
    brand: "Nike",
    name: "Vaporfly 3",
    price: 1599,
    tag: "竞速",
  },
  {
    slug: "nike-invincible-4",
    brand: "Nike",
    name: "Invincible Run 4",
    price: 1299,
    tag: "缓震",
  },
  {
    slug: "asics-nimbus-26",
    brand: "ASICS",
    name: "GEL-Nimbus 26",
    price: 1290,
  },
  {
    slug: "new-balance-1080v13",
    brand: "New Balance",
    name: "Fresh Foam X 1080v13",
    price: 1399,
  },
  {
    slug: "hoka-clifton-9",
    brand: "HOKA",
    name: "Clifton 9",
    price: 1099,
  },
];

export function byBrand(brandParam: string) {
  const key = brandParam.toLowerCase();
  return products.filter((p) => p.brand.toLowerCase().replace(" ", "-") === key);
}

export function bySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

