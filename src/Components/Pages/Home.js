import React from 'react';
import Hero from '../Home/Hero';
import Product from '../Home/Product';
import Store from '../Home/Announcement/Store';
import Why from '../Home/Why';
import Reviews from '../Home/Comment/Reviews';
import Suggestion from '../Home/Suggestion';
import { motion } from 'framer-motion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <div className='page-body'>
            <Helmet>
                <title>MyShop - Search Online Buy Offline</title>
                <meta
                    name="description"
                    content="With our new app, you can see all the products being sold in your neigborhood market from the comfort of your own home."
                />
                <link rel="canonical" href="/" />
            </Helmet>
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
                <Reviews />
                <Suggestion />
            </motion.main>
            <Footer />
        </div>
    )
}