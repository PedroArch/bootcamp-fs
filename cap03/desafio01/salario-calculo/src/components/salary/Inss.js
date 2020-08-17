import React, { Component } from "react";
import { calculateSalaryFrom } from "./salary.js";
import css from "./salary.module.css";
import { formatNumber } from "../../helpers/formatHelpers.js";

export default class Inss extends Component {
  render() {
    const { fullSalary } = this.props;
    const discontedINSS = calculateSalaryFrom(fullSalary).discountINSS;
    const percent = ((discontedINSS / fullSalary) * 100).toFixed(2);
    return (
      <div>
        <span className={css.greyLabel}>Base INSS:</span>
        <input
          disabled
          className={css.baseINSS}
          type="text"
          value={formatNumber(fullSalary)}
        ></input>
        <span>Desconto INSS:</span>
        <input
          disabled
          className={css.discountINSS}
          type="text"
          value={`${discontedINSS} (${percent}%)`}
        ></input>
      </div>
    );
  }
}
