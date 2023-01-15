import React, { useEffect, useState } from "react";

const EffectWithNoDependency = () => {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
  };

  // second method without dependency array
  useEffect(() => {
    let interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // useEffect(() => {
  //   let interval = setInterval(tick, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [count]);

  return <div>{count}</div>;
};

export default EffectWithNoDependency;
