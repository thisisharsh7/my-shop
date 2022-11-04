import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import bImg from '../Images/blogImg.png';
import sImg from '../Images/searchi.png';

export default function Blog() {
    return (
        <div className='page-body'>
            <Header />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <section className='blog'>
                    <h1>Latest posts</h1>
                    <div className='blog-list'>
                        <div className='latest'>
                            <div className='slatest'>
                                <img src={bImg} alt="" loading='lazy' width={100} height={100} />
                                <div>
                                    <h2>Most Significant Architectural Projects of the Year 2019...</h2>
                                    <p>December 9, 2019</p>
                                </div>
                            </div>
                            <div className='slatest'>
                                <img src={bImg} alt="" loading='lazy' width={100} height={100} />
                                <div>
                                    <h2>Most Significant Architectural Projects of the Year 2019...</h2>
                                    <p>December 9, 2019</p>
                                </div>
                            </div>
                            <div className='slatest'>
                                <img src={bImg} alt="" loading='lazy' width={100} height={100} />
                                <div>
                                    <h2>Most Significant Architectural Projects of the Year 2019...</h2>
                                    <p>December 9, 2019</p>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='search-in'>
                                <input type="text" placeholder='Search' />
                                <img src={sImg} alt="" />
                            </div>
                            <div className='popular'>
                                <h2>Popular posts</h2>
                                <div className='popular-list'>
                                    <div className='spopular'>
                                        <img src={bImg} alt="" loading='lazy' width={100} height={100} />
                                        <div>
                                            <h3>Most Significant Architectural Projects of the Year 2019...</h3>
                                            <p>December 9, 2019</p>
                                        </div>
                                    </div>
                                    <div className='spopular'>
                                        <img src={bImg} alt="" loading='lazy' width={100} height={100} />
                                        <div>
                                            <h3>Most Significant Architectural Projects of the Year 2019...</h3>
                                            <p>December 9, 2019</p>
                                        </div>
                                    </div>
                                    <div className='spopular'>
                                        <img src={bImg} alt="" loading='lazy' width={100} height={100} />
                                        <div>
                                            <h3>Most Significant Architectural Projects of the Year 2019...</h3>
                                            <p>December 9, 2019</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.main>

            <Footer />
        </div>
    )
}
