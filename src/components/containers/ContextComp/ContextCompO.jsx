import React, { useContext } from "react";
import { Comp } from "../ContextCompT";

const ContextComp = () => {
  const data = useContext(Comp);
  return (
    <div>
      Component 4<p>{data}</p>
    </div>
  );
};

export default ContextComp;
