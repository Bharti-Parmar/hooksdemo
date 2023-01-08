import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function StringReverse() {
  const strArr = ["Hello my name is bharti"];
  const [spliceVal, setValue] = useState("");

  function getVal() {
    setValue(strArr.shift(1, 2));
  }

  return (
    <div>
      <h4>String Implementation</h4>
      <p>
        1. Splice: splice will split the string into character array and we can
        define its 2nd argument which indicate how many element we have to
        remove from an array.
      </p>
      <br />
      {spliceVal}
      <button onClick={() => getVal()}>click me</button>
    </div>
  );
}

export default StringReverse;
