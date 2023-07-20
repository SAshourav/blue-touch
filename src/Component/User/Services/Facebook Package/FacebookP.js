import React from 'react';
import Basic from './Basic';
import Standard from './Standard';
import Premium from './Premium';

const FacebookP = () => {
    return (
        <div className='lg:ml-60 justify-center grid lg:grid-cols-3'>
            <Basic />
            <Standard />
            <Premium />
        </div>
    );
};

export default FacebookP;
