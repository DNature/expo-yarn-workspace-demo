import React from "react";
import logo from "./logo.svg";
import { add } from "@expoYarn/common";
import "./App.css";

const App = () => {
  // Testing out our add function
  const result = add(10, 20);
  console.log(result); // => Returns [30]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
