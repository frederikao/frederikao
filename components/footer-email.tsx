"use client";

import { useEffect, useState } from "react";

export function FooterEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <span className="footer-email">
      <a href={`mailto:${email}`}>Email</a>
      <button
        className="footer-email__copy"
        type="button"
        onClick={copyEmail}
        aria-label={`Copy ${email} to clipboard`}
        title={copied ? "Email copied" : "Copy email address"}
      >
        {copied ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m5 12 4 4L19 6" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="8" y="8" width="11" height="11" rx="1" />
            <path d="M16 8V5H5v11h3" />
          </svg>
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied." : ""}
      </span>
    </span>
  );
}
