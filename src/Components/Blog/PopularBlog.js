import React from 'react';
import bImg from '../Images/blogImg.png';
import pdata from './pdata.json';

export default function PopularBlog(props) {

    return (
        <div className='popular'>
            <h2>Popular posts</h2>
            <div className='popular-list'>
                {
                    pdata.map((sdata) => {
                        return (
                            <div className={sdata.id} key={sdata.id} >
                                <div className='spopular' onClick={props.showPDetail} >
                                    <img src={bImg} alt="" loading='lazy' width={100} height={100} />
                                    <div>
                                        <h3>{sdata.title}</h3>
                                        <p>{sdata.date}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}