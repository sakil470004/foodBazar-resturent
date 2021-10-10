import React from 'react';
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>404 Page not found</h2>
           <p className='text-center'> <Link  to="/">back to home</Link></p>
        </div>
    );
};

export default NotFound;