import React from 'react';
import icon1 from '../Images/icon-1.png';
import icon2 from '../Images/icon-2.png';
import icon3 from '../Images/icon-3.png';
import icon4 from '../Images/icon-4.png';
import Announcement from './Annoucement';

export default function Store(){
    return(
        <section>
            <div>
            <div>
                <h1>For sellers</h1>
                <p>A quick guide for our SELLER'S AMRY</p>
                <p>Never created an <span>online store </span> before? No coding or design skills needed.</p>
                </div>
                <button>Learn More </button>
                <div>
                    <Announcement firstLayer = {icon3} secondLayer = {icon4} headText = "Start Your Online store" paraText = "MyShop enables you to sell your products online directly to your customers without setting up an e-commerce website. "/>
                    <Announcement firstLayer = {icon2} secondLayer = {icon1} headText = "Marketing Tools" paraText = "MyShop can help your large, medium or small business grow with a direct in-app marketing approach."/>
                </div>
            </div>
            
        </section>
    )
}