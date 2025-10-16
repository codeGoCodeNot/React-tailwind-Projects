// import { useState } from "react";
import Product from "./Product";
import Navbar from "./Navbar";
import Landing from "./Landing";

const App = ({ products }) => {
  return (
    <>
      <div className="wrapper-gray bg-gray-500 text-black">
        <div className="container max-w-[900px] mx-auto px-4">
          <Navbar />
        </div>
      </div>
      <div className="container page-wrapper mx-auto mt-[20px]">
        <Landing />
      </div>
      <div className="products-grid products-grid grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        {products.map((product) => (
          <Product key={product.id} details={product} />
        ))}
      </div>
    </>
  );
};

export default App;
