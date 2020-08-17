import React, { Component } from "react";
import { calculateSalaryFrom } from "./salary.js";
import css from "./salary.module.css";
import { formatNumber } from "../../helpers/formatHelpers.js";

export default class TotalSalary extends Component {
  render() {
    const { fullSalary } = this.props;
    const netSalary = calculateSalaryFrom(fullSalary).netSalary;
    const percent = ((netSalary / fullSalary) * 100).toFixed(2);
    return (
      <div>
        <span>Salário Líquido:</span>
        <input
          disabled
          type="text"
          className={css.netSalary}
          value={`${formatNumber(netSalary)} (${percent}%)`}
        ></input>
      </div>
    );
  }
}
