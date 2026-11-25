const About = (props) => {
  return (
    <div className="about-card">
      <h3>About Me:</h3>
      <p>{props.introduction}</p>
    </div>
  );
};

export default About;
