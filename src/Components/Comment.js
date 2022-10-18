import React from "react";
import comma from "./Images/comma.png";

export default function Comment(props) {
  return (
    <div className="comment">
      <div className="comment-head">
        <div>
          <img src={comma} alt="" />
          <img src={comma} alt="" />
        </div>
        <p>{props.para} </p>
      </div>
      <div>
        <h1>{props.name}</h1>
        <p>{props.work}</p>
      </div>
    </div>
  );
}
