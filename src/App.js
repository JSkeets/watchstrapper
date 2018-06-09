import React, { Component } from "react";
import logo from "./logo.svg";
import speedmaster from "./Speedmaster.jpeg";
import watchTop from "./watchstraptop.jpg";
import watchBottom from "./WatchStrapLong.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div class="watch-container">
          <div id="top">
            <img src={watchTop} className="watchStrap" />
          </div>
          <div id="watch">
            <img src={speedmaster} className="watch" />
          </div>
          <div id="bottom">
            <img src={watchBottom} className="watchStrap" id="bottom" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
