import EmployeeCard from "./components/EmployeeCard";

function App() {
  let employees = [
    {
      name: "Arwa",
      jobTitle: "Front-End Developer",
      department: "Engineering",
      age: 18,
      image: "",
      skills: ["React", "JavaScript", "CSS"],
      isActive: true,
    },
    {
      name: "Saad",
      jobTitle: "UI/UX Designer",
      department: "Design",
      age: 28,
      image: "",
      skills: ["Figma", "Wireframing", "Prototyping"],
      isActive: false,
    },
    {
      name: "Eshal",
      jobTitle: "Backend Developer",
      department: "Engineering",
      age: 34,
      image: "",
      skills: ["Figma", "Wireframing", "Prototyping"],
      isActive: false,
    },
  ];

  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.name}>
          <EmployeeCard emp={employee} />
        </div>
      ))}
    </div>
  );
}

export default App;
