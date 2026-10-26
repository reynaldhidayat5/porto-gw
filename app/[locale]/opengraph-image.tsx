import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { isLocale, defaultLocale } from "@/lib/i18n";

export const alt = "Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Palet desain v2.0: cream #F8EBCB, red #D20600.
export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#F8EBCB",
          color: "#D20600",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 2, textTransform: "uppercase", display: "flex" }}>
          {`[ ${profile.role[locale]} ]`}
        </div>
        <div style={{ fontSize: 150, fontWeight: 900, lineHeight: 0.9, textTransform: "uppercase", letterSpacing: -4, display: "flex", flexDirection: "column" }}>
          {profile.fullName.split(" ").map((w) => (
            <div key={w} style={{ display: "flex" }}>{w}</div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
