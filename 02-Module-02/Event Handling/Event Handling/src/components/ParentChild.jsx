const Btn = (props) => {
  return <button onClick={props.onClick}>Click Me</button>;
};
const ParentChild = () => {
  const handleClick = () => {
    console.log("Parent function is working!");
  };
  return <Btn onClick={handleClick} />;
};

export default ParentChild;
