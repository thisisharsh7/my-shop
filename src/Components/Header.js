import React from "react";
import ellipse from "../Images/ellipse.png";
import ring from "../Images/ring.png";
import logo from "../Images/logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
        <img src={ellipse} alt="" />
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>Seller Guide</li>
          <li>FAQs</li>
        </ul>
        <ul>
          <li><button>Contact Us</button></li>
          <li><button>Join As Seller</button></li>
        </ul>
      </nav>
    </header>
  );
}
