import React from 'react';

const Standard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5 productCard">
            <figure className="px-10 pt-10">
                <img src="https://notificationx.com/wp-content/uploads/2022/09/Facebook-As-A-Marketing-Platform-Advantages-Disadvantages_1280_720.jpg" alt="Banner" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Standard Package - Standard Marketing Package</h2>
                <h3 className='text-3xl font-bold'>$ 180</h3>
                <p>- Setup 4 Facebook and Instagram Ads</p>
                <p>- Create 4 highly targeted audiences</p>
                <p>- Develop ad creatives</p>
                <p>- 15 days of ad campaign management</p>
                <div className="card-actions">
                <button className="btn btn-primary">Get It</button>
                </div>
            </div>
        </div>
    );
};

export default Standard;