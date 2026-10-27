import type { Localized } from "@/lib/i18n";

export type Profile = {
  fullName: string;
  /** Nama pendek untuk header & hero. */
  shortName: string;
  role: Localized;
  headline: Localized;
  bio: Localized;
  /** Foto potret (PNG transparan, di public/). Tanpa ini panel hero menampilkan teks role. */
  photo?: { src: string; width: number; height: number };
  email: string;
  githubUrl: string;
  /** Opsional: tombol/link hanya muncul bila diisi. */
  linkedinUrl?: string;
  /** Opsional per bahasa, mis. "/cv/cv-id.pdf" di folder public/. */
  cvUrl?: Partial<Record<"id" | "en", string>>;
  skills: { name: string; kind: Localized }[];
};

export type Project = {
  slug: string;
  title: Localized;
  summary: Localized;
  projectType: Localized;
  role: Localized;
  /** Periode, mis. "2026". Opsional. */
  period?: string;
  technologies: string[];
  featured: boolean;
  /** Path di public/, mis. "/images/projects/foo.png". Tanpa ini kartu memakai tile tipografis. */
  thumbnail?: { src: string; width: number; height: number; alt: Localized };
  repositoryUrl?: string;
  /** Hanya isi bila demo benar-benar bisa dibuka. */
  demoUrl?: string;
  problem: Localized;
  objective: Localized;
  /** Kontribusi pribadi. Opsional — bila kosong, bagian disembunyikan di production. */
  contribution?: Localized;
  process: Localized<string[]>;
  solution: Localized;
  outcome: Localized;
};

export type Experience = {
  id: string;
  organization: string;
  role: Localized;
  startedAt: string;
  endedAt?: string;
  description: Localized;
  /** Opsional: chip yang menggantikan deskripsi saat hover. */
  tags?: string[];
};

export type Education = {
  id: string;
  institution: string;
  qualification: Localized;
  startedAt?: string;
  endedAt?: string;
  notes?: Localized;
};
