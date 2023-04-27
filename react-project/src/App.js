// import logo from './logo.svg';
import "./App.css";
import Cat from "./components/Cat";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    // fragments <> instead of <div>
    <>
      <Cat />
      <Header />
      <Footer />
    </>
  );
}

export default App;
