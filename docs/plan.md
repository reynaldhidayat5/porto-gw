# Implementation Plan --- Personal Developer Portfolio

**Versi:** 1.0\
**Stack:** Next.js App Router, TypeScript, Tailwind CSS\
**Strategi:** MVP statis, bilingual, tanpa database dan tanpa admin
panel.

## 1. Objectives

-   Membuat website profesional untuk mendukung pencarian kerja.
-   Menampilkan 2--5 proyek dengan studi kasus yang jelas.
-   Menyediakan konten Indonesia dan Inggris.
-   Menyediakan CV, GitHub, LinkedIn, email, dan link demo/repository.
-   Meluncurkan website yang responsif, mudah diakses, dan SEO-ready.

## 2. Scope

### In scope

-   Home, Projects, Project Detail, About, Contact.
-   Bahasa `id` dan `en`.
-   Data konten lokal terstruktur.
-   Metadata dan sitemap.
-   CV PDF.
-   Responsive layout.
-   Basic accessibility dan performance testing.
-   Deployment ke hosting yang mendukung Next.js.

### Out of scope for MVP

-   Database.
-   CMS/admin dashboard.
-   Login.
-   Blog.
-   Form kontak custom dengan backend.
-   Analytics kompleks.
-   Animasi kompleks.

## 3. Proposed repository structure

``` text
portfolio/
├── public/
│   ├── images/projects/
│   └── cv/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── projects/page.tsx
│   │   │   ├── projects/[slug]/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── projects/
│   │   └── ui/
│   ├── content/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   └── translations.ts
│   └── lib/
│       ├── i18n.ts
│       └── metadata.ts
├── package.json
└── tsconfig.json
```

Adaptasi struktur jika versi Next.js atau konfigurasi proyek yang
dipilih memerlukan perubahan.

## 4. Phases and tasks

### Phase 0 --- Content discovery

Tasks: - \[ \] Tentukan role/positioning utama, misalnya Frontend
Developer atau Full-Stack Developer. - \[ \] Pilih 2--5 proyek yang
paling relevan. - \[ \] Pastikan repository dan demo dapat dibuka. - \[
\] Tulis kontribusi pribadi, tantangan, solusi, dan hasil tiap proyek. -
\[ \] Siapkan bio, pendidikan, skills, email, LinkedIn, GitHub, dan
CV. - \[ \] Siapkan terjemahan Indonesia dan Inggris.

Deliverable: content inventory siap implementasi.

### Phase 1 --- Project setup and design foundation

Tasks: - \[ \] Inisialisasi Next.js App Router dengan TypeScript. - \[
\] Konfigurasi Tailwind CSS sesuai versi yang digunakan. - \[ \]
Tentukan tokens warna, typography, spacing, container, dan radius. - \[
\] Buat layout global, navbar, footer, button, container, dan link
styles. - \[ \] Siapkan font dan favicon. - \[ \] Buat struktur locale
dan helper terjemahan.

Deliverable: project berjalan dengan design foundation.

### Phase 2 --- Home page

Tasks: - \[ \] Implementasikan hero dan CTA. - \[ \] Implementasikan
featured projects. - \[ \] Implementasikan skills. - \[ \]
Implementasikan About preview dan contact CTA. - \[ \] Pastikan data dan
teks tersedia dalam kedua bahasa.

Deliverable: Home responsif.

### Phase 3 --- Projects and case studies

Tasks: - \[ \] Buat schema/type data proyek. - \[ \] Buat project card
reusable. - \[ \] Buat listing `/projects`. - \[ \] Buat detail
`/projects/[slug]`. - \[ \] Tambahkan conditional rendering untuk
demo/repository yang tersedia. - \[ \] Tambahkan metadata per proyek dan
locale. - \[ \] Tangani slug yang tidak ditemukan.

Deliverable: proyek dapat ditemukan dan dibaca sebagai studi kasus.

### Phase 4 --- About, Contact, and bilingual QA

