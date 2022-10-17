import React from 'react';

export default function Announcement(props){
    return(
        <div className='announce'>
        <div className='icons'>
            <img src={props.firstLayer} alt="" />
            <img src={props.secondLayer} alt="" />
        </div>
        <div className='text'>
            <h2>{props.headText}</h2>
            <p>{props.paraText}</p>
        </div>
        </div>
    )
}