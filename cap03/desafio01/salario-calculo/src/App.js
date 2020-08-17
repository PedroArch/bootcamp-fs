import React, { Component } from "react";
import FullSalary from "./components/salary/FullSalary";
import Inss from "./components/salary/Inss";
import Irpf from "./components/salary/Irpf";
import TotalSalary from "./components/salary/TotalSalary";
import css from "./components/salary/salary.module.css";
import Bars from "./components/salary/Bars";
import { calculateSalaryFrom } from "./components/salary/salary.js";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1,
      barINSS: 0,
      barIRPF: 0,
      barNet: 100,
    };
  }

  handleOnChange = (newSalary) => {
    const discontedINSS = calculateSalaryFrom(newSalary).discountINSS;
    let newINSS = ((discontedINSS / newSalary) * 100).toFixed(2);
    const discontedIRPF = calculateSalaryFrom(newSalary).discountIRPF;
    let newIRPF = ((discontedIRPF / newSalary) * 100).toFixed(2);
    const netSalary = calculateSalaryFrom(newSalary).netSalary;
    const newNet = ((netSalary / newSalary) * 100).toFixed(2);

    this.setState({
      fullSalary: newSalary,
      barINSS: newINSS,
      barIRPF: newIRPF,
      barNet: newNet,
    });
  };

  render() {
    const { fullSalary, barINSS, barIRPF, barNet } = this.state;
    return (
      <>
        <div className="container">
          <h1 className={css.titleReact}>React Salário</h1>
          <FullSalary
            fullSalary={fullSalary}
            onChangeSalary={this.handleOnChange}
          />
          <div className={css.calculos}>
            <Inss fullSalary={fullSalary} />
            <Irpf fullSalary={fullSalary} />
          </div>
          <TotalSalary fullSalary={fullSalary} />
          <div className={css.bars}>
            <Bars value={barINSS} color="#e67e22" />
            <Bars value={barIRPF} color="#c0392b" />
            <Bars value={barNet} color="#16a085" />
          </div>
        </div>
      </>
    );
  }
}
