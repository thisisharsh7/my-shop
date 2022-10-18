import React from 'react';
import Hero from '../Home/Hero';
import Product from '../Home/Product';
import Store from '../Home/Store';
import Why from '../Home/Why';
import Comments from '../Home/Comments';
import Suggestion from '../Home/Suggestion';

export default function Home (){
    return(
        <main>
            <Hero />
            <Product />
            <Store />
            <Why />
            <Comments />
            <Suggestion />
        </main>
    )
}