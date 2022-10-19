import React, { useState } from "react";
import logo from "../Header/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  function toggleShow() {
    show ? setShow(false) : setShow(true);
  }
  return (
    <header>
      <nav>
        <Link to="/" ><img src={logo} alt="" /></Link>
        <div className="desktop-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/guide">Seller Guide</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
          <ul>
            <li><Link to="/contact">Contact Us</Link>
            </li>
            <li><Link to ="/contact">Join As Seller</Link>
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
