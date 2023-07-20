import React from 'react';
import InstagramArticle from './InstagramArticle';
import InstagramP from './InstagramP';
import banner from '../../../../Images/InstagramBanner.png';

const Instagram = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-3xl font-mono font-bold text-orange-600'>Instagram Marketing</h1>
      <div className='flex justify-center mb-10 mt-5'>
        <img
          className='drop-shadow-lg w-3/4 md:w-auto transition-transform transform hover:scale-105'
          src={banner}
          alt='Instagram banner'
        />
      </div>
      <InstagramArticle></InstagramArticle>
      <InstagramP></InstagramP>
      <div className='my-8 px-4 md:px-8 lg:px-16 xl:px-20'>
        <p className='text-2xl'>
          With each package, our focus is on delivering genuine and organic growth. By employing effective strategies,
          we attract a relevant audience to your account, ensuring that your followers are genuinely interested in your
          content and offerings. As a result, you'll experience heightened engagement, with more likes, comments, and
          shares on your posts, fostering a thriving online community.
        </p>
      </div>
    </div>
  );
};

export default Instagram;
