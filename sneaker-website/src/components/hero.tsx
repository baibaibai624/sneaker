import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-brand via-[color:var(--brand-strong)] to-black text-white">
      <Container className="grid grid-cols-1 md:grid-cols-2 p-0">
        <div className="p-10 md:p-14 flex flex-col justify-center gap-6">
          <p className="text-xs uppercase tracking-widest text-white/70">跑就现在</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            轻盈回弹，畅快开跑
          </h1>
          <p className="max-w-md text-white/80">
            灵感源自 Nike 官网的简洁视觉与强力 CTA。我们不使用任何品牌素材，只复刻风格与布局，专注跑鞋体验。
          </p>
          <div className="flex gap-3">
            <Button href="/brands/nike" variant="brand" className="bg-white text-black hover:bg-zinc-200">选购 Nike</Button>
            <Button href="/brands" variant="outline" className="border-white/60 text-white hover:bg-white/10">浏览全部品牌</Button>
          </div>
        </div>
        <div className="relative h-[320px] md:h-full">
          <Image src="/placeholder.svg" alt="hero" fill priority className="object-cover" />
        </div>
      </Container>
    </section>
  );
}
