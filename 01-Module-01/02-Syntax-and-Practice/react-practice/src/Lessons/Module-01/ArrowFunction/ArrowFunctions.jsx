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

export const Addition = ({ num1, num2 }) => {
  const sum = num1 + num2;
  return (
    <div>
      <p>
        {num1} + {num2} = <strong>{sum}</strong>{" "}
      </p>
    </div>
  );
};

export const Product = () => {
  const products = ["Laptop", "Headphone", "Mobilephone"];
  return products.map((item) => <h3 key={item}>{item}</h3>);
};

export const StudentList = () => {
  const students = [
    {
      name: "Saad",
      age: 25,
    },
    {
      name: "Eshal",
      age: 27,
    },
    {
      name: "Arwa",
      age: 20,
    },
  ];

  return (
    <div>
      <h3>Students List</h3>

      {students.map((student) => (
        <p key={student.name}>
          Name: {student.name} - Age: {student.age}
        </p>
      ))}
    </div>
  );
};

export default Welcome;
