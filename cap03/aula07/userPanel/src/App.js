import React, { Component } from "react";
import Users from "./components/users/Users.js";
import Toggle from "./components/toggle/Toggle.js";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      showUsers: false,
    };
  }

  async componentDidMount() {
    console.log("ComponentDidMount app.js");
    const res = await fetch(
      "https://randomuser.me/api/?seed=rush&nat=br&results=10"
    );
    const json = await res.json();
    this.setState({
      users: json.results,
    });
  }

  handleSwitchChange = () => {
    const { users, showUsers } = this.state;
    this.setState({
      showUsers: !showUsers,
    });
  };

  render() {
    const { users, showUsers } = this.state;
    return (
      <div>
        <h3>Reac LifeCycle</h3>
        <Toggle
          description="Mostrar usuários"
          enabled={showUsers}
          onToggle={this.handleSwitchChange}
        />
        <hr />
        {showUsers && <Users users={users} />}
      </div>
    );
  }
}
