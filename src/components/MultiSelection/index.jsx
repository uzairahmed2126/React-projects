import "./style.css";
import data from "./data";
import React, { useState } from "react";
function MultiSelection() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  function handleClick(e) {
    let target = e.target;
    if (target.id === "see-question") {
      setSelected(target.textContent === selected ? null : target.textContent);
    } else if (target.id === "enable-btn") {
      setMultiSelection(!multiSelection);
      //   console.log("asdfas");
    }
    console.log(selected);
  }
  if (multiSelection) {
    console.log(multiSelection);
    console.log("ye");
  }
  return (
    <div id="main-container" onClick={handleClick}>
      <div id="inner-container">
        <button id="enable-btn">Enable Multi Selection</button>
        {data && data.length > 0 ? (
          data.map(({ id, question, answer }) => (
            <div key={id} id="content">
              <div id="title">
                <div id="see-question">{question}</div>
                <span>+</span>
              </div>
              {selected === question ? <div id="answer">{answer}</div> : null}
            </div>
          ))
        ) : (
          <div id="data-not-found">No Data found!!</div>
        )}
      </div>
    </div>
  );
}
export default MultiSelection;
