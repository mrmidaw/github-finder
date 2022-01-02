import React from "react";
import { motion } from "framer-motion";

export const About = () => {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1, times: [0, 0.2, 1] }}            
        >
            <h1 className='text-6xl mb-4 text-gray-400'>Github Finder</h1>
            <p className='mb-4 text-2xl font-light text-gray-400'>
                A React app to search GitHub profiles and see profile details.
            </p>
            <p className='text-lg text-gray-400'>
                Version <span>1.0.0</span>
            </p>
        </motion.div >
    );
};