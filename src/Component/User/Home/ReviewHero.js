import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../Images/Reviews.json'
import SingleReview from './Reviews/SingleReview';

const ReviewHero = () => {
    return (
        <div className="hero min-h-1/2 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            <div>
                <h1 className="text-3xl font-bold">Hear From Our Clint</h1>
                <div className='mt-5 justify-center justify-items-center grid grid-cols-2'>
                    <SingleReview></SingleReview>
                    <SingleReview></SingleReview>
                    <SingleReview></SingleReview>
                </div>
                
            </div>
                <Lottie animationData={animationData} />
            </div>
        </div>
    );
};

export default ReviewHero;