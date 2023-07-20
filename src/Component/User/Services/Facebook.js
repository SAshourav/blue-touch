import React from 'react';
import banner from '../../../Images/facebookBanner.png';
import FacebookAdArticle from './FacebookAdArticle';
import FacebookP from './Facebook Package/FacebookP';

const Facebook = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-3xl font-mono font-bold'>Facebook & Instagram Marketing and Ads Campaign</h1>
      <div className='flex justify-center mb-10 mt-5'>
        <img className='w-3/4 md:w-auto' src={banner} alt='facebook banner' />
      </div>
      <FacebookAdArticle></FacebookAdArticle>
      <FacebookP></FacebookP>
      <div className='my-8 px-4 md:px-8 lg:px-16 xl:px-20'>
        <p className='text-2xl'>
        Each package is designed to cater to different levels of advertising requirements, ensuring you have the right strategy and support to achieve your goals. Whether you're looking for a simple campaign setup or comprehensive and guided management, we have the perfect package for you. Let us help you make the most out of your advertising investment and drive exceptional results for your business.
        </p>
      </div>
    </div>
  );
}
export default Facebook;