import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import PopularBlog from '../Blog/PopularBlog';
import SearchBlog from '../Blog/SearchBlog';
import { useState } from 'react';
import LatestBlog from '../Blog/LatestBlog';
import data from '../Blog/data.json';


export default function Blog(props) {
    const [getBlog, setBlog] = useState(data);
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


    return (
        <div className='page-body'>
            <Header />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >


                <section className='blog'>
                    <div className='blog-head'>
                        <h1>Latest posts</h1>
                    </div>
                    <LatestBlog gettingBlog={getBlog}
                        first={(setList.first)} last={(setList.last) * 8}
                        showDetail={props.showDetail} />
                    <div className='right'>
                        <SearchBlog BlogShow={BlogSee} />
                        <PopularBlog showDetail={props.showDetail} />
                    </div>
                </section>
                <div className='page-shift'>
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
