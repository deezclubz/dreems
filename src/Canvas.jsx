import React from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/dist/excalidraw.min.css";

export default function Canvas() {
  return (
    <div style={{ height: "400px", border: "1px solid #ccc" }}>
      <Excalidraw />
    </div>
  );
}
