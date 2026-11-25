import Catalog from "./components/Catalog";
import "./App.css";

function App() {
  const products = [
    {
      name: "Laptop",
      price: 85000,
      category: "Electronics",
      discount: 14,
      image: "public/laptop.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availability: true,
      quantity: 1,
    },
    {
      name: "Monitor",
      price: 14999,
      category: "Electronics",
      discount: 0,
      image: "public/laptop.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availability: false,
      quantity: 14,
    },
    {
      name: "Headphone",
      price: 10999,
      category: "Electronics",
      discount: 0,
      image: "public/headphone.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availability: true,
      quantity: 0,
    },
    {
      name: "Mouse",
      price: 5999,
      category: "Electronics",
      discount: 5,
      image: "public/laptop.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availability: true,
      quantity: 0,
    },
    {
      name: "Keyboard",
      price: 7499,
      category: "Electronics",
      discount: 0,
      image: "public/laptop.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availability: false,
      quantity: 1,
    },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <Catalog {...product} key={product.name} />
      ))}
    </div>
  );
}
export default App;
