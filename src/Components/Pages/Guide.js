import React from "react";
import storeStats from "../Images/storeStats.png";
import one from "../Images/Guide/one.png";
import two from "../Images/Guide/two.png";
import three from "../Images/Guide/three.png";
import four from "../Images/Guide/four.png";
import five from "../Images/Guide/five.png";
import six from "../Images/Guide/six.png";
import seven from "../Images/Guide/seven.png";
import eone from "../Images/Guide/eone.png";
import etwo from "../Images/Guide/etwo.png";
import ethree from "../Images/Guide/ethree.png";
import efour from "../Images/Guide/efour.png";
import efive from "../Images/Guide/efive.png";
import esix from "../Images/Guide/esix.png";
import eseven from "../Images/Guide/eseven.png";
import fbI from "../Images/Guide/fb.png";
import twoStoreStats from "../Images/storeStats2.png";
import headList from "../Images/Guide/headList.png";
import { motion } from "framer-motion";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Guide() {
  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="guide">
          <div className="guide-intro">
            <h1>
              Quick <span>guide</span> for our <span>seller</span> army
            </h1>
            <picture>
              <source media="(max-width:600px)" srcSet={twoStoreStats} />
              <img src={storeStats} alt="" />
            </picture>
          </div>
          <div className="mguideHead">
            <img src={headList} alt="" />

            <div className="mguideList">
              <div className="guideText">
                <p>Step 1</p>
                <h2>Name your store</h2>
                <p>
                  It all starts with a name. Make it memorable. Make it catchy.
                </p>
              </div>

              <div className="guideText">
                <p>Step 2</p>
                <h2>Select your cateogary</h2>
                <p>Choose the category that perfectly describes your business.</p>
              </div>
              <div className="guideText">
                <p>Step 3</p>
                <h2>Choose a ready-made design</h2>
                <p>
                  Find the perfect design theme for your business. Choose
                  something attractive.
                </p>
              </div>
              <div className="guideText">
                <p>Step 4</p>
                <h2>Manage your orders</h2>
                <p>
                  Managing orders just got simpler thanks to our order management
                  tool
                </p>
              </div>
              <div className="guideText">
                <p>Step 5</p>
                <h2>Add and manage your products</h2>
                <p>
                  You have the product. You have the store. Add your products, set
                  the price and get ready to sell.
                </p>
              </div>
              <div className="guideText">
                <p>Step 6</p>
                <h2>Track Analytics</h2>
                <p>
                  MyShop gives you the data you need to better understand your
                  sales.
                </p>
              </div>
              <div className="guideText">
                <p>Step 7</p>
                <h2>Chat with customers directly</h2>
                <p>
                  It all starts with a name. Make it memorable. Make it catchy.
                  This is the brand you’ll be branding.
                </p>
              </div>
            </div>
          </div>

          <div className="guideList">
            <div className="isguide">
              <img src={eone} alt="" className="mobEllipse" />
              <div className="sGuide">
                <img src={one} alt="" />
                <div className="guideText">
                  <p>Step 1</p>
                  <h2>Name your store</h2>
                  <p>
                    It all starts with a name. Make it memorable. Make it catchy.
                  </p>
                </div>
              </div>
            </div>
            <div className="isguide">
              <img src={etwo} alt="" className="mobEllipse" />
              <div className="sGuide">
                <img src={two} alt="" />
                <div className="guideText">
                  <p>Step 2</p>
                  <h2>Select your cateogary</h2>
                  <p>
                    Choose the category that perfectly describes your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="isguide">
              <img src={ethree} alt="" className="mobEllipse" />
              <div className="sGuide">
                <img src={three} alt="" />
                <div className="guideText">
                  <p>Step 3</p>
                  <h2>Choose a ready-made design</h2>
                  <p>
                    Find the perfect design theme for your business. Choose
                    something attractive.
                  </p>
                </div>
              </div>
            </div>
            <div className="isguide">
              <img src={efour} alt="" className="mobEllipse" />
              <div className="sGuide">
                <img src={four} alt="" />
                <div className="guideText">
                  <p>Step 4</p>
                  <h2>Manage your orders</h2>
                  <p>
                    Managing orders just got simpler thanks to our order
                    management tool
                  </p>
                </div>
              </div>
            </div>
            <div className="isguide">
              <img src={efive} alt="" className="mobEllipse" />
              <div className="sGuide">
                <img src={five} alt="" />
                <div className="guideText">
                  <p>Step 5</p>
                  <h2>Add and manage your products</h2>
                  <p>
                    You have the product. You have the store. Add your products,
                    set the price and get ready to sell.
                  </p>
                </div>
              </div>
            </div>
            <div className="isguide">
              <img src={esix} alt="" className="mobEllipse" />
              <div className="sGuide">
                <img src={six} alt="" />
                <div className="guideText">
                  <p>Step 6</p>
                  <h2>Track Analytics</h2>
                  <p>
                    MyShop gives you the data you need to better understand your
                    sales.
                  </p>
                </div>
              </div>
            </div>
            <div className="isguide">
              <img src={eseven} alt="" className="mobEllipse" />
              <div className="sGuide">
                <img src={seven} alt="" />
                <div className="guideText">
                  <p>Step 7</p>
                  <h2>Chat with customers directly</h2>
                  <p>
                    It all starts with a name. Make it memorable. Make it catchy.
                    This is the brand you’ll be branding.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fb">
            <h1>Join The Seller's Community On Facebook</h1>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              Join Now
            </a>
            <img src={fbI} alt="" />
          </div>
        </section>
      </motion.main>
      <Footer />
    </>
  );
}
