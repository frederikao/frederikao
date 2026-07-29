import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/animated-reveal";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { PageIntro } from "@/components/page-intro";
import { SectionLabel } from "@/components/section-label";
import { TextLink } from "@/components/text-link";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "HFF",
  description:
    "HFF is Frederika Onofrejová’s independent editorial project about shopping, quality, value, personal style, and the psychology of a good find.",
};

const themes = [
  "Intentional shopping",
  "Quality and construction",
  "Pricing and market intelligence",
  "Personal style",
  "Cost versus value",
  "The psychology behind purchases",
];

export default function HffPage() {
  return (
    <>
      <PageIntro
        label="Founder’s project · HFF"
        title="A more thoughtful way to shop."
        introduction="HFF explores the reasoning beneath a purchase: the quality, context, price, usefulness, and personal response that can turn an item into a genuinely good find."
      />
      <section className="hff-overview shell">
        <AnimatedReveal className="hff-overview__image">
          <ImagePlaceholder label="HFF editorial image — vertical 4:5" ratio="portrait" />
          <div className="logo-placeholder">HFF logo</div>
        </AnimatedReveal>
        <AnimatedReveal delay={100}>
          <SectionLabel>What HFF is</SectionLabel>
          <h2>Editorial curiosity, with practical standards.</h2>
          <p className="large-copy">
            HFF is an independent project about shopping, personal style, quality,
            pricing, and the psychology behind what we choose.
          </p>
          <p>
            It makes room for both pleasure and scrutiny: an appreciation of
            beautiful things alongside a serious interest in whether they are made,
            priced, and chosen well.
          </p>
          <p className="todo-note">
            Editorial TODO: Add Frederika’s full verified HFF origin story.
          </p>
        </AnimatedReveal>
      </section>
      <section className="hff-themes section section--ivory">
        <div className="shell">
          <AnimatedReveal className="section-heading">
            <SectionLabel>Editorial themes</SectionLabel>
            <h2>What HFF pays attention to.</h2>
          </AnimatedReveal>
          <div className="theme-grid">
            {themes.map((theme, index) => (
              <AnimatedReveal key={theme} delay={(index % 3) * 70}>
                <div className="theme-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{theme}</h3>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="instagram-work section shell">
        <AnimatedReveal className="notes-preview__heading">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2>From the HFF editorial feed.</h2>
          </div>
          <p>
            Manual content cards keep this page fast and reliable. Selected posts
            can be added here without a third-party feed.
          </p>
        </AnimatedReveal>
        <div className="instagram-grid">
          {siteContent.hffTopics.map((topic, index) => (
            <AnimatedReveal key={topic} delay={index * 80}>
              <article>
                <ImagePlaceholder
                  label={`Selected HFF post 0${index + 1} — square`}
                  ratio="square"
                />
                <p className="section-label">Future feature</p>
                <h3>{topic}</h3>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>
      <section className="hff-current section section--charcoal">
        <div className="shell hff-current__grid">
          <AnimatedReveal>
            <SectionLabel>Current feature</SectionLabel>
            <h2>A place for the latest HFF story.</h2>
            <p>
              Add a selected feature here when final editorial content and imagery
              are ready.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={100}>
            <ImagePlaceholder label="Current HFF feature — landscape" ratio="wide" />
          </AnimatedReveal>
        </div>
      </section>
      <section className="newsletter section shell">
        <AnimatedReveal>
          <SectionLabel>Follow the project</SectionLabel>
          <h2>HFF, as it develops.</h2>
          {siteContent.social.hffInstagram ? (
            <TextLink href={siteContent.social.hffInstagram} external>
              Visit HFF on Instagram
            </TextLink>
          ) : (
            <p className="todo-note">HFF Instagram link forthcoming.</p>
          )}
          <p className="newsletter__placeholder">
            Newsletter sign-up placeholder · connect a provider before launch
          </p>
        </AnimatedReveal>
      </section>
    </>
  );
}
