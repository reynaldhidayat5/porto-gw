import type { Profile } from "./types";

/**
 * TODO (konfirmasi pemilik): nama lengkap, role, bio, LinkedIn, dan CV.
 * - Nama diturunkan dari username GitHub — pastikan ejaannya benar.
 * - Tambahkan `linkedinUrl` dan `cvUrl` bila sudah ada; tombolnya otomatis muncul.
 * - Daftar skills hanya berisi teknologi yang terbukti dipakai di repo ini.
 */
export const profile: Profile = {
  fullName: "Reynald Hidayat",
  /** Nama pendek untuk header & hero. */
  shortName: "Reynald",
  role: {
    id: "Pengembang Web",
    en: "Web Developer",
  },
  headline: {
    id: "Saya membangun antarmuka web yang jelas, mudah diakses, dan nyaman dipakai.",
    en: "I build clear, accessible and comfortable-to-use web interfaces.",
  },
  bio: {
    id: "Pengembang web tahap awal karier yang bekerja dengan Next.js, TypeScript, dan Tailwind CSS. Saat ini saya mencari kesempatan kerja untuk terus belajar dan berkontribusi pada produk nyata.",
    en: "An early-career web developer working with Next.js, TypeScript and Tailwind CSS. I am currently looking for an opportunity to keep learning and contribute to real products.",
  },
  photo: { src: "/images/profile/portrait.png", width: 895, height: 634 },
  email: "reynaldhidayat5@gmail.com",
  githubUrl: "https://github.com/reynaldhidayat5",
  // linkedinUrl: "https://www.linkedin.com/in/...",
  // cvUrl: { id: "/cv/cv-id.pdf", en: "/cv/cv-en.pdf" },
  skills: [
    { name: "TypeScript", kind: { id: "Bahasa pemrograman", en: "Language" } },
    { name: "React", kind: { id: "Library UI", en: "UI library" } },
    { name: "Next.js", kind: { id: "Framework", en: "Framework" } },
    { name: "Tailwind CSS", kind: { id: "Styling", en: "Styling" } },
  ],
};
