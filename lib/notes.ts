import "server-only";

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

export type NoteMetadata = {
  title: string;
  description: string;
  date: string;
  displayDate: string;
  category: string;
  type: string;
  slug: string;
};

export type NoteBlock =
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; text: string };

export type Note = NoteMetadata & { blocks: NoteBlock[] };

const notesDirectory = join(process.cwd(), "content", "notes");

function toMetadata(note: Note): NoteMetadata {
  return {
    title: note.title,
    description: note.description,
    date: note.date,
    displayDate: note.displayDate,
    category: note.category,
    type: note.type,
    slug: note.slug,
  };
}

function parseNote(source: string): Note {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("Note is missing valid front matter.");

  const metadata = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const separator = line.indexOf(":");
      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim().replace(/^"|"$/g, "");
      return [key, value];
    }),
  ) as NoteMetadata;

  const requiredFields: (keyof NoteMetadata)[] = [
    "title",
    "description",
    "date",
    "displayDate",
    "category",
    "type",
    "slug",
  ];
  for (const field of requiredFields) {
    if (!metadata[field]) throw new Error(`Note is missing front matter field: ${field}`);
  }

  const sections = match[2].trim().split(/\n\n+/);
  const markdownTitle = sections.shift();
  if (markdownTitle !== `# ${metadata.title}`) {
    throw new Error(`Note title does not match front matter: ${metadata.slug}`);
  }

  const blocks = sections.map<NoteBlock>((section) => {
    if (section.startsWith("## ")) return { kind: "heading", text: section.slice(3) };
    return { kind: "paragraph", text: section.replace(/\n/g, " ") };
  });

  return { ...metadata, blocks };
}

export function getAllNotes(): NoteMetadata[] {
  return readdirSync(notesDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => parseNote(readFileSync(join(notesDirectory, file), "utf8")))
    .map(toMetadata)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNote(slug: string): Note | undefined {
  return getAllNotes()
    .map((note) => parseNote(readFileSync(join(notesDirectory, `${note.slug}.md`), "utf8")))
    .find((note) => note.slug === slug);
}
