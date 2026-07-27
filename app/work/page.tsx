import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/animated-reveal";
import { PageIntro } from "@/components/page-intro";
import { SectionLabel } from "@/components/section-label";
import { TextLink } from "@/components/text-link";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Frederika Onofrejova’s professional perspective across finance leadership, FP&A, controllership, and international operations.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        label="Work"
        title="Finance with perspective."
        introduction="I work across the areas where financial clarity, operational reality, and strategic decisions need to meet."
      />
      <section className="work-scope shell">
        <AnimatedReveal>
          <SectionLabel>Current scope</SectionLabel>
          <h2>Building the context for better decisions.</h2>
        </AnimatedReveal>
        <AnimatedReveal className="scope-fields" delay={100}>
          {["Role", "Company", "Geographic responsibilities", "Organizational scope", "Leadership responsibilities"].map(
            (field) => (
              <div key={field}>
                <span>{field}</span>
                <p>Verified detail to be added</p>
              </div>
            ),
          )}
        </AnimatedReveal>
      </section>
      <section className="expertise section section--ivory">
        <div className="shell expertise__grid">
          <AnimatedReveal>
            <SectionLabel>Areas of expertise</SectionLabel>
            <h2>Professional range, held together by sound judgment.</h2>
          </AnimatedReveal>
          <AnimatedReveal delay={100}>
            <ul className="focus-list focus-list--large">
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
      <section className="impact section shell">
        <AnimatedReveal className="section-heading">
          <SectionLabel>Selected impact</SectionLabel>
          <h2>Evidence, added with care.</h2>
          <p>
            This structure is ready for verified examples. No employers, metrics, or
            outcomes have been invented.
          </p>
        </AnimatedReveal>
        <div className="impact__grid">
          {["Selected impact 01", "Selected impact 02", "Selected impact 03"].map(
            (title, index) => (
              <AnimatedReveal key={title} delay={index * 80}>
                <article className="impact-item">
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <dl>
                    <div>
                      <dt>Situation</dt>
                      <dd>Verified context to be added.</dd>
                    </div>
                    <div>
                      <dt>Action</dt>
                      <dd>Verified contribution to be added.</dd>
                    </div>
                    <div>
                      <dt>Result</dt>
                      <dd>Verified outcome to be added.</dd>
                    </div>
                  </dl>
                </article>
              </AnimatedReveal>
            ),
          )}
        </div>
      </section>
      <section className="work-philosophy section section--charcoal">
        <AnimatedReveal className="shell">
          <SectionLabel>Professional philosophy</SectionLabel>
          <blockquote>
            Good finance leadership is not only about reporting what happened. It
            is about creating the clarity, discipline, and context required to
            decide what happens next.
          </blockquote>
        </AnimatedReveal>
      </section>
      <section className="timeline section shell">
        <AnimatedReveal className="section-heading">
          <SectionLabel>Experience</SectionLabel>
          <h2>A career timeline, ready for verified detail.</h2>
        </AnimatedReveal>
        <ol className="timeline__list">
          {["Current professional chapter", "Previous leadership chapter", "Early career and education"].map(
            (item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="timeline__period">Dates to be added</p>
                  <h3>{item}</h3>
                  <p>Company, role, location, and concise verified scope to be added.</p>
                </div>
              </li>
            ),
          )}
        </ol>
        <div className="external-profile">
          <TextLink href={siteContent.social.linkedin} external>
            View LinkedIn profile
          </TextLink>
          <span className="disabled-link" aria-disabled="true">
            Download résumé · file forthcoming
          </span>
        </div>
      </section>
    </>
  );
}
