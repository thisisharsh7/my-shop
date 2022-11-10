import React from "react";
import storeEnter from "../Home-Images/storeEntrance.png";
import { Link } from "react-router-dom";
import bgSt from '../Home-Images/bgStore.png';
import mbgSt from '../Home-Images/mbgSt.png';
import arrow from "../Home-Images/arrow.png";
import Announcements from "./Announcements";

export default function Store() {
  return (
    <section className="store">
      <div className="Intro">
        <picture>
          <source media="(max-width:900px)" srcSet={mbgSt} />
          <img src={bgSt} alt="" className="bgStore" loading='lazy' width={100} height={100} />
        </picture>
        <h1>For sellers</h1>
        <p>A quick guide for our SELLER'S AMRY</p>
        <p>
          Never created an <span>online store </span> before? No coding or
          design skills needed.
        </p>
        <Link to="/guide" onClick={() => { window.scrollTo(0, 0); }} >
          Learn More <img src={arrow} alt="" />
        </Link>
        <Announcements />
      </div>
      <div className="storeEnter">
        <img src={storeEnter} alt="" loading="lazy" width={100} height={100} />
      </div>
    </section>
  );
}
