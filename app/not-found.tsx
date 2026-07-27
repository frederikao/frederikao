import { TextLink } from "@/components/text-link";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="section-label">404</p>
      <h1>This page has not been written yet.</h1>
      <p>The address may have changed, or the page may still be taking shape.</p>
      <TextLink href="/">Return home</TextLink>
    </section>
  );
}
