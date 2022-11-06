import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import PopularBlog from '../Blog/PopularBlog';
import SearchBlog from '../Blog/SearchBlog';
import { useState } from 'react';
import LatestBlog from '../Blog/LatestBlog';
import data from '../Blog/data.json';
import Detail from '../Blog/Detail';
import arrow from '../Images/arrow.png';


export default function Blog() {
    const [getBlog, setBlog] = useState(data);
    const [show, getshow] = useState(false);
    const [place, setPlace] = useState(-1);
    const [setList, getList] = useState({
        "first": 0,
        "last": 1,
    });

    function BlogSee(e) {
        const str = e.target.value;
        const cstr = str.toLowerCase();
        if (cstr !== "") {

            setBlog(
                data.filter((sel) => {
                    if (sel.id > setList.first) {
                        return sel.title.toLowerCase().match(cstr);
                    }
                    return sel.title !== cstr;
                })
            );
        } else {
            setBlog(
                data.filter((sel) => {
                    return sel.title !== cstr;
                })
            );
        }
    };

    function changePage(e) {
        const t = e.target;
        const p = t.parentElement.children;
        for (let sp of p) {
            if (sp === t) {
                sp.classList.add('setPage');
            } else {
                sp.classList.remove('setPage');
            }
        }
        getList(() => {
            return {
                "first": (Number(t.innerText) - 1) * 8,
                "last": (Number(t.innerText))
            }
        })
        setBlog(
            data.filter((sel) => {
                return sel.title;
            })
        );
        document.querySelector('input').value = "";
        window.scrollTo(0, 0);
    }
    function showDetail(e) {
        (show) ? getshow(false) : getshow(true);
        window.scrollTo(0, 0);
        const idx = Number(e.target.parentElement.parentElement.className);
        if (idx > 0) {
            setPlace(idx - 1);
            console.log(idx);
        }
    }
    function showPDetail(e) {
        getshow(true);
        const idx = Number(e.target.parentElement.parentElement.className);
        if (idx > 0) {
            setPlace(idx - 1);
            console.log(idx);
        }
        window.scrollTo(0, 0);
    }

    return (
        <div className='page-body'>
            <Header />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >

                <section className='blog'>
                    <div className={(show) ? 'blog-head new-head' : 'blog-head'}>
                        <h1 className={(show) ? 'blog-single' : ''}>Latest posts</h1>
                        <div className={(show) ? 'detail-head' : 'blog-single detail-head'}>
                            <span onClick={showDetail}>
                                <img src={arrow} alt="" /> Latest posts
                            </span>
                            <h2>{data[place]?.title}</h2>
                            <p>{data[place]?.date}</p>
                        </div>
                    </div>
                    <LatestBlog gettingBlog={getBlog}
                        first={(setList.first)} last={(setList.last) * 8}
                        showDetail={showDetail} setShow={show} />
                    <div className={(show) ? 'latest' : 'blog-single latest'}>
                        <Detail />
                    </div>
                    <div className='right'>
                        <SearchBlog BlogShow={BlogSee} />
                        <PopularBlog showPDetail={showPDetail} />
                    </div>
                </section>
                <div className={(show) ? 'blog-single' : 'page-shift'}>
                    <ul>
                        <li className='setPage' onClick={changePage}>1</li>
                        <li onClick={changePage}>2</li>
                        <li onClick={changePage}>3</li>
                    </ul>
                </div>
            </motion.main>

            <Footer />
        </div>
    )
}
