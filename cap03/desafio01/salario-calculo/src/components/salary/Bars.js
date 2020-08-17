import React, { Component } from "react";

export default class Bars extends Component {
  render() {
    const { color, value } = this.props;

    return (
      <div
        style={{
          marginTop: "40px",
          width: value + "%",
          height: "20px",
          backgroundColor: color,
        }}
      ></div>
    );
  }
}
