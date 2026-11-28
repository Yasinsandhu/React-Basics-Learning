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
// const AgeCheck = () => {
//   const handleClick = () => {
//     try {
//       const age = 16;

//       if (age < 18) {
//         throw new Error("You must be 18 or older!");
//       }
//       console.log("Access granteed");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   return <button onClick={handleClick}>Check Age</button>;
// };

// export default AgeCheck;

// Create a FormCheck component. Use an empty email. Show an error if the email is empty.
const FormCheck = () => {
  const handleClick = () => {
    try {
      const email = "";
      if (email === "") {
        throw new Error("Enter Valid Email");
      }
      console.log("Access granteed");
    } catch (error) {
      console.log(error.message);
    }
  };
  return <button onClick={handleClick}>Check Email</button>;
};

export default FormCheck;

// Create a CartCheck component. Use stock = 3 and requested quantity = 5. Show an error if the requested quantity exceeds stock.

export const CartCheck = () => {
  const handleClick = () => {
    try {
      const stock = 3;
      const requestedStock = 5;
      if (requestedStock > stock) {
        throw new Error("Requested Quantity exceeds stock");
      }
      console.log("Order Accepted");
    } catch (error) {
      console.log(error.message);
    }
  };
  return <button onClick={handleClick}>Check Cart</button>;
};

// Create a BankCheck component. Use balance = 8000 and withdrawal = 10000. Show an error if the balance is insufficient.
export const BankCheck = () => {
  const handleClick = () => {
    try {
      const balance = 8000;
      const withdrawal = 10000;
      if (withdrawal > balance) {
        throw new Error("Balance is insufficient");
      }
      console.log("Withdraw Successfull");
    } catch (error) {
      console.log(error.message);
    }
  };
  return <button onClick={handleClick}>Balance Check</button>;
};
