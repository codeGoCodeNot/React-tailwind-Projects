// import { useState } from "react";
import Product from "./Product";

const App = () => {
  return (
    <>
      <div className="products-grid grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        <Product
          name="Pineapple"
          price={200}
          image="https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/pineapple.jpg"
        />
        <Product
          name="Banana"
          price={75}
          image="https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/banana.jpg"
        />
      </div>
    </>
  );
};

export default App;
