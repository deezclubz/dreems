import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TextEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello from Tiptap!</p>",
  });

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", minHeight: "200px" }}>
      <EditorContent editor={editor} />
    </div>
  );
}
