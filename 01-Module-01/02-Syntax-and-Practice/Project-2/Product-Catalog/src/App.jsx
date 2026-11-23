import { ProductCard } from "./components/ProductCard.jsx";
function App() {
  const products = [
    {
      name: "Headphone",
      category: "Electronics",
      price: 5000,
      discount: 10,
      image: "",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, facilis.",
      availability: true,
    },
    {
      name: "T-Shirt",
      category: "Clothing",
      price: 2000,
      discount: 0,
      image: "",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, facilis.",
      availability: true,
    },
    {
      name: "Watch",
      category: "Accessories",
      price: 4000,
      discount: 15,
      image: "",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, facilis.",
      availability: true,
    },
    {
      name: "Shoes",
      category: "Clothing",
      price: 6000,
      discount: 20,
      image: "",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, facilis.",
      availability: true,
    },
    {
      name: "Backpack",
      category: "Accessories",
      price: 3000,
      discount: 0,
      image: "",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, facilis.",
      availability: true,
    },
    {
      name: "Keyboard",
      category: "Electronics",
      price: 3500,
      discount: 5,
      image: "",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, facilis.",
      availability: true,
    },
  ];

  return (
    <div>
      <ProductCard />
    </div>
  );
}

export default App;
