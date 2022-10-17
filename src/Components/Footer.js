import React from "react";
import logo from "../Images/blogo.png";

export default function Footer() {
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
              <ul>
                <li>
                  <div>
                    <input
                      name="email"
                      id="email"
                      placeholder="Enter your email ID"
                    />
                  </div>
                  <button>Done</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <span>© 2022 Equalle Technologies Private Limited</span>
            <span>^</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
