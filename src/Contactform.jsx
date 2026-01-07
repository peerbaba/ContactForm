import React, { useState } from "react";

const Contactform = () => {
  const [b, setb] = useState([
    {
      Name: "dummy",
      Number: "dummy",
      
    },
  ]);
  const a = (e) => {
    e.preventDefault();

    const c = {
      Name: e.target[0].value,
      Number: e.target[1].value,
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
    <div className="container1">
      {b.map((item)=>(
               
        <div className="style">

          Name: {item.Name},
          Number:{item.Number}

        </div>

      ))}
      </div>
    </div>
  );
};

export default Contactform;
