import React, { useRef } from "react";
import logo from "../Footer/logo.png";
import up from "../Footer/Up.png";
import "./footer.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export default function Footer() {
  const subscribe = useRef();
  function getSubs(e) {
    const sBg = document.querySelector(".sBg");
    const k = document.querySelector("#email");
    const s = document.querySelector("#show");
    e.preventDefault();
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(k.value)) {
      sBg.classList.toggle("floader");
      emailjs
        .sendForm(
          "service_u65dn0o",
          "template_cwxksxg",
          subscribe.current,
          "kaobwBiU0Spgr3VIe"
        )
        .then(
          (result) => {
            s.innerText = "Done!";
            sBg.classList.toggle("floader");
          },
          (error) => {
            alert("server error");
            sBg.classList.toggle("floader");
          }
        );
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
              <Link to="/home" aria-label="Home" onClick={scrollTop}>
                <img src={logo} alt="" className="logo" />
              </Link>

              <ul>
                <li>Online Shopping For People Who Love Offline Shopping</li>
              </ul>
            </li>
            <li>
              Our Information
              <ul>
                <li>
                  <Link to="/policy" onClick={scrollTop}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" onClick={scrollTop}>Terms and Conditions</Link>
                </li>
              </ul>
            </li>
            <li>
              Social Media
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </li>
            <li className="subscribe">
              Subscribe for updates
              <form ref={subscribe} onSubmit={getSubs}>
                <div>
                  <input
                    name="useremail"
                    id="email"
                    placeholder="Enter your email ID"
                  />
                </div>
                <div className="sBg">
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
