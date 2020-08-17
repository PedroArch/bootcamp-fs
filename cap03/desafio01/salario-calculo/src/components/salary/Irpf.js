import React, { Component } from "react";
import { calculateSalaryFrom } from "./salary.js";
import css from "./salary.module.css";
import { formatNumber } from "../../helpers/formatHelpers.js";

export default class Irpf extends Component {
  render() {
    const { fullSalary } = this.props;
    const discontedIRPF = calculateSalaryFrom(fullSalary).discountIRPF;
    const baseIRPF = calculateSalaryFrom(fullSalary).baseIRPF;
    const percent = ((discontedIRPF / fullSalary) * 100).toFixed(2);
    return (
      <div>
        <span className={css.greyLabel}>Base IRPF:</span>
        <input
          disabled
          className={css.baseIRPF}
          type="text"
          value={formatNumber(baseIRPF)}
        ></input>
        <span className={css.greyLabel}>Desconto:</span>
        <input
          disabled
          className={css.discountIRPF}
          type="text"
          value={`${discontedIRPF} (${percent}%)`}
        ></input>
      </div>
    );
  }
}
