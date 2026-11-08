"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contact", label: "CONTACT" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="font-secondary mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-sm">
      <nav className="-ml-3 flex items-center">
        {links.map((l) => {
          const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={`px-3 py-2 transition-colors hover:bg-neon hover:text-paper ${
                active ? "text-fg" : "text-dim"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>

      <a
        href={site.resume}
        download
        className="border-2 border-neon bg-neon px-4 py-2 font-bold text-paper transition-colors hover:bg-paper hover:text-neon"
      >
        RESUME
      </a>
    </header>
  );
}
