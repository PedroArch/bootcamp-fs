import React, { Component } from "react";

export default class Bands extends Component {
  constructor() {
    super();

    this.state = {
      bandName: "MDT",
      bandMembers: [
        {
          id: 1,
          name: "Vartulio",
          game: "CDZ",
        },
        {
          id: 2,
          name: "Boff",
          game: "Age",
        },
        {
          id: 3,
          name: "Diego",
          game: "HS",
        },
      ],
    };
  }
  render() {
    const { bandName, bandMembers } = this.state;
    return (
      <div>
        <h4>{bandName}</h4>
        <ul>
          {bandMembers.map(({ id, name, game }) => {
            return (
              <li key={id}>
                {name} - {game}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
