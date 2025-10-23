import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} 跑鞋站点 · 仅为演示布局，不包含任何品牌资产。</p>
        <p>
          构建于 Next.js · Tailwind CSS
        </p>
      </Container>
    </footer>
  );
}
