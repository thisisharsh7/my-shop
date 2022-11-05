import React from 'react';
import bImg from '../Images/blogImg.png';
import data from './data.json';


export default function detail() {
    return (
        <div className='blog-detail'>

            <div className='detail-full'>
                <img src={bImg} alt="" loading='lazy' width={100} height={100} />
                <p>{data[0].detail[1]}</p>
                <img src={bImg} alt="" loading='lazy' width={100} height={100} />
                <p>{data[0].detail[3]}</p>
            </div>
        </div >
    )
}
