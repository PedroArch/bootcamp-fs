import React, { Component } from "react";
import Counter from "./components/counter/Counter.js";
import Counter2 from "./components/counter/Counter2.js";
import Bands from "./components/Bands.js";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 3,
      steps: 0,
    };
  }

  handleClick = (clickType) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter:
        clickType === "+" ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;
    return (
      <>
        <h3>Bands</h3>
        <Bands />
        <h3>Counter</h3>
        <Counter />
        <Counter />
        <Counter />
        <h3>Counter 2</h3>
        <Counter2
          onCount={this.handleClick}
          countValue={currentCounter}
          currentSteps={steps}
        />
        <Counter2
          onCount={this.handleClick}
          countValue={currentCounter}
          currentSteps={steps}
        />
        <Counter2
          onCount={this.handleClick}
          countValue={currentCounter}
          currentSteps={steps}
        />
      </>
    );
  }
}
