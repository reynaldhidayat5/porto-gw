import type { Experience } from "./types";

/**
 * TODO (isi dengan data NYATA): pengalaman kerja, magang, organisasi, atau
 * freelance yang relevan. Kosong = bagian "Experience" disembunyikan di
 * production dan menampilkan kotak TODO saat development.
 *
 * Contoh bentuk data (jangan dipakai apa adanya):
 *
 * {
 *   id: "nama-organisasi-2026",
 *   organization: "Nama Organisasi",
 *   role: { id: "Peran", en: "Role" },
 *   startedAt: "2025",
 *   endedAt: "2026",            // kosongkan bila masih berjalan
 *   description: { id: "...", en: "..." },
 *   tags: ["Next.js", "TypeScript"], // opsional
 * },
 */
export const experience: Experience[] = [];
