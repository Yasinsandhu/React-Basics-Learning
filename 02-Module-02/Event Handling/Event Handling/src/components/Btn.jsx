// Create a React button that displays a message in the browser console whenever someone clicks it.

// function Btn() {
//   const clickHandler = () => {
//     console.log("Button clicked!");
//   };
//   return <button onClick={clickHandler}>Click Me</button>;
// }

// export default Btn;

// function Btn() {
//   const mouseOverHandler = () => {
//     console.log("Mouse is over the button!");
//   };
//   return <button onMouseOver={mouseOverHandler}>Click Me</button>;
// }

// export default Btn;

function Btn() {
  const doubleClickHandler = () => {
    console.log("Button double-clicked!");
  };

  return <button onDoubleClick={doubleClickHandler}>I Am Button</button>;
}

export default Btn;
