import { useState } from "react";

const MilesAhead = () => {
  const increment = () => {
    setSteps((prev) => prev + 1);
  };

  const [steps, setSteps] = useState(0);

  return (
    <>
      <h2>Today you've taken {steps} steps!</h2>
      <br />
      <button onClick={increment}>I took another step </button>
    </>
  );
};

export default MilesAhead;
