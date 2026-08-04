import type { ReactNode } from "react";
import type { NoteBlock } from "@/lib/notes";

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export function MarkdownContent({ blocks }: { blocks: NoteBlock[] }) {
  return (
    <div className="article-body">
      {blocks.map((block, index) =>
        block.kind === "heading" ? (
          <h2 key={`${block.text}-${index}`}>{block.text}</h2>
        ) : (
          <p key={`${block.text.slice(0, 30)}-${index}`}>{renderInline(block.text)}</p>
        ),
      )}
    </div>
  );
}
