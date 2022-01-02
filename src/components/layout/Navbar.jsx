import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

export const Navbar = ({ title }) => {
    return (
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
            <div className='container mx-auto'>

                <motion.div
                    whileTap={{ scale: 0.9 }}
                    className='flex-none px-2 mx-2 '
                >
                    <FaGithub className='inline pr-2 text-3xl' size={40} />
                    <Link to="/" className='text-lg font-bold aling-middle'>
                        {title}
                    </Link>
                </motion.div>

                <div className='flex-1 px-2 mx-2'>
                    <div className='flex justify-end'>
                        <Link to='/' className="btn btn-ghost btn-sm roundet-btn">
                            Home
                        </Link>
                    </div>
                </div>

                <div className='flex-1 px-2 mx-2'>
                    <div className='flex justify-end'>
                        <Link to='/about' className="btn btn-ghost btn-sm roundet-btn">
                            About
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'GitHub Finder'
};

Navbar.propTypes = {
    title: PropTypes.string
}