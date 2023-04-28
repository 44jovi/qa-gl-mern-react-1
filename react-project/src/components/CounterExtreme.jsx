import { useState } from "react";

const CounterExtreme = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* current count display */}
      <div>{count}</div>
      {/* counter buttons */}
      <button onClick={() => setCount(count - 5)}>-5</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>
    </>
  );
};

export default CounterExtreme;
