import "./style.css";
import data from "./data";
import React, { useState } from "react";
function MultiSelection() {
  const [selected, setSelected] = useState([]);
  const [multiSelection, setMultiSelection] = useState(false);
  const [isActive, setIsActive] = useState("Enable Multi Selection");
  function handleClick(e) {
    let target = e.target;
    if (target.id === "see-question") {
      const question = target.textContent;
      if (multiSelection) {
        setSelected((prev) =>
          prev.includes(question)
            ? prev.fliter((q) => console.log(q !== question))
            : [...prev, question]
        );
        console.log(selected);
      } else {
        setSelected((prev) => (prev.includes(question) ? [] : [question]));
      }
      console.log(selected);
    } else if (target.id === "enable-btn") {
      setMultiSelection((prev) => !prev);
      setSelected([]);
      setIsActive((prev) =>
        prev === "Enable Multi Selection"
          ? "Disable Multi Selection"
          : "Enable Multi Selection"
      );
    }
  }

  return (
    <div
      id="main-container"
      onClick={handleClick}
      style={{ background: "green" }}
    >
      <div id="inner-container">
        <button id="enable-btn">{isActive}</button>
        {data && data.length > 0 ? (
          data.map(({ id, question, answer }) => (
            <div key={id} id="content">
              <div id="title">
                <div id="see-question">{question}</div>
                <span>{selected.includes(question) ? "-" : "+"}</span>
              </div>
              {selected.includes(question) ? (
                <div id="answer">{answer}</div>
              ) : null}
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

// if (target.id === "see-question") {
//   const question = target.textContent;
//   if (multiSelection) {
//     setSelected((prev) =>
//       prev.includes(question)
//         ? prev.filter((q) => q !== question)
//         : [...prev, question]
//     );
//   } else {
//     setSelected((prev) => (prev.includes(question) ? [] : [question]));
//   }
//   //   setSelected(question === selected ? null : question);
// } else if (target.id === "enable-btn") {
//   setMultiSelection((prev) => !prev);
//   setSelected([]);
//   setIsActive((prev) =>
//     prev === "Enable Multi Selection"
//       ? "Disable Multi Selection"
//       : "Enable Multi Selection"
//   );
// }
