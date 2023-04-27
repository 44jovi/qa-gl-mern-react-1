import { useState } from "react";

const Counter = () => {
  // Normal variables being updated will not refresh the DOM
  // let count = 0;

  // useState is a React hook
  // Returns an array
  const [count, setCount] = useState(0);

  return (
    <>
      <input value={count} />
      {/* Arrow function needed for onClick */}
      {/* Otherwise setCount gets called infinitely */}
      <button onClick={() => setCount(count + 1)}>CLICK ME</button>
    </>
  );
};

export default Counter;
