import { product } from "./product";
import "./App.css";
import Navbar from "./component/Navbar";
import Name from "./component/Name";
import Image from "./component/Image";
import Description from "./component/Description";
import Price from "./component/Price";
import Namedisplay from "./component/Namedisplay";
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
      <div className="grid grid-cols-3">
        <Price />
        <Name />
        <Image />
        <Description />
        <Namedisplay />
      </div>
    </div>
  );
}

export default App;
