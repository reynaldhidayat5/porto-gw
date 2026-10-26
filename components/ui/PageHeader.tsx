import { DisplayHeading } from "./DisplayHeading";
import { Label } from "./Label";

/** Kepala halaman dalam: label, judul display (h1), intro. */
export function PageHeader({ index, label, title, intro, id }: { index: string; label: string; title: string; intro?: string; id: string }) {
  return (
    <header className="grid gap-8 lg:grid-cols-12">
      <Label index={index} className="lg:col-span-3">{label}</Label>
      <div className="lg:col-span-9">
        <DisplayHeading level={1} size="xl" id={id}>
          {title}
        </DisplayHeading>
        {intro ? <p className="mt-8 max-w-2xl text-lg text-ink sm:text-xl">{intro}</p> : null}
      </div>
    </header>
  );
}
