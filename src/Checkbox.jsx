import React, { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState({
    animal: false,
    man: false,
    birds: false,
    transport: false,
  });

  // handle individual checkbox change
  const handleChange = (e) => {
    const { id, checked } = e.target;
    setChecked((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  // select all / unselect all
  const handleSelectAll = () => {
    const allChecked = Object.values(checked).every(Boolean);

    setChecked({
      animal: !allChecked,
      man: !allChecked,
      birds: !allChecked,
      transport: !allChecked,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Checkbox</h3>

      <input
        type="checkbox"
        id="animal"
        checked={checked.animal}
        onChange={handleChange}
      />
      <label htmlFor="animal"> Animal</label>
      <br />

      <input
        type="checkbox"
        id="man"
        checked={checked.man}
        onChange={handleChange}
      />
      <label htmlFor="man"> Man</label>
      <br />

      <input
        type="checkbox"
        id="birds"
        checked={checked.birds}
        onChange={handleChange}
      />
      <label htmlFor="birds"> Birds</label>
      <br />

      <input
        type="checkbox"
        id="transport"
        checked={checked.transport}
        onChange={handleChange}
      />
      <label htmlFor="transport"> Transport</label>
      <br />
      <br />

      <button onClick={handleSelectAll}>
        {Object.values(checked).every(Boolean)
          ? "Unselect All"
          : "Select All"}
      </button>
    </div>
  );
};

export default Checkbox;
