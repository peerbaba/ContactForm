import React from "react";
import { useState } from "react";
import "../calculator/cal.css";

const Counter = () => {
  const [b, setb] = useState(0);

  const numClick = (e) => {
    setb(b + 1);
  };
  const numClickdec = (e) => {
    if (b > 0) {
      setb(b - 1);
    }
  };

  return (
    <div>
      Counter
      <input type="text" id="inputBox" value={b} />
      <div></div>
      <button className="button operator" onClick={numClick}>
        +
      </button>
      <button className="button operator" onClick={numClickdec}>
        -
      </button>
    </div>
  );
};

export default Counter;
