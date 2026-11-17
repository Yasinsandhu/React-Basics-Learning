function Welcome() {
  return (
    <>
      <h3>Welcome to React!</h3>
      <h4>Learning React is fun</h4>
    </>
  );
}

export const Greeting = function () {
  return <h6>Hello! I am learning JavaScript.</h6>;
};

export const Student = () => {
  return <h6>I am a React student.</h6>;
};

export const User = (props) => {
  return (
    <div>
      <h5>Hello, {props.name}</h5>
    </div>
  );
};

export const Message = () => <h5>Keep practising React!</h5>;

export const Addition = () => <div>{25 + 75}</div>;

export const Product = () => {
  const products = ["Laptop", "Headphone", "Mobilephone"];
  return products.map((item) => <h3>{item}</h3>);
};

export default Welcome;
