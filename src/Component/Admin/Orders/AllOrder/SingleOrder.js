import React from 'react';

const SingleOrder = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full productCard">
            <figure><img src='https://notificationx.com/wp-content/uploads/2022/09/Facebook-As-A-Marketing-Platform-Advantages-Disadvantages_1280_720.jpg' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Facebook Marketing</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <p className='font-bold text-2xl'>Deadline: <span className='text-white'>30 July</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingleOrder;