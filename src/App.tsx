
import Canvas from "./Canvas";
import TextEditor from "./TextEditor";
import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh", gap: "10px", padding: "10px" }}>
      <div style={{ flex: 2 }}>
        <Canvas />
      </div>
      <div style={{ flex: 1 }}>
        <TextEditor />
      </div>
    </div>
  );
}

export default App;
