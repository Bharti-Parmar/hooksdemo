import React from "react";

const CallBackSub = ({ decrement }) => {
  console.log("subtract component");
  return (
    <div>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default React.memo(CallBackSub);
