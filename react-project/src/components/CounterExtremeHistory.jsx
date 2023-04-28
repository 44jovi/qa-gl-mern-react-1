import { useState } from "react";

const CounterExtreme = () => {
  const [count, setCount] = useState(0);
  const [singleHistory, setSingleHistory] = useState(0);

  const pressPlusOne = () => {
    setCount(count + 1);
    setSingleHistory("+ 1");
  };

  // TODO: reset function?

  return (
    <>
      {/* current count display */}
      <div>{count}</div>
      {/* counter buttons */}
      <button onClick={() => setCount(count - 5)}>-5</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={pressPlusOne}>+1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>
      <div>{singleHistory}</div>
    </>
  );
};

export default CounterExtreme;
