import { byBrand } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export default function BrandPage({ params }: { params: { brand: string } }) {
  const items = byBrand(params.brand);
  const brandName = params.brand.replace("-", " ").replace(/^./, (c) => c.toUpperCase());

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-6">
        <p className="text-xs uppercase tracking-widest text-zinc-500">品牌</p>
        <h1 className="text-3xl font-semibold">{brandName}</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">精选 {brandName} 跑鞋。</p>
      </header>
      {items.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-400">暂时没有该品牌的商品，敬请期待。</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}

