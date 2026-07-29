import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/animated-reveal";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { PageIntro } from "@/components/page-intro";
import { PortraitImage } from "@/components/portrait-image";
import { SectionLabel } from "@/components/section-label";
import { TextLink } from "@/components/text-link";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The person behind the work: Frederika Onofrejová’s perspective, professional foundation, HFF, and life across places.",
};

const narrative = [
  {
    label: "Professional beginning",
    title: "A foundation in understanding how things work.",
    body: "My professional life has been shaped by finance: by the discipline of good information, the importance of sound structures, and the responsibility that comes with helping a business make consequential decisions.",
    todo: "Add verified education, early career, and move to the United States.",
  },
  {
    label: "Personal philosophy",
    title: "The reasoning matters as much as the result.",
    body: "I am drawn to the choices behind what we can see. A plan, a wardrobe, a room, or a life can look effortless when the thinking beneath it is sound. I value the work of asking better questions before arriving at an answer.",
    todo: "Refine with Frederika’s final personal perspective.",
  },
  {
    label: "The origin of HFF",
    title: "A creative project grounded in discernment.",
    body: "HFF grew from an interest in why we buy, how we judge value, and what allows an item to remain useful and loved beyond the excitement of finding it.",
    todo: "Add Frederika’s verified HFF origin story.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About"
        title="The person behind the work."
        introduction="I’ve always been interested in how decisions are made—what information we trust, what trade-offs we accept, and what makes a choice continue to feel right over time."
      />
      <section className="page-feature shell">
        <AnimatedReveal>
          <PortraitImage />
        </AnimatedReveal>
        <AnimatedReveal delay={100} className="page-feature__copy">
          <SectionLabel>In brief</SectionLabel>
          <p className="large-copy">
            I am a finance leader, the founder of HFF, a Slovak living in the Seattle
            area, and someone whose idea of home also reaches to Malta.
          </p>
          <p>
            These are not separate identities. They are different expressions of
            the same instinct: to understand what matters, make sound choices, and
            build for the long term.
          </p>
        </AnimatedReveal>
      </section>
      <section className="narrative section section--ivory">
        <div className="shell">
          {narrative.map((item, index) => (
            <AnimatedReveal key={item.label} className="narrative__row">
              <span>0{index + 1}</span>
              <div>
                <SectionLabel>{item.label}</SectionLabel>
                <h2>{item.title}</h2>
              </div>
              <div>
                <p>{item.body}</p>
                <p className="todo-note">Editorial TODO: {item.todo}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>
      <section className="places-story section shell">
        <AnimatedReveal className="section-heading">
          <SectionLabel>Life across places</SectionLabel>
          <h2>Slovakia, Seattle, and Malta.</h2>
          <p>
            Three places with different roles in my story: an origin, a present
            chapter, and a connection to family and the future.
          </p>
        </AnimatedReveal>
        <div className="locations__grid">
          {siteContent.locations.map((location, index) => (
            <AnimatedReveal key={location.name} delay={index * 80}>
              <ImagePlaceholder
                label={`${location.name} — landscape`}
                ratio="landscape"
              />
              <h3>{location.name}</h3>
              <p>{location.description}</p>
            </AnimatedReveal>
          ))}
        </div>
      </section>
      <section className="family-story section section--ivory">
        <div className="shell family-story__grid">
          <AnimatedReveal>
            <ImagePlaceholder
              label="Frederika, family, and Gaston — landscape"
              ratio="landscape"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={100}>
            <SectionLabel>Family and everyday life</SectionLabel>
            <h2>The people, places, and rituals around the work.</h2>
            <p>
              Family, travel, a developing sense of home, movement, good research,
              and life with Gaston all belong here—warmly, but with room left for
              privacy.
            </p>
            <p className="todo-note">
              Editorial TODO: Add the family story and Frederika’s current interests
              in her own words.
            </p>
            <TextLink href="/contact">Start a conversation</TextLink>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
