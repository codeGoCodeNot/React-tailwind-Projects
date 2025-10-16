const Product = (props) => {
  let formattedVal = (props.price / 100).toFixed(2);

  return (
    <div className="product p-4 transition-colors duration-150 hover:rounded-[4px] hover:bg-[rgba(25,25,25,0.05)]">
      <img
        className="product-image rounded-[8px] w-full h-auto"
        width="272"
        height="300"
        alt={props.name}
        src={props.image}
      />
      <p className="product-name font-bold mb-3">{props.name}</p>
      <div className="product-price mt-3 text-[0.9rem]">${formattedVal}</div>
    </div>
  );
};

export default Product;
