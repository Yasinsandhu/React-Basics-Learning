const AgeChecker = () => {
  const age = 16;

  return (
    <div>
      <p>{age >= 18 ? "Adult" : "Minor"}</p>
    </div>
  );
};

export default AgeChecker;

export const Result = () => {
  const marks = 75;

  return (
    <div>
      <p>{marks >= 50 ? "Pass" : "Fail"}</p>
    </div>
  );
};

export const IsLogged = () => {
  const isLoggedIn = true;

  return (
    <div>
      <p>{isLoggedIn === true ? "Welcome Back" : "Please Login"}</p>
    </div>
  );
};

export const GetMessage = () => {
  const learningReact = () => {
    return "I am learning React";
  };
  return <div> {learningReact()}</div>;
};

export const GetRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return (
    <div>
      <h3>Your random number is: {randomNumber}</h3>
    </div>
  );
};
