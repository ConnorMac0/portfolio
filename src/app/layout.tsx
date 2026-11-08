import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { site } from "@/data/site";
import { display, secondary, tertiary } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://connormac.dev"),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: "Connor MacLachlan, backend software engineer building multi-tenant systems in C# and .NET. Relocating to Seattle, open to work.",
  openGraph: { type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${secondary.variable} ${tertiary.variable}`}
    >
      <body className="min-h-dvh">
        <Nav />
        <main className="mx-auto w-full max-w-6xl px-6">{children}</main>
      </body>
    </html>
  );
}
