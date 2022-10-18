import React from "react";
import comma from "../Home-Images/comma.png";

export default function Comment(props) {
  return (
    <div className="comment">
      <div className="comment-head">
        <img src={comma} alt="" />
        <p>{props.para} </p>
      </div>
      <div>
        <h1>{props.name}</h1>
        <p>{props.work}</p>
      </div>
    </div>
  );
}
