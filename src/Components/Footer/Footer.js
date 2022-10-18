import React from "react";
import logo from "../Footer/logo.png";
import up from "../Footer/Up.png";

export default function Footer() {
  function getInput(e) {
    const k = document.querySelector("input");
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
              <img src={logo} alt="" />
              <ul>
                <li>Online Shopping For People Who Love Offline Shopping</li>
              </ul>
            </li>
            <li>
              Our Information
              <ul>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </li>
            <li>
              Social Media
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
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
                <button>Done</button>
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
