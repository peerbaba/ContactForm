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
      <div><div className="container">
  {b.map((item, index) => (
    <div key={index} className="style">

      <h4>{item.name}</h4>
      
      <p>{item.number}</p>
    </div>
  ))}
</div>
</div>
      
    </div>
  );
};

export default Contactform;


