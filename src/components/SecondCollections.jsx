import React from "react";
function SecondCollections({ title, content, imgSrc }) {
  return (
    // <div className="second_collections">
    <div className="second_collection_card">
      <span
        style={{
          wordWrap: "break-word",
          // marginTop: "10px",
          margin: "4px",
        }}
      >
        {title}
      </span>
      <img src={imgSrc} alt="" />
      <span style={{ color: "#7caec2", wordWrap: "break-word" }}>
        {content}
      </span>
      {/* </div> */}
    </div>
  );
}

export default SecondCollections;
