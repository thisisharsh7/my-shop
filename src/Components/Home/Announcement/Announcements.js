import React from 'react';
import Announcement from './Annoucement';
import tools from "../Home-Images/store-tools.png";
import cart from "../Home-Images/store-cart.png";

export default function Announcements() {
    return (
        <div className="store-announce">
            <Announcement
                triLayer={cart}
                headText="Start Your Online store"
                paraText="MyShop enables you to sell your products online directly to your customers without setting up an e-commerce website. "
            />
            <Announcement
                triLayer={tools}
                headText="Marketing Tools"
                paraText="MyShop can help your large, medium or small business grow with a direct in-app marketing approach."
            />
        </div>
    )
}
