import React, { useState } from 'react';
import Terms from "./Terms";
import Policy from "./Policy";
import Faq from "./Faq";
import Guide from "./Guide";
import Contact from "./Contact";
import Home from "./Home";
import Error from './Error';
import Patch from './Patch';
import '../Home/home.css';
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from 'react-router-dom';
import Blog from './Blog';
import InBlog from './InBlog';

export default function AnimatedRoutes() {
    const [title, setTitle] = useState();
    const location = useLocation();

    function showDet(e) {
        window.scrollTo(0, 0);

        const c = e.target.parentElement.children[1].children;
        setTitle(c[0].innerText);
    };
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="policy" element={<Policy />} />
                <Route path="terms" element={<Terms />} />
                <Route path="guide" element={<Guide />} />
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
                <Route path="patch" element={<Patch />} />
                <Route path="blog" element={<Blog showDetail={showDet} />} />
                <Route path="InBlog" element={<InBlog title={title} />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </AnimatePresence>
    )
}
