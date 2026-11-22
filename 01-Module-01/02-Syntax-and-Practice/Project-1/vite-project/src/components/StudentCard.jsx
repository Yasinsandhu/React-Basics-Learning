const StudentCard = ({ name, age, marks, isPresent, position }) => {
  return (
    <div>
      <h1>Student Report Card</h1>
      <h3>School: ABC School</h3>
      <p>Position: {position}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Mark: {marks}</p>
      <p>
        Grade:{" "}
        {marks >= 90
          ? "A"
          : marks >= 80
            ? "B"
            : marks >= 70
              ? "C"
              : marks >= 60
                ? "D"
                : "F"}
      </p>
      <p>Result: {marks >= 50 ? "Pass" : "Fail"}</p>
      <p>Attendance: {isPresent ? "Present" : "Absent"}</p>
    </div>
  );
};

export default StudentCard;
