import Link from "next/link";
import { brands } from "@/data/brands";

export default function BrandsIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">品牌</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">选择你关注的跑鞋品牌。</p>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {brands.map((b) => (
          <Link
            key={b.key}
            href={`/brands/${b.key}`}
            className="flex h-28 items-center justify-center rounded-xl border border-zinc-200 bg-white text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
          >
            {b.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
