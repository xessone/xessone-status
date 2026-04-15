import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0f0f13, #09090b)",
          borderRadius: 40,
        }}
      >
        <span
          style={{
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
            backgroundClip: "text",
            color: "#3b82f6",
          }}
        >
          X
        </span>
      </div>
    ),
    { ...size }
  );
}
