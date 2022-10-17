import React from 'react';
import GooglePlay from '../Images/google-play.png';
import AppleStore from '../Images/apple-pay.png';
import woman from '../Images/woman-carrying-bag.png';
export default function Hero(){
    return(
        <>
            <section>
            <div  className='hero'>
                <div className='text-hero'>
                    <h1>Search online buy <span> offline.</span></h1>
                    <p>Now search online what you want and buy offline as you like.</p>
                    <button>Join Early Access</button>
                    <ul>
                        <li>
                            <img src={GooglePlay} alt="" />
                        </li>
                        <li>
                        <img src={AppleStore} alt="" />
                        </li>
                    </ul>
                </div>
                <div className='hero-img'>
                    <img src={woman} alt="" />
                </div>
                </div>
                <div className='stats'>
                <p><span>90+</span>
                <span>Picodes Covered</span></p>
                <p><span>4.7+</span>
                <span>Average Ratings</span></p>
                <p><span>50+</span><span>Shopkeepers</span></p>
                <p><span>200+</span><span>Customers</span></p>

                </div>
            </section>
        </>
    )
}