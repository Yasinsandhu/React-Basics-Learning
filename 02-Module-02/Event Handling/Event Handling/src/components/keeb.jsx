// const Keeb = () => {
//   const keyDownHandler = () => {
//     console.log("A key was pressed!");
//   };

//   return <input type="text" onKeyDown={keyDownHandler} />;
// };

// export default Keeb;

// const Keeb = () => {
//   const keyUpHandler = () => {
//     console.log("The key was released!");
//   };
//   return <input type="text" onKeyUp={keyUpHandler} />;
// };

// export default Keeb;

const Keeb = () => {
  const keyDownHandler = () => {
    console.log("A key was pressed");
  };

  const keyUpHandler = () => {
    console.log("The key was released");
  };

  return (
    <input type="text" onKeyDown={keyDownHandler} onKeyUp={keyUpHandler} />
  );
};

export default Keeb;
