import type { CSSProperties } from "react";

/** Nama raksasa, satu kata per baris. Ukuran fluid; tiap kata naik dari balik masker saat load. */
export function Wordmark({
  name,
  as: Tag = "p",
  id,
  className = "",
  animated = true,
}: {
  name: string;
  as?: "h1" | "p";
  id?: string;
  className?: string;
  animated?: boolean;
}) {
  return (
    <Tag
      id={id}
      className={`font-display uppercase leading-[0.86] tracking-[-0.03em] text-red text-[24vw] lg:text-[length:min(14vw,14rem)] ${className}`}
    >
      {name.split(" ").map((word, i) =>
        animated ? (
          <span key={word} className="mask-line">
            <span style={{ "--i": i } as CSSProperties}>{word}</span>
          </span>
        ) : (
          <span key={word} className="block">
            {word}
          </span>
        ),
      )}
    </Tag>
  );
}
