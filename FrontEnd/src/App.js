import React from "react";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Home></Home>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
