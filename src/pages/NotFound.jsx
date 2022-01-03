import React from "react";
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export const NotFound = () => {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.8, times: [0, 0.5, 1] }}
            className='hero'
        >
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
        </motion.div>
    );
};