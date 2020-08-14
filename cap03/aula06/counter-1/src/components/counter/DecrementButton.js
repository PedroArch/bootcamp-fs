import React, { Component } from "react";

export default class incrementButton extends Component {
  handleClick = () => {
    this.props.onDecrement("-");
  };

  render() {
    return (
      <button
        className="waves-effect waves-light btn red"
        type="danger"
        onClick={this.handleClick}
      >
        -
      </button>
    );
  }
}
