import type { ReactNode } from "react";
import { Container } from "./Container";

/** Section dengan hairline merah di atas dan ritme vertikal konsisten. */
export function Section({
  labelledBy,
  children,
  className = "",
  hairline = true,
}: {
  labelledBy?: string;
  children: ReactNode;
  className?: string;
  hairline?: boolean;
}) {
  return (
    <section aria-labelledby={labelledBy} className={`${hairline ? "border-t border-red" : ""} py-20 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
