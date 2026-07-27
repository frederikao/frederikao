import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <Link href="/" className="site-footer__name">
            {siteContent.name}
          </Link>
          <p className="site-footer__statement">{siteContent.statement}</p>
        </div>
        <div className="site-footer__links" aria-label="Social links">
          <a href={siteContent.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          {siteContent.social.hffInstagram ? (
            <a
              href={siteContent.social.hffInstagram}
              target="_blank"
              rel="noreferrer"
            >
              HFF Instagram <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span>HFF Instagram · link forthcoming</span>
          )}
          {siteContent.email ? (
            <a href={`mailto:${siteContent.email}`}>Email</a>
          ) : (
            <span>Email · forthcoming</span>
          )}
        </div>
        <div className="site-footer__meta">
          <p>© {new Date().getFullYear()} Frederika Onofrejova</p>
          <a href={siteContent.social.michael} target="_blank" rel="noreferrer">
            Michael Camilleri <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
