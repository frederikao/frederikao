import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/animated-reveal";
import { NoteCard } from "@/components/note-card";
import { PageIntro } from "@/components/page-intro";
import { notes } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Occasional notes from Frederika Onofrejová on work, decisions, style, home, travel, and life across places.",
};

export default function NotesPage() {
  return (
    <>
      <PageIntro
        label="Notes"
        title="Ideas worth returning to."
        introduction="Occasional writing on work, decisions, style, home, and the experience of building a life across places."
      />
      <section className="notes-index shell">
        <div className="category-row" aria-label="Note categories">
          <span>All notes</span>
          <span>Decisions</span>
          <span>Work</span>
          <span>Style</span>
          <span>Places</span>
        </div>
        <div className="notes-list">
          {notes.map((note, index) => (
            <AnimatedReveal key={note.slug}>
              <NoteCard note={note} index={index} />
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </>
  );
}
