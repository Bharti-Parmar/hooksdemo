import React from "react";

const CallBack = ({ count }) => {
  return <div>{count}</div>;
};

export default React.memo(CallBack);
