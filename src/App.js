import React, { Component } from "react";
import logo from "./logo.svg";
import speedmaster from "./Speedmaster.jpeg";
import watchTop from "./watchstraptop.jpg";
import watchBottom from "./WatchStrapLong.jpg";
import watchTop2 from "./watch2Top.jpg";
import watchBottom2 from "./strap2bottom.jpg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      top: watchTop,
      bottom: watchBottom
    };
    this.swapImages = this.swapImages.bind(this);
  }
  swapImages() {
    if (this.state.top === watchTop) {
      this.setState({
        top: watchTop2,
        bottom: watchBottom2
      });
    } else {
      this.setState({
        top: watchTop,
        bottom: watchBottom
      });
    }
  }
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
        <button onClick={this.swapImages}>Swap straps</button>
        <div class="watch-container">
          <div id="top">
            <img src={this.state.top} className="watchStrap" />
          </div>
          <div id="watch">
            <img src={speedmaster} className="watch" />
          </div>
          <div id="bottom">
            <img src={this.state.bottom} className="watchStrap" id="bottom" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
