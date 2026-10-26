export function TechList({ items, label }: { items: string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="border border-red px-3 py-1 font-mono text-xs uppercase tracking-[0.04em] text-red">
          {t}
        </li>
      ))}
    </ul>
  );
}
