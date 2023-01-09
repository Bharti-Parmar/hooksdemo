import React from "react";

// function RenderPropTwo() {
//   const [count, setCount] = useState(0);

//   const hoverMe = () => {
//     setCount((prevState) => prevState + 1);
//   };

//   return (
//     <>
//       <button onMouseOver={hoverMe}>Hover Clicked {count} times!</button>
//     </>
//   );
// }
export default function RenderPropTwo(props) {
  const { count, setCounter } = props;
  return (
    <>
      <button onMouseOver={setCounter}>Hover Clicked {count} times!</button>
    </>
  );
}
