import React from 'react';
import sImg from '../Images/searchi.png';

export default function SearchBlog(props) {


    return (
        <div className='search-in'>
            <input type="text" placeholder='Search'
                onChange={props.BlogShow} />
            <img src={sImg} alt="" />
        </div>
    )

}
