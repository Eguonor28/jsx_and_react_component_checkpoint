import React from "react";
import Defaultname from "./Defaultname";

const Namedisplay = () => {
  const yourName = "Masco";
  return (
    <div className="flex justify-center">
      {yourName ? `Hello ${yourName}` : <Defaultname />}
    </div>
  );
};

export default Namedisplay;
