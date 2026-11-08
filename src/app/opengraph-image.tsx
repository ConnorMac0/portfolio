import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 140,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -4,
            color: "#f4f4f4",
          }}
        >
          <span>{site.first}</span>
          <span>{site.last}</span>
        </div>
        <div style={{ marginTop: 32, fontSize: 48, fontWeight: 700, color: "#c0fe04" }}>
          {site.title}
        </div>
      </div>
    ),
    size
  );
}