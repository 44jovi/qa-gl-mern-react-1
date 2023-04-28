import { useState } from "react";

const CounterExtreme = () => {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);
  const [history, setHistory] = useState([0]);

  // const history = [];

  const btnPress = (e) => {
    e.preventDefault();

    let numChange = parseInt(e.target.innerHTML);
    setCount(count + numChange);
    setHistory([count, ...history]);
    console.log(history);
  };

  return (
    <>
      {/* current count display */}
      <div>{count}</div>
      {/* counter buttons */}
      <button onClick={btnPress}>+1</button>
      <button onClick={btnPress}>+5</button>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={btnPress}>-1</button>
      <button onClick={btnPress}>-5</button>
      <div>test - previous count: {prevCount}</div>
      <p>{history.map((i) => i)}</p>
    </>
  );
};

export default CounterExtreme;
