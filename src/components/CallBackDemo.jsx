import React, { useCallback, useState } from "react";
import CallBackSub from "./containers/CallBackComp/CallBackSub";
import CallBackAdd from "./containers/CallBackComp/CallBackAdd";
import Count from "./containers/CallBackComp/Count";
// import CallBack from "./containers/CallBackComp/CallBack";
// import CallBackComp from "./containers/CallBackComp/CallBackComp";

const CallBackDemo = () => {
  const [countI, increment] = useState(0);
  const [countD, decrement] = useState(0);

  const setCounter = useCallback(() => {
    // console.log("Increment");
    increment(countI + 1);
  }, [countI]);

  const setDecrement = useCallback(() => {
    // console.log("Decrement");
    decrement(countD - 1);
  }, [countD]);

  return (
    <div>
      CallBack Demo
      {/* <CallBack count={countI} />
      <CallBackComp setCounter={setCounter} />
      <CallBack count={countD} />
      <CallBackComp setCounter={setDecrement} /> */}
      <Count count={countI} />
      <CallBackAdd increment={setCounter} />
      <Count count={countD} />
      <CallBackSub decrement={setDecrement} />
      {/* <button onClick={() => setCounter(count + 1)}>+</button>
      <button onClick={() => setCounter(count - 1)}>-</button> */}
    </div>
  );
};

export default CallBackDemo;
