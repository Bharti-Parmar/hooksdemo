import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [listItems, setListItems] = useState([]);
  const [userInput, setUserInput] = useState("");

  const inputChangeHandler = (value) => {
    console.log(value);
    setUserInput(value);
  };

  const submitHandler = () => {
    console.log("value on submit", listItems, userInput);
    setListItems([...listItems, userInput]);
    setUserInput("");
  };

  return (
    <div>
      {userInput}
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(e) => inputChangeHandler(e.target.value)}
        />
        <input type="button" value="Post" onClick={() => submitHandler()} />
      </form>
      <ul>
        {/* {renderNewValue()} */}
        {listItems.map((li, key) => {
          return <li key={key}>{li}</li>;
        })}
      </ul>
    </div>
  );
}
