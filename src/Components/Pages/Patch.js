import React from 'react';
import './paEr.css';
import { Link } from 'react-router-dom';
import patch from '../Images/patch.png';
import { Helmet } from 'react-helmet-async';

export default function Back() {
    return (
        <div className='patch'>
            <Helmet>
                <title>Coming soon....</title>
                <meta
                    name="description"
                    content="With our new app, you can see all the products being sold in your neigborhood market from the comfort of your own home."
                />
                <link rel="canonical" href="/patch" />
                <meta name='robots' content='noindex' />
            </Helmet>
            <div>
                <img src={patch} alt="" loading='lazy' width={366} height={297} />
                <p>We are coming on play store and app store very soon. Back to <Link to="/">Home</Link></p>
            </div>
        </div>
    )
}