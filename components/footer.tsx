import { siteContent } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} {siteContent.name}
        </p>
      </div>
    </footer>
  );
}
