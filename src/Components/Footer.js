import React from "react";
import logo from "../Images/blogo.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <img src={logo} alt="" />
            <li>Online Shopping For People Who Love Offline Shopping</li>
          </li>
          <li>
            Our Information<li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </li>
          <li>
            Social Media<li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </li>
          <li>
            Subscribe for updates
            <li>
              <input
                name="email"
                id="email"
                placeholder="Enter your email ID"
              />
              <button>Done</button>
            </li>
          </li>
        </ul>
      </div>
      <div>
        <p>
          <span>© 2022 Equalle Technologies Private Limited</span>
          <span>^</span>
        </p>
      </div>
    </footer>
  );
}
