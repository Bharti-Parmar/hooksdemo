import React, { useReducer } from "react";

const init = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return init;
    default:
      return state;
  }
};

function reducerDemo() {
  const [count, dispatch] = useReducer(reducer, init);
  return (
    <div>
      useReducer Demo
      <p>value of count is: {count}</p>
      <button onClick={() => dispatch("Increment")}>+</button>
      <button onClick={() => dispatch("Decrement")}>-</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
}

export default reducerDemo;
