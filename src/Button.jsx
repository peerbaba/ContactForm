import React from "react";
import { useState } from "react";

const Button = () => {
  const [b, setb] = useState(true);
  const [c, setc] = useState(true);
  const [d, setd] = useState("red");

  const hello = (e) => {
    setb(!b);
  };

  const close = (e) => {
    setb(false);
  };

  const nest = (e) => {
    setc(!c);
  };

  const color = (e) => {
    if (d === "red") {
      setd("white");
    } else {
      setd("red");
    }
  };

  return (
    <div>
      Button
      <div style={{ color: "red", background: "black" }}>
        {b && (
          <div className="modal-overlay">
            <div className="modal-box">
              <button onClick={close} className="close-btn">
                ✖
              </button>
              Hello
            </div>
          </div>
        )}{" "}
      </div>
      <div>
        {" "}
        <div style={{ color: "red", background: "black" }}>
          {c && (
            <div className="modal-overlay">
              <div className="modal-box">
                <button onClick={nest} className="close-btn">
                  ✖
                </button>
                Hello
              </div>
            </div>
          )}{" "}
        </div>
      </div>
      <p style={{ color: "green", background: d }}> Here is the Color Bar</p>
      <button onClick={hello}>Click Me</button>
      <button onClick={nest}>Click Me2</button>
      <button onClick={color}>Change Color</button>
    </div>
  );
};

export default Button;
