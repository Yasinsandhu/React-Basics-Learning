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
      <p>{marks >= 75 ? "Pass" : "Fail"}</p>
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
  return <div>"You are learning React!";</div>;
};
<p>{GetMessage()}</p>;
