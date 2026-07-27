import { AnimatedReveal } from "./animated-reveal";
import { SectionLabel } from "./section-label";

export function PageIntro({
  label,
  title,
  introduction,
}: {
  label: string;
  title: string;
  introduction: string;
}) {
  return (
    <section className="page-intro shell">
      <AnimatedReveal>
        <SectionLabel>{label}</SectionLabel>
        <h1>{title}</h1>
        <p>{introduction}</p>
      </AnimatedReveal>
    </section>
  );
}
