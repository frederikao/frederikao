import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteContent } from "@/lib/site-content";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.siteUrl),
  title: {
    default: "Frederika Onofrejová | A Life Built with Intention",
    template: "%s | Frederika Onofrejová",
  },
  description: siteContent.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Frederika Onofrejová | A Life Built with Intention",
    description: siteContent.description,
    url: siteContent.siteUrl,
    siteName: siteContent.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Frederika Onofrejová | A Life Built with Intention",
    description: siteContent.description,
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteContent.name,
      url: siteContent.siteUrl,
      sameAs: [siteContent.social.linkedin],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteContent.name,
      url: siteContent.siteUrl,
      description: siteContent.description,
    },
  ];

  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
