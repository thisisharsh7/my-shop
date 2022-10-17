import React from 'react';

export default function Suggestion(){
    return(
        <section className='suggestion'>
            <div className='seller'>
            <div>
                <div>
                    <p>For Sellers</p>
                    <h1>Hi there!</h1>
                </div>
                <p>Your suggestion is very much valuable to us, it will help us improve</p>
            </div>
            <button>Post a suggestion</button>
            </div>
            <div className='customers'>
            <div>
                <div>
                    <p>For Customers</p>
                    <h1>Hi there!</h1>
                </div>
                <p>Your suggestion is very much valuable to us, it will help us improve</p>
            </div>
            <button>Post a suggestion</button>
            </div>
        </section>
    )
}