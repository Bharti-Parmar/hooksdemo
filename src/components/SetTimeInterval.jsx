import React, { useState, useEffect } from "react";

function OnOffLineConcept() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>4. Time in Seconds: {seconds}</h3>
    </div>
  );
}

export default OnOffLineConcept;
