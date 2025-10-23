"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const active = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="切换到亮色"
        className="h-9 rounded-md px-3 text-sm border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        onClick={() => setTheme("light")}
        data-active={active === "light"}
      >
        亮色
      </button>
      <button
        aria-label="切换到暗色"
        className="h-9 rounded-md px-3 text-sm border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        onClick={() => setTheme("dark")}
        data-active={active === "dark"}
      >
        暗色
      </button>
      <button
        aria-label="跟随系统"
        className="h-9 rounded-md px-3 text-sm border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        onClick={() => setTheme("system")}
        data-active={theme === "system"}
      >
        系统
      </button>
    </div>
  );
}

