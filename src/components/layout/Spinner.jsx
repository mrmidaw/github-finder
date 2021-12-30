import React from 'react';
import Spin from '../layout/assets/spinner.gif';

export const Spinner = () => {
    return (
        <div className='w-100 mt-20'>
            <img width={180} className='text-center mx-auto' src={Spin} alt='Loading...' />
        </div>
    );
};
