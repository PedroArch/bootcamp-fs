import React, { Component } from "react";

export default class incrementButton extends Component {
  handleClick = () => {
    this.props.onIncrement("+");
  };

  render() {
    return (
      <button
        className="waves-effect waves-light btn green"
        type="danger"
        onClick={this.handleClick}
      >
        +
      </button>
    );
  }
}
