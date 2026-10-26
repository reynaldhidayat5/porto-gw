# Design Specification — Personal Developer Portfolio

**Versi:** 2.0 (menggantikan arah "ivory/olive minimalism" v1.0)
**Produk:** Personal portfolio untuk early-career developer
**Tujuan utama:** Mendukung pencarian kerja dan memudahkan recruiter mengevaluasi kemampuan kandidat.

> **Sumber kebenaran desain.** Semua pekerjaan UI wajib mengikuti dokumen ini.
> Jika perintah baru bertentangan dengan dokumen ini, ikuti perintah baru **dan perbarui dokumen ini** pada perubahan yang sama.

## 1. Design principles

1. **Bold editorial, bukan dekoratif:** tipografi besar dan blok warna datar menjadi "gambar"-nya; tidak ada ornamen yang bersaing dengan konten.
2. **Work before decoration:** proyek dan kontribusi teknis tetap fokus utama.
3. **Clear hierarchy:** recruiter memahami siapa, role, dan proyek dalam beberapa detik.
4. **Honest presentation:** tidak mengarang pengalaman, metrik, testimoni, penghargaan, atau dampak.
5. **Accessible by default:** keyboard, kontras, label, dan reduced motion diperhatikan.
6. **Bilingual parity:** pengalaman bahasa Indonesia dan Inggris setara.

## 2. Target audience

Recruiter/hiring manager, developer atau mentor yang meninjau proyek, calon kolaborator. Kebutuhan: memahami spesialisasi, meninjau proyek, memeriksa CV, menghubungi pemilik.

## 3. Visual direction — "Bold red editorial"

