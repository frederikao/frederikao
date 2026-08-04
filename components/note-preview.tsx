import Link from "next/link";
import type { NoteMetadata } from "@/lib/notes";

export function NotePreview({ note }: { note: NoteMetadata }) {
  const href = `/notes/${note.slug}`;

  return (
    <article className="note-preview">
      <div className="note-preview__meta" aria-label="Note metadata">
        <span>{note.category}</span>
        <span>{note.type}</span>
        <time dateTime={note.date}>{note.displayDate}</time>
      </div>
      <div className="note-preview__copy">
        <h3><Link href={href}>{note.title}</Link></h3>
        <p>{note.description}</p>
        <Link className="note-read-link" href={href}>Read note <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
