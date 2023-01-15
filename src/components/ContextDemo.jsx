import React, { createContext, useState } from "react";
import ContextComp from "../components/containers/ContextComp/ContextComp";

export const UserContext = createContext();
const ContextDemo = () => {
  const [user, setUser] = useState("Bharti Raghav");
  return (
    <div>
      Use Context Demo
      <UserContext.Provider value={user}>
        <ContextComp />
      </UserContext.Provider>
    </div>
  );
};

export default ContextDemo;
