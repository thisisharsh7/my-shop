import React from 'react';
import pdata from './pdata.json';

export default function PopularBlog(props) {

    return (
        <div className='popular'>
            <h2>Popular posts</h2>
            <div className='popular-list'>
                {
                    pdata.map((sdata) => {
                        let pic = '';
                        try {
                            pic = require(`${sdata.bimg}.png`);
                        } catch (err) {
                            pic = require(`./image/noImage.webp`);
                        }
                        return (
                            <div className={sdata.id} key={sdata.id} >
                                <div className='spopular' onClick={props.showPDetail} >
                                    <img src={pic} alt="" loading='lazy' width={100} height={100} />
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
