import React from "react";

export default function Announcement(props) {
  return (
    <div className="announce">
      <img src={props.triLayer} alt="" />
      <h2>{props.headText}</h2>
      <p>{props.paraText}</p>
    </div>
  );
}
