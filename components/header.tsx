"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Newspaper } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Newspaper className="h-6 w-6" />
          <span className="text-xl font-bold">GlobalNews</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}