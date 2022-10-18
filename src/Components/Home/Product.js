import React from "react";
import items from "../Home/Home-Images/items.png";
import arrow from "../Home/Home-Images/warrow.png";

export default function Product() {
  return (
    <section className="product-bg">
      <div className="product">
        <div className="Intro">
          <h1>For Customers</h1>
          <p>Online shopping for people who love offline shopping.</p>

          <p>
            Now no need to <span>spend 6 Hours in market</span> or{" "}
            <span>wait 3 Days</span> for the product to arrive, now search
            online what you want and buy offline as you like.
          </p>
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noreferrer"
          >
            Download now <img src={arrow} alt="" />
          </a>
        </div>
        <div className="productGroup">
          <img src={items} alt="" />
        </div>
      </div>
    </section>
  );
}
