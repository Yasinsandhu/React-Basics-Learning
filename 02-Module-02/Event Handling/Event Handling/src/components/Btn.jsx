// Create a React button that displays a message in the browser console whenever someone clicks it.

function Btn() {
  const clickHandler = () => {
    console.log("Button clicked!");
  };
  return <button onClick={clickHandler}>Click Me</button>;
}

export default Btn;
