import React from "react";
import { product } from "../product";

const Name = () => {
  return (
    <div>
      {" "}
      {product.map((product, index) => (
        <div key={index} className="flex items-center flex-col ">
          <p className="flex justify-center">{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Name;
