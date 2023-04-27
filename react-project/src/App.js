// import logo from './logo.svg';
import "./App.css";
import Cat from "./components/Cat";
import Header from "./components/Header";

function App() {
  return (
    // fragments <> instead of <div>
    <>
      <Cat />
      <Header />
    </>
  );
}

export default App;
