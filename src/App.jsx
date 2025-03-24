import React from "react";
import Canvas from "./Canvas";
import TextEditor from "./TextEditor";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ flex: 1 }}>
        <h2>🖌️ Excalidraw Canvas</h2>
        <Canvas />
      </div>
      <div style={{ flex: 1 }}>
        <h2>📝 Tiptap Editor</h2>
        <TextEditor />
      </div>
    </div>
  );
}
