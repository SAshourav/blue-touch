import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../../Images/conatct us.json';
import contactAnimationData from '../../../../Images/conatct head.json';

const Contact = () => {
    return (
        <div className="hero min-h-1/2 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <Lottie className="w-full" animationData={contactAnimationData} />
                    <section className="text-gray-700 body-font relative">
                        <div className="container px-5 py-20 mx-auto">
                            <div className="lg:w-2/3 mx-auto text-center">
                                <p className="mb-5 lg:w-4/5 mx-auto leading-relaxed text-base">
                                    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
                                </p>
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="w-full lg:w-1/2">
                    <Lottie className="w-full" animationData={animationData} />
                </div>
            </div>
        </div>
    );
};

export default Contact;
