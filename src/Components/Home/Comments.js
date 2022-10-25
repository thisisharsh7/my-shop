import React from "react";
import Comment from "../Home/Short/Comment";
import bgComment from "../Home/Home-Images/bgComment.png";

export default function Comments() {
  return (
    <section className="comments">
      <img src={bgComment} alt="" className="bgComment" />
      <h1 className="comments-head">TEST AUDIENCE REVIEWS</h1>
      <div className="comments-scroll">
        <Comment
          para="I tried so many e-commerce platforms for my business but they all were very costly and complex, MyShop makes managing my online store very easy and convenient. "
          name="Shreyas Jain"
          work="Seller"
        />
        <Comment
          para="MyShop provides a great user experience for shopping. Usually I used to call the kirana store and order products on phone which was very tough but now with MyShop, it’s been a real smooth journey. "
          name="Dipti Soman"
          work="Customer"
        />
        <Comment
          para="After Covid, my customer walk-ins have been significantly reduced, MyShop is giving me the chance to compete with big e-commerce companies."
          name="Ram Pathak"
          work="Seller"
        />
        <Comment
          para="I wanted to buy a phone, but I don’t like to order online and I am too lazy to spend hours and days in the market, but via MyShop, I bought my phone from an offline seller without spending hours in market."
          name="Bhavi Dhore"
          work="Customer"
        />
      </div>
    </section>
  );
}