Terinspirasi dari tata letak situs agensi kreatif (https://ueyon.framer.website/): wordmark raksasa, label bracket kecil bergaya monospace, hairline tipis, grid proyek dua kolom dengan baris keterangan, daftar keahlian berupa baris merah penuh, dan footer berisi ajakan kontak plus wordmark besar.

**Yang diambil:** struktur, ritme, dan hierarki tipografi (high-level inspiration).
**Yang TIDAK boleh disalin:** nama/branding, teks, foto, ikon/ornamen khas, dan video referensi.

### Warna (token di `app/globals.css`)

| Token | Hex | Pemakaian | Kontras |
| --- | --- | --- | --- |
| `cream` | `#F8EBCB` | Latar utama | — |
| `red` | `#D20600` | Display, label, hairline, tombol, panel | 4.71:1 di atas cream (AA teks normal) |
| `ink` | `#111111` | Teks bacaan, hover tombol, blok gelap | 15.95:1 di atas cream |
| `muted` | `#6B5B4E` | Teks sekunder | 5.49:1 di atas cream |
| `cream` di atas `red` | — | Teks pada panel/tombol merah | 4.71:1 |

Aturan kontras:
- Merah di atas **ink** hanya 3.39:1 → hanya untuk teks besar (≥ 24px reguler / 18.66px bold), jangan untuk teks kecil.
- Teks panjang selalu `ink`; merah dipakai untuk display, label, link, dan aksen.
- Tidak ada gradient, glassmorphism, bayangan dekoratif.

### Tipografi (dimuat via `next/font/google` di `app/[locale]/layout.tsx`)

| Peran | Font | Aturan |
| --- | --- | --- |
| Display | **Archivo Black** (`font-display`) | Huruf kapital, `letter-spacing: -0.02em`, `line-height: 0.88–0.95`. Wordmark & judul halaman. Fluid dengan `clamp()` |
| Label/meta | **Geist Mono** (`font-mono`) | Huruf kapital, 12–13px, `letter-spacing: 0.04em`. Label `[01] SECTION`, nav, tag, meta |
| Bacaan | **Geist** (`font-sans`) | 16–20px, `line-height: 1.6`. Semua paragraf & studi kasus |

Aturan: jangan memakai monospace kapital untuk paragraf panjang (keterbacaan Indonesia/Inggris). Ukuran teks minimum 12px hanya untuk label; body ≥ 16px. Hanya 3 font ini.

### Layout

- Lebar maksimum **1440px**; gutter 20px (mobile) / 32px (≥ 640px). Grid 12 kolom di desktop.
- Ritme vertikal antar section: 80px (mobile) / 128px (desktop). Skala spacing 4/8px.
- Setiap section dibuka dengan **hairline merah 1px** + baris label `[NN] NAMA` di kiri.
- Sudut tajam (radius 0) untuk panel/tile; tombol berbentuk kotak dengan border 1px (bukan pill).
- Project tile memakai rasio konsisten **4:3**.

## 4. Pola komponen (kosakata UI)

| Komponen | Lokasi | Deskripsi |
| --- | --- | --- |
| `Label` | `components/ui/Label.tsx` | `[01] ABOUT` — mono kapital merah |
| `DisplayHeading` | `components/ui/DisplayHeading.tsx` | Judul display besar (h1/h2) |
| `Button` | `components/ui/Button.tsx` | Varian `primary` (merah solid), `secondary` (outline merah), `text` |
| `Header` | `components/layout/` | Kiri: nama (mono) + tagline `// ROLE`. Kanan: nav mono, pengalih bahasa, tombol Contact. Mobile: menu |
| `Hero` | `components/sections/Hero.tsx` | Wordmark raksasa 2 baris, kolom kanan berisi headline + CTA, lalu **panel merah** penuh |
| `ProjectTile` / `ProjectCard` | `components/projects/` | Tile 4:3 (screenshot bila ada, tile tipografis merah bila tidak) + baris keterangan: judul kiri, tag kanan |
| `Skills` | `components/sections/Skills.tsx` | Baris merah penuh lebar (nomor, nama display, jenis) |
| `Footer` | `components/layout/Footer.tsx` | "Let's talk" + email besar, kolom tautan, wordmark raksasa |

### Pemetaan referensi → portofolio

| Bagian referensi | Di portofolio | Catatan |
| --- | --- | --- |
| Wordmark + tagline | Hero | Nama pemilik, bukan merek referensi |
| Foto hero | Panel merah (role + stack) | Tidak memakai foto referensi |
| About | About preview | Bio dari `content/profile.ts` |
| Recent works | Selected projects | Data dari `content/projects.ts` |
| Expertise | Skills (baris merah) | Hanya teknologi yang terbukti dipakai |
| Showreel, testimonial, stats, awards | **Dihilangkan** | Tidak ada data nyata. Tambahkan hanya jika datanya diverifikasi |
| Let's talk + wordmark | Footer | Email, GitHub, LinkedIn (opsional) |

## 5. Sitemap

`/id`, `/en` (Home) · `/{locale}/projects` · `/{locale}/projects/[slug]` · `/{locale}/about` · `/{locale}/contact` · 404 · `sitemap.xml` · `robots.txt`. `/id` adalah bahasa default.

## 6. Page specifications

### Home
Header → Hero (wordmark, headline, CTA `View Projects` & `Download CV` bila ada, panel merah) → About preview → Selected projects (2 kolom) → Skills (baris merah) → Experience/Education (hanya bila ada data) → Footer.

### Projects listing
Judul display, intro singkat, grid proyek 2 kolom. Tombol demo/repo hanya bila URL ada.

### Project case study
Judul & summary → meta (role, jenis, periode) → tile → blok bernomor: Context, Objective, Contribution (bila ada), Tech stack, Process, Solution, Outcome, Links → Previous/Next. Tanpa metrik yang tidak dapat diverifikasi.

### About / Contact
About: bio, fokus, skills, pendidikan/pengalaman (bila ada), CV (bila ada). Contact: email sebagai jalur utama, GitHub, LinkedIn (bila ada); tanpa form backend.

## 7. Interaction states

- Default, hover, `focus-visible`, active, disabled untuk semua kontrol.
- Fokus: outline 3px (`ink` di atas cream/merah; `cream` di atas ink).
- Hover tombol merah → `ink`. Hover tile → inversi warna (merah ↔ ink).
- Transisi ≤ 200ms; tidak ada animasi yang memblokir konten; `prefers-reduced-motion` mematikan transisi.
- Language switcher mempertahankan halaman yang sepadan. Link eksternal berlabel jelas. Tombol CV menyebut bahasa dokumen.

## 8. Responsive

- Mobile: satu kolom, wordmark 2 baris memenuhi lebar, CTA minimal 44px, tanpa overflow horizontal.
- Tablet (≥ 768px): grid proyek 2 kolom, nav desktop mulai tampil.
- Desktop (≥ 1024px): layout 12 kolom, label di kiri, konten di kolom 4–12.
- Breakpoint ditentukan oleh kebutuhan layout.

## 9. Accessibility (WCAG 2.2 AA)

Kontras sesuai tabel §3; semua fungsi dapat dipakai dengan keyboard; heading bersarang logis (satu `h1` per halaman); alt text bermakna; informasi tidak hanya lewat warna; reduced motion didukung; target sentuh ≥ 44px.

## 10. SEO and sharing

Metadata unik per halaman & locale; canonical; `hreflang` untuk pasangan bahasa yang ada; Open Graph (gambar dinamis memakai palet cream/red); sitemap, robots; preview deployment `noindex`.

## 11. Performance

`next/image` untuk gambar proyek, ukuran eksplisit; Server Components default; Client Components hanya untuk menu mobile & pengalih bahasa; tanpa library animasi. Jangan mengklaim angka performa sebelum diukur (target: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1).

## 12. Design acceptance checklist

- [ ] Palet, tipografi, dan komponen sesuai §3–§4 di semua halaman.
- [ ] Proyek lebih menonjol daripada ornamen.
- [ ] Layout rapi di mobile, tablet, desktop; tidak ada overflow horizontal.
- [ ] Semua interactive states ada; kontras & keyboard diuji.
- [ ] Indonesia dan Inggris setara.
- [ ] Tidak ada placeholder, foto/teks/merek referensi, atau konten palsu saat peluncuran.
