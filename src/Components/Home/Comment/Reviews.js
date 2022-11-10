import React from "react";
import bgComment from "../Home-Images/bgComment.png";
import bgComment2 from '../Home-Images/bgComment2.png';
import Comments from "./Comments";

export default function Reviews() {
  return (
    <section className="comments">
      <picture>
        <source media="(max-width:900px)" srcSet={bgComment2} />
        <img src={bgComment} alt="" className="bgComment" />
      </picture>

      <h1 className="comments-head">TEST AUDIENCE REVIEWS</h1>
      <Comments />
    </section>
  );
}
