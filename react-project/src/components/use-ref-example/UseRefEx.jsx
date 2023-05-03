import { useRef, useState } from "react";

function UseRefEx() {
  // Multiple renders of values stored by useRef will always only render the values stored during the first render.
  // Even if the values stored change.
  const arrayOfResults = useRef([0, 0]);

  const [result, setResult] = useState([]);

  function coinFlip(e) {
    e.preventDefault();
    console.log("FLIP BUTTON PRESSED");

    const randNum = Math.random();
    console.log("random number: " + randNum);

    if (randNum <= 0.5) {
      arrayOfResults.current[0] += 1;
      console.log("HEADS!");
    } else {
      arrayOfResults.current[1] += 1;
      console.log("TAILS!");
    }
    console.log("useRef: " + arrayOfResults.current);
  }

  function handleResultBtn() {
    setResult(arrayOfResults.current);
    console.log("RESULT BUTTON PRESSED");
    console.log("useState: " + result);
    console.log("useRef: " + arrayOfResults.current);
  }

  return (
    <>
      <h1>COIN FLIP GAME</h1>
      <button onClick={coinFlip} style={{ backgroundColor: "pink" }}>
        FLIP
      </button>
      <button
        onClick={handleResultBtn}
        style={{ backgroundColor: "lightgreen" }}
      >
        RESULTS
      </button>
      <br />
      <p>HEADS: {result[0]}</p>
      <p>TAILS: {result[1]}</p>
      <p>Want to see the results more than once?</p>
      <p>
        Well, you can't because we are using a useRef hook to persist the data.
      </p>
      <p>Goodbye.</p>
    </>
  );
}

export default UseRefEx;
