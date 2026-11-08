import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100dvh-96px)] flex-col items-center justify-center pb-24 text-center">
      <h1 className="font-display text-[clamp(5rem,20vw,14rem)] font-extrabold leading-none tracking-[-0.04em]">
        404
      </h1>
      <p className="font-secondary mt-4 text-2xl font-bold text-neon">Page not found</p>
      <Link
        href="/"
        className="font-tertiary mt-8 px-4 py-2 text-sm text-fg transition-colors hover:bg-neon hover:text-paper"
      >
        Back home
      </Link>
    </section>
  );
}