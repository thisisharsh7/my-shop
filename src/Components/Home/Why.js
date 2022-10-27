import React from "react";
import Announcement from "../Home/Short/Annoucement";
import triLayer from "../Home/Home-Images/triLayer.png";

export default function Why() {
  return (
    <section className="shopSection">
      <div className="whyShop">
        <div className="shopIntro">
          <h1>Why Myshop</h1>
          <p>Use Us Twice You'll Use Us For Life</p>
        </div>
        <div className="announce-group">
          <Announcement
            triLayer={triLayer}
            headText="Launch your store"
            paraText="MyShop helps you launch your online store in less than 30 seconds."
          />
          <Announcement
            triLayer={triLayer}
            headText="Multi Manage"
            paraText="We handle everything from managing orders, products, marketing and inventory."
          />
          <Announcement
            triLayer={triLayer}
            headText="Perfect Balance"
            paraText="Enjoy the benefits of both online and offline shopping right from one app."
          />
        </div>
      </div>
    </section>
  );
}
