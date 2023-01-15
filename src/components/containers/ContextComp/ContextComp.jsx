import React from "react";
import { UserContext } from "../../ContextDemo";

const ContextComp = () => {
  return (
    <div>
      Component 3
      <UserContext.Consumer>
        {(user) => {
          return <div>User context value {user}</div>;
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ContextComp;
