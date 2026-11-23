export const ProductCard = (props) => {
  return (
    <div>
      <p>Product Name: {props.name}</p>
      <p>Category: {props.category}</p>
      <p>Price: {props.price}</p>
      <p>Description: {props.description}</p>
      <img src={props.image} alt={props.name} />
      <p>Availability: {props.availability ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};
