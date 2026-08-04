import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { getAllNotes, getNote } from "@/lib/notes";
import { siteContent } from "@/lib/site-content";

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const note = getNote((await params).slug);
  if (!note) return {};

  const canonical = `/notes/${note.slug}`;
  return {
    title: { absolute: `${note.title} · ${siteContent.name}` },
    description: note.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: note.title,
      description: note.description,
      url: canonical,
      publishedTime: note.date,
    },
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const note = getNote((await params).slug);
  if (!note) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.description,
    datePublished: note.date,
    author: { "@type": "Person", name: siteContent.name },
    mainEntityOfPage: `${siteContent.siteUrl}/notes/${note.slug}`,
  };

  return (
    <article className="note-page shell">
      <header className="note-header">
        <Link className="note-back-link" href="/#notes">← Notes</Link>
        <div className="note-header__meta" aria-label="Note metadata">
          <span>{note.category}</span><span>{note.type}</span>
          <time dateTime={note.date}>{note.displayDate}</time>
        </div>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </header>
      <MarkdownContent blocks={note.blocks} />
      <footer className="article-return">
        <Link className="note-back-link" href="/#notes">← Back to notes</Link>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </article>
  );
}
