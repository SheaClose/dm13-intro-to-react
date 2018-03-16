import React, { Component } from "react";

import List from "./Components/List/List";

import logo from "./logo.svg";
import "./App.css";

const myPeeps = ["Shea", "Erik", "Jin", "Larry"];

class App extends Component {
  render() {
    return (
      <div className="App app_container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <List />
      </div>
    );
  }
}

export default App;
export var seven = 7;

//
