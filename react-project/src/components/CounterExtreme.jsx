import { useState } from "react";

const CounterExtreme = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* current count display */}
      <div>{count}</div>
      {/* counter buttons */}
      <button>-5</button>
      <button>-1</button>
      <button>RESET</button>
      <button>+1</button>
      <button>+5</button>
    </>
  );
};

export default CounterExtreme;
