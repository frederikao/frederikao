import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export function TextLink({
  href,
  children,
  external = false,
  className = "",
}: TextLinkProps) {
  return (
    <Link
      className={`text-link ${className}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="text-link__arrow">
        →
      </span>
    </Link>
  );
}
