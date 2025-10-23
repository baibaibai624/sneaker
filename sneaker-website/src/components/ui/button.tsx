"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "brand" | "outline" | "ghost";

function styles(variant: Variant) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm transition-colors focus:outline-none";
  const map: Record<Variant, string> = {
    brand: "bg-[color:var(--brand)] text-white hover:brightness-110",
    outline: "border border-border text-foreground hover:bg-surface-2",
    ghost: "text-muted hover:text-foreground hover:bg-surface-2",
  };
  return cn(base, map[variant]);
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: Variant;
  className?: string;
};

export function Button({ href, variant = "brand", className, children, ...props }: ButtonProps) {
  const cls = styles(variant);
  if (href) {
    return (
      <Link href={href} className={cn(cls, className)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cn(cls, className)} {...props}>
      {children}
    </button>
  );
}

