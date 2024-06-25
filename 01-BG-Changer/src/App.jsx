import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#F65C66");
  return (
    <>
      <div
        className="bg-red-600 h-screen w-full flex justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-12 flex flex-wrap ">
          <div className="bg-white rounded-2xl px-3 py-2 flex justify-center gap-3 shadow-2xl">
            <button
              className="px-4 py-1 rounded-full outline-none shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="px-4 py-1 rounded-full outline-none shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="px-4 py-1 rounded-full outline-none shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="px-4 py-1 rounded-full outline-none shadow-lg"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              Olive
            </button>
            <button
              className="px-4 py-1 rounded-full outline-none shadow-lg"
              style={{ backgroundColor: "gray" }}
              onClick={() => setColor("gray")}
            >
              Gray
            </button>
            <button
              className="px-4 py-1 rounded-full outline-none shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="px-4 py-1 rounded-full outline-none shadow-lg"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="px-4 py-1 rounded-full outline-none shadow-lg"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button
              className="px-4 py-1 rounded-full outline-none shadow-lg"
              style={{ backgroundColor: "lavender" }}
              onClick={() => setColor("lavender")}
            >
              Lavender
            </button>
            <button
              className="px-4 py-1 rounded-full outline-none shadow-lg"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >
              White
            </button>
            <button
              className="px-4 py-1 rounded-full outline-none shadow-lg text-white"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
