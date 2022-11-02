import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import InputEvent from './components/InputEvent';
import UseStateObject from './components/UseStateObject';

function App() {

  return (
    <div className="App">
      <h2>Hooks Practice </h2>
      <Counter />
      <InputEvent />
      <UseStateObject />
    </div>
  );
}

export default App;