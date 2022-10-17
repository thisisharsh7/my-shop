import React from 'react';
import item1  from '../Images/items-1.png';
import item2 from '../Images/items-2.png';
import item3 from '../Images/items-3.png';

export default function Product(){
    return(
        <section>
            <div>
                <div>
                    <h1>For Customers</h1>
                    <p>Online shopping for people who love offline shopping.</p>
                </div>
                <p>No need to <span>Spend 6 Hours In Market</span> or <span>Wait 3 Days</span><span> now search online what you want and buy offline as you like. </span> </p>
                <button>Download Now <span>{">"}</span></button>
            </div>
            <div className='items-image'>
                <img src={item3} alt="" />
                <img src={item2} alt="" />
                <img src={item1} alt="" />
            </div>
        </section>
    )
}