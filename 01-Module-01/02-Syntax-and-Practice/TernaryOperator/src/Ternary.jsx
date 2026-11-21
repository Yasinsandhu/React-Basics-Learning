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

// Temperature checker
export const Temperature = () => {
  const temperature = 35;
  return (
    <div>
      <p>{temperature >= 30 ? "Hot Weather" : "Normal Weather"}</p>
    </div>
  );
};

// Shopping discount
export const ShoppingDiscount = () => {
  const totalAmount = 1200;
  return (
    <div>
      <p>{totalAmount >= 1000 ? "Discount Applied" : "No Discount"}</p>
    </div>
  );
};

// Exam result
export const ExamResult = () => {
  const marks = 65;
  return (
    <div>
      <h2>{marks >= 50 ? "Pass" : "Fail"}</h2>
    </div>
  );
};

// Membership statur
export const MembershipStatus = () => {
  const isMember = false;

  return (
    <div>
      <p>{isMember === true ? "Premium Member" : "Regular Member"}</p>
    </div>
  );
};

// Functions inside JSX
// Welcome message

export const WelcomeMsg = () => {
  const getMsg = () => {
    return "Welcome to my React practice";
  };
  return <p>{getMsg()}</p>;
};

// Calculate total
export const CalculateTotal = () => {
  const calculate = () => {
    return 250 + 350 + 400;
  };
  return (
    <div>
      <p>Total: {calculate()}</p>
    </div>
  );
};

// Random number
export const GenerateNumber = () => {
  const num = Math.floor(Math.random() * 20) + 1;
  const randomNum = () => {
    return <p>Random Number is: {num}</p>;
  };
  return <div>{randomNum()}</div>;
};

// Combine both concepts
// Result message

export const ResultMessage = () => {
  const marks = 85;
  const getResultMSg = () => {
    return (
      <p>
        Result:{" "}
        {marks >= 50 ? "Congratulation! You Passed" : "Sorry! You Failed"}
      </p>
    );
  };
  return <>{getResultMSg()}</>;
};
