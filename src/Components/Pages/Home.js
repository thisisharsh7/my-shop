import React from 'react';
import Hero from '../Home/Hero';
import Product from '../Home/Product';
import Store from '../Home/Store';
import Why from '../Home/Why';
import Comments from '../Home/Comments';
import Suggestion from '../Home/Suggestion';
import '../Home/home.css';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <Hero />
            <Product />
            <Store />
            <Why />
            <Comments />
            <Suggestion />
        </motion.main>
    )
}