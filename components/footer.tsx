import Link from "next/link";
import { FooterEmail } from "@/components/footer-email";
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
            <FooterEmail email={siteContent.email} />
          ) : (
            <span>Email · forthcoming</span>
          )}
        </div>
        <div className="site-footer__meta">
          <p>© {new Date().getFullYear()} {siteContent.name}</p>
        </div>
      </div>
    </footer>
  );
}
