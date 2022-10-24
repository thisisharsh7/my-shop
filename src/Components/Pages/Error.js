import React from 'react';
import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className='error'>
            <div>
                <p>404</p>
                <h1>Page Not Found</h1>
                <p>The page you are looking for doesn’t exist, go back to <Link to="/">Home</Link></p>
            </div>
        </div>
    );
};