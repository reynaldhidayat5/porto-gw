import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/content/profile";
import { getDictionary } from "@/content/translations";
import { isLocale, locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

const geistMono = localFont({
  src: "../fonts/GeistMono-Variable.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});
const jaro = localFont({
  src: "../fonts/Jaro-Variable.ttf",
  variable: "--font-jaro",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: { default: profile.fullName, template: `%s | ${profile.fullName}` },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <html lang={locale} className={`${geistMono.variable} ${jaro.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="on-dark sr-only bg-red px-4 py-3 font-mono text-sm uppercase text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          {t.skipToContent}
        </a>
        <Header locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
