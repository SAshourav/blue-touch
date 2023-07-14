import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../Images/animation_lk113cfh.json';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleKnowMoreClick = () => {
        navigate('/about');
    };

    return (
        <div className="hero min-h-1/2 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <Lottie animationData={animationData} />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Now you can boost your business and band with less money more effective and natural organic follower.
                        Sounds Interesting !!!?
                    </p>
                    <button
                        onClick={handleKnowMoreClick}
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Know More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
