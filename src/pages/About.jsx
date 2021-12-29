import React from "react";

export const About = () => {
    return (
        <div>
            <h1 className='text-6xl mb-4 text-gray-400'>Github Finder</h1>
            <p className='mb-4 text-2xl font-light text-gray-400'>
                A React app to search GitHub profiles and see profile details.
            </p>
            <p className='text-lg text-gray-400'>
                Version <span>1.0.0</span>
            </p>
        </div>
    );
};