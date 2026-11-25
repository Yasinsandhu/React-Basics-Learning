const Catalog = (props) => {
  const discountedPrice = props.price * (props.discount / 100);
  let finalPrice = props.price - discountedPrice;
  return (
    <div className="product-card">
      <p>{props.name}</p>
      <p>Specification: {props.description}</p>
      <p>Category: {props.category}</p>
      {/* <img className="product-image" src={props.image} alt={props.name} /> */}
      <img
        className="product-image"
        src={props.image}
        alt={props.name}
        srcset=""
      />
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
          Sale
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
              {props.discount}%OFF
            </span>
          </p>
          <p>Final Price: {finalPrice.toLocaleString("en-PK")}</p>
        </>
      ) : (
        <p>Price: {props.price.toLocaleString("en-PK")}</p>
      )}

      <p>
        Availability:{" "}
        {props.quantity > 0 ? (
          <span style={{ color: "green" }}>In Stock</span>
        ) : (
          <span style={{ color: "red" }}>Out of Stock</span>
        )}
      </p>
    </div>
  );
};

export default Catalog;
