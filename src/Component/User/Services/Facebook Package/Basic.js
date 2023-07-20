import React from 'react';

const Basic = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5 productCard">
            <figure className="px-10 pt-10">
                <img src="https://notificationx.com/wp-content/uploads/2022/09/Facebook-As-A-Marketing-Platform-Advantages-Disadvantages_1280_720.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Basic Package - Campaign Creation</h2>
                <h3 className='text-3xl font-bold'>100 $</h3>
                <p>- Setup 3 Facebook and Instagram Ads</p>
                <p>- Create 3 highly targeted audiences</p>
                <p>- Develop ad creatives</p>
                <div className="card-actions">
                <button className="btn btn-primary">Get It</button>
                </div>
            </div>
        </div>
    );
};

export default Basic;