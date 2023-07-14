import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import Lottie from 'lottie-react';
import animationData from '../../../../Images/Services.json';

const Services = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        // Fetch the data from localdb.json
        fetch('/localdb.json')
            .then((response) => response.json())
            .then((data) => setServiceData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className='ml-5 mx-auto bg-base-200 pb-10 pt-5'>
            <Lottie className='mx-auto w-96' animationData={animationData} />
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-4 gap-4 justify-center">
                {serviceData.map((service, index) => (
                    <SingleService key={index} serviceData={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
