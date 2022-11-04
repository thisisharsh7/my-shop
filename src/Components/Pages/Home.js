import React from 'react';
import Hero from '../Home/Hero';
import Product from '../Home/Product';
import Store from '../Home/Store';
import Why from '../Home/Why';
import Comments from '../Home/Comments';
import Suggestion from '../Home/Suggestion';
import { motion } from 'framer-motion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Home() {
    return (
        <div className='page-body'>
            <Header />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Hero />
                <Product />
                <Store />
                <Why />
                <Comments />
                <Suggestion />
            </motion.main>
            <Footer />
        </div>
    )
}