"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/lib/i18n";

export type NavItem = { href: string; label: string; exact?: boolean; cta?: boolean };

type Props = {
  locale: Locale;
  items: NavItem[];
  labels: { primary: string; open: string; close: string; language: string; switchTo: string; id: string; en: string };
};

const mono = "font-mono text-xs font-medium uppercase tracking-[0.04em]";

export function HeaderNav({ locale, items, labels }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Escape menutup menu dan mengembalikan fokus ke tombol.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (item: NavItem) =>
    item.exact ? pathname === item.href : pathname === item.href || pathname.startsWith(`${item.href}/`);

  const plain = items.filter((i) => !i.cta);
  const cta = items.find((i) => i.cta);

  return (
    <nav aria-label={labels.primary} className="flex items-center gap-5 lg:gap-8">
      <ul className="hidden items-center gap-6 md:flex lg:gap-8">
        {plain.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive(item) ? "page" : undefined}
              className={`${mono} inline-flex min-h-11 items-center text-red hover:text-ink ${
                isActive(item) ? "underline decoration-2 underline-offset-8" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        {cta ? (
          <li>
            <Link
              href={cta.href}
              aria-current={isActive(cta) ? "page" : undefined}
              className={`${mono} inline-flex min-h-10 items-center border border-red px-4 transition-colors ${
                isActive(cta) ? "bg-red text-cream" : "text-red hover:bg-red hover:text-cream active:bg-red active:text-cream"
              }`}
            >
              {cta.label}
            </Link>
          </li>
        ) : null}
      </ul>

      <LanguageSwitcher locale={locale} labels={labels} />

      <button
        ref={buttonRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-red text-red transition-colors hover:bg-red hover:text-cream active:bg-red active:text-cream md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
          {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 14h14" />}
        </svg>
      </button>

      {open ? (
        <ul id="mobile-menu" className="absolute inset-x-0 top-full flex flex-col border-b border-red bg-cream px-5 pb-6 pt-2 md:hidden">
          {items.map((item) => (
            <li key={item.href} className="border-b border-red/30 last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item) ? "page" : undefined}
                className={`flex min-h-14 items-center justify-between font-display text-3xl uppercase tracking-[-0.02em] ${
                  isActive(item) ? "text-ink" : "text-red"
                }`}
              >
                {item.label}
                <span aria-hidden="true" className="font-mono text-sm">→</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}
