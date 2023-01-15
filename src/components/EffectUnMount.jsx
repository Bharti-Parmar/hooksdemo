import React, { useState } from "react";
import EffectOnlyOnce from "./EffectOnlyOnce";

const EffectUnmount = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button type="button" onClick={() => setDisplay(!display)}>
        Display Axis
      </button>
      {display && <EffectOnlyOnce />}
    </div>
  );
};

export default EffectUnmount;
