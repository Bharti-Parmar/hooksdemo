// import "./styles.css";
// import HigherOrder from "./components/HigherOrder";
// import HOC from "./components/HOC";
// import CounterComp from "./components/Counter";
// import RenderProp from "./components/RenderProp";
// import RenderPropTwo from "./components/RenderPropTwo";
// import UserProp from "./components/UserProp";
// import ConditionalEffect from "./components/ConditionalEffect";
// import EffectUnmount from "./components/EffectUnmount";
// import EffectOnlyOnce from "./components/EffectOnlyOnce";
// import EffectWithNoDependency from "./components/EffectWithNoDependency";
// import DataFetch from "./components/DataFetch";
// import AxiosDemo from "./components/AxiosDemo";

import ContextCompT from "./components/containers/ContextCompT";
import ContextDemo from "./components/ContextDemo";

// const NewComp = HigherOrder(HOC);

export default function App() {
  return (
    <div className="App">
      <ContextDemo />
      <ContextCompT />
      {/* <AxiosDemo /> */}
      {/* <DataFetch /> */}
      {/* <EffectWithNoDependency /> */}
      {/* <EffectUnmount /> */}
      {/* <EffectOnlyOnce /> */}
      {/* <ConditionalEffect /> */}
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      {/* <HOC /> */}
      {/* <NewComp /> */}
      {/* <RenderProp />
      <RenderPropTwo />
      <UserProp render={(isLoggedIn) => (isLoggedIn ? "Bharti" : "Guest")} /> */}
      {/* <CounterComp
        render={(count, counter) => (
          <RenderProp count={count} counter={counter} />
        )}
      />
      <CounterComp
        render={(count, counter) => (
          <RenderPropTwo count={count} counter={counter} />
        )}
      /> */}
    </div>
  );
}
