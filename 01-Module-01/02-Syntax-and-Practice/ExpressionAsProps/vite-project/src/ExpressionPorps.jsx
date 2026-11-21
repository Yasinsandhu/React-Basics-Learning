export const Student = ({ name, age, marks, isPresent, result }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>age: {age}</p>
      <p>marks: {marks}</p>
      <p>Attendance: {isPresent ? "Present" : "Absent"}</p>
      <p>Status: {result ? "Passed" : "Failed"}</p>
    </div>
  );
};
