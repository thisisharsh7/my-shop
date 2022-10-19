import React from 'react';
import storeStats from '../Images/storeStats.png';
import one from '../Images/Guide/one.png';

export default function Guide(){
    return(
        <section className='guide'>
            <div className='guide-bg'>
              <div className='guide-intro'>
                <h1>Quick <span>guide</span> for our <span>seller</span> army</h1>
                <img src={storeStats} alt="" />
              </div>
              <div className='fb'>
                <h1>Join The Seller's Community On Facebook</h1>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Join Now</a>
              </div>
            
            </div>
        </section>
    )
}