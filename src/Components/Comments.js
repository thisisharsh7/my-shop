import React from "react";
import Comment from "./Comment";
import bgComment from './Images/bgComment.png';

export default function Comments() {
  return (
    <section className="comments">
      <img src={bgComment} alt=""  className="bgComment"/>
      <h1 className="comments-head">Testimonials</h1>
      <div>
        <Comment
          para="Mattress Buying Guide - Duroflex. From our rich experience of 5 decades we know how crucial choosing the right mattress is to get deep and healthy sleep Mattress "
          name="Aditi Kapoor"
          work="Customer"
        />
        <Comment
          para="Mattress Buying Guide - Duroflex. From our rich experience of 5 decades we know how crucial choosing the right mattress is to get deep and healthy sleep Mattress "
          name="Aditi Kapoor"
          work="Customer"
        />
        <Comment
          para="Mattress Buying Guide - Duroflex. From our rich experience of 5 decades we know how crucial choosing the right mattress is to get deep and healthy sleep Mattress "
          name="Aditi Kapoor"
          work="Customer"
        />
      </div>
    </section>
  );
}
