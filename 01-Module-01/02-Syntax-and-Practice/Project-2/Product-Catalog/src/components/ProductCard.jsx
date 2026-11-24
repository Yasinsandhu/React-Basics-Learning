export const ProductCard = (props) => {
  let discountedPrice = props.price * (props.discount / 100);
  let finalPrice = props.price - discountedPrice;
  return (
    <div>
      <p>Product Name: {props.name}</p>
      <p>Category: {props.category}</p>
      <p>Price: {props.price}</p>
      <p>Description: {props.description}</p>
      <img src={props.image} alt={props.name} />
      <p>Availability: {props.availability ? "In Stock" : "Out of Stock"}</p>
      {props.discount > 0 ? <p>On Sale</p> : null}
      {props.discount > 0 ? (
        <>
          <p>Discount: {discountedPrice}</p>
          <p>Final Price: {finalPrice}</p>
        </>
      ) : null}
    </div>
  );
};
