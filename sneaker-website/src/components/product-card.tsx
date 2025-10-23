import Link from "next/link";
import Image from "next/image";

export interface Product {
  slug: string;
  brand: string;
  name: string;
  price: number;
  image?: string;
  tag?: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative aspect-[4/3] w-full bg-surface-2">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs text-white backdrop-blur dark:bg-white/80 dark:text-black">{product.tag}</span>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-widest text-muted">{product.brand}</div>
        <h3 className="mt-1 text-sm font-medium">{product.name}</h3>
        <div className="mt-2 text-sm">¥{product.price.toLocaleString()}</div>
      </div>
    </Link>
  );
}
