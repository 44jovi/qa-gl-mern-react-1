import { useRef, useState } from "react";
function UseRefEx() {
  const arrayOfResults = useRef([0, 0]);

  const [result, setResult] = useState([]);

  function coinFlip(e) {
    e.preventDefault();
    const result = Math.random();

    if (result <= 0.5) {
      arrayOfResults.current[0] += 1;
      console.log("HEADS!");
    } else {
      arrayOfResults.current[1] += 1;
      console.log("TAILS!");
    }
    console.log("RESULT");
    console.log(result);
    console.log(arrayOfResults.current);
  }

  function resultBtn() {
    setResult(arrayOfResults.current);
    console.log("RESULT BUTTON PRESSED");
    console.log(arrayOfResults.current);
    console.log(result);
  }

  return (
    <>
      <h1>Coin Flip Game!</h1>
      <button onClick={coinFlip}>FLIP</button>
      <button onClick={resultBtn}>RESULTS</button>
      <br />
      <p>HEADS: {result[0]}</p>
      <p>TAILS: {result[1]}</p>
      <p>
        To see the results more than once, subscribe to our premium service!
      </p>
    </>
  );
}

export default UseRefEx;
