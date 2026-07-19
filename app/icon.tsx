import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)",
          borderRadius: 8,
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>
          YS
        </span>
      </div>
    ),
    { ...size }
  );
}
