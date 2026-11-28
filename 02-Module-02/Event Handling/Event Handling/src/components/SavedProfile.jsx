// localStorage.setItem("user", '{"name":"Saad","city":"Chichawatni"}');
// localStorage.setItem("user", "{name:Sara}");
// localStorage.removeItem("user");
// const SavedProfile = () => {
//   const handleClick = () => {
//     try {
//       const savedData = localStorage.getItem("user");

//       if (!savedData) {
//         throw new Error("No saved profile found!");
//       }

//       const user = JSON.parse(savedData);
//       console.log("Name:", user.name);
//       console.log("City:", user.city);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return <button onClick={handleClick}>Load Profile</button>;
// };

// export default SavedProfile;

// ============================*********==============================

// Create a SavedProfile component.
// Create a handleClick function.
// Inside handleClick, use try...catch.
// Get saved data from LocalStorage using the key "user".
// If no data exists, throw an error:
// "No saved profile found!"
// Convert the saved JSON text into a JavaScript object using JSON.parse().
// Display the user's name, age, and city in the Console.
// Display a friendly error message inside catch.
// // Return a button labelled Load Profile

const SavedProfile = () => {
  const handleClick = () => {
    try {
      const savedData = localStorage.getItem("user");

      if (!savedData) {
        console.log("No saved profile found!");
      }
      const user = JSON.parse(savedData);
      console.log(user.name);
      console.log(user.age);
      console.log(user.city);
    } catch (error) {
      console.log(error.message);
    }
  };
  return <button onClick={handleClick}>Load Profile</button>;
};

export default SavedProfile;
