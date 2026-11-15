// Practice 2
// Our goal: Create a Header component in its own file and display it inside our App component.
function Header(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>My name is {props.name}</h1>
    </div>
  );
}
export default Header;
