import React, { useEffect, useState } from "react";
import GooglePlay from "../Home/Home-Images/google-play.png";
import AppleStore from "../Home/Home-Images/apple-pay.png";
import womanOnline from "../Home/Home-Images/woman-offline.png";
import womanOffline from "../Home/Home-Images/woman-online.png";
import womanLike from "../Home/Home-Images/woman-like.png";
import { Link } from "react-router-dom";

export default function Hero() {
  const [offline, setOffline] = useState(1);
  const [online, setOnline] = useState(0);
  const [like, setLike] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (like) {
        setOffline(1);
        setLike(0);
        setOnline(0);
      } else if (offline) {
        setOffline(0);
        setLike(0);
        setOnline(1);
      } else {
        setOffline(0);
        setLike(1);
        setOnline(0);
      }
    }, 2200)
  })
  return (
    <>
      <section className="hero-bg">
        <div className="hero">
          <div className="text-hero">
            <div className="head-hero">
              <h1>
                Search online buy</h1>
              <div className="relative-text">
                <h1 className="offline" style={{ opacity: offline }}> offline.</h1>
                <h1 className="online" style={{ opacity: online }}>online.</h1>
                <h1 className="like" style={{ opacity: like }}>anyway you like.</h1>
              </div>
            </div>
            <p>
              Now search online what you want and buy offline as you like.
            </p>
            <Link to="/patch"
            >
              Join Early Access
            </Link>
            <ul>
              <li>
                <img src={GooglePlay} alt="" />
              </li>
              <li>
                <img src={AppleStore} alt="" />
              </li>
            </ul>
          </div>
          <div className="hero-img">
            <img src={womanOffline} alt="" className="online" style={{ opacity: online }} />
            <img src={womanOnline} alt="" className="offline" style={{ opacity: offline }} />
            <img src={womanLike} alt="" className="like" style={{ opacity: like }} />
          </div>
        </div>
        <div className="stats">
          <p>
            <span>14+</span>
            <span>Pincodes Covered</span>
          </p>
          <p>
            <span>4.7+</span>
            <span>Average Ratings</span>
          </p>
          <p>
            <span>20+</span>
            <span>Shopkeepers</span>
          </p>
          <p>
            <span>100+</span>
            <span>Customers</span>
          </p>
        </div>
      </section>
    </>
  );
}
