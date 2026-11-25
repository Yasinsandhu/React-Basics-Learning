const Skills = () => {
  let skills = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <div>
      <h3>My Skills:</h3>
      {skills.map((skill) => (
        <p key={skill}>{skill}</p>
      ))}
    </div>
  );
};

export default Skills;
