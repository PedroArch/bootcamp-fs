import React, { Component } from "react";
import css from "./salary.module.css";
import { formatNumber } from "../../helpers/formatHelpers";

export default class FullSalary extends Component {
  handleInputChange = (event) => {
    const newSalary = event.target.value;
    this.props.onChangeSalary(newSalary);
  };

  render() {
    const { fullSalary } = this.props;
    return (
      <div>
        <span className={css.grossSalary}>Salário Bruto</span>
        <input
          type="number"
          min="1"
          onChange={this.handleInputChange}
          value={fullSalary}
        ></input>
      </div>
    );
  }
}
