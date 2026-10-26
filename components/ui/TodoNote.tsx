/**
 * Penanda konten yang belum diisi. HANYA dirender saat development agar
 * tidak ada placeholder yang terbit di production (claude.md §5).
 */
export function TodoNote({ label, children }: { label: string; children: string }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <p className="mt-6 border border-dashed border-red p-3 font-mono text-xs text-red">
      <strong>{label}</strong> {children}
    </p>
  );
}
