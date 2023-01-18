import React, { useState, useMemo } from "react";

const MemoDemo = () => {
  const [countOne, counterOne] = useState(0);
  const [countTwo, counterTwo] = useState(0);

  const increment = () => {
    counterOne(countOne + 1);
  };

  //   const decrement = () => {
  //     counterOne(countOne - 1);
  //   };

  const decrement = () => {
    counterTwo(countTwo - 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      Memo Example
      <br />
      {countOne}
      <br />
      <button onClick={increment}>+</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      {countTwo}
      <br />
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default MemoDemo;
