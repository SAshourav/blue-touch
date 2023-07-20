import React from 'react';
import LBasic from './LBasic';
import LStandard from './LStandard';
import LPremium from './LPremium';

const LinkedInP = () => {
    return (
        <div className='lg:ml-60 justify-center grid lg:grid-cols-3'>
           <LBasic></LBasic>
           <LStandard></LStandard>
           <LPremium></LPremium> 
        </div>
    );
};

export default LinkedInP;