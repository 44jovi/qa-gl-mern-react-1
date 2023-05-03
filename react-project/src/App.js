import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
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
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import UsersPage from "./components/UsersPage";
import ContactPage from "./components/ContactPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/users" element={<UsersPage />}></Route>
          <Route exact path="/users/:id/:name" element={<UsersPage />}></Route>
          <Route exact path="/contact" element={<ContactPage />}></Route>
          <Route exact path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <MyComponent />
      <hr />
      <Counter />
      <hr />
      <Converter />
      <hr />
      <MilesAhead />
      <hr />
      <Credentials />
      <hr />
      <Cars />
      <hr />
      <ProductTable />
      <hr />
      <CounterExtreme />
      <hr />
      {friends.map(({ id, name, age }) => {
        return <Friend key={id} name={name} age={age} />;
      })}
      <hr /> */}
    </>
  );
}

export default App;
