import Friend from "./Friend";

const MyComponent = () => {
  return (
    <>
      <h1>Howdy, world!</h1>
      <h2>Here are your friends:</h2>
      <Friend name="qwer" age={99} />
      <Friend name="asdf" age={44} />
    </>
  );
};

export default MyComponent;
