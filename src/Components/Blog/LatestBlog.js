import React from 'react';

export default function LatestBlog(props) {

    return (
        <div className={(props.setShow) ? 'blog-single latest' : 'latest'}>
            {
                props.gettingBlog.slice(props.first, props.last).map((sdata) => {
                    let pic = '';
                    try {
                        pic = require(`${sdata.bimg}.png`);
                    } catch (err) {
                        pic = require(`./image/noImage.webp`);
                    }
                    return (
                        <div className={sdata.id} key={sdata.id}>
                            <div className='slatest' onClick={props.showDetail} >
                                <img src={pic} alt="" loading='lazy' width={100} height={100} />
                                <div>
                                    <h2>{sdata.title}</h2>
                                    <p>{sdata.date}</p>
                                </div>
                            </div>
                        </div>
                    );
                })

            }
        </div>

    )
}
