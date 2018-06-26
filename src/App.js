import React, { Component } from "react";
import logo from "./logo.svg";
// import speedmaster from "./Speedmaster.jpeg";
import watchTop from "./watchstraptop.jpg";
import watchBottom from "./WatchStrapLong.jpg";
import watchTop2 from "./watch2Top.jpg";
import watchBottom2 from "./strap2bottom.jpg";
import "./App.css";
import panerai from "./Panerai.png";
import seikopresage from "./sekiopresage.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      top: watchTop,
      bottom: watchBottom,
      watch:
        "https://cdn.shopify.com/s/files/1/0146/0732/files/GALLET.png?4139486667208975691",
      watchPosition: 0,
      strapPosition: 0,
      strapTop:
        "https://cdn.shopify.com/s/files/1/0146/0732/files/SMOOTH-B-20_13921bed-846e-4018-bbff-e93d67d3bd9d.png?9801324259905238006",
      strapBottom:
        "https://cdn.shopify.com/s/files/1/0146/0732/files/SMOOTH-B-20.png?9801324259905238006"
    };
    this.swapImages = this.swapImages.bind(this);
    this.swapWatches = this.swapWatches.bind(this);
  }
  swapImages() {
    let strapTops = [
      "https://cdn.shopify.com/s/files/1/0146/0732/files/SMOOTH-B-20_13921bed-846e-4018-bbff-e93d67d3bd9d.png?9801324259905238006",
      "https://cdn.shopify.com/s/files/1/0146/0732/files/CANVAS-L-BG-20_a8353ee3-0d67-474d-ad29-d2b6e25109bf.png?18426604203995489985",
      "https://cdn.shopify.com/s/files/1/0146/0732/files/STAINED-BG-20_df901a35-1763-4f03-87c5-42103f01bd41.png?2900963067896406454"
    ];
    let strapBottoms = [
      "https://cdn.shopify.com/s/files/1/0146/0732/files/SMOOTH-B-20.png?9801324259905238006",
      "https://cdn.shopify.com/s/files/1/0146/0732/files/CANVAS-L-BG-20_a8353ee3-0d67-474d-ad29-d2b6e25109bf.png?18426604203995489985",
      "https://cdn.shopify.com/s/files/1/0146/0732/files/STAINED-BG-20.png?2900963067896406454"
    ];
    let position = this.state.strapPosition;
    if (position < 2) {
      this.setState({
        strapBottom: strapBottoms[position + 1],
        strapTop: strapTops[position + 1],
        strapPosition: position + 1
      });
    } else {
      this.setState({
        strapBottom: strapBottoms[0],
        strapTop: strapTops[0],
        strapPosition: 0
      });
    }
  }

  swapWatches() {
    let watches = [
      "https://cdn.shopify.com/s/files/1/0146/0732/files/GALLET.png?4139486667208975691",
      "https://cdn.shopify.com/s/files/1/0146/0732/files/PORTUGEUSE.png?4139486667208975691",
      "https://cdn.shopify.com/s/files/1/0146/0732/files/SUB.png?4139486667208975691",
      panerai,
      seikopresage
    ];
    let position = this.state.watchPosition;
    if (position < 4) {
      this.setState({
        watch: watches[position + 1],
        watchPosition: position + 1
      });
    } else {
      this.setState({
        watch: watches[0],
        watchPosition: 0
      });
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.swapImages}>Swap straps</button>
        <button onClick={this.swapWatches}>Swap wathes</button>
        <div className="watch-container">
          <div id="top">
            {/* <img src={this.state.top} className="watchStrap" /> */}
            <img src={this.state.strapTop} className="watchStrap" />
          </div>
          <div id="watch">
            <img src={this.state.watch} className="watch" />
          </div>
          <div id="bottom">
            {/* <img src={this.state.bottom} className="watchStrap" id="bottom" /> */}
            <img
              src={this.state.strapBottom}
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
