import { product } from "./product";
import "./App.css";
import Navbar from "./component/Navbar";
function App() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* body  */}
      {/* webpage header */}
      <h1 className=" mb-4 flex mt-4 text-4xl justify-center font-semibold">
        The Future, One Line At A time
      </h1>
      {/* calling the product array using the map function to get data on items stored */}
      <div className="gap-2 p-2 justify-center bg-gray-200 grid grid-cols-3">
        {product.map((product, index) => (
          <div key={index} className="flex items-center flex-col  ">
            <img
              className="rounded-2xl object-cover w-90 h-70  shadow-2xl  shadow-gray-600"
              src={product.image}
              alt=""
            />
            <p className="flex justify-center">{product.name}</p>
            <p className="flex justify-center">{product.price}</p>
            <p className="flex justify-center max-w-80">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
