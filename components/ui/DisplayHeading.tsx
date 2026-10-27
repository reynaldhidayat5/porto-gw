import type { ReactNode } from "react";

type Props = {
  level?: 1 | 2;
  /** `xl` = judul halaman, `lg` = judul section. */
  size?: "xl" | "lg";
  id?: string;
  children: ReactNode;
  className?: string;
};

const sizes = {
  xl: "text-[clamp(3rem,11vw,9rem)] leading-[0.9]",
  lg: "text-[clamp(2.5rem,7vw,6rem)] leading-[0.92]",
};

/** Judul display: Jaro, kapital, rapat. Satu `h1` per halaman. */
export function DisplayHeading({ level = 2, size = "lg", id, children, className = "" }: Props) {
  const Tag = level === 1 ? "h1" : "h2";
  return (
    <Tag id={id} data-reveal={level === 1 ? undefined : "wipe"} className={`${level === 1 ? "load-in " : ""}font-display uppercase tracking-[-0.02em] text-red text-balance [overflow-wrap:anywhere] ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
