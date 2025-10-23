import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/ui/container";
import { brands as brandList } from "@/data/brands";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-border bg-surface/80 backdrop-blur">
      <Container className="flex h-full items-center justify-between">
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:opacity-80">首页</Link>
          <Link href="/brands" className="hover:opacity-80">品牌</Link>
          <div className="hidden items-center gap-4 sm:flex">
            {brandList.slice(0,5).map((b) => (
              <Link key={b.key} href={`/brands/${b.key}`} className="text-muted hover:text-foreground capitalize">
                {b.name}
              </Link>
            ))}
          </div>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="text-sm text-muted hover:text-foreground">联系</Link>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
