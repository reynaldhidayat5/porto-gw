export type RowItem = {
  id: string;
  title: string;
  /** Teks kecil di bawah judul, mis. organisasi atau periode. */
  subtitle?: string;
  /** Deskripsi di kolom kanan. */
  detail?: string;
  /** Chip; menggantikan deskripsi saat hover (di perangkat tanpa hover tampil di bawahnya). */
  tags?: string[];
};

/**
 * Daftar baris bergaya referensi: `// 01`, judul display, deskripsi di kanan.
 * Hover: latar merah menyapu dari bawah, judul bergeser + panah, deskripsi
 * berganti chip. Semua konten tetap ada di DOM (tidak bergantung pada hover).
 */
export function Rows({ items, label }: { items: RowItem[]; label: string }) {
  return (
    <ol aria-label={label} className="border-t border-red">
      {items.map((item, i) => (
        <li key={item.id} data-reveal className="row border-b border-red/50">
          <span className="row-fill" aria-hidden="true" />
          <div className="grid items-start gap-x-6 gap-y-3 px-4 py-6 sm:px-6 md:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,26rem)] md:py-8">
            <span className="row-text font-mono text-xs font-medium tracking-[0.04em] text-muted">
              {"// "}
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="row-title font-display text-[clamp(1.5rem,3vw,2.5rem)] uppercase leading-none tracking-[-0.02em] text-red [overflow-wrap:anywhere]">
                {item.title}
                <span aria-hidden="true" className="row-arrow font-mono text-[0.6em]">→</span>
              </h3>
              {item.subtitle ? (
                <p className="row-text mt-2 font-mono text-xs font-medium uppercase tracking-[0.04em] text-muted">{item.subtitle}</p>
              ) : null}
            </div>
            <div className="row-swap">
              {item.detail ? (
                <p className={`row-text text-base text-ink ${item.tags?.length ? "row-detail--swap" : ""}`}>{item.detail}</p>
              ) : null}
              {item.tags?.length ? (
                <ul className="row-tags flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="row-text border border-current px-2 py-1 font-mono text-xs font-medium uppercase tracking-[0.04em] text-red">
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
