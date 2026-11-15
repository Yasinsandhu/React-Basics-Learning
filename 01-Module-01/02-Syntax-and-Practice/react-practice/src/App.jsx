/*first functional component
Before writing, remember the three things we learned:
1. function creates a function.
2. App is our component name.
3. return gives the UI back to React.
Now, your task is to write a component named App that displays:

Hello React!

Inside App.jsx, write the function yourself.*/
import Header from "./Header.jsx";
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Header />
      <h3>Welcome to React!</h3>
    </div>
  );
}

export default App;
