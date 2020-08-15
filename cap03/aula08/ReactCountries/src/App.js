import React, { Component } from "react";
import Countries from "./components/countries/Countries.js";
import Header from "./components/header/Header.js";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      totalCountries: 0,
      totalPopulation: 0,
      allCountries: [],
      filtredCountries: "",
    };
  }

  async componentDidMount() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await res.json();
    const allCountries = json.map(({ name, flag, population, numericCode }) => {
      return {
        id: numericCode,
        name,
        flag,
        population,
      };
    });

    this.setState({
      allCountries,
    });
  }

  render() {
    const { allCountries, totalCountries, totalPopulation } = this.state;
    return (
      <div className="container">
        <h1>React Countries</h1>
        <Header
          totalCountries={totalCountries}
          totalPopulation={totalPopulation}
        />
        <Countries countries={allCountries} />
      </div>
    );
  }
}
