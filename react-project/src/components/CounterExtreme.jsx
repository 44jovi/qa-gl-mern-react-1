import { useState } from "react";

const CounterExtreme = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const btnPress = (e) => {
    e.preventDefault();
    let numChange = parseInt(e.target.innerHTML);
    setHistory([`${count} + ${numChange} = ${count + numChange}`, ...history]);
    setCount(count + numChange);
  };

  const reset = (e) => {
    e.preventDefault();
    setCount(0);
    setHistory([]);
  };

  return (
    <>
      {/* current count display */}
      <div>{count}</div>
      {/* counter buttons */}
      <button onClick={btnPress}>+1</button>
      <button onClick={btnPress}>+5</button>
      <button onClick={reset}>RESET</button>
      <button onClick={btnPress}>-1</button>
      <button onClick={btnPress}>-5</button>
      <>
        {history.map((i) => (
          <p>{i}</p>
        ))}
      </>
    </>
  );
};

export default CounterExtreme;
