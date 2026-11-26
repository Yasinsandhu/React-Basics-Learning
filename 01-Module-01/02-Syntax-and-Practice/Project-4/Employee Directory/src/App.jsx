import EmployeeCard from "./components/EmployeeCard";
import "./App.css";
function App() {
  let employees = [
    {
      name: "Arwa",
      jobTitle: "Front-End Developer",
      department: "Engineering",
      age: 18,
      image: "Arwa.png",
      skills: ["React", "JavaScript", "CSS"],
      isActive: true,
    },
    {
      name: "Saad",
      jobTitle: "UI/UX Designer",
      department: "Design",
      age: 28,
      image: "Saad.png",
      skills: ["Figma", "Wireframing", "Prototyping"],
      isActive: false,
    },
    {
      name: "Eshal",
      jobTitle: "Backend Developer",
      department: "Engineering",
      age: 34,
      image: "Eshal.png",
      skills: ["Dhobi", "Wireframing", "Prototyping"],
      isActive: false,
    },
    {
      name: "Fatima",
      jobTitle: "QA Engineer",
      department: "Quality Assurance",
      age: 34,
      image: "Arwa.png",
      skills: ["Testing", "Bug Tracking", "Automation"],
      isActive: true,
    },
    {
      name: "Hiba",
      jobTitle: "Project Manager",
      department: "Operations",
      age: 42,
      image: "Eshal.png",
      skills: ["Planning", "Agile", "Communication"],
      isActive: false,
    },
  ];

  return (
    <div className="employee-directory">
      <h1>Employees Directory</h1>
      <h5>Total Employees: {employees.length}</h5>
      {employees.map((employee) => (
        <div key={employee.name}>
          <EmployeeCard emp={employee} />
        </div>
      ))}
    </div>
  );
}

export default App;
