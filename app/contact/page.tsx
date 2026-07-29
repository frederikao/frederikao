import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/animated-reveal";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/text-link";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Frederika Onofrejová for professional conversations, HFF collaborations, or a thoughtful hello.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact"
        title="Say hello."
        introduction="For professional conversations, HFF collaborations, or a thoughtful hello."
      />
      <section className="contact-layout shell">
        <AnimatedReveal className="contact-options">
          <div>
            <span>01</span>
            <h2>Professional</h2>
            <TextLink href={siteContent.social.linkedin} external>
              Connect on LinkedIn
            </TextLink>
          </div>
          <div>
            <span>02</span>
            <h2>HFF</h2>
            {siteContent.social.hffInstagram ? (
              <TextLink href={siteContent.social.hffInstagram} external>
                Visit HFF on Instagram
              </TextLink>
            ) : (
              <p>Instagram link forthcoming</p>
            )}
          </div>
          <div>
            <span>03</span>
            <h2>Email</h2>
            {siteContent.email ? (
              <TextLink href={`mailto:${siteContent.email}`}>Send an email</TextLink>
            ) : (
              <p>Public email forthcoming</p>
            )}
          </div>
        </AnimatedReveal>
        <AnimatedReveal delay={100}>
          <ContactForm />
        </AnimatedReveal>
      </section>
    </>
  );
}
