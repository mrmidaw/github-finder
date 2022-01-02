import React from "react";
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className='hero'>
            <div className='text-center hero-content text-gray-100'>
                <div className='max-w-lg'>
                    <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
                    <p className='text-5xl mb-8'>404 - Page Not Found!</p>
                    <Link className='btn glass btn-lg' to='/'>
                        <FaHome className='mr-2' />
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};