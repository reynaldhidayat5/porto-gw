import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "text";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 font-mono text-sm font-medium uppercase tracking-[0.04em] transition-colors duration-150";

const variants: Record<Variant, string> = {
  primary: "border border-red bg-red px-6 text-cream hover:border-ink hover:bg-ink active:border-ink active:bg-ink",
  secondary: "border border-red px-6 text-red hover:bg-red hover:text-cream active:bg-red active:text-cream",
  text: "text-red underline underline-offset-4 hover:text-ink",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  externalHint?: string;
  className?: string;
};

export function Button({ href, children, variant = "primary", external, download, externalHint, className = "" }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
        {externalHint ? <span className="sr-only"> {externalHint}</span> : null}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }
  if (download) {
    return (
      <a href={href} className={cls} download>
        {children}
        <span aria-hidden="true">↓</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {variant !== "text" ? <span aria-hidden="true">→</span> : null}
    </Link>
  );
}
