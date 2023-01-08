import React, { useState } from "react";

function OnOffLineConcept() {
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState();

  function clickMe() {
    setStatus(true);
    setValue("Online");
  }

  return (
    <div>
      {status ? <h4>{value}</h4> : <h4>Offline</h4>}
      <button onClick={() => clickMe()}>click</button>
    </div>
  );
}

export default OnOffLineConcept;
