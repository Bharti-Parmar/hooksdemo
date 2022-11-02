import React, { useState } from 'react'

export default function inputEvent() {
    const [name, setName] = useState('');

    function enterName(e){
        setName(e.target.value);
    }

    function submit(){
      console.log(name);
      setName(name)
    }

  return (
    <div className='mt-3'>
        <h4>2. Input Events</h4>
        <input type="text" defaultValue={name} onChange={enterName} />
        <button type='submit' onClick={() => submit()}>Submit</button>
        <p>{name}</p>
    </div>
  )
}
