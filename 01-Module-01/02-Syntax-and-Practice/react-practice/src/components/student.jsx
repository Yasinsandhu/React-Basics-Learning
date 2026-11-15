function Student(props) {
  return (
    <div>
      <h3 style={{ color: props.color }}>Students Name: {props.name}</h3>
      <h3>Students Age: {props.age}</h3>
    </div>
  );
}

export default Student;
