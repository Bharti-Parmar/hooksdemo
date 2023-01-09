import React, { useState } from "react";

export default function CounterComp(props) {
  const [count, setCount] = useState(0);

  const setCounter = () => {
    setCount((prevState) => prevState + 1);
  };
  return <div>{props.myCounter(count, setCounter)}</div>;
}
