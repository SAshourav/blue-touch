import React from 'react';
import IStandard from './IStandard';
import IBasic from './IBasic';
import IPremium from './IPremium';

const InstagramP = () => {
    return (
        <div className='lg:ml-60 justify-center grid lg:grid-cols-3'>
            <IBasic></IBasic>
            <IStandard></IStandard>
            <IPremium></IPremium>
        </div>
    );
};

export default InstagramP;