Tasks: - \[ \] Implementasikan About. - \[ \] Implementasikan Contact
tanpa backend custom pada MVP. - \[ \] Pastikan language switcher
mempertahankan halaman yang sesuai. - \[ \] Periksa konsistensi semua
teks UI dan konten proyek. - \[ \] Pastikan CV sesuai bahasa dan link
benar. - \[ \] Tambahkan canonical dan hreflang.

Deliverable: pengalaman bilingual lengkap.

### Phase 5 --- SEO, accessibility, and performance

Tasks: - \[ \] Tambahkan metadata title/description. - \[ \] Tambahkan
Open Graph. - \[ \] Buat sitemap dan robots.txt. - \[ \] Periksa
semantic HTML, alt text, keyboard, focus, dan kontras. - \[ \]
Optimalkan gambar. - \[ \] Periksa console dan network errors. - \[ \]
Uji build production dan Core Web Vitals jika tersedia.

Deliverable: release candidate.

### Phase 6 --- Deployment and launch

Tasks: - \[ \] Deploy ke hosting. - \[ \] Konfigurasi domain dan
HTTPS. - \[ \] Uji semua rute di production. - \[ \] Uji link CV, email,
repository, dan demo. - \[ \] Periksa 404, metadata, sitemap, dan
bahasa. - \[ \] Minta review dari mentor/recruiter bila memungkinkan. -
\[ \] Catat feedback untuk iterasi berikutnya.

Deliverable: website live.

## 5. Estimated schedule

  Phase                                 Estimasi
  ---------------------------------- -----------
  Content discovery                    2--3 hari
  Setup & design foundation            2--3 hari
  Home                                 2--3 hari
  Projects & case studies              2--4 hari
  About, Contact & bilingual QA        2--3 hari
  SEO, accessibility & performance     1--2 hari
  Deployment & final QA                   1 hari

Estimasi total: sekitar 12--19 hari kerja untuk developer pemula yang
sedang belajar sambil membangun. Konten yang belum siap atau revisi
desain dapat menambah waktu.

## 6. Definition of Done

-   [ ] Semua halaman utama tersedia dalam kedua bahasa.
-   [ ] Semua CTA dan link berfungsi.
-   [ ] Setiap proyek memiliki konten yang akurat dan detail yang cukup.
-   [ ] CV dapat diakses.
-   [ ] Tidak ada error kritis di console.
-   [ ] Tidak ada layout overflow yang tidak disengaja.
-   [ ] Navigasi keyboard dan focus state berfungsi.
-   [ ] Metadata, canonical, hreflang, sitemap, dan 404 telah diperiksa.
-   [ ] Production build berhasil.
-   [ ] Website diuji pada ukuran layar utama.
-   [ ] HTTPS aktif dan domain mengarah dengan benar.

## 7. Risks and mitigations

  -----------------------------------------------------------------------
  Risk                                Mitigation
  ----------------------------------- -----------------------------------
  Proyek belum cukup kuat             Pilih sedikit proyek tetapi
                                      dokumentasikan keputusan teknis dan
                                      kontribusi secara mendalam.

  Scope membesar                      Tunda CMS, blog, database, dan
                                      animasi kompleks.

  Bilingual tidak konsisten           Simpan teks UI terpusat dan gunakan
                                      checklist per locale.

  Performa buruk                      Gunakan gambar teroptimasi dan
                                      minimalkan client-side JavaScript.

  Link eksternal rusak                Verifikasi semua link sebelum
                                      rilis.

  Konten tidak kredibel               Hindari metrik, testimonial, dan
                                      pengalaman yang tidak dapat
                                      diverifikasi.
  -----------------------------------------------------------------------

## 8. Post-launch iteration

Prioritas setelah launch: 1. Kumpulkan feedback dari mentor/recruiter.
2. Perbaiki kejelasan hero dan proyek unggulan. 3. Tambahkan analytics
ringan jika berguna dan sesuai privasi. 4. Tambahkan proyek baru hanya
jika kualitasnya relevan. 5. Pertimbangkan CMS hanya jika frekuensi
perubahan konten membenarkannya.
