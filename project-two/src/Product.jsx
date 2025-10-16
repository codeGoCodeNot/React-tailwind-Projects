// props can be arrays or objects price name image are props
// All hooks start with use
import { useState } from "react";

const Product = ({ details: { name, price, image } }) => {
  const [counter, setCounter] = useState(0);
  let formattedVal = (price / 100).toFixed(2);
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="product p-4 transition-colors duration-150 hover:rounded-[4px] hover:bg-[rgba(25,25,25,0.05)]">
        <img
          className="product-image rounded-[8px] w-full h-auto"
          width="272"
          height="300"
          alt={name}
          src={image}
        />
        <p className="product-name font-bold mb-3">{name}</p>
        <div className="product-price mt-3 text-[0.9rem]">${formattedVal}</div>
        <button className="cursor-pointer" onClick={handleClick}>
          {counter}
        </button>
      </div>
    </>
  );
};

export default Product;
