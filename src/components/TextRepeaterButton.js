import React, { useState }  from "react";

function TextRepeaterButton() {
  const [repititions, setRepititions] = useState(1);

  const handleClick = () => setRepititions(repititions + 1);

  const textArray = [];
  for (let i = 0; i < repititions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }

  return (
    <button onClick={handleClick} className="TextRepeaterButton">
    {textArray}
    </button>
  );
}

export default TextRepeaterButton;