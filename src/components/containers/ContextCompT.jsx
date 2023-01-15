import React, { createContext, useState } from "react";
import ContextCompO from "./ContextComp/ContextCompO";

export const Comp = createContext();

const ContextCompT = () => {
  // const [user, setUser] = useState("Bharti Parmar");
  const [count, setCounter] = useState(0);
  return (
    <div>
      Component {count}
      <button onClick={() => setCounter(count + 1)}>+</button>
      <Comp.Provider value={count}>
        <ContextCompO />
      </Comp.Provider>
    </div>
  );
};

export default ContextCompT;
