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

function App() {
  return (
    <>
      <MyComponent />
      <Counter />
      <Converter />
      <MilesAhead />
      <Credentials />
    </>
  );
}

export default App;
