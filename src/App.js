import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Counter from './components/Counter';
// import InputEvent from './components/InputEvent';
// import UseStateObject from './components/UseStateObject';
// import OnOffLineConcept from './components/OnOffLineConcept';
// import StringReverse from './components/StringReverse';
// import SetTimeInterval from './components/SetTimeInterval';
// import HigherOrder from "./components/HigherOrder";
// import HOC from "./components/HOC";
// import RenderProp from "./components/RenderProp";
// import RenderPropTwo from "./components/RenderPropTwo";
// import CounterComp from "./components/Counter";
import UserProp from "./components/UserProp";

// const NewComp = HigherOrder(HOC);

function App() {

  return (
    <div className="App">
      <h2>Hooks Practice </h2>
      {/* <Counter /> */}
      {/* <InputEvent /> */}
      {/* <UseStateObject /> */}
      {/* <OnOffLineConcept /> */}
      {/* <SetTimeInterval /> */}
      {/* ----------- (PENDING) -------- <StringReverse /> ------------- (PENDING) ------------- */}
     {/* <HOC /> */}
      {/* <NewComp /> */}
      {/* <RenderProp /> */}
      {/* <RenderPropTwo /> */}
    <UserProp render={(isLoggedIn) => (isLoggedIn ? "Bharti" : "Guest")} />
      {/* <CounterComp
        myCounter={(count, setCounter) => (
          <RenderProp count={count} setCounter={setCounter} />
        )}
      />
      <CounterComp
        myCounter={(count, setCounter) => (
          <RenderPropTwo count={count} setCounter={setCounter} />
        )}
      /> */}
    </div>
  );
}

export default App;