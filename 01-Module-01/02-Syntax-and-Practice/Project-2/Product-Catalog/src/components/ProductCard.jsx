export const ProductCard = (props) => {
  let discountedPrice = props.price * (props.discount / 100);
  let finalPrice = props.price - discountedPrice;
  return (
    <div className="product-card">
      <p>{props.name}</p>
      <p>Category: {props.category}</p>
      <p>Description: {props.description}</p>
      <img className="product-image" src={props.image} alt={props.name} />
      <p>
        Availability:{" "}
        {props.availability ? (
          <span style={{ color: "Green" }}>In Stock </span>
        ) : (
          <span style={{ color: "Red" }}>Out of Stock</span>
        )}
      </p>
      {props.discount > 0 ? (
        <p
          style={{
            backgroundColor: "yellow",
            color: "black",
            borderRadius: "6px",
            padding: "5px 5px",
            display: "inline-block",
          }}
        >
          On Sale
        </p>
      ) : null}

      {props.discount > 0 ? (
        <>
          <p>
            <del>{props.price.toLocaleString("en-PK")}</del>
            <span
              style={{
                color: "yellow",
                backgroundColor: "black",
                borderRadius: "10%",
              }}
            >
              {" "}
              {props.discount}% OFF
            </span>
          </p>
          <p>Final Price: {finalPrice.toLocaleString("en-PK")}</p>
        </>
      ) : (
        <p>Price: {props.price.toLocaleString("en-PK")}</p>
      )}
    </div>
  );
};
