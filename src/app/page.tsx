import { site } from "@/data/site";

export default function Home() {
  return (
    <section className="flex min-h-[calc(100dvh-96px)] items-center justify-center pb-24">
      <div className="text-left">
        <h1 className="font-display text-[clamp(3rem,12vw,10rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-fg">
          <span className="block">{site.first}</span>
          <span className="block">{site.last}</span>
        </h1>
        <p className="font-tertiary mt-6 text-2xl font-bold text-neon sm:text-3xl">
          {site.title}
        </p>
      </div>
    </section>
  );
}
