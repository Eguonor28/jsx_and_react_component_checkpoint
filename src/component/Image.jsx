import React from "react";
import { product } from "../product";

const Image = () => {
  return (
    <div>
      {" "}
      {product.map((product, index) => (
        <div key={index} className="flex items-center flex-col ">
          <img
            className="rounded-2xl object-cover w-90 h-70  shadow-2xl  shadow-gray-600"
            src={product.image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Image;
