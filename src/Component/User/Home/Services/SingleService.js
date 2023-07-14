import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleService = ({serviceData}) => {
    const {name,img,details,} = serviceData;
    const nameArray = serviceData.name.split(' ');
    const send = nameArray[0];

    const navigate = useNavigate();

    const handleKnowMoreClick = () => {
        navigate(`/${send}`);
    };
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl productCard">
            <figure><img src={img} alt="Facebook" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                <button onClick={handleKnowMoreClick} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                            Know More
                                        </button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
