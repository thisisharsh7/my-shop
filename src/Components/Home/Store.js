import React from "react";
import Announcement from "../Home/Short/Annoucement";
import cart from "../Home/Home-Images/store-cart.png";
import storeEnter from "../Home/Home-Images/storeEntrance.png";
import tools from "../Home/Home-Images/store-tools.png";
import { Link } from "react-router-dom";
import bgSt from './Home-Images/bgStore.png';
import mbgSt from './Home-Images/mbgSt.png';
import arrow from "../Home/Home-Images/arrow.png";

export default function Store() {
  return (
    <section className="store">
      <div className="Intro">
        <picture>
          <source media="(max-width:720px)" srcSet={mbgSt} />
          <img src={bgSt} alt="" className="bgStore" />
        </picture>
        <h1>For sellers</h1>
        <p>A quick guide for our SELLER'S AMRY</p>
        <p>
          Never created an <span>online store </span> before? No coding or
          design skills needed.
        </p>
        <Link to="/guide">
          Learn More <img src={arrow} alt="" />{" "}
        </Link>
        <div className="store-announce">
          <Announcement
            triLayer={cart}
            headText="Start Your Online store"
            paraText="MyShop enables you to sell your products online directly to your customers without setting up an e-commerce website. "
          />
          <Announcement
            triLayer={tools}
            headText="Marketing Tools"
            paraText="MyShop can help your large, medium or small business grow with a direct in-app marketing approach."
          />
        </div>
      </div>
      <div className="storeEnter">
        <img src={storeEnter} alt="" />
      </div>
    </section>
  );
}
