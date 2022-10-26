import React, { useState } from "react";
import logo from "../Header/logo.png";
import hamburger from '../Header/hamburger.svg';
import { NavLink, useLocation } from "react-router-dom";
import './header.css';


export default function Header() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  function toggleShow() {
    show ? setShow(false) : setShow(true);
  }
  return (
    <header>
      <nav>
        <NavLink to="/" aria-label="Home" ><img src={logo} alt="" className="logo" /></NavLink>
        <div className="desktop-nav">
          <ul>
            <li><NavLink to="/" style={{
              color: (location.pathname==="/") ? '#fd6636' : '',
            }} >Home</NavLink></li>
            <li><NavLink to="/guide" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '',
            })} >Seller Guide</NavLink></li>
            <li><NavLink to="/faq" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '',
            })} >FAQs</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li><NavLink to="/patch" >Join As Seller</NavLink>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleShow}>
          <img src={hamburger} alt="" />
        </div>
        <div className={show ? "mobile-nav active" : "mobile-nav"}>
          <ul>
            <li><NavLink to="/" style={{
              color: (location.pathname==="/") ? '#fd6636' : '',
            }} onClick={toggleShow} >Home</NavLink></li>
            <li><NavLink to="/guide" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '',
            })} onClick={toggleShow}  >Seller Guide</NavLink></li>
            <li><NavLink to="/faq" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '',
            })} onClick={toggleShow}  >FAQs</NavLink></li>
            <li><NavLink to="/contact" style={({ isActive }) => ({
              color: isActive ? '#fd6636' : '',
            })} onClick={toggleShow} >Contact Us</NavLink></li>
            <li ><NavLink to="/patch" onClick={toggleShow} >Join As Seller</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
