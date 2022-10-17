import React from 'react';
import items  from '../Images/items.png';

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
                <img src={items} alt="" />
            </div>
        </section>
    )
}