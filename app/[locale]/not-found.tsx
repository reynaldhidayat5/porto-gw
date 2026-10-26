import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Label } from "@/components/ui/Label";
import { getDictionary } from "@/content/translations";

/** Dua bahasa sekaligus: not-found tidak menerima params. */
export default function NotFound() {
  const id = getDictionary("id").notFound;
  const en = getDictionary("en").notFound;
  const link =
    "inline-flex min-h-12 items-center border border-red px-6 font-mono text-sm font-medium uppercase tracking-[0.04em] text-red hover:bg-red hover:text-cream";
  return (
    <Section labelledBy="nf-title" hairline={false} className="!pt-12 lg:!pt-20">
      <Label>404</Label>
      <DisplayHeading level={1} size="xl" id="nf-title" className="mt-6">
        <span lang="id" className="block">{id.title}</span>
        <span lang="en" className="block">{en.title}</span>
      </DisplayHeading>
      <p className="mt-8 max-w-xl text-lg text-ink">
        <span lang="id">{id.text}</span> <span lang="en">{en.text}</span>
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/id" className={link}>
          {id.back}
        </Link>
        <Link href="/en" className={link}>
          {en.back}
        </Link>
      </div>
    </Section>
  );
}
