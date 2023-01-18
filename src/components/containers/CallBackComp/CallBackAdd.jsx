import React from "react";

const CallBackAdd = ({ increment }) => {
  console.log("Add Component Re-render");
  return (
    <div>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default React.memo(CallBackAdd);
