import React from 'react';
import data from './data.json';


export default function detail(props) {
    let pic1 = '';
    try {
        pic1 = require(`${data[props.place].detail[0]}.png`);
    } catch (err) {
        pic1 = require(`./image/noImage.webp`);
    }
    let pic2 = '';
    try {
        pic2 = require(`${data[props.place].detail[2]}.png`);
    } catch (err) {
        pic2 = require(`./image/noImage.webp`);
    }
    return (
        <div className='blog-detail'>

            <div className='detail-full'>
                <img src={pic1} alt="" loading='lazy' width={100} height={100} />
                <p>{data[props.place].detail[1]}</p>
                <img src={pic2} alt="" loading='lazy' width={100} height={100} />
                <p>{data[props.place].detail[3]}</p>
            </div>
        </div >
    )
}
