import Friends from "./Friends";

const friendsList = [
  { name: "alsdjflkajdsf", age: 1231412 },
  { name: "qewrqwe", age: 23232 },
  { name: "qewrqwe", age: 23232 },
  { name: "qewrqwe", age: 23232 },
  { name: "qewrqwe", age: 23232 },
  { name: "qewrqwe", age: 23232 },
  { name: "qewrqwe", age: 23232 },
  { name: "qewrqwe", age: 23232 },
  { name: "qewrqwe", age: 23232 },
  { name: "howdy", age: 23232 },
];

const MyComponent = () => {
  return (
    <>
      <h1>Howdy, world!</h1>
      <h2>Here are your friends:</h2>
      <Friends friendsList={friendsList} />
    </>
  );
};

export default MyComponent;
