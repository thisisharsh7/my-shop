import React from "react";
import logo from "../Footer/logo.png";
import up from "../Footer/Up.png";
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
              <Link to="/home">
                <img src={logo} alt="" />
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
                <button type="submit">Done</button>
              </form>
              <p id="show"></p>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <span>© 2022 Equalle Technologies Private Limited</span>
            <span id="top-scroll" onClick={scrollTop}>
              <img src={up} alt="" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
