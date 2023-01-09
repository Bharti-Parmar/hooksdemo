import React from "react";

const UserProp = (props) => {
  return (
    <>
      <h5>{props.render(true)}</h5>
    </>
  );
};

export default UserProp;
