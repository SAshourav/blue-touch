import React from 'react';
import LinkedInArticle from './LinkedInArticle';
import LinkedInP from './LinkedInP';
import banner from '../../../../Images/LinkedInBanner.png';

const Linkedin = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-mono font-bold'>LinkedIn Marketing</h1>
            <div className='flex justify-center mb-10 mt-5'>
                <img
                className='drop-shadow-lg w-3/4 md:w-auto transition-transform transform hover:scale-105'
                src={banner}
                alt='Instagram banner'
                />
            </div>
            <LinkedInArticle></LinkedInArticle>
            <LinkedInP></LinkedInP>
            <div className='my-8 px-4 md:px-8 lg:px-16 xl:px-20'>
                <p className='text-2xl'>
                By choosing our service, you can confidently build valuable relationships and explore business opportunities on LinkedIn. Let us handle the task of sending personalized invitations, saving you time and effort while you focus on nurturing meaningful connections that can propel your professional success.
                </p>
            </div>
        </div>
    );
};

export default Linkedin;