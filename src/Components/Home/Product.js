import React from "react";
import fitems from "../Home/Home-Images/fitems.png";
import arrow from "../Home/Home-Images/warrow.png";
import sitems from './Home-Images/sitems.png';

export default function Product() {
  return (
    <section className="product-bg">
      <div className="product">
        <div className="iproduct">
          <div className="Intro">
            <h1>For Customers</h1>
            <p>Online shopping for people who love offline shopping.</p>

            <p>
              Now no need to <span>Spend 6 Hours In Market</span> or{" "}
              <span>Wait 3 Days</span> for the product to arrive, now search
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
          <img src={sitems} alt="" className="productGroup siproduct" />



          <img src={fitems} alt="" className="productGroup fiproduct" />
        </div>
      </div>
    </section>
  );
}
