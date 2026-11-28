// Create a new component called SavedData.jsx.

// Scenario: Your app tries to load a user's saved profile.
// - Use this valid JSON text: '{"name":"Sara","city":"Lahore"}'.
// - Convert it using JSON.parse().
// - Display the user's name and city in the Console.
// // - Then change the text to invalid JSON and use catch to display a friendly error message.

const SavedData = () => {
  const handleClick = () => {
    const savedata = '{"name":"Saad","city":"Chichawatni"}';

    try {
      const user = JSON.parse(savedata);
      console.log(user.name);
      console.log(user.city);
    } catch (error) {
      console.log("Saved data is invalid");
    }
  };

  return <button onClick={handleClick}>Check Saved Data</button>;
};

export default SavedData;
