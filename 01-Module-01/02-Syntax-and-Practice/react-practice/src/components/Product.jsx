function Product(props) {
  return (
    <div>
      <h3 style={{ color: props.color }}>{props.name}</h3>
      <p>
        {props.price} {props.availability ? "Available" : "Out of Stock"}
      </p>
    </div>
  );
}

export default Product;
