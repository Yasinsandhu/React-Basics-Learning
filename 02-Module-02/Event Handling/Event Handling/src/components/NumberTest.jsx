// const NumberTest = () => {
//   const handleClick = () => {
//     try {
//       throw new Error("Something went wrong!");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return <button onClick={handleClick}>Test Number</button>;
// };

// export default NumberTest;

// Create an AgeCheck component. Use age = 16. Show an error if age is below 18.
const AgeCheck = () => {
  const handleClick = () => {
    try {
      const age = 16;

      if (age > 18) {
        throw new Error("You must be 18 or older!");
      }
      console.log("Access granteed");
    } catch (error) {
      console.log(error.message);
    }
  };
  return <button onClick={handleClick}>Check Age</button>;
};

export default AgeCheck;
