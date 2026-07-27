import Link from "next/link";
import type { Note } from "@/lib/site-content";

export function NoteCard({ note, index }: { note: Note; index?: number }) {
  return (
    <article className="note-card">
      <div className="note-card__meta">
        {index !== undefined && <span>0{index + 1}</span>}
        <span>{note.category}</span>
        <span>{note.date}</span>
      </div>
      <h3>
        <Link href={`/notes/${note.slug}`}>{note.title}</Link>
      </h3>
      <p>{note.description}</p>
      <Link className="text-link" href={`/notes/${note.slug}`}>
        <span>Read note</span>
        <span className="text-link__arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </article>
  );
}
