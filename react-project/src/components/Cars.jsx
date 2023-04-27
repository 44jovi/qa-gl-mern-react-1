import { useState } from "react";

const Cars = () => {
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [colour, setColour] = useState(null);
  const [year, setYear] = useState(null);

  //Model
  // Colour
  // Year
  return (
    <>
      <h2>want to know about my car?</h2>
      <h3>i'll tell you anyway!</h3>
      <p>brand: {brand}</p>
      <p>model: {model}</p>
      <p>colour: {colour}</p>
      <p>year: {year}</p>

      <form>
        <input
          placeholder="brand"
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />
        <input
          placeholder="model"
          onChange={(e) => {
            setModel(e.target.value);
          }}
        />
        <input
          placeholder="colour"
          onChange={(e) => {
            setColour(e.target.value);
          }}
        />
        <input
          placeholder="year"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <button>GO</button>
      </form>
    </>
  );
};

export default Cars;
