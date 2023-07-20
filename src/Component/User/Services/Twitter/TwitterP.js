import React from 'react';
import TBasic from './TBasic';
import TStandard from './TStandard';
import TPremium from './TPremium';

const TwitterP = () => {
    return (
        <div className='lg:ml-60 justify-center grid lg:grid-cols-3'>
            <TBasic></TBasic>
            <TStandard></TStandard>
            <TPremium></TPremium>
        </div>
    );
};

export default TwitterP;