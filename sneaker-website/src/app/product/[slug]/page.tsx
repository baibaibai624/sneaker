import Image from "next/image";
import Link from "next/link";
import { bySlug } from "@/data/products";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const p = bySlug(params.slug);
  if (!p) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-semibold">未找到商品</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">该商品不存在或已下架。</p>
        <Link href="/" className="mt-4 inline-block text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">返回首页</Link>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
          <Image src={p.image || "/placeholder.svg"} alt={p.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-500">{p.brand}</p>
          <h1 className="mt-1 text-3xl font-semibold">{p.name}</h1>
          <div className="mt-4 text-xl">¥{p.price.toLocaleString()}</div>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            高回弹与稳定兼具，适合日常训练与马拉松备赛。页面为示例，不含真实库存。
          </p>
          <div className="mt-6 flex gap-3">
            <button className="rounded-full bg-black px-5 py-3 text-white dark:bg-white dark:text-black text-sm">加入购物车</button>
            <button className="rounded-full border px-5 py-3 text-sm border-zinc-300 dark:border-zinc-700">收藏</button>
          </div>
        </div>
      </div>
    </main>
  );
}

