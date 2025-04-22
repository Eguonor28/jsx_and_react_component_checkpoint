import React from "react";
import { product } from "../product";

const Description = () => {
  return (
    <div>
      {" "}
      {product.map((product, index) => (
        <div key={index} className="flex items-center flex-col ">
          <p className="flex justify-center max-w-80">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Description;
