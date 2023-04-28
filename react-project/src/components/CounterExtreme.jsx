import { useState } from "react";

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

const CounterExtreme = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const btnPress = (e) => {
    e.preventDefault();
    let numChange = parseInt(e.target.innerHTML);
    setHistory([
      `${dateTime}: ${count} + ${numChange} = ${count + numChange}`,
      ...history,
    ]);
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
      <h2>Calculation history</h2>
      <>
        {history.map((i) => (
          <p>{i}</p>
        ))}
      </>
    </>
  );
};

export default CounterExtreme;
