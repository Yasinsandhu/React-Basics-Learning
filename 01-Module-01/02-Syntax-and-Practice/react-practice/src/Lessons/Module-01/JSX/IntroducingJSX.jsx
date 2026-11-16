import "./IntroducingJSX.css";

function IntroducingJSX() {
  const studentName = "Saad";
  return (
    <div>
      <h6>JavaScript variable inside JSX.</h6>
      <h1 className="student-title">{studentName}</h1>
      <h2>{100 + 250}</h2>
      <div>
        <h4>Welcome to My Website</h4>
        <p>
          Yeh pehla paragraph hai jo React component ke andar likha gaya hai.
        </p>
        <p>Yeh doosra paragraph hai.</p>

        <>
          <h5>This is inside Fragment 1</h5>
          <h5>This is inside Fragment 2</h5>
        </>
      </div>
    </div>
  );
}

export default IntroducingJSX;
