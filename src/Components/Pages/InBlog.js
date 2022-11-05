import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Detail from '../Blog/Detail';
import PopularBlog from '../Blog/PopularBlog';
import arrow from '../Images/arrow.png';
import { Link } from 'react-router-dom';
import SearchBlog from '../Blog/SearchBlog';

export default function InBlog(props) {
    return (
        <div className='page-body'>
            <Header />
            <main
            >
                <section className='blog'>
                    <div className='blog-head new-head'>
                        <div className='detail-head'>
                            <Link to='/blog'>
                                <img src={arrow} alt="" /> Latest posts
                            </Link>
                            <h2>{props.title}</h2>
                            <p>December 9, 2019</p>
                        </div>
                    </div>
                    <div className='latest'>
                        <Detail />
                    </div>
                    <div className='right'>
                        <SearchBlog />
                        <PopularBlog />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}