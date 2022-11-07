import React from 'react';
import './paEr.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Error() {
    return (
        <div className='error'>
            <Helmet>
                <title>404 Error</title>
                <meta
                    name="description"
                    content="The url you trying to visit does not exit. Please check the url again."
                />
                <link rel="canonical" href="/*" />
                <meta name='robots' content='noindex' />
            </Helmet>
            <div>
                <p>404</p>
                <h1>Page Not Found</h1>
                <p>The page you are looking for doesn’t exist, go back to <Link to="/">Home</Link></p>
            </div>
        </div>
    );
};