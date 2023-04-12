import React from "react";
import empty from "./empty.svg";
import "./style.css";

const NoData = () => {
  return (
    <div className="empty-movie">
      <img src={empty} alt=" Empty " />
      <h3 className="title">No Results Found</h3>
    </div>
  );
};

export default NoData;
