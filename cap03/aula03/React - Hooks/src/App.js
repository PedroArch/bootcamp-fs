import React, { useState, useEffect } from "react";
import { getNewTimestamp } from "./helpers/dataTimeHelpers";

export default function App() {
  const [clickArray, SetClickArray] = useState([]);

  useEffect(() => {
    document.title = clickArray.length;
  });

  const handleClick = () => {
    const newClickArray = Object.assign([], clickArray);
    newClickArray.push(getNewTimestamp());
    SetClickArray(newClickArray);
  };

  return (
    <div>
      <h1>
        React - <em>Hooks</em>
      </h1>

      <button onClick={handleClick}>Clique aqui</button>
      <ul>
        {clickArray.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
