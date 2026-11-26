const EmployeeCard = (props) => {
  return (
    <div className="employee-card">
      <img src={props.emp.image} alt={props.emp.name} />
      <p>Name: {props.emp.name}</p>
      <p>Job Title: {props.emp.jobTitle}</p>
      <p>Department: {props.emp.department}</p>
      <p>Age: {props.emp.age}</p>

      <div className="employee-skills">
        <h5>Skills</h5>
        {props.emp.skills.map((skill) => (
          <p key={props.skill}>{skill}</p>
        ))}
      </div>
      <br />
      <p className="employee-status">
        Status:{" "}
        {props.emp.isActive ? (
          <span style={{ color: "green" }}> Active </span>
        ) : (
          <span style={{ color: "red" }}>Inactive </span>
        )}
      </p>
      <br />
    </div>
  );
};

export default EmployeeCard;
