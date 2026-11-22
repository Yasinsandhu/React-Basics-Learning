import StudentCard from "./components/StudentCard.jsx";

function App() {
  const students = [
    { name: "Saad", age: 18, marks: 55, isPresent: true },
    { name: "Eshal", age: 20, marks: 95, isPresent: false },
    { name: "Arwa", age: 17, marks: 85, isPresent: true },
    { name: "Fatima", age: 12, marks: 82, isPresent: true },
  ];
  const totalStudents = students.length;
  let sortedStudents = [...students].sort((a, b) => b.marks - a.marks);
  return (
    <div>
      <h2>Total Students: {totalStudents}</h2>
      {students.map((student) => (
        <StudentCard
          key={student.name}
          name={student.name}
          age={student.age}
          marks={student.marks}
          isPresent={student.isPresent}
        />
      ))}
    </div>
  );
}

export default App;
