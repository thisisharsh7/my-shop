import React from 'react';
import './paEr.css';
import { Link } from 'react-router-dom';
import patch from '../Images/patch.png';

export default function Back() {
    return (
        <div className='patch'>
            <div>
                <img src={patch} alt="" loading='lazy' />
                <p>We are coming on play store and app store very soon. Back to <Link to="/">Home</Link></p>
            </div>
        </div>
    )
}