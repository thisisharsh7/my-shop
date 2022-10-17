import React, { useState } from "react";
import logo from "../Images/logo.png";

export default function Header() {
  const [show, setShow] = useState(false);
  function toggleShow() {
    show ? setShow(false) : setShow(true);
  }
  return (
    <header>
      <nav>
        <img src={logo} alt="" />
        <div className="desktop-nav">
          <ul>
            <li>Home</li>
            <li>Seller Guide</li>
            <li>FAQs</li>
          </ul>
          <ul>
            <li>
              <button>Contact Us</button>
            </li>
            <li>
              <button>Join As Seller</button>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleShow}>
          <div className="mid-line"></div>
        </div>
        <div className={show ? "mobile-nav active" : "mobile-nav"}>
          <ul>
            <li>Home</li>
            <li>Plans</li>
            <li>Seller Guide</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Join As Seller</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
