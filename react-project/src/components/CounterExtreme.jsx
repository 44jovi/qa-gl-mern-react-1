import { useState } from "react";

const CounterExtreme = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(1);

  const btnPress = (e) => {
    e.preventDefault();
    let numChange = parseInt(e.target.innerHTML);
    setHistory([
      `${historyIndex}: ${count} + ${numChange} = ${count + numChange}`,
      ...history,
    ]);
    setCount(count + numChange);
    setHistoryIndex(historyIndex + 1);
  };

  const reset = (e) => {
    e.preventDefault();
    setCount(0);
    setHistory([]);
    setHistoryIndex(1);
  };

  return (
    <>
      {/* current count display */}
      <div className="count-display">{count}</div>
      {/* counter buttons */}
      <button onClick={btnPress}>-1</button>
      <button onClick={btnPress}>-5</button>
      <button onClick={reset}>RESET</button>
      <button onClick={btnPress}>+1</button>
      <button onClick={btnPress}>+5</button>
      <h2>Calculation history</h2>
      <>
        {history.map((i, index) => (
          <p key={index}>{i}</p>
        ))}
      </>
    </>
  );
};

export default CounterExtreme;
