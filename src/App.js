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
      bottom: watchBottom,
      watch:
        "https://cdn.shopify.com/s/files/1/0146/0732/files/GALLET.png?4139486667208975691",
      position: 0
    };
    this.swapImages = this.swapImages.bind(this);
    this.swapWatches = this.swapWatches.bind(this);
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

  swapWatches() {
    let watches = [
      "https://cdn.shopify.com/s/files/1/0146/0732/files/GALLET.png?4139486667208975691",
      "https://cdn.shopify.com/s/files/1/0146/0732/files/PORTUGEUSE.png?4139486667208975691",
      "https://cdn.shopify.com/s/files/1/0146/0732/files/SUB.png?4139486667208975691"
    ];
    let position = this.state.position;
    if (position < 2) {
      this.setState({
        watch: watches[position + 1],
        position: position + 1
      });
    } else {
      this.setState({
        watch: watches[0],
        position: 0
      });
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.swapImages}>Swap straps</button>
        <button onClick={this.swapWatches}>Swap wathes</button>
        <div class="watch-container">
          <div id="top">
            {/* <img src={this.state.top} className="watchStrap" /> */}
            <img
              src="https://cdn.shopify.com/s/files/1/0146/0732/files/STAINED-BG-20_df901a35-1763-4f03-87c5-42103f01bd41.png?2900963067896406454"
              className="watchStrap"
            />
          </div>
          <div id="watch">
            <img src={this.state.watch} className="watch" />
          </div>
          <div id="bottom">
            {/* <img src={this.state.bottom} className="watchStrap" id="bottom" /> */}
            <img
              src="https://cdn.shopify.com/s/files/1/0146/0732/files/STAINED-BG-20.png?2900963067896406454"
              className="watchStrap"
              id="bottom"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
