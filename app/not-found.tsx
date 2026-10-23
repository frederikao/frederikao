import { TextLink } from "@/components/text-link";
import "./not-found.css";

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__inner shell">
        <div className="not-found__copy">
          <p className="section-label">404 · Page not found</p>
          <h1 id="not-found-title">There&apos;s nothing here.</h1>
          <p className="not-found__description">
            The address may have changed, or the link may be out of date.
          </p>
          <TextLink href="/">Return home</TextLink>
        </div>
        <p className="not-found__number" aria-hidden="true">404</p>
      </div>
    </section>
  );
}
