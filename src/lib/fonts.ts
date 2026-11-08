import { Urbanist } from "next/font/google";
import localFont from "next/font/local";

export const display = Urbanist({
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
});

export const secondary = localFont({
  src: "../fonts/PPFraktion/Mono/PPFraktionMono-Regular.otf",
  variable: "--font-secondary-face",
  display: "swap",
});

export const tertiary = localFont({
  src: "../fonts/KH Interference/WOFF2/KHInterference-Regular.woff2",
  variable: "--font-tertiary-face",
  display: "swap",
});
