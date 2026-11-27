const Keeb = () => {
  const keyDownHandler = () => {
    console.log("A key was pressed!");
  };

  return <input type="text" onKeyDown={keyDownHandler} />;
};

export default Keeb;
