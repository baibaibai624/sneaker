import { Hero } from "@/components/hero";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  const featured = products.slice(0, 6);
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14 space-y-12">
      <Hero />
      <section>
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">精选跑鞋</h2>
          <a href="/brands" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">浏览全部品牌 →</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
