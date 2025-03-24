
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/dist/excalidraw.min.css";

export default function Canvas() {
  return (
    <div style={{ height: '100%', width: '100%', border: '1px solid #ccc' }}>
      <Excalidraw />
    </div>
  );
}
