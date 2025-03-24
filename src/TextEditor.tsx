
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TextEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Напиши что-нибудь...</p>",
  });

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", height: '100%', width: '100%' }}>
      <EditorContent editor={editor} />
    </div>
  );
}
