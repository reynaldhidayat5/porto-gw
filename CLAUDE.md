@AGENTS.md

> Struktur repo ini memakai `app/` di root (tanpa `src/`) dengan alias `@/*` -> `./`.
> Ikuti konvensi repo yang ada; peta folder PRD (`src/...`) diterjemahkan ke root.
> Dokumen acuan lengkap: `docs/design.md`, `docs/erd.md`, `docs/plan.md`.

# CLAUDE.md --- Project Instructions

This file provides project-specific instructions for Claude Code or
another coding agent working on this portfolio repository.

## 1. Project context

Build a bilingual personal portfolio website for an early-career
developer seeking employment.

Primary goals: - Help recruiters understand the developer's role and
strengths quickly. - Present 2--5 projects with honest, useful case
studies. - Make CV, repository, demo, and contact links easy to find. -
Deliver a polished, elegant, professional, responsive experience.

Reference site (design v2.0): https://ueyon.framer.website/
(sebelumnya https://frummerin-digital.com/ — sudah tidak dipakai).

Use the reference for high-level inspiration only (layout rhythm, typography
hierarchy, section pattern). Do not copy its branding, assets, copy, or
distinctive design verbatim.

## 2. Required stack

-   Next.js App Router
-   TypeScript
-   Tailwind CSS
-   Static/local content for the MVP
-   Hosting compatible with Next.js, such as Vercel

Do not add a database, CMS, authentication, or custom contact backend
unless explicitly requested.

## 3. Product requirements

Required routes: - `/id` - `/en` - `/id/projects` - `/en/projects` -
`/id/projects/[slug]` - `/en/projects/[slug]` - `/id/about` -
`/en/about` - `/id/contact` - `/en/contact`

Required functionality: - Responsive navigation and footer. - Bilingual
content and language switcher. - Project listing and project case-study
pages. - Conditional demo/repository links. - CV access. - Email,
GitHub, and LinkedIn links. - Metadata, Open Graph, canonical URLs,
hreflang, sitemap, robots.txt, and 404 handling.

## 4. Design rules

**Sumber kebenaran: `docs/design.md` (v2.1). Baca sebelum mengubah UI apa pun.**
Jika sebuah perintah mengubah arah desain, perbarui `docs/design.md` dan bagian ini
pada perubahan yang sama agar dokumen tidak pernah tertinggal dari kode.

-   Visual direction: **bold red editorial** — wordmark display raksasa, label
    bracket monospace `[01] SECTION`, hairline merah 1px, panel merah datar, grid
    proyek 2 kolom dengan baris keterangan, footer "let's talk" + wordmark.
-   Token warna (hanya ini, didefinisikan di `app/globals.css`): cream `#F8EBCB`,
    red `#D20600`, ink `#111111`, muted `#6B5B4E`. Jangan menambah warna baru tanpa
    memperbarui `docs/design.md`.
-   Kontras: merah di atas cream = 4.71:1 (boleh untuk teks normal); merah di atas
    ink = 3.39:1 (HANYA teks besar). Teks bacaan panjang selalu `ink`.
-   Tipografi: Archivo Black (`font-display`, kapital, tracking -0.02em) untuk
    judul/wordmark; Geist Mono (`font-mono`, kapital, 12–13px) untuk label/meta/nav;
    Geist (`font-sans`, 16–20px, line-height 1.6) untuk paragraf. Jangan memakai
    monospace kapital untuk paragraf panjang.
-   Layout: max-width 1440px, gutter 20/32px, sudut tajam (radius 0), tombol kotak,
    tile proyek rasio 4:3, spasi skala 4/8px.
-   Reuse komponen: `Label`, `DisplayHeading`, `Button`, `Rows`, `Hero`, `ProjectCard`,
    `Experience`, `Education`, `Skills` (hanya About), `Header`, `Footer`. Jangan membuat gaya satu-kali di halaman.
-   Referensi (https://ueyon.framer.website/) hanya inspirasi struktur dan ritme.
    Jangan menyalin nama, teks, foto, ikon khas, atau video. Bagian referensi yang
    tidak punya data nyata (showreel, testimonial, statistik, penghargaan) tidak
    dibuat.
-   Motion: ikuti tabel di `docs/design.md` §7 (header mengecil saat scroll, wordmark
    naik dari masker, scroll reveal, chamfer + panah + chip pada kartu proyek, baris
    `Rows` dengan latar merah menyapu). Semua CSS murni di `app/globals.css`; tanpa
    library animasi. Progressive enhancement dan `prefers-reduced-motion` wajib.
    Jangan menyembunyikan informasi hanya di balik hover.
-   Home memakai **Experience** (bukan Skills) sebagai baris interaktif; Skills hanya
    di About. Experience/Education hanya dirender bila `content/experience.ts` /
    `content/education.ts` berisi data nyata.
-   Hindari gradient, glassmorphism, bayangan dekoratif, dan animasi yang tidak perlu.
-   Semua kontrol punya hover, active, dan `focus-visible` yang jelas.
-   Hormati `prefers-reduced-motion`; target WCAG 2.2 AA; uji responsif mobile dulu.

## 5. Content integrity

-   Never invent employment history, education, certifications, metrics,
    testimonials, clients, or project outcomes.
-   If content is missing, use a clearly marked TODO in development
    rather than fabricating details.
-   Do not publish TODO placeholders or fake links in production.
-   Do not claim a project is deployed unless a working demo URL is
    provided.
-   Keep Indonesian and English content semantically equivalent.
-   Make personal contribution clear for team or academic projects.

## 6. Engineering conventions

-   Use TypeScript types for profile, projects, experience, education,
    and translations.
-   Keep content separate from UI components.
-   Prefer Server Components by default.
-   Use Client Components only for real client-side interactions.
-   Build reusable components for navigation, buttons, project cards,
    project metadata, and CTA sections.
-   Use semantic HTML and meaningful alt text.
-   Use `next/image` when appropriate for local project imagery.
-   Avoid unnecessary dependencies.
-   Do not expose secrets or private credentials in client-side code.
-   Keep slugs stable and unique.
-   Render demo/repository buttons only when valid URLs exist.
-   Handle unknown locales and unknown project slugs gracefully.
-   Follow the conventions already present in the repository if they
    differ from this outline, unless doing so conflicts with product
    requirements.

## 7. Suggested content model

A project should support: - `slug` - bilingual `title` - bilingual
`description` - `role` - `technologies` - `thumbnail` - `featured` -
optional `repositoryUrl` - optional `demoUrl` - bilingual `problem` -
bilingual `solution` - bilingual `outcome` - bilingual `process`

Profile content should include: - full name - professional role - short
bio in Indonesian and English - email - GitHub - LinkedIn - CV URL(s) -
relevant skills - education/experience if supplied

## 8. Workflow expectations

Before making changes: 1. Inspect the existing repository and package
versions. 2. Identify the current routing, styling setup, and available
assets. 3. Summarize the implementation approach for multi-step or
high-impact changes. 4. Preserve existing working behavior unless a
change is required.

While implementing: 1. Work in small, coherent steps. 2. Keep TypeScript
strict and resolve type errors. 3. Run available lint, type-check, and
build commands. 4. Verify all internal routes and external links. 5.
Avoid broad rewrites when a focused change is sufficient.

Before declaring work complete: - Run the production build. - Run
lint/type checks if scripts exist. - Test desktop and mobile layouts. -
Test language switching and direct loading of localized routes. - Test
project pages with valid and unknown slugs. - Check CV, email, GitHub,
LinkedIn, demo, and repository links. - Report checks that could not be
run; do not claim tests passed without running them.

## 9. Acceptance criteria

The implementation is acceptable when: - Required routes load
correctly. - Both languages are complete for all visible UI and
published content. - Projects render from structured data. - Missing
optional links do not create broken buttons. - CV and contact links
work. - The layout is responsive and keyboard accessible. - SEO metadata
and language alternates are configured correctly. - There are no
critical runtime or build errors. - No fabricated personal claims or
project outcomes are present.

## 10. Agent response format

When completing a task, report: 1. What changed. 2. Files created or
updated. 3. Commands/tests executed and their actual results. 4. Known
gaps or follow-up tasks.

Do not claim deployment, verification, or test success unless it
actually occurred.
