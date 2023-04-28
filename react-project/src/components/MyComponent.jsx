import Friends from "./Friends";

const friendsList = [
  { name: "bob", age: 123 },
  { name: "jim", age: 456 },
  { name: "joe", age: 789 },
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
