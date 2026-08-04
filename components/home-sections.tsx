import { AnimatedReveal } from "@/components/animated-reveal";
import { PortraitImage } from "@/components/portrait-image";
import { SectionLabel } from "@/components/section-label";
import { TextLink } from "@/components/text-link";
import { siteContent } from "@/lib/site-content";

export function HeroSection() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="hero__eyebrow load-in load-in--1">
          Finance leader · HFF founder · Slovak in Seattle
        </p>
        <h1 id="hero-title" className="load-in load-in--2">
          <span>A life</span>
          <span>built with</span>
          <span>intention.</span>
        </h1>
        <p className="hero__dek load-in load-in--3">
          I’m a Slovak finance leader based in Seattle, with strong ties to Malta. I work where
          finance, operations and strategy meet, and I created HFF to explore style, value and
          more thoughtful ways of buying.
        </p>
        <div className="hero__actions load-in load-in--4">
          <TextLink href="#work">View my work</TextLink>
          <TextLink href="#hff">Explore HFF</TextLink>
          <TextLink href={siteContent.social.linkedin} external>LinkedIn</TextLink>
        </div>
      </div>
      <div className="hero__visual load-in load-in--3">
        <PortraitImage priority />
        <span className="hero__image-index">Frederika &amp; Gaston · Castel Gandolfo</span>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section section--ivory anchor-section" id="about" aria-labelledby="about-title">
      <AnimatedReveal className="shell about-grid">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 id="about-title">A considered life, across places.</h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            I’m naturally interested in how good decisions are made: what information we trust,
            which trade-offs are worthwhile, and what continues to feel right over time.
          </p>
          <p>
            Away from work, I’m usually researching a home project, traveling with Michael,
            taking a Pilates or Lagree class, thinking about fashion and my next great find, or
            being a devoted mum to Gaston, our adorable Frenchie. Slovakia is where my story
            began, Seattle is home today, and Malta is increasingly part of our future.
          </p>
          <p className="place-line" aria-label="Places connected to Frederika">Slovakia <span>·</span> Seattle <span>·</span> Malta</p>
        </div>
      </AnimatedReveal>
    </section>
  );
}

export function WorkSection() {
  return (
    <section className="section anchor-section" id="work" aria-labelledby="work-title">
      <div className="shell editorial-grid">
        <AnimatedReveal>
          <SectionLabel>Work</SectionLabel>
          <h2 id="work-title">Finance with perspective.</h2>
        </AnimatedReveal>
        <AnimatedReveal delay={80} className="editorial-copy">
          <p className="large-copy">
            I work across financial planning, controllership, international operations and
            business strategy, turning complex information into clear decisions and dependable
            financial structures.
          </p>
          <ul className="label-grid" aria-label="Areas of focus">
            {siteContent.professionalFocus.map((area, index) => (
              <li key={area}><span>0{index + 1}</span>{area}</li>
            ))}
          </ul>
          <TextLink href={siteContent.social.linkedin} external>View LinkedIn profile</TextLink>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export function HffSection() {
  return (
    <section className="section section--charcoal anchor-section" id="hff" aria-labelledby="hff-title">
      <div className="shell hff-grid">
        <AnimatedReveal className="hff-mark" ariaHidden>
          <span>H</span><span>F</span><span>F</span>
          <small>Haute Frou Frou</small>
        </AnimatedReveal>
        <AnimatedReveal delay={80} className="editorial-copy">
          <SectionLabel>Independent editorial project</SectionLabel>
          <h2 id="hff-title">A more thoughtful way to shop.</h2>
          <p className="large-copy">
            HFF is an independent editorial project about personal style, quality, pricing and
            the psychology behind a good find. It is not about buying more. It is about
            understanding what deserves a place in your wardrobe, your life and your budget.
          </p>
          <ul className="hff-themes" aria-label="HFF themes">
            {siteContent.hffTopics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
          <TextLink href={siteContent.social.hffInstagram} external>Follow HFF on Instagram</TextLink>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section anchor-section contact" id="contact" aria-labelledby="contact-title">
      <AnimatedReveal className="shell contact__inner">
        <SectionLabel>Contact</SectionLabel>
        <h2 id="contact-title">Say hello.</h2>
        <p>For professional conversations, HFF collaborations, or a thoughtful hello.</p>
        <div className="contact__links">
          <TextLink href={siteContent.social.linkedin} external>LinkedIn</TextLink>
          <TextLink href={siteContent.social.hffInstagram} external>HFF Instagram</TextLink>
          <TextLink href={`mailto:${siteContent.email}`}>Email</TextLink>
        </div>
      </AnimatedReveal>
    </section>
  );
}
