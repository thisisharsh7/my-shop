import React from 'react';
import bImg from '../Images/blogImg.png';
import pdata from './pdata.json';
import { Link } from 'react-router-dom';

export default function PopularBlog(props) {

    return (
        <div className='popular'>
            <h2>Popular posts</h2>
            <div className='popular-list'>
                {
                    pdata.map((sdata) => {
                        return (
                            <Link to="/InBlog" key={sdata.id}>
                                <div className='spopular' onClick={props.showDetail} >
                                    <img src={bImg} alt="" loading='lazy' width={100} height={100} />
                                    <div>
                                        <h3>{sdata.title}</h3>
                                        <p>{sdata.date}</p>
                                    </div>
                                </div>

                            </Link>
                        );
                    })
                }
            </div>
        </div>
    )
}
