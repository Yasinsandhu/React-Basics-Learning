/*first functional component
Before writing, remember the three things we learned:
1. function creates a function.
2. App is our component name.
3. return gives the UI back to React.
Now, your task is to write a component named App that displays:

Hello React!

// Inside App.jsx, write the function yourself.*/
// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
// import Student from "./components/Student.jsx";
// import Product from "./components/Product.jsx";
import { Welcome } from "./components/Welcome.jsx";
import IntroducingJSX from "./Lessons/Module-01/JSX/IntroducingJSX.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
  return (
    <>
      {/* <IntroducingJSX /> */}
      <Welcome />
      <Footer />
    </>
  );

  // const products = ["Laptop", "Mobile", "Headphone"];
  // const newName = "Saad";
  // return (
  // <div>
  //   <h1 className="welcome">Hello React</h1>
  //   <h1>{newName}</h1>
  //   <h2>{25 + 25}</h2>
  //   <p>para1</p>
  //   <p>para2</p>
  //   <>
  //     <p>para1</p>
  //     <p>para2</p>
  //   </>
  //   {/* <Header name="Amina" color="green" />
  //   <Header name="Ali" color="blue"></Header>
  //   <h3>Welcome to React!</h3>
  //   <Student name="Saad" color="Purple" age={5}></Student>
  //   <Student name="Eshal" color="Pink" age={7}></Student> */}
  //   {/* <Product
  //     name="Laptop"
  //     price={150000}
  //     availability={true}
  //     color="blue"
  //   ></Product>
  //   <Product
  //     name="Mobile"
  //     price={85000}
  //     availability={true}
  //     color="green"
  //   ></Product>
  //   <Product
  //     name="Headphone"
  //     price={5000}
  //     availability={false}
  //     color="red"
  //   ></Product> */}
  //   {/* {products.map((product, index) => (
  //     <h3 key={index}>{product}</h3>
  //   ))} */}
  //   <Footer />
  // </div>
  // );
}

export default App;
