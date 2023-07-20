import React from 'react';
import TwitterArticle from './TwitterArticle';
import TwitterP from './TwitterP';
import banner from '../../../../Images/TwitterBanner.png';

const Twitter = () => {
    return (
        <div className='mt-10'>
      <h1 className='text-3xl font-mono font-bold'>Twitter Marketing</h1>
      <div className='flex justify-center mb-10 mt-5'>
        <img className='w-3/4 md:w-auto' src={banner} alt='Twitter banner' />
      </div>
      <TwitterArticle></TwitterArticle>
      <TwitterP></TwitterP>
      <div className='my-8 px-4 md:px-8 lg:px-16 xl:px-20'>
        <p className='text-2xl'>
        Choose the package that best suits your needs and let us take care of your Twitter growth, ensuring your account thrives with an engaged and relevant audience. We look forward to helping you achieve success on Twitter!
        </p>
      </div>
    </div>
    );
};

export default Twitter;