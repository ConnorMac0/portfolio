import { projects, type Project } from "@/data/projects";

const spans: Record<Project["size"], string> = {
  feature: "md:col-span-2 md:row-span-2",
  tall: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1",
  wide: "md:col-span-2",
  full: "md:col-span-4",
};

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="flex min-h-[calc(100dvh-96px)] items-center justify-center pb-24">
      <div className="grid w-full max-w-5xl auto-rows-[minmax(200px,auto)] grid-cols-1 border-l border-t border-fg md:grid-cols-4">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className={`group flex flex-col justify-end border-b border-r border-fg p-6 text-fg transition-colors hover:bg-neon hover:text-paper ${spans[p.size]}`}
          >
            <h2
              className={`font-secondary font-bold tracking-tight ${
                p.size === "feature" ? "text-4xl" : "text-2xl"
              }`}
            >
              {p.title}
            </h2>
            <p className="font-secondary mt-2 max-w-sm text-sm leading-relaxed">
              {p.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="font-tertiary border border-fg/40 px-3 py-1 text-xs group-hover:border-paper"
                >
                  {t}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
