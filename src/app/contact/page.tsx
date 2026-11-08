import { site } from "@/data/site";

export const metadata = { title: "Contact" };

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: site.github.replace("https://", ""), href: site.github },
  { label: "LinkedIn", value: site.linkedin.replace("https://", ""), href: site.linkedin },
];

export default function ContactPage() {
  return (
    <section className="flex min-h-[calc(100dvh-96px)] items-center justify-center pb-24">
      <ul className="w-full max-w-4xl divide-y divide-fg border-y border-fg">
        {channels.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              className="group flex flex-col gap-1 px-4 py-8 text-fg transition-colors hover:bg-neon hover:text-paper sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="font-tertiary text-sm">{c.label}</span>
              <span className="font-secondary break-all text-2xl font-semibold tracking-tight sm:text-right sm:text-3xl">
                {c.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
