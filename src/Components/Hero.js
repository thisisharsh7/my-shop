import React from 'react';
import GooglePlay from '../Images/google-play.png';
import AppleStore from '../Images/apple-pay.png';
import women from '../Images/young-woman-carrying-bag.png';
import vector1 from '../Images/hero-vector-1.png';
import vector2 from '../Images/hero-vector-2.png';
import ellipse from '../Images/hero-ellipse.png';
import triangle from '../Images/hero-triangle.png';

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
                 
                    <div className='hero-vector'>
                        <img src={vector2} alt='' />
                        <img src={vector1} alt=''/>
                    </div>
                        <img src={women} alt='' />
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