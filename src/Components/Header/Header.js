import React, { useState } from "react";
import logo from "../Header/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [show, setShow] = useState(false);
  function toggleShow() {
    show ? setShow(false) : setShow(true);
  }
  return (
    <header>
      <nav>
        <NavLink to="/home" style={({ isActive }) => ({
          color: isActive ? '#fd6636' : '#0a0839',
        })}  ><img src={logo} alt="" /></NavLink>
        <div className="desktop-nav">
          <ul>
            <li><NavLink to="/home" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '#0a0839',
            })} >Home</NavLink></li>
            <li><NavLink to="/guide" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '#0a0839',
            })} >Seller Guide</NavLink></li>
            <li><NavLink to="/faq" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '#0a0839',
            })} >FAQs</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li><NavLink to="/contact" >Join As Seller</NavLink>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleShow}>
          <div className="mid-line"></div>
        </div>
        <div className={show ? "mobile-nav active" : "mobile-nav"}>
          <ul>
            <li><NavLink to="/home" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '#0a0839',
            })} >Home</NavLink></li>
            <li>Plans</li>
            <li><NavLink to="/guide" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '#0a0839',
            })} >Seller Guide</NavLink></li>
            <li><NavLink to="/faq" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '#0a0839',
            })} >FAQs</NavLink></li>
            <li><NavLink to="/contact" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '#0a0839',
            })} >Contact Us</NavLink></li>
            <li>Join As Seller</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
