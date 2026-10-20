import { ImageResponse } from "next/og";
export const alt = "Do Clubs — Extraordinary clubs. Every interest.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#201b49",
        color: "#fff",
        width: "100%",
        height: "100%",
        padding: 70,
      }}
    >
      <div style={{ fontSize: 40, fontWeight: 800 }}>DO CLUBS</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 80,
          fontWeight: 800,
          lineHeight: 1.05,
        }}
      >
        <span>Extraordinary clubs.</span>
        <span style={{ color: "#00cc32" }}>Every interest.</span>
      </div>
      <div style={{ fontSize: 26 }}>Discover. Learn. Play. · doclubs.co.uk</div>
    </div>,
    size,
  );
}

export const dynamic = "force-static";
