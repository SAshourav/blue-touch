import React from 'react';

const LBasic = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5 productCard">
            <figure className="px-10 pt-10">
                <img src="https://www.amritsardigitalacademy.in/blog/wp-content/uploads/2020/08/linkedin-for-business-marketing.png" alt="LinkedIn" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Basic Package</h2>
                <h3 className='text-3xl font-bold'>$ 10</h3>
                <p>- 90-100 personalized invitations to potential LinkedIn connections.</p>
                <p>- Delivery Time: 2 days</p>
                <div className="card-actions">
                <button className="btn btn-primary">Get It</button>
                </div>
            </div>
        </div>
    );
};

export default LBasic;