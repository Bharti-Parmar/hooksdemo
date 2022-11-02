import React, { useState } from 'react';

function Counter() {
  // Declare a new state variable, which we'll call "count"
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
    // const name = count.name;
  return (
    <React.Fragment>
        <h4 className='mb-2'>1. Counter</h4>
        {/* <h5>{name}</h5> */}
        <span className='mx-2 h3'>{count}</span>
        <button type="button" className="mr-2 p-3" onClick={() => setCount(count + 1)}>+</button>
        <button type="button" className="ml-2 p-3" onClick={() => setCount(count - 1)}>-</button>
        <button type="button" className="ml-2 p-3" onClick={() => setCount(initialCount)}>Reset</button>
    </React.Fragment>
  );
}

export default Counter;