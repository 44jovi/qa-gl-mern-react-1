import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cat from "./components/Cat";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Converter from "./components/Converter";
import MilesAhead from "./components/MilesAhead";
import Credentials from "./components/Credentials";
import Cars from "./components/Cars";
import ProductTable from "./components/ProductTable";
import CounterExtreme from "./components/CounterExtreme";
import friends from "./friends.json";
import Friend from "./components/Friend";
function App() {
  return (
    <>
      {/* <MyComponent />
      <hr></hr>
      <Counter />
      <hr></hr>
      <Converter />
      <hr></hr>
      <MilesAhead />
      <hr></hr>
      <Credentials />
      <hr></hr>
      <Cars />
      <hr></hr>
      <ProductTable />
      <hr></hr> */}
      <CounterExtreme />
      {/* <hr></hr>
      {friends.map(({ id, name, age }) => {
        return <Friend key={id} name={name} age={age} />;
      })} */}
    </>
  );
}

export default App;
