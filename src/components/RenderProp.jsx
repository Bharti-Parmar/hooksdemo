import React from "react";

// const RenderProp = () => {
//   const [count, setCounter] = useState(0);
//   function clickMe() {
//     setCounter((prevState) => prevState + 1);
//   }

//   return (
//     <>
//       <button onClick={() => clickMe()}>Clicked {count} times!</button>
//     </>
//   );
// };

export default function RenderProp(props) {
  const { count, setCounter } = props;
  return (
    <>
      <button onClick={() => setCounter()}>Clicked {count} times!</button>
    </>
  );
}
