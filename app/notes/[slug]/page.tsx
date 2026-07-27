import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NoteCard } from "@/components/note-card";
import { notes, siteContent } from "@/lib/site-content";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.description,
    openGraph: {
      type: "article",
      title: note.title,
      description: note.description,
    },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = notes.findIndex((item) => item.slug === slug);
  const note = notes[index];
  if (!note) notFound();
  const previous = notes[index - 1];
  const next = notes[index + 1];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.description,
    author: { "@type": "Person", name: siteContent.name },
    mainEntityOfPage: `${siteContent.siteUrl}/notes/${note.slug}`,
  };

  return (
    <>
      <article className="note-page shell">
        <header>
          <Link href="/notes" className="back-link">
            ← All notes
          </Link>
          <p className="section-label">{note.category}</p>
          <h1>{note.title}</h1>
          <p className="note-page__dek">{note.description}</p>
          <div className="note-page__meta">
            <span>{note.date}</span>
            <span>{note.readingTime}</span>
          </div>
        </header>
        <div className="note-page__body">
          {note.paragraphs.length ? (
            note.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          ) : (
            <div className="article-placeholder">
              <p>
                This note template is ready for Frederika’s final writing. No full
                article has been invented for the first build.
              </p>
              <p>
                Add paragraphs in <code>lib/site-content.ts</code>, or replace the
                local data structure with Markdown or MDX as the library grows.
              </p>
            </div>
          )}
        </div>
      </article>
      <nav className="note-navigation shell" aria-label="Note navigation">
        <div>
          {previous && (
            <>
              <span>Previous note</span>
              <Link href={`/notes/${previous.slug}`}>{previous.title}</Link>
            </>
          )}
        </div>
        <div>
          {next && (
            <>
              <span>Next note</span>
              <Link href={`/notes/${next.slug}`}>{next.title}</Link>
            </>
          )}
        </div>
      </nav>
      <section className="related-notes section section--ivory">
        <div className="shell">
          <p className="section-label">Related notes</p>
          <div className="notes-list">
            {notes
              .filter((item) => item.slug !== note.slug)
              .slice(0, 2)
              .map((item) => (
                <NoteCard note={item} key={item.slug} />
              ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
