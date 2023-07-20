import React from 'react';

const TPremium = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5 productCard">
            <figure className="px-10 pt-10">
                <img src="https://blog.fanpagekarma.com/wp-content/uploads/2020/11/Top-11-Tips-Twitter-Marketing.png" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Premium Package - 30 Days (Login Details Required) </h2>
                <h3 className='text-3xl font-bold'>$ 100</h3>
                <p>- 30 days of organic Twitter growth</p>
                <p>- Increase in followers and engagement</p>
                <p>- Attracting real targeted audience</p>
                <div className="card-actions">
                <button className="btn btn-primary">Get It</button>
                </div>
            </div>
        </div>
    );
};

export default TPremium;