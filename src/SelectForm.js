import React, { useState } from "react";

function SelectForm() {
  const [selectedFruit, setSelectedFruit] = useState("Apple");

  const handleChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Fruit:", selectedFruit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Select Form</h3>
      <select value={selectedFruit} onChange={handleChange}>
        <option value="Apple">Apple</option>
        <option value="Mango">Mango</option>
        <option value="Orange">Orange</option>
        <option value="Banana">Banana</option>
      </select><br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default SelectForm;