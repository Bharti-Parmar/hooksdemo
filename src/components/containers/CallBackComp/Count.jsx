import React from "react";

const Count = ({ count }) => {
  console.log("Count Comp");
  return <div>Counter value: {count}</div>;
};

export default React.memo(Count);
