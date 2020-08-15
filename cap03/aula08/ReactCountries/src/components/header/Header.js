import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { totalPopulation, totalCountries } = this.props;

    return (
      <div>
        <input type="text"></input>
        <span>|Total:{totalCountries}</span>
        <span>|População:{totalPopulation}</span>
      </div>
    );
  }
}
