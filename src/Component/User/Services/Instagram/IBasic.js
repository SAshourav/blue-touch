import React from 'react';

const IBasic = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5 productCard">
            <figure className="px-10 pt-10">
                <img src="https://images.squarespace-cdn.com/content/v1/5c4620c075f9ee29faa8870c/1579871952633-XXF1O8MUJ6NHMA0396U6/Instagram+Marketing.jpg?format=1000w" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Basic Package</h2>
                <h3 className='text-3xl font-bold'>50 $</h3>
                <p>- Instagram Growth for 10 days</p>
                <p>- Experience a significant increase in both followers and engagement during this period.</p>
                <div className="card-actions">
                <button className="btn btn-primary">Get It</button>
                </div>
            </div>
        </div>
    );
};

export default IBasic;