# Portfolio — Reynald Hidayat

Portofolio pribadi dua bahasa (Indonesia/Inggris) berbasis **Next.js App Router**, **TypeScript**, dan **Tailwind CSS v4**. Konten statis dan lokal; tanpa database, CMS, atau backend.

Spesifikasi: [`CLAUDE.md`](./CLAUDE.md) · [`docs/design.md`](./docs/design.md) · [`docs/plan.md`](./docs/plan.md) · [`docs/erd.md`](./docs/erd.md)

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000  (/ -> /id)
npm run lint
npx tsc --noEmit
npm run build && npm start
```

## Rute

`/id`, `/en`, `/{id|en}/projects`, `/{id|en}/projects/[slug]`, `/{id|en}/about`, `/{id|en}/contact`, `sitemap.xml`, `robots.txt`.

## Mengisi konten (semua di `content/`)

| File | Isi |
| --- | --- |
| `profile.ts` | Nama, role, bio, email, GitHub, **LinkedIn (opsional)**, **CV (opsional)**, skills |
| `projects.ts` | Proyek + studi kasus dua bahasa. Tambahkan `thumbnail`, `demoUrl`, `contribution` |
| `experience.ts`, `education.ts` | Kosong = bagian disembunyikan |
| `translations.ts` | Teks UI id/en (tipe memastikan keduanya lengkap) |

- Letakkan CV di `public/cv/` (mis. `cv-id.pdf`, `cv-en.pdf`) lalu isi `profile.cvUrl`.
- Letakkan screenshot di `public/images/projects/` lalu isi `thumbnail`.
- Tombol demo/repositori/CV/LinkedIn **hanya muncul bila URL diisi**.
- Item yang belum diisi menampilkan kotak **TODO hanya saat development**; tidak pernah tampil di production.

## Environment

| Variabel | Fungsi |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Domain final untuk canonical, hreflang, sitemap, OG (mis. `https://domainanda.com`) |

Di Vercel, deploy *preview* otomatis `noindex` dan `robots.txt` melarang crawling.

## Palet & kontras

Lihat `docs/design.md` §3 (cream `#F8EBCB`, red `#D20600`, ink `#111111`).
