import React, { Component } from "react";
import User from "./User";

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      secondVisible: 0,
    };

    this.interval = null;
  }

  componentDidMount() {
    console.log("componentDidMount Users.js");
    console.log("componentDidUpdate Users.js");
    this.interval = setInterval(() => {
      const { secondVisible } = this.state;
      this.setState({
        secondVisible: secondVisible + 1,
      });
    }, 1000);
  }

  componentDidUpadate() {}

  componentWillUnmount() {
    console.log("componentWillUnmount Users.js");
    clearInterval(this.interval);
  }

  render() {
    const { users } = this.props;
    const { secondVisible } = this.state;

    return (
      <div>
        <p>Component Users visível por {secondVisible}</p>
        <ul>
          {users.map((user) => {
            const { login, name, picture } = user;
            return (
              <li key={login.uuid}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
