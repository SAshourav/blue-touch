import React from 'react';
import SingleOrder from './SingleOrder';

const AllOrders = () => {
  return (
    <div className='grid grid-cols-2' style={{ gap: '15px' }}>
      <SingleOrder />
      <SingleOrder />
      <SingleOrder />
      <SingleOrder />
    </div>
  );
};

export default AllOrders;
