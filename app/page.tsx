import { AnimatedReveal } from "@/components/animated-reveal";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { NoteCard } from "@/components/note-card";
import { PortraitImage } from "@/components/portrait-image";
import { SectionLabel } from "@/components/section-label";
import { TextLink } from "@/components/text-link";
import { notes, siteContent } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero__copy">
          <p className="hero__eyebrow load-in load-in--1">Frederika Onofrejová</p>
          <h1 className="load-in load-in--2">A life built with intention.</h1>
          <p className="hero__dek load-in load-in--3">
            Finance leader, founder of HFF, and a thoughtful observer of work,
            style, and a well-considered life.
          </p>
          <TextLink href="#perspective" className="load-in load-in--4">
            Explore my perspective
          </TextLink>
        </div>
        <div className="hero__visual load-in load-in--3">
          <PortraitImage priority />
          <span className="hero__image-index">Portrait · 01</span>
        </div>
        <a className="scroll-cue" href="#perspective">
          <span>Scroll</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="perspective section shell" id="perspective">
        <AnimatedReveal className="perspective__inner">
          <SectionLabel>Introduction</SectionLabel>
          <div>
            <p className="large-copy">
              I’m Frederika—a finance leader by profession and a naturally curious
              researcher in nearly every other part of life. I’m interested in the
              thinking behind good decisions: how businesses plan, how people build
              security, and why certain choices continue to feel right long after
              they are made.
            </p>
            <p>
              That perspective shapes my work, my personal life, and HFF, the
              editorial project I created to explore shopping with more honesty,
              intelligence, and intention.
            </p>
            <TextLink href="/about">More about me</TextLink>
          </div>
        </AnimatedReveal>
      </section>

      <section className="dimensions section section--ivory">
        <div className="shell">
          <AnimatedReveal>
            <SectionLabel>One perspective, three dimensions</SectionLabel>
          </AnimatedReveal>
          <div className="dimensions__grid">
            {siteContent.dimensions.map((item, index) => (
              <AnimatedReveal key={item.title} delay={index * 90}>
                <article className="dimension">
                  <span>{item.number}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <TextLink href={item.link}>{item.linkLabel}</TextLink>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="professional section shell">
        <AnimatedReveal className="professional__heading">
          <SectionLabel>Professional perspective</SectionLabel>
          <h2>Clarity where finance, operations, and strategy meet.</h2>
        </AnimatedReveal>
        <div className="professional__body">
          <AnimatedReveal>
            <p className="large-copy">
              Frederika leads across controllership, FP&amp;A, international
              operations, business planning, and financial governance.
            </p>
            <p>
              Her work centers on turning complex information into clear decisions,
              building reliable financial structures, and helping businesses
              understand both where they are and what comes next.
            </p>
            <TextLink href="/work">View my work</TextLink>
          </AnimatedReveal>
          <AnimatedReveal delay={100}>
            <ul className="focus-list">
              {siteContent.professionalFocus.map((area, index) => (
                <li key={area}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {area}
                </li>
              ))}
            </ul>
          </AnimatedReveal>
        </div>
      </section>

      <section className="quote-section section">
        <div className="shell quote-section__grid">
          <AnimatedReveal>
            <SectionLabel>A guiding idea</SectionLabel>
            <blockquote>
              I believe the best decisions—financial, personal, or creative—begin
              with knowing what truly matters.
            </blockquote>
          </AnimatedReveal>
          <AnimatedReveal delay={120}>
            <ImagePlaceholder
              label="Professional portrait or workspace — landscape 3:2"
              ratio="landscape"
            />
          </AnimatedReveal>
        </div>
      </section>

      <section className="hff-feature section section--ivory">
        <div className="shell hff-feature__grid">
          <AnimatedReveal className="hff-feature__visual">
            <ImagePlaceholder
              label="HFF editorial image — vertical 4:5"
              ratio="portrait"
            />
            <div className="logo-placeholder">HFF logo</div>
          </AnimatedReveal>
          <AnimatedReveal className="hff-feature__copy" delay={100}>
            <SectionLabel>Founder’s project</SectionLabel>
            <h2>HFF</h2>
            <p className="large-copy">
              HFF is an independent editorial project about intentional shopping,
              personal style, quality, pricing, and the psychology behind a good
              find.
            </p>
            <p>
              It is not about buying more. It is about understanding what deserves
              a place in your wardrobe, your life, and your budget.
            </p>
            <TextLink href="/hff">Discover HFF</TextLink>
            <div className="topic-list">
              {siteContent.hffTopics.map((topic, index) => (
                <div key={topic}>
                  <span>0{index + 1}</span>
                  <p>{topic}</p>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="locations section shell">
        <AnimatedReveal className="section-heading">
          <SectionLabel>Place and belonging</SectionLabel>
          <h2>Three places called home.</h2>
        </AnimatedReveal>
        <div className="locations__grid">
          {siteContent.locations.map((location, index) => (
            <AnimatedReveal key={location.name} delay={index * 90}>
              <article className="location">
                <ImagePlaceholder
                  label={`${location.name} — landscape`}
                  ratio="landscape"
                />
                <div className="location__copy">
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{location.name}</h3>
                    <p>{location.description}</p>
                  </div>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <section className="personal section section--ivory">
        <div className="shell personal__grid">
          <AnimatedReveal className="personal__copy">
            <SectionLabel>Beyond the résumé</SectionLabel>
            <h2>The rest of life matters, too.</h2>
            <p>
              Away from finance, I’m usually researching a home project, planning
              the next trip, thinking about what makes something worth buying,
              taking a Pilates or Lagree class, or spending time with my husband and
              Gaston.
            </p>
            <TextLink href="/about">Read my story</TextLink>
          </AnimatedReveal>
          <AnimatedReveal>
            <ImagePlaceholder label="Personal detail image — vertical" ratio="portrait" />
          </AnimatedReveal>
          <AnimatedReveal delay={100}>
            <ImagePlaceholder
              label="Travel, home, or everyday life — landscape"
              ratio="landscape"
            />
          </AnimatedReveal>
        </div>
      </section>

      <section className="gaston section shell">
        <AnimatedReveal className="gaston__grid">
          <ImagePlaceholder label="Gaston portrait — square" ratio="square" />
          <div>
            <SectionLabel>A family constant</SectionLabel>
            <h2>Gaston, naturally.</h2>
            <p>
              Our much-loved French bulldog, long-time companion, enthusiastic food
              critic, and quiet supervisor of most important family decisions.
            </p>
            <p className="caption">Gaston · Family member · Professional cuddler</p>
          </div>
        </AnimatedReveal>
      </section>

      <section className="notes-preview section section--ivory">
        <div className="shell">
          <AnimatedReveal className="notes-preview__heading">
            <div>
              <SectionLabel>Notes</SectionLabel>
              <h2>Occasional notes</h2>
            </div>
            <p>
              Thoughts on work, decisions, style, home, and the experience of
              building a life across places.
            </p>
          </AnimatedReveal>
          <div className="notes-list">
            {notes.map((note, index) => (
              <AnimatedReveal key={note.slug} delay={index * 80}>
                <NoteCard note={note} index={index} />
              </AnimatedReveal>
            ))}
          </div>
          <TextLink href="/notes">View all notes</TextLink>
        </div>
      </section>

      <section className="home-contact section shell">
        <AnimatedReveal>
          <SectionLabel>Contact</SectionLabel>
          <h2>Say hello.</h2>
          <p>
            For professional conversations, HFF collaborations, or a thoughtful
            hello.
          </p>
          <TextLink href="/contact">Get in touch</TextLink>
        </AnimatedReveal>
      </section>
    </>
  );
}
