import React from 'react';
import './baEr.css';
import { Link } from 'react-router-dom';
import back from '../Images/back';

export default function Back() {
    return (
        <div className='back'>
            <div>
                <img src={back} alt="" />
                <p>We are arriving on play store and app store very soon. Back to <Link to="/">Home</Link></p>
            </div>
        </div>
    )
}