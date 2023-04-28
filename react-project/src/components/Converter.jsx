import { useState } from "react";

const Converter = () => {
  const [miles, setMiles] = useState(0);
  const [kms, setKms] = useState(0);

  const changeMiles = (e) => {
    const newMiles = e.target.value;
    setMiles(newMiles);
    setKms(newMiles * 1.609);
  };

  const changeKms = (e) => {
    const newKms = e.target.value;
    setKms(newKms);
    setMiles(newKms / 1.609);
  };

  return (
    <>
      <div>
        <label>Miles</label>
        {/* onChange is actually an "on input" */}
        <input value={miles} onChange={changeMiles} />
        <label>Km's</label>
        <input value={kms} onChange={changeKms} />
      </div>
    </>
  );
};

export default Converter;
