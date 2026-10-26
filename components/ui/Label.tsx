/** Label bracket bergaya monospace: `[01] ABOUT`. */
export function Label({ index, children, className = "", as: Tag = "p" }: { index?: string; children: string; className?: string; as?: "p" | "span" }) {
  return (
    <Tag className={`font-mono text-xs font-medium uppercase tracking-[0.04em] text-red ${className}`}>
      {index ? `[${index}] ` : "["}
      {children}
      {index ? "" : "]"}
    </Tag>
  );
}
