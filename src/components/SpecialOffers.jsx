import React from "react";
import special_item from "../images/special_item.png";

function SpecialOffers() {
  return (
    <div className="side_card">
      <h1
        style={{
          textAlign: "start",
        }}
      >
        <strong className="special_offer_title">SPECIAL OFFERS</strong>
      </h1>
      <span>BLACK GREY PASUA</span>
      <span>DRESS</span>
      <span style={{ color: "#4086d9" }}>GHC 250</span>
      <img src={special_item} alt="" />
    </div>
  );
}

export default SpecialOffers;
