import React, { useEffect, useState } from "react";

const ConditionalEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect changes");
    document.title = `you clicked ${count} times;`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
};

export default ConditionalEffect;
