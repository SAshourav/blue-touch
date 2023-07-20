import React from 'react';

const IPremium = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5 productCard">
            <figure className="px-10 pt-10">
                <img src="https://images.squarespace-cdn.com/content/v1/5c4620c075f9ee29faa8870c/1579871952633-XXF1O8MUJ6NHMA0396U6/Instagram+Marketing.jpg?format=1000w" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Premium Package </h2>
                <h3 className='text-3xl font-bold'>$ 100</h3>
                <p>- Instagram Growth for 30 days</p>
                <p>- Maximize your reach and influence over an extended period, gaining a substantial increase in followers and engagement.</p>
                <div className="card-actions">
                <button className="btn btn-primary">Get It</button>
                </div>
            </div>
        </div>
    );
};

export default IPremium;