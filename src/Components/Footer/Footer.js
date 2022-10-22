import React from "react";
import logo from "../Footer/logo.png";
import up from "../Footer/Up.png";
import './footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  function getInput(e) {
    const k = document.querySelector("#email");
    const s = document.querySelector("#show");
    e.preventDefault();
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(k.value)) {
      s.innerText = "Done!";
    } else {
      s.innerText = "Please enter a valid email ID";
    }
    k.value = "";
  }
  function scrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <footer>
      <div className="footer-inside">
        <div>
          <ul className="first-list">
            <li className="detail">
              <Link to="/home" aria-label="Home">
                <img src={logo} alt="" className="logo" />
              </Link>

              <ul>
                <li>Online Shopping For People Who Love Offline Shopping</li>
              </ul>
            </li>
            <li>
              Our Information
              <ul>
                <li><Link to="/policy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms and Conditions</Link></li>
              </ul>
            </li>
            <li>
              Social Media
              <ul>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </li>
            <li className="subscribe">
              Subscribe for updates
              <form onSubmit={getInput}>
                <div>
                  <input
                    name="email"
                    id="email"
                    placeholder="Enter your email ID"
                  />
                </div>
                <div>
                  <input type="submit" value="Done" />
                </div>

              </form>
              <p id="show"></p>
            </li>
          </ul>
        </div>
        <div className="attribution">
          <p>© 2022 Equalle Technologies Private Limited</p>
          <img id="top-scroll" onClick={scrollTop} src={up} alt="" />
        </div>
      </div>
    </footer>
  );
}
