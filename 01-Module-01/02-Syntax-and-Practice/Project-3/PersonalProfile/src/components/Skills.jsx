const Skills = (props) => {
  return (
    <div className="skills-section">
      <h3>My Skills:</h3>
      {props.skills.map((skill) => (
        <p key={skill} className="skill-tag">
          {skill}
        </p>
      ))}
    </div>
  );
};

export default Skills;
