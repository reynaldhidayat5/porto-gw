/** Nama raksasa, satu kata per baris. Ukuran fluid agar tidak pernah overflow. */
export function Wordmark({ name, as: Tag = "p", id, className = "" }: { name: string; as?: "h1" | "p"; id?: string; className?: string }) {
  return (
    <Tag
      id={id}
      className={`font-display uppercase leading-[0.86] tracking-[-0.03em] text-red text-[15vw] lg:text-[length:min(10.5vw,10rem)] ${className}`}
    >
      {name.split(" ").map((word) => (
        <span key={word} className="block">
          {word}
        </span>
      ))}
    </Tag>
  );
}
