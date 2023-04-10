import { useState } from "react";
import Header from "./Header";
import "../css/App.css";
import Banner from "./Banner";
import FirstCollections from "./FirstCollections";
import SecondCollections from "./SecondCollections";
import { Items as items } from "./Items";
import SpecialOffers from "./SpecialOffers";
import Shope from "./Shop";

function App() {
  const [mobile, setMobile] = useState(false);
  return (
    <div>
      <Header mobile={mobile} setMobile={setMobile} />
      <Shope />
    </div>
  );
}

export default App;
