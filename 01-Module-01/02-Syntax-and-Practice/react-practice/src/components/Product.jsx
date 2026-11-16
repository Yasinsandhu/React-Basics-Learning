function Product(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <p style={{ color: props.availability ? "green" : "red" }}>
        {props.availability ? "Available" : "Out of Stock"}
      </p>
    </div>
  );
}

export default Product;
