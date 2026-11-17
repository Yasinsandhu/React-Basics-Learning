function Welcome() {
  return (
    <>
      <h3>Welcome to React!</h3>
      <h4>Learning React is fun</h4>
    </>
  );
}

export const Greeting = function () {
  return <h2>Hello! I am learning JavaScript.</h2>;
};

export const Student = () => {
  return <h2>I am a React student.</h2>;
};

export const User = (props) => {
  return (
    <div>
      <h5>Hello, {props.name}</h5>
    </div>
  );
};

export const Message = () => <h5>Keep practising React!</h5>;


export default Welcome;
