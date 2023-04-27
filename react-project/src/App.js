import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Cat from "./components/Cat";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyComponent from "./components/MyComponent";
import Trainer from "./components/Trainer";

function App() {
  return (
    <>
      <MyComponent />
      <Trainer name="qwer" age={99} />
      <Trainer name="asdf" age={44} />
    </>
  );
}

export default App;
