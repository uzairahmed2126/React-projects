import React from "react";
import { useState } from "react";
import "./style.css";

function RandomColor() {
  const [randomColor, SetRandomColor] = useState("#fff");
  function randomColorGenerator() {
    let equation = "0123456789abcdefABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random(i) * equation.length);
      color += equation[random];
    }
    console.log(color);
    SetRandomColor(color);
    return color;
  }
  function handleClick(e) {
    e.preventDefault();
    switch (e.target.id) {
      case "HEX":
        console.log("first");
        break;
      case "RGB":
        console.log("rgb");
        break;
      case "RANDOM":
        randomColorGenerator();
        document.body.style.background = randomColor;
        console.log("random");
        break;
    }
  }
  return (
    <div style={{ pointerEvents: "none" }}>
      <div
        className="buttons"
        style={{ pointerEvents: "none" }}
        onClick={handleClick}
      >
        <button id="HEX" style={{ pointerEvents: "auto" }}>
          Create HEX Color
        </button>
        <button id="RGB" style={{ pointerEvents: "auto" }}>
          Create RGB Color
        </button>
        <button id="RANDOM" style={{ pointerEvents: "auto" }}>
          Create Random Color
        </button>
      </div>
      <div id="colorContainer">HEX:{randomColor}</div>
    </div>
  );
}

export default RandomColor;
