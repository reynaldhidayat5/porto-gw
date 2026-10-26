import type { Project } from "./types";

/**
 * Hanya proyek yang benar-benar ada. Tambahkan proyek lain di sini dengan slug
 * yang stabil. Jangan mencantumkan metrik/hasil yang tidak bisa diverifikasi.
 */
export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    title: {
      id: "Situs Portofolio Pribadi",
      en: "Personal Portfolio Website",
    },
    summary: {
      id: "Situs portofolio dua bahasa (Indonesia/Inggris) yang menampilkan proyek sebagai studi kasus, dibangun dengan Next.js App Router, TypeScript, dan Tailwind CSS.",
      en: "A bilingual (Indonesian/English) portfolio site that presents projects as case studies, built with Next.js App Router, TypeScript and Tailwind CSS.",
    },
    projectType: { id: "Proyek pribadi", en: "Personal project" },
    role: { id: "Perancang & pengembang", en: "Designer & developer" },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    featured: true,
    repositoryUrl: "https://github.com/reynaldhidayat5/porto-gw",
    problem: {
      id: "Recruiter dan hiring manager hanya punya waktu singkat untuk menilai kandidat. Tautan yang tersebar (repositori, CV, kontak) membuat proses itu lebih lambat.",
      en: "Recruiters and hiring managers have little time to evaluate a candidate. Scattered links (repositories, CV, contact) slow that down.",
    },
    objective: {
      id: "Menyediakan satu tempat yang menjelaskan peran, menampilkan proyek secara jujur, dan memudahkan orang menemukan CV, repositori, serta kontak.",
      en: "Provide one place that explains my role, presents projects honestly, and makes the CV, repository and contact details easy to find.",
    },
    process: {
      id: [
        "Menulis spesifikasi produk, desain, dan rencana implementasi sebelum membuat kode.",
        "Memakai Next.js App Router dengan rute per bahasa (/id dan /en) agar setiap halaman punya URL, canonical, dan hreflang sendiri.",
        "Memisahkan konten dari komponen UI lewat data TypeScript bertipe, sehingga setiap teks wajib tersedia dalam dua bahasa.",
        "Menjaga halaman sebagian besar sebagai Server Components; JavaScript klien hanya untuk menu mobile dan pengalih bahasa.",
        "Memilih palet dan menghitung kontrasnya terhadap target WCAG 2.2 AA; warna yang tidak lolos hanya dipakai untuk elemen dekoratif.",
      ],
      en: [
        "Wrote the product spec, design spec and implementation plan before writing code.",
        "Used Next.js App Router with per-language routes (/id and /en) so every page has its own URL, canonical and hreflang.",
        "Separated content from UI components through typed TypeScript data, so every string must exist in both languages.",
        "Kept pages mostly Server Components; client JavaScript is limited to the mobile menu and language switcher.",
        "Chose the palette and computed its contrast against WCAG 2.2 AA; colours that fail are used only for decorative elements.",
      ],
    },
    solution: {
      id: "Situs statis dengan halaman Beranda, Proyek, Detail Proyek, Tentang, dan Kontak dalam dua bahasa. Tombol demo, repositori, dan CV hanya tampil bila tautannya tersedia.",
      en: "A static site with Home, Projects, Project Detail, About and Contact pages in two languages. Demo, repository and CV buttons only appear when the link exists.",
    },
    outcome: {
      id: "Proyek ini masih terus dikembangkan. Saya belum mengukur performa atau dampaknya, sehingga tidak ada angka yang dicantumkan.",
      en: "This project is still evolving. I have not measured its performance or impact yet, so no figures are claimed.",
    },
    // TODO: tambahkan `contribution` (kontribusi pribadi), `period`, `demoUrl` (bila sudah deploy),
    // dan `thumbnail` (screenshot di public/images/projects/).
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Proyek berikutnya/sebelumnya (melingkar). Null bila hanya ada satu proyek. */
export function getAdjacentProjects(slug: string): { prev: Project; next: Project } | null {
  if (projects.length < 2) return null;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}

