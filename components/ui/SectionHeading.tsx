import type { ReactNode } from "react";

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  level = 2,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Level heading: 1 untuk judul halaman, 2 untuk section. */
  level?: 1 | 2;
}) {
  const Tag = level === 1 ? "h1" : "h2";
  return (
    <header className="max-w-2xl">
      {eyebrow ? <p className="text-sm font-medium uppercase tracking-widest text-olive-deep">{eyebrow}</p> : null}
      <Tag id={id} className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </Tag>
      {intro ? <p className="mt-4 text-lg text-muted">{intro}</p> : null}
    </header>
  );
}
