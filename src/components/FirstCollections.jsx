import { auto } from "@popperjs/core";
import React from "react";

function FirstCollections({ title, content, imgSrc }) {
  return (
    <div className="First_collections">
      <div className="first_collection_card">
        <span
          style={{
            wordWrap: "break-word",
            fontWeight: "bold",
            paddingBottom: "10px",
          }}
        >
          {title}
        </span>
        <img src={imgSrc} alt="" />
        <span style={{ color: "#7caec2", wordWrap: "break-word" }}>
          {content}
        </span>
      </div>
    </div>
  );
}

export default FirstCollections;
