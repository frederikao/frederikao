"use client";

import { useEffect, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (status !== "copied") return;

    const timeout = window.setTimeout(() => setStatus("idle"), 2000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <span className="copy-email">
      <button
        className="text-link copy-email__button"
        type="button"
        onClick={copyEmail}
        aria-label={`Copy ${email} to clipboard`}
        title={status === "copied" ? "Email copied" : "Copy email address"}
      >
        <span>{status === "copied" ? "Copied!" : "Email"}</span>
        <svg className="copy-email__icon" viewBox="0 0 24 24" aria-hidden="true">
          {status === "copied" ? (
            <path d="m5 12 4 4L19 6" />
          ) : (
            <>
              <rect x="8" y="8" width="11" height="11" rx="1" />
              <path d="M16 8V5H5v11h3" />
            </>
          )}
        </svg>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status === "copied"
          ? "Email address copied to clipboard."
          : status === "error"
            ? "Could not copy the email address; select the address shown to copy it manually."
            : ""}
      </span>
      {status === "error" && (
        <span className="copy-email__fallback">{email}</span>
      )}
    </span>
  );
}
