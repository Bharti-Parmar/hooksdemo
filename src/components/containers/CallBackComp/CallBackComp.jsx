import React from "react";

const CallBackComp = ({ setCounter }) => {
  return (
    <div>
      CallBack Comp
      <button onClick={setCounter}>Counter</button>
    </div>
  );
};

export default React.memo(CallBackComp);
