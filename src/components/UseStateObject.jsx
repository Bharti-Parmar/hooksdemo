import React, { useState } from "react";

function UseStateObject() {
  const [name, setName] = useState({ firstName: "Bharti", lastName: "Parmar" });
  return (
    <div>
      <h4>3. UseState Object</h4>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <br />
      <h6>
        Name: {name.firstName} {name.lastName}
      </h6>
      <p>{JSON.stringify(name)}</p>
    </div>
  );
}

export default UseStateObject;
