import React from 'react';
import bImg from '../Images/blogImg.png';
import { Link } from 'react-router-dom';

export default function LatestBlog(props) {

    return (
        <div className='latest'>
            {
                props.gettingBlog.slice(props.first, props.last).map((sdata) => {
                    return (
                        <Link to="/InBlog" key={sdata.id}>
                            <div className='slatest' onClick={props.showDetail} >
                                <img src={bImg} alt="" loading='lazy' width={100} height={100} />
                                <div>
                                    <h2>{sdata.title}</h2>
                                    <p>{sdata.date}</p>
                                </div>
                            </div>

                        </Link>
                    );
                })

            }
        </div>

    )
}
