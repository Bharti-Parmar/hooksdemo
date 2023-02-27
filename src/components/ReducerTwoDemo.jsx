import React, { useReducer } from "react";

const initialState = {
  fcount: 0,
  scount: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { fcount: state.fcount + action.value };
    case "Decrement":
      return { fcount: state.fcount - action.value };
    case "Increment2":
      return { fcount: state.scount + action.value };
    case "Decrement2":
      return { fcount: state.scount - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerTwoDemo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>1st Counter: {count.fcount}</h2>
      <h2>2nd Counter: {count.scount}</h2>
      <button
        type="submit"
        onClick={() => dispatch({ type: "Increment", value: 1 })}
      >
        Inc +
      </button>
      <button
        type="submit"
        onClick={() => dispatch({ type: "Decrement", value: 1 })}
      >
        Dec -
      </button>
      <button
        type="submit"
        onClick={() => dispatch({ type: "Increment", value: 10 })}
      >
        Inc + 10
      </button>
      <button
        type="submit"
        onClick={() => dispatch({ type: "Decrement", value: 5 })}
      >
        Dec - 5
      </button>
      <button
        type="submit"
        onClick={() => dispatch({ type: "Increment2", value: 5 })}
      >
        2nd Inc + 5
      </button>
      <button
        type="submit"
        onClick={() => dispatch({ type: "Decrement2", value: 10 })}
      >
        2nd Dec - 10
      </button>
      <button type="submit" onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </button>
    </div>
  );
}

export default ReducerTwoDemo;
