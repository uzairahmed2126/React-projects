import { useState } from "react";
import "./style.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [randomColor, SetRandomColor] = useState("#000");
  function randomColorUtility(len) {
    let random = Math.floor(Math.random() * len);
    return random;
  }
  function randomHexColorGenerator() {
    let hex = "0123456789abcdefABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[randomColorUtility(hex.length)];
    }
    SetRandomColor(color);
    setTypeOfColor("hex");
  }
  function randomRgbGenerator() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    SetRandomColor(`rgb(${r},${g},${b})`);
    setTypeOfColor("rgb");
  }
  function handleClick(e) {
    e.preventDefault();
    switch (e.target.id) {
      case "HEX":
        randomHexColorGenerator();
        break;
      case "RGB":
        randomRgbGenerator();
        break;
      case "RANDOM":
        typeOfColor === "hex"
          ? randomHexColorGenerator()
          : randomRgbGenerator();
        break;
    }
  }

  const data = [
    { id: "HEX", text: "create hex color" },
    { id: "RGB", text: "create rgb Color" },
    { id: "RANDOM", text: "create random color" },
  ];
  return (
    <div
      style={{
        pointerEvents: "none",
        background: randomColor,
        height: "100vh",
        margin: "0px",
      }}
    >
      <div
        className="buttons"
        style={{ pointerEvents: "none" }}
        onClick={handleClick}
      >
        {data.map(({ id, text }) => {
          return (
            <button key={id} id={id}>
              {text}
            </button>
          );
        })}
      </div>
      <div id="colorContainer">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h2>{randomColor}</h2>
      </div>
    </div>
  );
}
