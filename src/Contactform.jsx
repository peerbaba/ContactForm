import React, { useState } from "react";

const Contactform = () => {
  const [b, setb] = useState([
    {
      name: "dummy",
      number: "dummy",
    },
  ]);
  const a = (e) => {
    e.preventDefault();

    const c = {
      name: e.target[0].value,
      number: e.target[1].value,
    };
    setb([...b, c]);
    console.log(b);
  };

  return (
    <div>
      Contactform <br />
      <form onSubmit={a}>
        <input type="text" placeholder="Name" />
        <br /> <br />
        <input type="text" placeholder="Number" /> <br /> <br />
        <button>Submit</button>
      </form>
      <div></div>
      <div>
        {b.map((item) => (
          <div className="container1">
            name: {item.name}, number:{item.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contactform;
