import React, { useEffect, useState } from "react";

const EffectOnlyOnce = () => {
  const [X, xAxis] = useState(0);
  const [Y, yAxis] = useState(0);

  const moveMouse = (e) => {
    console.log("Mouse Event Called!");
    xAxis(e.ClientX);
    yAxis(e.ClientY);
  };

  useEffect(() => {
    console.log("useEffect called!");
    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <div>
      X-Axis: {X} and Y-Axis: {Y}
    </div>
  );
};

export default EffectOnlyOnce;
